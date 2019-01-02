webpackJsonp([0x67ce9321aeeb],{386:function(a,n){a.exports={data:{site:{siteMetadata:{title:"kujyp 개발블로그",subtitle:"ML DevOps, Python ...",author:{name:"kujyp",github:"kujyp"},disqusShortname:"kujyp",url:"https://kujyp.github.io"}},markdownRemark:{id:"/Users/jaeyoung/workspace/WebstormProjects/blog/kujyp/src/pages/articles/2019-01-03---gatsby-starter-lumen으로-블로그-생성하기/index.md absPath of file >>> MarkdownRemark",html:'<h3>TL;DR</h3>\n<p>React를 사용하는 정적 페이지 생성 툴 <a href="https://www.gatsbyjs.org/">gatsby</a>를 활용해 개발블로그를 만들어 보았다.\n<a href="https://github.com/alxshelepenok/gatsby-starter-lumen">lumen starter</a>를 활용해 css, plugin가 미리 세팅된 환경에서 작업을 시작했고,\ngithub pages를 이용해 생성된 정적페이지를 호스팅했다.</p>\n<h3>들어가며</h3>\n<p>2019년을 맞이해서 2018년 회고도 할겸, 미루기만 해왔던 개발블로그를 제작을 해보았다.\n개발을 쭉 해오면서 정리해놓은 자료들이 아깝기도하고, 이대로 고생했던 경험을 잊어버릴까봐 걱정되는 마음이 있어서 언젠가는 개발블로그를 만들어보자는 생각을 갖고있었다.\n그 과정에서 겪은 내용들을 개발블로그 첫 포스팅으로 올려본다.</p>\n<h3>블로그 서비스 선택</h3>\n<p>제일 먼저 고려했던것은 <code class="language-text">직접 개발하기</code> 였다.\n욕심이 많아서 중간중간에 블로그에 넣고싶은 기능들이 계속 생겨날텐데, 그것을 감당하려면 아무래도 직접개발이 가장 좋지 않나 생각했다.</p>\n<p>하지만 올해 6월 해커톤에서 만들었던 <a href="https://github.com/OrangeTen/TodayILearned">tilup</a> 서비스를 유지하는 과정에서, 직접 호스팅하는 작업이 생각보다 손이 많이간다는것을 느꼈다.\n호스팅에서 꾸준하게 생기는 이슈(dockerize한 이미지를 dockerhub에 배포 했더니 AWS traffic으로 과금이 일어나지를 않나, VM의 용량이 부족해서 주기적으로 docker image prune을 해줘야하질 않나)를 본업이 있는 와중에 해결하다보니,\n간단한 이슈임에도 꽤 오랜기간이 서비스가 중단된채로 방치되고, 이런 이슈가 반복되다보니 서서히 끈기를 잃어가는것을 느꼈다. </p>\n<p>그래서 이번 블로그에서 가장 중점적으로 본것은 <code class="language-text">유지보수가 편한것</code>이다. 유지보수가 편하려면,</p>\n<ol>\n<li>호스팅을 직접하지 않는 서비스</li>\n<li>유명한 서비스</li>\n<li>평소 사용하던 언어 등을 사용하는 서비스여야했다.</li>\n</ol>\n<p>이 조건을 모두 만족하는 서비스를 찾다보니, <a href="https://pages.github.com/">github pages</a>+<a href="https://www.gatsbyjs.org/">gatsby</a>를 찾게되었다.\n호스팅을 <a href="https://pages.github.com/">github pages</a>로 대신해주고, 유명하고(github star 3만개), 평소사용하던 markdown, nodejs/React 를 사용하는 서비스였다.\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/gatsby_star-435b11dafafedbe84404d8e89b26c488-8a7b0.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 960px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 5.727272727272728%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAABCAYAAADeko4lAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAQklEQVQI12XGMQ6AIAxAUe9/RAeNkYpFTYHW+cvu8JI3uQdJK4tU5t2wFnT/83h5rLJuCS03R1aS5PELGT+10LrzAfSGS2kfRsKvAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="gatsby_star.png"\n        title=""\n        src="/static/gatsby_star-435b11dafafedbe84404d8e89b26c488-c83f1.png"\n        srcset="/static/gatsby_star-435b11dafafedbe84404d8e89b26c488-569e3.png 240w,\n/static/gatsby_star-435b11dafafedbe84404d8e89b26c488-93400.png 480w,\n/static/gatsby_star-435b11dafafedbe84404d8e89b26c488-c83f1.png 960w,\n/static/gatsby_star-435b11dafafedbe84404d8e89b26c488-23e13.png 1440w,\n/static/gatsby_star-435b11dafafedbe84404d8e89b26c488-10d8f.png 1920w,\n/static/gatsby_star-435b11dafafedbe84404d8e89b26c488-8a7b0.png 2200w"\n        sizes="(max-width: 960px) 100vw, 960px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p><a href="https://pages.github.com/">github pages</a>+<a href="https://jekyllrb.com/">jekyll</a>, <a href="https://medium.com">medium</a>, <a href="https://wordpress.com/">가입형 wordpress</a> 들도 고려해보았지만,\nReact의 생태계를 모두 사용할 수 있다는 말에 넘어가서 gatsby를 사용하기로 결정했다.  </p>\n<h3>설치 과정</h3>\n<ul>\n<li>\n<p>이 가이드는 <a href="https://github.com/alxshelepenok/gatsby-starter-lumen">gatsby-starter-lumen</a>을 사용한다.</p>\n</li>\n<li>\n<p>gatsby-cli 설치, starter를 이용해 블로그 프로젝트 생성(yarn 대신 npm을 사용해도 무관.)</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">mkdir</span> blog <span class="token operator">&amp;&amp;</span> <span class="token function">cd</span> blog\nyarn global add gatsby-cli\ngatsby new kujyp https://github.com/alxshelepenok/gatsby-starter-lumen\n<span class="token function">cd</span> kujyp</code></pre>\n      </div>\n</li>\n<li>\n<p>github pages 세팅</p>\n<ul>\n<li>username.github.io repo를 생성(<a href="https://github.com/kujyp/kujyp.github.io">https://github.com/kujyp/kujyp.github.io</a>)</li>\n<li>\n<p>development branch에 stareter code를 push했다.(master는 build 결과물을 올려야한다.)</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">git</span> init\n<span class="token function">git</span> checkout -b development\n<span class="token function">git</span> add <span class="token keyword">.</span>\n<span class="token function">git</span> commit -m <span class="token string">"init with starter"</span>\n<span class="token function">git</span> remote add origin https://github.com/kujyp/kujyp.github.io.git\n<span class="token function">git</span> push -u origin development</code></pre>\n      </div>\n</li>\n</ul>\n</li>\n<li>\n<p>github pages 배포</p>\n<ul>\n<li>package.json 에서 deploy 명령어를 변경한다.<br/>\n<code class="language-text">gh-pages -d public -b master</code>\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/deploy-db58e55df8f5481a03a99fc082d77936-da673.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 960px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 27.99597180261833%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAABYlAAAWJQFJUiTwAAABDElEQVQY012Qi27CMAxF+//ftolJMG3aQwL6oqWUPtKmSdqcOYCmbrGOrn0T2UmivGxIiwt106GNQ9uZyS0YIeSjmcVfYVc8PKUtSX6mbhVRqRaU9bTDRFF3VO1I1WlOtaLXDrMgAzzTDFp0CA0CYoz27gckvZ2NvOrxxtBL9ywtSZKS/SEnjgvJC1Kps6yiKq90TU/fyCBRJS8ywwjO3rF3jXS55RBnfB/PvLzHbD/Sm+6+cjZvR55fDzzt9myC9xnOlaSnSq5zkatd8Lr6Q6StwS0L57qVv6xR40SnNK0aRYVB0/QDVyF4gVC72RGWl+BBiCiprfwLLPOMczPey6bgV6zrW5N/+78snh+yMs5d9PZ5+wAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="deploy.png"\n        title=""\n        src="/static/deploy-db58e55df8f5481a03a99fc082d77936-c83f1.png"\n        srcset="/static/deploy-db58e55df8f5481a03a99fc082d77936-569e3.png 240w,\n/static/deploy-db58e55df8f5481a03a99fc082d77936-93400.png 480w,\n/static/deploy-db58e55df8f5481a03a99fc082d77936-c83f1.png 960w,\n/static/deploy-db58e55df8f5481a03a99fc082d77936-23e13.png 1440w,\n/static/deploy-db58e55df8f5481a03a99fc082d77936-10d8f.png 1920w,\n/static/deploy-db58e55df8f5481a03a99fc082d77936-da673.png 1986w"\n        sizes="(max-width: 960px) 100vw, 960px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </li>\n<li>\n<p>deploy를 실행한다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">yarn run deploy</code></pre>\n      </div>\n</li>\n</ul>\n</li>\n<li>\n<p>개발모드(hot reloading 기능이 지원되서 파일을 수정하면 localhost 페이지에 바로 반영된다.)</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">gatsby develop</code></pre>\n      </div>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/develop-e7ccd59536b51d803a73caebf6794c44-8140e.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 960px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 62.37410071942446%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAACnUlEQVQoz22SX2/adhSG/WGWBgYYAzb/jB1snITQwnqzi0pd26ibMuVm37fS1iRNuiaAAWMMNpinB5J2UrUjPTrn54vj8573KOd/XHD+/nfeXVzy9vIv3py/57e357x6/YbXuyxc/HnJzc3fBPOAu89f+OfqE1fXt3y8vuP23xGfrm74+OEDD8MxSqfbo+W41Ewby2lh9xyqnonu1NHbNSqC2z9mOp0QRRFxHPNfbJ/Slk0SS0pRjs56OL/0aNptzFYD78UJ9lmHpmthmDVUXcM59ZjNZkwmPqPRkCAIpN79YPG94bdQuv0B7dNT6qZFuWHR9LpYVoNyqURR1Xj20wH1epPFYsF8sRSJ9wxH4728UN6bFOL1lmWykbxBeT54yZHr7SVXG3Xqtkm5UkbTNErlMrl8AbvtMA9lmjQW6VOu78bcfB5z+8XnfjRjFYWkSUS6XqGcnD3Hdjo0rCOMahVd18kVNH7OF8mrRbKZQyzbJgxD1puNGLNguYpZxWui5S4nbNP0cZ8iXbFP++RNF61uoVVbZM0BhYaHLtO2WjXsRomXg65IjlitloyGDyxlos06eSJmLYYkYtZa3kr3xQCrc4LRtFC1Etl8XiYsoBZyssMC2WwWt+Mxn4d7h6dijO+PWYTzRxbhPodCEotk57hLrdGiVm+gGzXBEKpUniiIbO/4ZL+7mTDxfUK5x0BcD2byTfhWr5ZLadjrY0pT3dCpVncYGMYjlUqFvEzsuh2ZypdmY3w5myRefpf6I0rv1z5HA1cMyIjkZ+LqIZnDDJlMZi/34OCAdrvN/f0Dw3HAyJ/LecA65X9D8c5cOeqynIhKqVKgqKmoIlMtFqXWyOXyOK7LdDZnGsEoSJkEMWGUkCTJfq+puLwVh3d8BS2Sm8oeb/OEAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="develop.png"\n        title=""\n        src="/static/develop-e7ccd59536b51d803a73caebf6794c44-c83f1.png"\n        srcset="/static/develop-e7ccd59536b51d803a73caebf6794c44-569e3.png 240w,\n/static/develop-e7ccd59536b51d803a73caebf6794c44-93400.png 480w,\n/static/develop-e7ccd59536b51d803a73caebf6794c44-c83f1.png 960w,\n/static/develop-e7ccd59536b51d803a73caebf6794c44-23e13.png 1440w,\n/static/develop-e7ccd59536b51d803a73caebf6794c44-10d8f.png 1920w,\n/static/develop-e7ccd59536b51d803a73caebf6794c44-8140e.png 2780w"\n        sizes="(max-width: 960px) 100vw, 960px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n</li>\n</ul>\n<h3>도움을 받았던 링크들</h3>\n<ul>\n<li><a href="https://adhrinae.github.io/posts/creating-new-blog-with-gatsby">Gatsby를 활용한 블로그 재구성 - adhrinae님</a></li>\n<li><a href="https://blog.shik.kr/migrate-to-gatsby/">Jekyll에서 Gatsby로 - shik님</a></li>\n<li><a href="https://heechan.me">heechan님 블로그</a>(UI가 깔끔해서 이분이 사용한 starter를 사용했다.)</li>\n</ul>',fields:{tagSlugs:["/tags/hosting/","/tags/react/","/tags/nodejs/"]},frontmatter:{title:"gatsby starter lumen으로 블로그 생성하기",tags:["hosting","react","nodejs"],date:"2019-01-03T04:00:00.169Z",description:"gatsby starter lumen으로 블로그 생성하기"}}},pathContext:{slug:"/posts/gatsby-starter-lumen으로-블로그-생성하기/"}}}});
//# sourceMappingURL=path---posts-gatsby-starter-lumen으로-블로그-생성하기-bd99afd8e84d157f7f3a.js.map