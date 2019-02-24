webpackJsonp([0xb2398da14a56],{402:function(n,s){n.exports={data:{site:{siteMetadata:{title:"kujyp 개발블로그",subtitle:"ML DevOps, Python, Docker ...",author:{name:"kujyp",github:"kujyp"},disqusShortname:"kujyp",url:"https://kujyp.github.io"}},markdownRemark:{id:"/home/circleci/app/src/pages/articles/2019-01-15---get-docker-스크립트-파헤치기(command_exists)/index.md absPath of file >>> MarkdownRemark",html:'<h1>TL;DR</h1>\n<p>평소에 인용해 사용하던 <a href="https://get.docker.com/">get-docker.sh</a> 내부의 command_exists 함수의 동작을 파헤쳐보았다. </p>\n<h1>들어가며</h1>\n<p><a href="https://get.docker.com/">get-docker.sh</a> 는 <a href="https://bootstrap.pypa.io/get-pip.py">get-pip.py</a> 처럼 널리 사용되는 설치 스크립트이다.\n어느 os, 어느 cpu architecture에서도 잘 돌아가는 설치스크립트는 꽤나 잘만들어져있다는 느낌을 준다.\n<br/></p>\n<p>get-docker.sh 코드 내부에 있는 <code class="language-text">command_exists</code> 함수는 쉘스크립트가 보통은 갖기힘든 아름다운 가독성을 보여준다.\n사용예는 이렇다.<br/></p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token keyword">if</span> command_exists <span class="token function">sudo</span><span class="token punctuation">;</span> <span class="token keyword">then</span>\n    <span class="token keyword">echo</span> <span class="token function">command</span> <span class="token function">sudo</span> exists\n<span class="token keyword">fi</span>\n\n<span class="token keyword">if</span> <span class="token operator">!</span> command_exists <span class="token function">sudo</span><span class="token punctuation">;</span> <span class="token keyword">then</span>\n    <span class="token keyword">echo</span> <span class="token function">command</span> <span class="token function">sudo</span> not exists\n<span class="token keyword">fi</span></code></pre>\n      </div>\n<p>이번 글에서는 이 <code class="language-text">command_exists</code> 함수 내부의 내용을 파헤쳐보겠다. </p>\n<h1>command_exists 함수</h1>\n<p>브라우저로 <a href="https://get.docker.com/">https://get.docker.com/</a> 에 접속해보자.<br/>\nshebang line <code class="language-text">#!/bin/sh</code> 로 시작하는 쉘 스크립트의 내용을 볼 수 있는데, 이것이 <code class="language-text">get-docker.sh</code>의 코드 내용이다.\n<br/></p>\n<p>내용 중 아래로 내려가다보면 <code class="language-text">command_exists</code> 라는 함수가 보일것이다. 3줄짜리 간단한 코드이고, 오늘 파헤쳐볼 코드이다.<br/>\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/command_exists-30b44c405cb276e8ee941b8ed47ad34d-25ed0.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 491px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 16.08961303462322%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAAAsSAAALEgHS3X78AAAAj0lEQVQI142OywqCUABE/f8PSjCil08wWoRRltEqJTAzH2kX78nHqmjRgWFmM8MopuGgjRfM5jaaNmVibjCPBdf0RVkJsqfgUdbkrXfKSkEjaZFI2YcPlJF7Qd8lGF6IqnuoVsDyUOD4CetzzuqUYm0jnH2MG9yx/RtFPZR/DoZx1ocoEYRJRcM/dO8G/+YNzwTjl8eklZcAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="command_exists.png"\n        title=""\n        src="/static/command_exists-30b44c405cb276e8ee941b8ed47ad34d-25ed0.png"\n        srcset="/static/command_exists-30b44c405cb276e8ee941b8ed47ad34d-53310.png 240w,\n/static/command_exists-30b44c405cb276e8ee941b8ed47ad34d-87472.png 480w,\n/static/command_exists-30b44c405cb276e8ee941b8ed47ad34d-25ed0.png 491w"\n        sizes="(max-width: 491px) 100vw, 491px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h1>command -v</h1>\n<p><code class="language-text">command -v &quot;$@&quot;</code> 부터 알아보자.<br/>\n아래는 command manual 중 <code class="language-text">-v</code> 옵션의 내용이다.\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/man_command-81823eb899ad9404fb3843fb4281d7d4-881e6.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 676px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 6.952662721893491%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAABCAYAAADeko4lAAAACXBIWXMAAAsSAAALEgHS3X78AAAAVUlEQVQI12MwNLf/b2Tl/N/JJ+z/lFUH//cu2vW/a97W/z3zt/3vmL3xfzeQ3Tx93f+u+duB4tv+d87d+r934c7/3WD+1v/9S/f9n7b2+P+pa46CMQAPYTaNfgiEDwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="man_command.png"\n        title=""\n        src="/static/man_command-81823eb899ad9404fb3843fb4281d7d4-881e6.png"\n        srcset="/static/man_command-81823eb899ad9404fb3843fb4281d7d4-76c8e.png 240w,\n/static/man_command-81823eb899ad9404fb3843fb4281d7d4-7918d.png 480w,\n/static/man_command-81823eb899ad9404fb3843fb4281d7d4-881e6.png 676w"\n        sizes="(max-width: 676px) 100vw, 676px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    <br/><br/></p>\n<p><code class="language-text">-v</code> 뒤의 내용을 <code class="language-text">re-read</code> 되는 내용으로 변경해준다. python 으로 예를들면 이런식이다.<br/></p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">command</span> -v python\n<span class="token operator">></span> /usr/bin/python</code></pre>\n      </div>\n<p>뒤의 내용이 실제로 실행할 파일이 있을때 결과가 출력된다.<br/>\n없을때에는? 아무것도 출력되지않는다.\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/command_v_nothing-a512f937a240897dbe5a14fc5946d471-2bb0d.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 381px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 11.548556430446196%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAAAsSAAALEgHS3X78AAAAdElEQVQI1z2MywrDIBQF80e+wJWLRLENjRrTXgNu0v//itNwQ7o4DByYGeb5hVoriAjUGnrv2LY3YoyIjydKyWj7jiUlOOfgQ8CSM//WWgghoJT6b7ikckbXK/whpFMepwneB3yPg0NSSha01kxjDPP+7/0A/upGzy9PwtYAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="command_v_nothing.png"\n        title=""\n        src="/static/command_v_nothing-a512f937a240897dbe5a14fc5946d471-2bb0d.png"\n        srcset="/static/command_v_nothing-a512f937a240897dbe5a14fc5946d471-0e6f4.png 240w,\n/static/command_v_nothing-a512f937a240897dbe5a14fc5946d471-2bb0d.png 381w"\n        sizes="(max-width: 381px) 100vw, 381px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    <br/><br/></p>\n<p>즉 command 가 존재하는지 여부를 판단할때 아래와 같은 쉘 조건문을 많이 사용한다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token function">command</span> -v nothing<span class="token variable">)</span></span>"</span> <span class="token operator">==</span> <span class="token string">""</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>\n    <span class="token comment"># early exit</span>\n    <span class="token keyword">echo</span> <span class="token string">"Install nothing first"</span>\n    <span class="token keyword">exit</span> 1<span class="token punctuation">;</span>\n<span class="token keyword">fi</span>\n\n<span class="token comment"># do something </span></code></pre>\n      </div>\n<h1>”@#”</h1>\n<p>그렇다면 <code class="language-text">command -v</code> 뒤의 ”$@“는 무슨내용일까?<br/></p>\n<p>함수 또는 스크립트에 들어온 모든 parameter를 의미한다.<br/></p>\n<p>아래의 예시에서 helloworld function에 들어온 $@는 각각 "", “a”, “a b” 이다.<br/>\n참고: macos와 linux의 shell 동작이 다를 수 있어서 예시는 docker centos7 image에서 실행했다.   </p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">docker run -it --rm centos:centos7 /bin/bash\n\n<span class="token keyword">function</span> helloworld<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">echo</span> <span class="token string">"helloworld <span class="token variable">$@</span>"</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">### MAIN ###</span>\nhelloworld\nhelloworld a\nhelloworld a b\n\n<span class="token operator">></span> helloworld\n<span class="token operator">></span> helloworld a\n<span class="token operator">></span> helloworld a b</code></pre>\n      </div>\n<ul>\n<li>ref: <a href="https://stackoverflow.com/a/9994328">What does $@ mean in a shell script?</a></li>\n</ul>\n<h1>/dev/null(널장치)</h1>\n<p><code class="language-text">command -v &quot;$@&quot; &gt; /dev/null 2&gt;&amp;1</code></p>\n<p>먼저 <code class="language-text">/dev/null</code> 앞의 <code class="language-text">&gt;</code>는 표준입력(stdout)을 redirection 한다는 것을 의미한다.<br/>\n표준입력을 <code class="language-text">/dev/null</code> 로 redirection 한다는 의미인데, 여기에서 <code class="language-text">/dev/null</code> 로 보낸다는의미는 버린다는 의미와 같다.<br/>\n즉 stdout으로 출력될 문구를 출력하지 말라는 의미이다.</p>\n<p><a href="https://ko.wikipedia.org/wiki/%EB%84%90_%EC%9E%A5%EC%B9%98">wikipedia 널 장치</a>에 따르면 유닉스 쪽에서 <code class="language-text">/dev/null</code> 은 비트 버킷 또는 블랙홀로 불린다고한다.</p>\n<ul>\n<li>ref: wikipedia 널 장치 <a href="https://ko.wikipedia.org/wiki/%EB%84%90_%EC%9E%A5%EC%B9%98">https://ko.wikipedia.org/wiki/%EB%84%90_%EC%9E%A5%EC%B9%98</a></li>\n</ul>\n<h1>file descriptor 1, 2</h1>\n<p><code class="language-text">command -v &quot;$@&quot; &gt; /dev/null 2&gt;&amp;1</code></p>\n<p><code class="language-text">/dev/null</code> 바로 뒤 <code class="language-text">2</code> 에 주목하자 이는 file descriptor를 의미한다.<br/>\n여기서 <code class="language-text">file descriptor 1</code> 은 <code class="language-text">stdout</code>, <code class="language-text">file descriptor 2</code> 는 <code class="language-text">stderr</code> 를 의미한다.<br/>\n아래의 예시를 보자.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">docker run -it --rm centos:centos7 /bin/bash\n\n<span class="token function">touch</span> file_that_exists\n<span class="token comment"># stdout을 버린다.</span>\n<span class="token function">ls</span> file_that_exists 1<span class="token operator">></span> /dev/null\n<span class="token operator">></span> <span class="token string">""</span>\n<span class="token function">ls</span> file_that_doesnt_exist 1<span class="token operator">></span> /dev/null\n<span class="token operator">></span> ls: cannot access file_that_doesnt_exist: No such <span class="token function">file</span> or directory\n\n<span class="token comment"># stderr를 버린다.</span>\n<span class="token function">ls</span> file_that_exists 2<span class="token operator">></span> /dev/null\n<span class="token operator">></span> file_that_exists\n<span class="token function">ls</span> file_that_doesnt_exist 2<span class="token operator">></span> /dev/null\n<span class="token string">""</span></code></pre>\n      </div>\n<p>-> ls 명령어의 출력이 비슷해보이지만 <code class="language-text">stdout</code>, <code class="language-text">stderr</code>가 나뉘어져있었다.\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/ls_output-c4946a896f13ae8644b927f9c0cb02be-28fee.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 960px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 20.62780269058296%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAuElEQVQY02WPSw6DMAxEuQ0FBCgUyMdJESVRQte9/1WmSRCoEouRZ+Pn52LiE7rFgK0fOFrwlQJBEgT1oFcHISW4EBinKU/OOeZ5BmkNqRTqukbTNFcKSRrObnDOYX2vGTDHJSEklCIQEYZhwKMsUVXVlRN0A5Ix8N7DhwBrbQSJwyCCdLTQ5jBJhm3bou069H2f+z/07IWKSwkY9h0heLy3LcOSaX432vJ4IB15jmO2TZ0xdrNL+QFGRoG1VsSQGgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="ls_output.png"\n        title=""\n        src="/static/ls_output-c4946a896f13ae8644b927f9c0cb02be-c83f1.png"\n        srcset="/static/ls_output-c4946a896f13ae8644b927f9c0cb02be-569e3.png 240w,\n/static/ls_output-c4946a896f13ae8644b927f9c0cb02be-93400.png 480w,\n/static/ls_output-c4946a896f13ae8644b927f9c0cb02be-c83f1.png 960w,\n/static/ls_output-c4946a896f13ae8644b927f9c0cb02be-28fee.png 1338w"\n        sizes="(max-width: 960px) 100vw, 960px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<ul>\n<li>ref: <a href="https://stackoverflow.com/a/818284">In the shell, what does “ 2>&#x26;1 ” mean?</a></li>\n</ul>\n<h1>2>&#x26;1</h1>\n<p><code class="language-text">command -v &quot;$@&quot; &gt; /dev/null 2&gt;&amp;1</code></p>\n<p>다음은 <code class="language-text">2&gt;&amp;1</code> 차례이다.<br/>\n<code class="language-text">&amp;</code> 기호는 뒤의 내용이 <code class="language-text">file descriptor</code> 라는 것을 보여준다.<br/>\n즉 <code class="language-text">&amp;1</code> 은 <code class="language-text">stdout</code> 을 의미한다.<br/>\n(&#x26;가 없으면 <code class="language-text">1</code> 을 파일이름으로 하는 파일에 해당 내용이 redirection 된다.)</p>\n<p>즉 이 코드는 앞에서 <code class="language-text">/dev/null</code> 로 보냈던 <code class="language-text">stdout</code>에 <code class="language-text">stderr</code>를 연결해서 <code class="language-text">stderr</code>까지 둘다 버리는것을 의미한다.</p>\n<p>아래의 예시를 실행해보면 더 명확하게 알수있다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">docker run -it --rm centos:centos7 /bin/bash\n \n<span class="token function">touch</span> file_that_exists\n\n<span class="token comment"># stderr는 버려지지않는다.</span>\n<span class="token function">ls</span> file_that_doesnt_exist <span class="token operator">></span> /dev/null\n<span class="token operator">></span> ls: cannot access file_that_doesnt_exist: No such <span class="token function">file</span> or directory\n<span class="token comment"># stderr도 버려서 아무것도 출력되지않는다. </span>\n<span class="token function">ls</span> file_that_doesnt_exist <span class="token operator">></span> /dev/null 2<span class="token operator">></span><span class="token operator">&amp;</span>1\n<span class="token operator">></span>\n\n<span class="token comment"># stderr를 파일 "1"에 redirection, 아무것도 출력은 안된다.</span>\n<span class="token function">ls</span> file_that_doesnt_exist <span class="token operator">></span> /dev/null 2<span class="token operator">></span>1\n<span class="token operator">></span>\n<span class="token comment"># cat으로 file "1"을 출력해보면 내용이 남아있다. </span>\n<span class="token function">cat</span> 1\n<span class="token operator">></span> ls: cannot access file_that_doesnt_exist: No such <span class="token function">file</span> or directory</code></pre>\n      </div>\n<ul>\n<li>\n<p>참고: <code class="language-text">2&gt;1</code>을 하는 상황에서 <code class="language-text">ls</code> 를 입력해보면, <code class="language-text">1</code> 이라는 파일이 생성된것을 볼 수 있다.\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/ls_file1-b7f1632d4d96476c6c318a171432fbd3-74102.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 960px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 9.298780487804878%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAf0lEQVQI1w2MWwqDMBQF3UxrXhVN1JuHhopiodD9L2eaj+Ew52O6WiulFFJKhK3gc8W4Aa11Q2HHBecjj3nC+BXX3E7SNtCbwHG/uH8jvZ2xVtNJjIgIcwjo+GbdT2LKxPbnhpWMkh1Tv9h84+TEpQ/PXFDLQboq25VQZmhBwx8kGEB/rI+onAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="ls_file1.png"\n        title=""\n        src="/static/ls_file1-b7f1632d4d96476c6c318a171432fbd3-c83f1.png"\n        srcset="/static/ls_file1-b7f1632d4d96476c6c318a171432fbd3-569e3.png 240w,\n/static/ls_file1-b7f1632d4d96476c6c318a171432fbd3-93400.png 480w,\n/static/ls_file1-b7f1632d4d96476c6c318a171432fbd3-c83f1.png 960w,\n/static/ls_file1-b7f1632d4d96476c6c318a171432fbd3-74102.png 1312w"\n        sizes="(max-width: 960px) 100vw, 960px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n</li>\n<li>\n<p>ref: <a href="https://stackoverflow.com/a/818284">In the shell, what does “ 2>&#x26;1 ” mean?</a></p>\n</li>\n<li>\n<p>ref2: <a href="https://unix.stackexchange.com/a/23966">Why is redirecting STDERR to /dev/null done this way?</a></p>\n</li>\n<li>\n<p>ref3: <a href="https://gist.github.com/gin1314/3697341">gist - bash: redirection cheetsheet</a></p>\n</li>\n</ul>\n<h1>shell if</h1>\n<p>위에서 설명한 function은 실제로 if 문 내부에서 써먹는다.<br/>\nif 문 내부에서 shell statement가 성공, 실패했을때 동작을 살펴보자.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">docker run -it --rm centos:centos7 /bin/bash\n \n<span class="token function">touch</span> file_that_exists\n\n<span class="token comment"># shell statement 성공시</span>\n<span class="token keyword">if</span> <span class="token function">ls</span> file_that_exists\n<span class="token keyword">then</span>\n    <span class="token keyword">echo</span> <span class="token boolean">true</span>\n<span class="token keyword">else</span>\n    <span class="token keyword">echo</span> <span class="token boolean">false</span>\n<span class="token keyword">fi</span>\n<span class="token operator">></span> file_that_exists\n<span class="token operator">></span> <span class="token boolean">true</span>\n\n<span class="token comment"># shell statement 실패시</span>\n<span class="token keyword">if</span> <span class="token function">ls</span> file_that_doesnt_exist\n<span class="token keyword">then</span>\n    <span class="token keyword">echo</span> <span class="token boolean">true</span>\n<span class="token keyword">else</span>\n    <span class="token keyword">echo</span> <span class="token boolean">false</span>\n<span class="token keyword">fi</span>\n<span class="token operator">></span> ls: cannot access file_that_doesnt_exist: No such <span class="token function">file</span> or directory\n<span class="token operator">></span> <span class="token boolean">false</span></code></pre>\n      </div>\n<p>-> if 뒤에 나오는 statement가 성공시 true, 실패시 false를 반환하는것을 알 수 있다.</p>\n<ul>\n<li>참고: function에 해당 구문을 넣어보았다.</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">docker run -it --rm centos:centos7 /bin/bash\n\n<span class="token keyword">function</span> file_exists<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">ls</span> <span class="token string">"<span class="token variable">$@</span>"</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">touch</span> file_that_exists\n<span class="token keyword">if</span> file_exists file_that_exists\n<span class="token keyword">then</span>\n    <span class="token keyword">echo</span> <span class="token boolean">true</span>\n<span class="token keyword">else</span>\n    <span class="token keyword">echo</span> <span class="token boolean">false</span>\n<span class="token keyword">fi</span>\n<span class="token operator">></span> file_that_exists\n<span class="token operator">></span> <span class="token boolean">true</span>\n\n<span class="token keyword">if</span> file_exists file_that_doesnt_exist\n<span class="token keyword">then</span>\n    <span class="token keyword">echo</span> <span class="token boolean">true</span>\n<span class="token keyword">else</span>\n    <span class="token keyword">echo</span> <span class="token boolean">false</span>\n<span class="token keyword">fi</span>\n<span class="token operator">></span> ls: cannot access file_that_doesnt_exist: No such <span class="token function">file</span> or directory\n<span class="token operator">></span> <span class="token boolean">false</span></code></pre>\n      </div>\n<p>-> function 으로 감싸도 결과는 같다.</p>\n<h1>결론</h1>\n<p>위에서 알아낸 내용을 종합하면 이 <code class="language-text">command_exists</code> 함수는 </p>\n<ol>\n<li><code class="language-text">command -v &quot;인자&quot;</code> 의 성공/실패여부를 반환하고,</li>\n<li><code class="language-text">stdout</code>, <code class="language-text">stderr</code>로 나와야할 출력을 <code class="language-text">/dev/null</code> 로 버려주는 역할을 수행한다.\n<br/></li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">command_exists<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">command</span> -v <span class="token string">"<span class="token variable">$@</span>"</span> <span class="token operator">></span> /dev/null 2<span class="token operator">></span><span class="token operator">&amp;</span>1\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>이 함수를 통해 아래와 같이 사용해왔던 if 문을 좀더 미려하게 사용할 수 있게 만들었다.   </p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token comment"># before</span>\n<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token function">command</span> -v somethingtocheck<span class="token variable">)</span></span>"</span> <span class="token operator">==</span> <span class="token string">""</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>\n    <span class="token keyword">echo</span> <span class="token function">command</span> not exists<span class="token operator">!</span>\n<span class="token keyword">fi</span>\n\n<span class="token comment"># after</span>\n<span class="token keyword">if</span> <span class="token operator">!</span> command_exists somethingtocheck<span class="token punctuation">;</span> <span class="token keyword">then</span>\n    <span class="token keyword">echo</span> <span class="token function">command</span> not exists<span class="token operator">!</span>\n<span class="token keyword">fi</span></code></pre>\n      </div>\n<h1>마치며</h1>\n<p>shell script는 정식으로 배울일이 없어서 예전부터 구글링하면서 작성을 해왔다.<br/>\n눈앞의 문제를 해결하기위해서만 코드 작성을 하다보면, 궁금한점이 자꾸 쌓이는데, 이번 기회에 여러가지 실험해보면서 정리를 해볼 수 있었다.<br/></p>\n<p>꽤 개운한 경험인것 같다.</p>\n<h1>참고</h1>\n<ul>\n<li>참고1. 위에서 사용한 스크립트를 좀더 개선해보았다.<br/>\n가독성 측면에서 기존의 <code class="language-text">2&gt;&amp;1</code> 는 좀 더 의도가 숨겨져있는 느낌이다.</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">docker run -it --rm centos:centos7 /bin/bash\n\n<span class="token keyword">function</span> file_exists<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">ls</span> <span class="token string">"<span class="token variable">$@</span>"</span> 1<span class="token operator">></span> /dev/null 2<span class="token operator">></span> dev/null\n<span class="token punctuation">}</span>\n\n<span class="token function">touch</span> file_that_exists\n<span class="token keyword">if</span> file_exists file_that_exists<span class="token punctuation">;</span> <span class="token keyword">then</span>     <span class="token keyword">echo</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token keyword">else</span>    <span class="token keyword">echo</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token keyword">fi</span>\n<span class="token operator">></span> <span class="token boolean">true</span>\n\n<span class="token keyword">if</span> file_exists file_that_doesnt_exist<span class="token punctuation">;</span> <span class="token keyword">then</span>     <span class="token keyword">echo</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token keyword">else</span>    <span class="token keyword">echo</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token keyword">fi</span>\n<span class="token operator">></span> <span class="token boolean">false</span></code></pre>\n      </div>\n<ul>\n<li>\n<p>참고2. 중간에 띄어쓰기 때문에 작동안한 시행착오가있었다. 1, 2뒤에는 공백이 들어가면 안되는듯하다.</p>\n<ul>\n<li><code class="language-text">ls &quot;$@&quot; &gt; /dev/null 2&gt; dev/null</code> (작동함)</li>\n<li><code class="language-text">ls &quot;$@&quot; &gt; /dev/null 2 &gt; dev/null</code> (작동안함)</li>\n</ul>\n</li>\n<li>참고3. shell은 공식 document를 어디서 찾아야하는지 몰라서 reference를 stackoverflow에서 가져왔다.</li>\n<li>참고4. shebang line을 보니 get-docker.sh 는 <code class="language-text">sh</code>를 사용한다. shell script를 작성하다보면 가끔 <code class="language-text">bash</code>와 <code class="language-text">sh</code>의 차이에서 가끔 막히는경우가 있는데, 이번 글에서는 겪지 못한것을 보니 이번 글에서 사용한 기법들은 차이가 없나보다. </li>\n</ul>',fields:{slug:"/posts/get-docker-스크립트-파헤치기-command-exists/",tagSlugs:["/tags/shell/","/tags/linux/"]},frontmatter:{title:"get docker 스크립트 파헤치기(command_exists)",tags:["shell","linux"],date:"2019-01-15T17:06:00.169Z",description:"평소에 인용해 사용하던 get-docker.sh 내부의 command_exists 함수의 동작을 파헤쳐보았다."}}},pathContext:{slug:"/posts/get-docker-스크립트-파헤치기-command-exists/"}}}});
//# sourceMappingURL=path---posts-get-docker-스크립트-파헤치기-command-exists-5ec723ec198df6ed8c93.js.map