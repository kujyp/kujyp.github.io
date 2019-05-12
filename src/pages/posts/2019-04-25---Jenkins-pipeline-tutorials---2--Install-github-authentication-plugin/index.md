---
title: Jenkins pipeline tutorials - 2. Install github authentication plugin
date: "2019-04-25T23:53:00+0900"
layout: post
draft: false
path: "/posts/2019-04-25---Jenkins-pipeline-tutorials---2--Install-github-authentication-plugin/"
category: "Development"
tags:
  - "jenkins"
description: "github authentication plugin 을 연동합니다."
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
- [**2. Install github authentication plugin**](/posts/2019-04-25---Jenkins-pipeline-tutorials---2--Install-github-authentication-plugin/)
  - 2-1. plugin 설치
  - 2-2. plugin 설정
- [3. Webhook settings](/posts/2019-05-01---Jenkins-pipeline-tutorials---3--Webhook-settings/)
- [4. Jenkins Job 생성하기](/posts/2019-05-06---Jenkins-pipeline-tutorials---4--Jenkins-Job-생성하기/)
  - 4-1. Pipeline Organization job 생성하기
  - 4-2. tag automatic trigger 문제
  - 4-3. tag automatic trigger 문제해결
- (미작성)
  - 5. jenkins concurrency
<br/>

## 과정
### 2. Install github authentication plugin
#### 2-1. plugin 설치
- 아까 입력한 관리자계정으로 접속해줍니다.<br/>
![9627d258-10f3-11e9-8b36-c0524e734271](https://user-images.githubusercontent.com/19223089/56739946-df4d5800-67aa-11e9-901d-acaf9deea301.png)<br/><br/>
- Manage Jenkins - Manage plugins - available탭 들어갑니다.<br/>
![d4dbc9b4-10f3-11e9-8eea-cd02d396bca7](https://user-images.githubusercontent.com/19223089/56739948-df4d5800-67aa-11e9-924e-7c13b76a4c17.gif)<br/><br/>
- github authentication plugin 체크, download now and install after restart를 선택합니다.<br/>
![0a74cec2-10f4-11e9-82bd-04d9e3da1111](https://user-images.githubusercontent.com/19223089/56739949-df4d5800-67aa-11e9-85f8-3111d6b7f62d.gif)<br/><br/>
- 왜인지모르지만 아래화면에서 멈춰있어서 restart jenkins when installation is complete and no jobs are running 체크했습니다.<br/>
(원래 자동으로 되는데)<br/>
![32c607ce-10f4-11e9-8f11-f63c704a2ebf](https://user-images.githubusercontent.com/19223089/56739951-dfe5ee80-67aa-11e9-9b99-e510d3bfc706.png)
<br/><br/>

#### 2-2. plugin 설정
- manage jenkins - configure global security - github authentication plugin 선택합니다.<br/>
![cc5f1df2-1113-11e9-9829-df19061f64bd](https://user-images.githubusercontent.com/19223089/56742603-05c1c200-67b0-11e9-9676-bc06b4d74f8c.gif)<br/><br/>
- GitHub Web URI - https://github.com <br/>
GitHub API URI - https://api.github.com <br/>
- 참고: github enterprise 의 경우 아래 내용을 입력해줍니다.<br/>
GitHub Web URI - https://GITHUB-ENTERPRISE-URL <br/>
GitHub API URI - https://GITHUB-ENTERPRISE-URL/api/v3 <br/>
![스크린샷 2019-04-25 오후 11 25 04](https://user-images.githubusercontent.com/19223089/56743369-64d40680-67b1-11e9-9c90-beb763083fac.png)
<br/><br/>
- client id, client secret 는 github 에서 `OAuth app`을 등록한뒤 생성되는 값을 가져와줍니다.<br/>
OAuth 발급링크: https://github.com/settings/applications/new <br/>
참고: github enterprise 의 경우 https://GITHUB-ENTERPRISE-URL/settings/applications/new <br/>
- Register a new OAuth application 페이지에서<br/>
homepage url - http://USER-JENKINS-HOST/ <br/>
Authorization callback URL - http://USER-JENKINS-HOST/securityRealm/finishLogin <br/>
를 입력, Register application 을 클릭해줍니다.<br/>
![스크린샷 2019-04-25 오후 10 52 47](https://user-images.githubusercontent.com/19223089/56742604-05c1c200-67b0-11e9-9de7-d8e2543ad903.png)
<br/><br/>
- OAuth app 이 생성된뒤 뜨는 Client ID, Client Secret 을 jenkins 설정으로 가져옵니다.<br/>
(detail을 위해 logo도 Upload 했습니다...)<br/>
![스크린샷 2019-04-25 오후 10 55 56](https://user-images.githubusercontent.com/19223089/56742605-05c1c200-67b0-11e9-9783-ad84894bfe32.png)
<br/><br/>
- 가져온 Client ID, Secret 입력해줍니다.
![스크린샷 2019-04-25 오후 10 58 22](https://user-images.githubusercontent.com/19223089/56742606-05c1c200-67b0-11e9-8bd1-debc994b9475.png)
<br/><br/>
- Jenkins configure security 화면에서 아래의 Authorization - Matrix-based security를 선택<br/>
Add user or group으로 `GITHUB-ORGANIZATION-NAME`를 넣어줍니다.<br/>
![스크린샷 2019-04-25 오후 10 59 21](https://user-images.githubusercontent.com/19223089/56744137-e37d7380-67b2-11e9-9609-696ab3f38edf.png)
![스크린샷 2019-04-25 오후 10 59 32](https://user-images.githubusercontent.com/19223089/56744208-07d95000-67b3-11e9-8d36-622cc0fdba8e.png)
![스크린샷 2019-04-25 오후 10 59 46](https://user-images.githubusercontent.com/19223089/56744210-07d95000-67b3-11e9-8166-1d0f3aa0d12d.png)
<br/><br/>
- 모든권한을 부여합니다.<br/>
![2225ed0b11fc77c412634d3ba13bb375](https://user-images.githubusercontent.com/19223089/56744745-08beb180-67b4-11e9-96ce-e935542220e4.gif)
<br/><br/>
- save 클릭. 이제 아까 생성한 관리자계정은 github 로 가입한 계정이 아니기때문에 모든 권한을 잃어버립니다.<br/>
![스크린샷 2019-04-25 오후 11 00 34](https://user-images.githubusercontent.com/19223089/56744765-11af8300-67b4-11e9-8c45-1db3416b6c0c.png)
<br/><br/>
- 다시 로그인하면 github 계정에게 authorize 요청 창이 뜨고, 승인하면 로그인이 완료됩니다.<br/>
![스크린샷 2019-04-25 오후 11 02 13](https://user-images.githubusercontent.com/19223089/56744852-3c99d700-67b4-11e9-8735-2d71bdcfbcc5.png)
<br/><br/>
- 주의: github Authorize 주기 전 꼭 해당 Organization 에 대한 열람권한을 Grant 해줘야합니다.<br/>
이 과정을 생략하면, 해당 Organization의 멤버인지 확인할 방법이 없기때문에 jenkins는 해당 유저에게 권한을 주지않습니다.<br/>
(최초 Jenkins 가입시 Grant 되어있지않으면, 이후에 github settings 에 들어가 Organization 열람권한을 주더라도 Jenkins는 권한을 주지 없습니다.)
![34f5a7b3e3b206779cff94b7fc977db3](https://user-images.githubusercontent.com/19223089/56744964-68b55800-67b4-11e9-99bb-27db9edf094c.gif)
<br/><br/>
- 참고: 이 경우 방금 로그아웃한 페이지(http://USER-JENKINS-HOST/githubLogout/ )로 리디렉션되기때문에 don't run away라는 창이 표시됩니다. 메인으로 이동해줍니다.<br/>
<br/><br/>
- github authentication 연동 완료.<br/>
ref: plugin 문서 https://wiki.jenkins.io/display/JENKINS/GitHub+OAuth+Plugin
<br/><br/>
