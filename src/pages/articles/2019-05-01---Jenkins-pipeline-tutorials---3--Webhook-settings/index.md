---
title: Jenkins pipeline tutorials - 3. Webhook settings
date: "2019-05-01T22:51:00+0900"
layout: post
draft: false
path: "/posts/2019-05-01---Jenkins-pipeline-tutorials---3--Webhook-settings/"
category: "Development"
tags:
  - "jenkins"
description: "GitHub 에서 일어나는 push, commit, tag 등의 액션을 Webhook 으로 Jenkins 에서 받아보도록 설정합니다."
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
- **3. Webhook settings**
- (미작성)
  - 5- pipeline organization job 생성
  - 6- jenkins concurrency
<br/>

## 과정
### 3. Webhook settings
- GitHub 에서 일어나는 push, commit, tag 등의 액션을 Webhook 으로 Jenkins 에서 받아보도록 설정합니다.
- Manage Jenkins > Configure System > GitHub > Add GitHub Server<br/>
![3d942b0696990457e5a931ed8fdafb4c](https://user-images.githubusercontent.com/19223089/57017957-604d9900-6c5c-11e9-9812-e4c9a077457c.gif)<br/><br/>
- Name - github (이름은 자유입니다.)<br/>
API URL - https://api.github.com (기본값입니다.)를 입력해줍니다.<br/>
- 참고: GitHub Enterprise 의경우 API URL 란에 <br/>
https://GITHUB-ENTERPRISE-URL/api/v3 를 입력해줍니다.<br/>
![스크린샷 2019-05-01 오후 10 06 36](https://user-images.githubusercontent.com/19223089/57018423-75c3c280-6c5e-11e9-8182-59a3d271cc22.png)
<br/><br/>
- Credentials에 Add > Jenkins 를 누른 뒤<br/>
GitHub에 접근할 계정, 패스워드, id - github-account 를 입력해줍니다. <br/>
앞으로 진행할 Github Organization, Repository 에서 Owner 권한이 있어야합니다.<br/>
![377fd0b313cf9429c1288c4df0111ee8](https://user-images.githubusercontent.com/19223089/57018422-75c3c280-6c5e-11e9-99ef-6b78358cb55f.gif)
<br/><br/>
- 하지만 여전히 credentials 리스트에는 등록한 계정은 없고 `- none -` 밖에 없습니다.<br/>
![스크린샷 2019-05-01 오후 10 13 43](https://user-images.githubusercontent.com/19223089/57018421-752b2c00-6c5e-11e9-81ef-753bd8a72191.png)
<br/><br/>
- Credentials 에는 여러종류가 있는데, 방금은 `Username with password` 를 등록했고, <br/>
GitHub Server 의 Credentials 는 `secret text` (GitHub Personal Access Token) 종류를 필요로 합니다.<br/>
(방금 등록한 GitHub username, password 은 이 작업말고 다른곳에 쓰일예정입니다.)<br/>
<br/><br/>
- 따라서 이제 `secret text` (GitHub Personal Access Token) 을 등록해줘야 하는데, <br/>
수동으로 https://github.com/settings/tokens/new 에서 Personal Access Token 을 직접 등록해도 되지만, <br/>
이번 과정에서는 방금 등록한 GitHub username, password 를 이용해서 Personal Access Token 을 자동생성해봅니다.<br/>
참고: https://GITHUB-ENTERPRISE-URL/settings/tokens/new
![image](https://user-images.githubusercontent.com/19223089/57018867-ef0fe500-6c5f-11e9-95e6-4ab457264cd6.png)
<br/><br/>
- Advanced...(두개중 아래에있는것) > <br/>
Manage additional GitHub actions > Convert login and password to token 선택 <br/>
![077946d999a9660867eb26f6e3ff72bf](https://user-images.githubusercontent.com/19223089/57019163-a0af1600-6c60-11e9-9886-52c701a1488f.gif)
<br/><br/>
- Credentials - 방금 등록한 계정 선택, Create token credentials 클릭 <br/>
참고: GitHub Enterprise 는 API URL 을 https://GITHUB-ENTERPRISE-URL/api/v3 로 변경해줍니다. <br/>
![b9e6596277961a189ba9b616f696df73](https://user-images.githubusercontent.com/19223089/57019161-a0af1600-6c60-11e9-8542-44b3b42ded8b.gif)
<br/><br/>
- 이러면 GitHub 에는 Personal Access Token 이 생성되고, <br/>
그 토큰이 jenkins Credentials 에 `secret text`의 형태로 저장됩니다.<br/>
참고: https://github.com/settings/tokens 에서 확인가능합니다.<br/>
GitHub Enterprise: https://GITHUB-ENTERPRISE-URL/settings/tokens <br/>
![image](https://user-images.githubusercontent.com/19223089/57019511-b709a180-6c61-11e9-8b27-578d5bc9cfcf.png)
<br/><br/>
- 위에 Credentials 로 돌아가면 여전히 `- none -` 밖에 없는데, <br/>
저장후 다시 Manage Jenkins > Configure System 를 들어오면, <br/>
드디어 리스트에 auto generated token 이 등장합니다.<br/>
![image](https://user-images.githubusercontent.com/19223089/57019118-79f0df80-6c60-11e9-9aad-73d2214d65de.png)
<br/><br/>
- Credentials을 고르고, Test connection으로 작동을 확인해줍니다.<br/>
![fa9191e33bcbf5c33c70b05992328efd](https://user-images.githubusercontent.com/19223089/57019896-b7566c80-6c62-11e9-9048-c87270e15dfe.gif)
<br/><br/>
- Save 를 클릭합니다.<br/>
![image](https://user-images.githubusercontent.com/19223089/57020072-36e43b80-6c63-11e9-8d0e-b78c04f23b4c.png)
<br/><br/>
- 이제 Jenkins 는 방금 등록한 Personal Access Token 을 활용해서 <br/>
앞으로 만들 Pipeline Organization, Multibranch job 의 GitHub Organization, Repository 에 webhook을 자동으로 생성합니다.<br/>
- Ref: [cloudbees - GitHub Integration: Webhooks](https://support.cloudbees.com/hc/en-us/articles/224543927-GitHub-webhook-configuration)
<br/><br/>
