---
title: Jenkins pipeline tutorials - 4. Jenkins Job 생성하기
date: "2019-05-07T24:07:00+0900"
layout: post
draft: false
path: "/posts/2019-05-06---Jenkins-pipeline-tutorials---4--Jenkins-Job-생성하기/"
category: "Development"
tags:
  - "jenkins"
description: "이제 jenkins job을 생성할차례입니다. pipeline organization job 을 추가합니다."
---


### 개요
아래 스펙의 jenkins를 설치하는것을 목적으로 합니다.
- jenkins(host container)를 docker image를 사용하여 구동합니다.
- jenkins login을 github auth와 연동합니다.
- UI로 blueocean을 사용합니다.
- Jenkins job item 으로 pipeline job(organization, multi branch) 을 사용합니다.
- Groovy 언어로 작성된 Jenkinsfile 을 사용합니다.
- 메일발송으로 emailext plugin를 사용합니다.
- jenkins job을 docker agent를 사용하여 구동합니다.(위의 host container와 구분되는 runner container 입니다)

## 목차
- [1. Install Jenkins](/posts/2019-04-14---Jenkins-pipeline-tutorials---1--Install-Jenkins/)
  - 1-1. docker 설치
  - 1-2. jenkins container 실행
  - 1-3. jenkins web 접속
- [2. Install github authentication plugin](/posts/2019-04-25---Jenkins-pipeline-tutorials---2--Install-github-authentication-plugin/)
  - 2-1. plugin 설치
  - 2-2. plugin 설정
- [3. Webhook settings](/posts/2019-05-01---Jenkins-pipeline-tutorials---3--Webhook-settings/)
- [**4. Jenkins Job 생성하기**](/posts/2019-05-06---Jenkins-pipeline-tutorials---4--Jenkins-Job-생성하기/)
  - 4-1. Pipeline Organization job 생성하기
  - 4-2. tag automatic trigger 문제
  - 4-3. tag automatic trigger 문제해결
- (미작성)
  - 5. jenkins concurrency
<br/>

## 과정
### 4. Jenkins Job 생성하기
#### 4-1. Pipeline Organization job 생성하기
- 이제 jenkins job을 생성할차례입니다.
- pipeline organization job 을 추가합니다.<br/>
organization 전체를 주기적으로 스캔하고, jenkinsfile이 있는 repository에 자동으로 명시된 task를 수행합니다.
- 먼저, 등록할 Organization 에 Owner 권한이 있는 계정이 필요합니다.<br/>
<img width="893" alt="스크린샷 2019-05-06 오후 11 42 05" src="https://user-images.githubusercontent.com/19223089/57232895-958d2900-7058-11e9-8807-63de3aed212c.png">
<br/><br/>
- new item > GitHub Organization<br/>
<img width="913" alt="스크린샷 2019-05-06 오후 10 53 22" src="https://user-images.githubusercontent.com/19223089/57232326-50b4c280-7057-11e9-8ad1-1de77542cccc.png">
<br/><br/>
- Projects > Github Organization > Credentials - username and password 선택<br/>
Behaviors > Add > discovery tags 추가<br/>
![681ad0d904675f814e80a97319e5282e](https://user-images.githubusercontent.com/19223089/57232307-4d213b80-7057-11e9-80b7-778091aa51e7.gif)
<br/><br/>
- Orphaned Item Strategy > Discard old items > Days to keep old items<br/>
저장 용량이 부담스러울것 같아 30일을 지정했습니다.(자유)<br/>
<img width="734" alt="스크린샷 2019-05-06 오후 10 56 09" src="https://user-images.githubusercontent.com/19223089/57232319-4f839580-7057-11e9-8f01-65b45ffc6185.png">
<br/><br/>
- Save 클릭<br/>
<img width="91" alt="스크린샷 2019-05-06 오후 10 56 15" src="https://user-images.githubusercontent.com/19223089/57232317-4eeaff00-7057-11e9-9247-c453fbacb88a.png">
<br/><br/>
- 이제 Organization에 가보면 hook이 자동으로 생성된것을 확인할수있습니다.<br/>
https://github.com/organizations/ORGANIZATION-NAME/settings/hooks <br/>
<img width="871" alt="스크린샷 2019-05-06 오후 10 57 19" src="https://user-images.githubusercontent.com/19223089/57232313-4e526880-7057-11e9-9676-644925229ac0.png">
<br/><br/>
- 미리 Jenkinsfile을 넣어놓았던 repository는 CI job 실행까지 완료했네요.<br/>
<img width="818" alt="스크린샷 2019-05-06 오후 11 04 28" src="https://user-images.githubusercontent.com/19223089/57232321-4f839580-7057-11e9-8690-c2d5a67bc5c2.png">
<br/><br/>
- ref: https://support.cloudbees.com/hc/en-us/articles/115003015711-GitHub-Webhook-Organization-Folder
<br/>
<br/>
<br/>

### 4-2. tag automatic trigger 문제
- 위의 설정에는 한가지 문제가 있습니다. tag를 push해도 jenkins는 job을 수행하지않습니다.
- 위의 사항을 테스트해보기위해, Jenkinsfile을 아래와 같이 두고 tag를 push해봅니다.
  - 아래 jenkinsfile의 의도는 tag를 push햇을때 `when { tag '*' }` 아래부분을 추가로 수행시키는것입니다.

```groovy
#!/usr/bin/env groovy

pipeline {
    agent {
        docker { image 'centos/python-36-centos7:1' }
    }

    stages {
        stage('printenv') {
            steps {
                sh 'printenv'
                sh 'python --version'
            }
        }

        stage('minimal test') {
            steps {
                echo 'minimal test'
            }
        }

        stage('full test') {
            when { anyOf { branch 'master'; branch 'PR-*' } }
            steps {
                echo 'full test'
            }
        }

        stage('deploy') {
            when { tag '*' }
            steps {
                echo 'deploy'
            }
        }
    }

    post {
        always {
            echo 'done...'
        }
        success {
            echo 'success'
        }
        failure {
            echo 'failure'
        }
    }
}
```
- tag push<br/>
<img width="591" alt="스크린샷 2019-05-06 오후 11 17 45" src="https://user-images.githubusercontent.com/19223089/57232318-4eeaff00-7057-11e9-97f8-acdd40b49c99.png">
<br/><br/>
- push 결과로 Jenkins 작업이 돌아가지 않습니다.<br/>
<img width="845" alt="스크린샷 2019-05-06 오후 11 18 42" src="https://user-images.githubusercontent.com/19223089/57232309-4db9d200-7057-11e9-8055-d7e7accc11dc.png">

- 의도대로라면 아래의 캡쳐처럼 tag branch의 job이 돌아가야합니다.<br/>
<img width="892" alt="스크린샷 2019-05-06 오후 11 25 53" src="https://user-images.githubusercontent.com/19223089/57232381-6d50fa80-7057-11e9-9fce-852aa36a9136.png">
<br/><br/>
- Plugin issue를 찾아보니, tags에 의해 빌드가 일어나지않는것이 의도된 설계라고합니다.<br/>
Ref: [No automatic builds for tags - Pileline: Organization, Multibranch](https://issues.jenkins-ci.org/browse/JENKINS-47496?focusedCommentId=317790&page=com.atlassian.jira.plugin.system.issuetabpanels%3Acomment-tabpanel#comment-317790)
![e82cff68-11b3-11e9-9e8a-0582d238b4e4](https://user-images.githubusercontent.com/19223089/57232315-4e526880-7057-11e9-85b5-b998b3c83bad.png)
<br/>
- 이는 최초 jenknis 가 오래된 tag를 모두 빌드해버리면서, CI 서버에 부하가 걸리는것을 방지하는 설계입니다.<br/>
이를 해결하기위해서는 build strategy plugin 설정이 필요합니다.<br/>
Ref: https://wiki.jenkins.io/display/JENKINS/GitHub+Branch+Source+Plugin<br/>
<br/>
<br/>
<br/>

#### 4-3. tag automatic trigger 문제해결
- [basic branch build strategies plugin](https://github.com/jenkinsci/basic-branch-build-strategies-plugin/blob/master/docs/user.adoc)을 설치해서 위의 문제를 해결합니다.
- manage jenkins > plugin manager > available > basic branch build strategies 설치<br/>
<img width="694" alt="스크린샷 2019-05-06 오후 11 21 17" src="https://user-images.githubusercontent.com/19223089/57232328-50b4c280-7057-11e9-94f0-4c25f29a570d.png">

<br/><br/>
- item > configure > Project를 보면 Build strategies가 새로 생긴걸 확인할 수 있습니다.<br/>
<img width="690" alt="스크린샷 2019-05-06 오후 11 24 14" src="https://user-images.githubusercontent.com/19223089/57232322-501c2c00-7057-11e9-9de0-e454ff34d376.png">
<br/><br/>
- Change requests(PR을 의미합니다), Tags를 추가합니다.<br/>
![66f354a89f6c5f134d23b65c03421f49](https://user-images.githubusercontent.com/19223089/57232316-4eeaff00-7057-11e9-936c-f110560d0bb4.gif)
<br/>
<br/>
- 참고: 이때 Tags에서 `ignore tags older than - 7` 옵션은 생성된지 7일이 지난 tag는 최초 tag indexing 단계에서 job을 일으키지 않는다는 옵션입니다.<br/>
![ddf72692-11b6-11e9-9512-0c795280cef5](https://user-images.githubusercontent.com/19223089/57232329-514d5900-7057-11e9-986a-3a93fe947f2d.png)
Ref: https://github.com/jenkinsci/basic-branch-build-strategies-plugin/blob/master/docs/user.adoc <br/>
<br/><br/>
- 이번에는 tag push event가 재대로 jenkins job을 유발하는것을 확인할 수 있습니다.<br/>
<img width="664" alt="스크린샷 2019-05-06 오후 11 25 28" src="https://user-images.githubusercontent.com/19223089/57232351-5ad6c100-7057-11e9-94bc-d308ca7d044d.png">
<img width="892" alt="스크린샷 2019-05-06 오후 11 25 53" src="https://user-images.githubusercontent.com/19223089/57232381-6d50fa80-7057-11e9-9fce-852aa36a9136.png">
<br/><br/>
- deploy stage 를 실행했습니다.<br/>
<img width="856" alt="스크린샷 2019-05-06 오후 11 26 10" src="https://user-images.githubusercontent.com/19223089/57232352-5ad6c100-7057-11e9-9e50-4ebb3cce9baf.png">
<br/><br/>
<br/>
