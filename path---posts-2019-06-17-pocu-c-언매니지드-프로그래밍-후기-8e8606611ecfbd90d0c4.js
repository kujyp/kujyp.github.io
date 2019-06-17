webpackJsonp([0xafa7288536c9],{418:function(n,p){n.exports={data:{site:{siteMetadata:{title:"kujyp 개발블로그",subtitle:"ML DevOps, Python, Docker ...",author:{name:"kujyp",github:"kujyp"},disqusShortname:"kujyp",url:"https://kujyp.github.io"}},markdownRemark:{id:"/home/circleci/app/src/pages/posts/2019-06-17---pocu-C++-언매니지드-프로그래밍-후기.md absPath of file >>> MarkdownRemark",html:'<img src="https://user-images.githubusercontent.com/19223089/59605347-8ca87080-9149-11e9-92cc-74a0546bb5a4.png" alt="image" width="200">\n<h3>pocu C++ 언매니지드 프로그래밍 후기</h3>\n<p>올해 초 1월 ~ 4월 C++ 를 공부하기 위해, pope 님이 새로 출시한 pocu 아카데미의 “C++ 언매니지드 프로그래밍”을 수강했다.<br/>\n꽤 마음에 드는 강의였어서, 후기를 남겨놓고자 했었는데 최근 바빠서 이제서야 후기를 작성한다.<br/></p>\n<p>pocu 아카데미 첫 강의 출시라서 그런지 Super Early Bird 뱃지를 줬다.ㅋㅋㅋ<br/>\n<img src="https://user-images.githubusercontent.com/19223089/59606386-f4f85180-914b-11e9-9cd8-170f0dd90cf5.png" alt="image">\n<br/>\n<br/></p>\n<h3>강의 내용</h3>\n<p>일단 강의 내용은 C++ 기초 입력/출력 부터 시작해서, OOP, 템플릿, 표준 템플릿 라이브러리 컨테이너 등 C++ 의 모든 개념을 다룬다.<br/>\n앞부분에서는 고전 C++ 을 다루고, 뒷부분에서는 새롭게 추가된 C++11 ~ 기능들을 다룬다고 보면된다.<br/></p>\n<p>C++ 실무를 하는데 있어서 필요한 개념은 다 다루기때문에<br/>\n(여기에 없는 내용은 몰라도된다. 애초에 오랫동안 C++ 실무를 해온 사람의 강의이기때문에, 실무에 필요없는 지식은 교수들보다 정확히 알고있다.)<br/>\nC++ 를 실무에 사용해야하는 경우 이 강의 하나만 들으면 필요한 지식이 다 습득된다고 말할 수 있을거같다.\n<br/>\n<br/></p>\n<h3>중간고사, 기말고사, 낙제</h3>\n<p>일단 학기 중간에 85 점이 낙제라는 말을 듣고, 식겁했다.<br/>\n중간고사 점수를 80점대를 맞고 더 식겁했다.<br/>\n대학교 강의도 이것보다 더 설렁설렁 공부하고 상위권 점수 받아갔는데…<br/>\n나름 열심히 준비하고도 받은 점수가 85점아래 낙제점…<br/></p>\n<p>점수를 과제 50%, 중간+기말고사 50% 로 나눠서받았는데,<br/>\n다행히 과제는 당연히 100점 맞는것을 전제로 커리큘럼을 짜신거같다.<br/>\n중간, 기말고사의 실질적인 낙제점은 70점인듯…<br/>\n(그래도 너무 높다.)<br/>\n마지막에 1점차이로 떨어진분 있었던것같은데, 너무 아쉬울것같았음…</p>\n<p>중간, 기말고사는 2시간정도동안 진행되고, 서술형이다.<br/>\n유형은 예제에 나온 코드의 문제점을 서술하거나, 고치는 류, 개념을 서술하라는 류의 문제들이 있다.<br/></p>\n<p>부정행위 방지를 위해 브라우저에 POCU 시험감독 크롬 플러그인을 켜놔야하고,<br/>\n노트북 웹캠으로 시험치는 모습이 녹화된다.<br/></p>\n<ul>\n<li>POCU 시험감독 크롬 플러그인<br/>\n<img src="https://user-images.githubusercontent.com/19223089/59606688-bca54300-914c-11e9-938c-a865e15a3504.png" alt="image">\n<br/></li>\n</ul>\n<p>서술형 시험이 굉장히 좋은 방법이라고 생각되는게,<br/>\n온라인 수업이라고 공부를 게을리하기가 쉬운데<br/>\n(실제로 나도 Udemy 강의를 몇주치씩 밀렸다.)<br/>\n시험이 서술형이다보니 공부안한채로 시험을 봤다가는 진짜 낙제점이 나오는 사태가 벌어진다.ㅋㅋㅋ<br/>\n벼락치기로라도 다 공부하고와야한다.</p>\n<p>결국 6점차이로 낙제는 면했다.<br/>\n<img src="https://user-images.githubusercontent.com/19223089/59606410-03466d80-914c-11e9-8d35-4d12b50686cf.png" alt="image">\n<br/>\n<br/></p>\n<h3>과제</h3>\n<p>과제는 매주나오는 실습 11개와, 3주? 4주?마다 나오는 과제 4개 총 15개가 있다.<br/>\nGitlab, Github, azure devops 등에 완성된 코드를 올리면 되고,<br/>\n채점은 자동화된 Slack 채팅방에서 빌드봇에게 채점커맨드를 날리면, 알아서 진행해서 점수를 내준다.<br/></p>\n<ul>\n<li>이번 수업에 진행한 내 GitLab 과제 repository\n<img src="https://user-images.githubusercontent.com/19223089/59607363-31c54800-914e-11e9-8d98-0c8761c5dc83.png" alt="image">\n<br/></li>\n</ul>\n<p>빌드봇도 꽤 매력적인 시스템인데, 대학교에서 일반적으로 진행하는 과제와 다르게 실시간으로 점수를 알수있다.<br/>\n내부에서 Test case 코드를 작성해두고, 해당 테스트를 통과하지 못하면 감점하는 방식.<br/>\n<img src="https://user-images.githubusercontent.com/19223089/59608467-5a4e4180-9150-11e9-814a-0f01ef063ab0.png" alt="빌드봇">\n<br/></p>\n<p>학생들이 바로바로 피드백을 주는 이 시스템을 굉장히 좋아했는데,<br/>\n한달 후에 내도 되는 과제를 미리 공부해서 내는것을 보고 꽤 충격을 받았었다.<br/>\n어느분은 시험기간 주에는 과제를 안내줬었는데, 할 과제가 없다고 과제좀 내달라고 한적도…<br/> </p>\n<p>그리고 빌드봇은 코딩 스타일도 검사해서 감점으로 처리한다.<br/>\n예를들면 아래 처럼 중괄호 위치등을 검사한다.<br/></p>\n<div class="gatsby-highlight">\n      <pre class="language-cpp"><code class="language-cpp"><span class="token comment">// 감점</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">==</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 정답</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">==</span> b<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>학생때는 겪어보지 못하다가, 현업에서 처음 겪는 부분중 하나가 이름 Coding style convention 인데,<br/>\n이를 미리 겪게해주는 매우 좋은 시스템이었다고 생각한다.\n<br/>\n<br/></p>\n<h3>코드 리뷰</h3>\n<p>과제 제출기간이 끝나고 나면, 작성한 코드를 올려서 학생들끼리 서로 피드백을 주도록했었는데, 내 생각에는 활성화는 잘 안됬던것같다.<br/>\n코드를 1등으로 올린 분들에게 댓글이 몰리는편이었고, 뒤늦게 올리신분들은 다들 댓글이 별로 안달렸던것으로 기억한다.<br/>\n나 같은 경우에도 다른 학생들에게 한번도 댓글을 못받았다.ㅋㅋㅋ</p>\n<p>그런데 중간고사 이후부터 포프님이 시간이 남으셨는지,<br/>\n옛날에 올린것들 하나하나 리뷰를 봐주셔서, 다시 또 만족했던 기억이…ㅋㅋ\n<br/>\n<br/></p>\n<h3>마치며…</h3>\n<p>pocu 아카데미의 “C++ 언매니지드 프로그래밍” 수업은 가격이 85만원가량 되는 온라인 강좌이다.<br/>\n결코 싼편은 아니지만, 배울수있는 것에 비하면 꽤 합리적인 가격이었다고 생각한다.<br/></p>\n<p>근데, 팀에서 이제 C++ 을 안쓰겠다고한다… 좋은건가… ㅜㅜ</p>',fields:{slug:"/posts/2019-06-17---pocu-C++-언매니지드-프로그래밍-후기/",tagSlugs:["/tags/온라인강의/"]},frontmatter:{title:"pocu C++ 언매니지드 프로그래밍 후기",tags:["온라인강의"],date:"2019-06-17T21:42:00+0900",description:'올해 초 1월 ~ 4월 C++ 를 공부하기 위해, pope 님이 새로 출시한 pocu 아카데미의 "C++ 언매니지드 프로그래밍"을 수강했다.'}}},pathContext:{slug:"/posts/2019-06-17---pocu-C++-언매니지드-프로그래밍-후기/"}}}});
//# sourceMappingURL=path---posts-2019-06-17-pocu-c-언매니지드-프로그래밍-후기-8e8606611ecfbd90d0c4.js.map