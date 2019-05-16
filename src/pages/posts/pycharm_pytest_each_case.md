---
title: Pycharm pytest 케이스 1개씩 실행하기
date: "2019-05-17T01:06:00.000Z"
layout: post
draft: false
category: "Development"
tags:
  - "jetbrains"
  - "pycharm"
  - "IDE"
description: "Pycharm pytest 케이스 1개씩 실행하기"
---

### Pycharm pytest 케이스 1개씩 실행하기.
Jetbrains IDE 에서 유용하게 쓰고있는 기능이있다.<br/>
테스트 케이스를 1개씩 실행시키는기능인데, 이 기능을 이용해서 디버그모드로 한줄한줄 실행하면 디버깅하기 매우 편하다.<br/>

Intellij IDEA, CLion, Webstorm 에서 설정없이 바로 테스트케이스 옆에 초록색 재생버튼이 떠서,<br/>
편하게 잘 쓰고있었다.<br/>

참고: CLion 에서 해당 기능이 뜨는 모습.
![image](https://user-images.githubusercontent.com/19223089/57869246-99cafa80-783f-11e9-8302-0de5afa33880.png)
<br/>
<br/>

요즘 업무에 python 을 많이 사용하게 되면서, pytest 를 사용해 test case 를 많이 작성하게 되었는데,<br/>
이상하게, pycharm 에서는 케이스 하나씩 실행하는 버튼이 기본적으로 안뜬다.
![스크린샷 2019-05-16 오후 7 57 18](https://user-images.githubusercontent.com/19223089/57865582-d0514700-7838-11e9-87be-04f3fbf57fae.png)
<br/>
<br/>

다행히 검색해보니 방법이 있다고한다.<br/>
Preferences > Tools > Python Integrated Tools 을 들어간다.<br/>
Testing > Default test runner 에 기본값으로 `Unittests` 로 되어있는데, `pytest` 로 바꾼다.<br/>
![a0c04d48f364ba447024f32dda76bdca](https://user-images.githubusercontent.com/19223089/57865572-caf3fc80-7838-11e9-8785-59c781e273a2.gif)
<br/>
<br/>

반가운 버튼이 생겼다!
![스크린샷 2019-05-16 오후 7 57 56](https://user-images.githubusercontent.com/19223089/57865578-cdeeed00-7838-11e9-9c02-75c4651691d1.png)
<br/>
<br/>

Ref: Pycharm enable pytest - https://www.jetbrains.com/help/pycharm/pytest.html#enable-pytest
