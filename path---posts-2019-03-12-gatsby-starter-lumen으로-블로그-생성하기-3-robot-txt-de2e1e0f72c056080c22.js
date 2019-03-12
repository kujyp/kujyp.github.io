webpackJsonp([17720754539195],{407:function(t,a){t.exports={data:{site:{siteMetadata:{title:"kujyp 개발블로그",subtitle:"ML DevOps, Python, Docker ...",author:{name:"kujyp",github:"kujyp"},disqusShortname:"kujyp",url:"https://kujyp.github.io"}},markdownRemark:{id:"/home/circleci/app/src/pages/articles/2019-03-12---gatsby-starter-lumen으로-블로그-생성하기---3--Robots-txt/index.md absPath of file >>> MarkdownRemark",html:'<h3>TL;DR</h3>\n<p>gatsby-starter-lumen 으로 만든 블로그에 robots.txt를 추가했다. </p>\n<h3>robots.txt 추가</h3>\n<p>robots.txt 같은경우에는 gatsby plugin으로 잘 되어있어서 해당 플러그인을 설치하는것으로 진행하였다.<br/>\ngatsby-plugin-robots-txt plugin - <a href="https://www.gatsbyjs.org/packages/gatsby-plugin-robots-txt">https://www.gatsbyjs.org/packages/gatsby-plugin-robots-txt</a><br/></p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">yarn add gatsby-plugin-robots-txt\n<span class="token comment"># gatsby-config.js 수정</span>\nyarn run develop</code></pre>\n      </div>\n<p>project top level 에서 gatsby-config.js > plugins 에 <code class="language-text">&#39;gatsby-plugin-robots-txt&#39;</code>를 추가해준다.\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/robotstxt_config_addplugin-5c91d9284ef3df2a562116e3e0327b77-be7b0.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 536px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 29.47761194029851%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAAA3ElEQVQY042Q3U6FMBCEeSJK223ZpS0CBnpy4k+iiTeaGN//IcYFvTOiF1+mabrTmW0CJzxeCupSkccK4gxLDBdEYdhdfYS19l80LAljYuTtBf31A6G+gradt+Ps1nfIdIcYPEIIICWc0MiQNQGBlCktGIcb9EyIogbsDo3s0acIKRHeWXRd9ysNqyERwTmHh/UZ9/UJ87pgul2wXa4o8whOAXkWxOhh98HTyt+GVn8uacKgO5TSQ7LovSbyXhtYVXcM7ClOdygpI8SIQUQfG7SmhWnNF8b8qPSX6SdrqMPFsGt3tgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="robotstxt_config_addplugin.png"\n        title=""\n        src="/static/robotstxt_config_addplugin-5c91d9284ef3df2a562116e3e0327b77-be7b0.png"\n        srcset="/static/robotstxt_config_addplugin-5c91d9284ef3df2a562116e3e0327b77-18e67.png 240w,\n/static/robotstxt_config_addplugin-5c91d9284ef3df2a562116e3e0327b77-d0b62.png 480w,\n/static/robotstxt_config_addplugin-5c91d9284ef3df2a562116e3e0327b77-be7b0.png 536w"\n        sizes="(max-width: 536px) 100vw, 536px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    <br/><br/></p>\n<p>음… 역시나 삽질없이 적용되지는 않았다.<br/>\n개발모드로 접속해보니 <a href="http://localhost:8000/robots.txt">http://localhost:8000/robots.txt</a> 주소에서 아무것도 돌려주지않는다.<br/>\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/robotstxt_doesnt_exist-09a75d461ef8d16baafd85a7f308d0b2-3fb95.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 833px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 67.46698679471788%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAABMklEQVQ4y52S3VKDMBCFeX2vfRivfAidcbxRppVipeUngZCkgeS4SQtDlaJtZnZYDuFkd/NFB61R1w2y3R7rJME22+GL8rys0EqFVh1DKg1B77yusc8r8LaH6Qx0WSJ9fQbnOVSWIVJSgDEOIQR+Lmvtr3DOHT+6k0Zp73UffY9oauA3W+vC89aI5sSr1+SfaDCYGk21qyucGmQ0VMbYOL9L1S91cWZYlgWklAuduT8POTPUhFBBGFQVC1EUJfKiCBRwXi8eNFsh4xybTYr0c4vV+gNxvMLbexzyhHTPoGd2wKxpBLquW66wqghaMlYEs9aHoCmC2ud+HNKD3kqooCv0xJ67ZOgvwhgTNt2yxlueu7klNOxpb60s7h4a3D9S63amwv8iMmimd3hKDF5SMx7yDSl4/a7DUkhpAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="robotstxt_doesnt_exist.png"\n        title=""\n        src="/static/robotstxt_doesnt_exist-09a75d461ef8d16baafd85a7f308d0b2-3fb95.png"\n        srcset="/static/robotstxt_doesnt_exist-09a75d461ef8d16baafd85a7f308d0b2-617de.png 240w,\n/static/robotstxt_doesnt_exist-09a75d461ef8d16baafd85a7f308d0b2-3326c.png 480w,\n/static/robotstxt_doesnt_exist-09a75d461ef8d16baafd85a7f308d0b2-3fb95.png 833w"\n        sizes="(max-width: 833px) 100vw, 833px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    <br/><br/></p>\n<p>이것저것 바꿔보아도 생기지않아서 당황했는데, <br/>\n결론부터 이야기하면 <code class="language-text">yarn run build</code> 를 수행하고 <code class="language-text">yarn run develop</code>을 수행하면 잘 된다…<br/><br/></p>\n<p><a href="https://www.gatsbyjs.org/packages/gatsby-plugin-robots-txt/#options">plugin 문서</a>를 읽어보니 기본값으로 <code class="language-text">siteMetadata.siteUrl</code> 을 참조했는데, <br/>\n<a href="https://github.com/alxshelepenok/gatsby-starter-lumen">gatsby-lumen-starter</a> 에는 해당 값이 미리 만들어져있지 않다. 새로 추가해줬다.<br/>\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/robotstxt_docs-8d99c62a3e8ae23d4959160ff51d9d74-2c8eb.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 775px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 76.77419354838709%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAAB60lEQVQ4y51T2a7jIAzN//9e30aaVLfZmp0sEAJJzthOaadzq3m4SBa2MYfjhWiaJlwuFyRJgp+u4zieeuScQ1mWKKsKep5hhgkLiVYjDImmB5VSGMcBwzBgJnvsauihw0y+ZVneQKN1XVHXNbIsQ0osiyTD0HZwZoFfLJy10FpjMQaGZCXbzASkJ/Ft2/bGNPLeg9Pe910OJ2LpNy8Bmi5YAvjf4nO+z8SEITsqSjdQbtv2PCSb/Zzuv/Xix1k4hst1vV7Rdd0JuHmHWTVPQDP2lHL51Jt7iir/Ql/lpCcwk3qrGT/IDEMm0cGpEigHsLAebE+7d+vD52XfpRyHsOMYRY1yzr9qeOwb6iLBqFpxTrQPbXXqfYM6v8l5X+foqgyquZN9Q0O+zVm09R3Z12+6x1nuBEiobrXUEH+yIkae7MCc/dysIKF5LBxv9Czj4+xyMuRLbZlhXfSDYSNMNgK2ZhLgkM5xvGoX9q6s0ZPwjPJjUajdzwQyi5Yk+KKdGHL3GqqLp5oww74u5HWu5T2JaYjHb18s6DGNTJqmMm4809HfAVzUT//zdf5dwkC/GFKXucPcGJm9mf/vIDp/r7FvZf8ExqsoCsRxLIP9BOTx8A/ARQDVA3CUM8spf2DMqylz3OJf0OP5U/4A1XaSH5aq+jwAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="robotstxt_docs.png"\n        title=""\n        src="/static/robotstxt_docs-8d99c62a3e8ae23d4959160ff51d9d74-2c8eb.png"\n        srcset="/static/robotstxt_docs-8d99c62a3e8ae23d4959160ff51d9d74-e2b10.png 240w,\n/static/robotstxt_docs-8d99c62a3e8ae23d4959160ff51d9d74-c732f.png 480w,\n/static/robotstxt_docs-8d99c62a3e8ae23d4959160ff51d9d74-2c8eb.png 775w"\n        sizes="(max-width: 775px) 100vw, 775px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    \n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/robotstxt_gatsby_config-c0d28563b57cedc965a896b5441d0c63-2591f.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 904px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 62.057522123893804%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABQUlEQVQoz5WTzW6DMBCEeSTw/78Bp4S0hx566fu/yHRtmioCIqWHEWCtPs/uLN31tiLMBevtEx/LJ2KOUFZCOwWlBYZhwMAYGGn4Fdt9P6orc4ZQBk46LOWKec0o7wk+G4JKcE6FfY9+p3pRf3LejeROWwdvA8q4wPsA4/UGqu7+qS7PbzDOE4Aj2AghORjf316Lt+fd3d3hEVgqMLSZRJtgvaEZitbmX2GFnkBOgVPZHBqaY3QJkoJgbDid10tAO1aggxIal3yFn2wLoyZdVWf5DPIEeIELAY6CMdZQ4rzp0eU+0UfgIeXpQg69hzUWY5rofVuXuoMNzM+dPE15LAsCOfTUXkkrpjIjzxNssPDJQinZNmAvIcTpOQG3lKWkv0OaFgqXDFywQxgvtVyBdbG11Pi6fSPG1FqVShwCeSWUH3KDgvU7Jt+hAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="robots_txt_gatsby_config.png"\n        title=""\n        src="/static/robotstxt_gatsby_config-c0d28563b57cedc965a896b5441d0c63-2591f.png"\n        srcset="/static/robotstxt_gatsby_config-c0d28563b57cedc965a896b5441d0c63-2821a.png 240w,\n/static/robotstxt_gatsby_config-c0d28563b57cedc965a896b5441d0c63-442e1.png 480w,\n/static/robotstxt_gatsby_config-c0d28563b57cedc965a896b5441d0c63-2591f.png 904w"\n        sizes="(max-width: 904px) 100vw, 904px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>수정사항을 github에 push를 하니, 이전글에서 세팅해놓은 자동배포 과정이 재대로 도는것을 확인할수 있었다.<br/>\n이전글 - <a href="/posts/2019-02-24---gatsby-%EC%A0%95%EC%A0%81%EB%B8%94%EB%A1%9C%EA%B7%B8-%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0---%EC%9E%90%EB%8F%99deploy,-CircleCI%EC%97%B0%EB%8F%99/">gatsby 정적블로그 생성하기 - 자동deploy, CircleCI연동</a><br/>\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/ci_result-dc15e109f9d52b272c263ec1bcae230f-e8cb9.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 641px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 51.326053042121686%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABNklEQVQoz41Si27CMBDj/39vokLaJkbXDlJooXm05OndBbXqQGJYOllNLq7PycoYg329h+wlTm0LpTUYKaWZvfewVwtnHWKMiLQ2cbqrlR401rsN6ssBzfEE0RzhQ8ibfIjRdh3eNgU+vrYItLfE9OMJq5giBjei1xLO+eyGD7EYc4oJ5jqgPFfY9yL3OOegaRLmSXR2yLZ7KVHT2MM45oY8Trw55CalDCqhUNYNimKN8rvCkabRFNeDoGVXgfMAnA/g72V5WnPk+qCA6hKhRv985HsRlwXCLM5O27bD++eWHFLOpw67skTXnR/cZYdLgftiwUDuOa/qR6ChCxNNg4MQkEo9iL0kyMyQFlCDhaK8n+FfQc7wai2M0fkSzDDmt9pLRWz+vNeXHfLYLMxP6lZh5qUg4xfEag29j+tJMQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="ci_result.png"\n        title=""\n        src="/static/ci_result-dc15e109f9d52b272c263ec1bcae230f-e8cb9.png"\n        srcset="/static/ci_result-dc15e109f9d52b272c263ec1bcae230f-a88d7.png 240w,\n/static/ci_result-dc15e109f9d52b272c263ec1bcae230f-9dea0.png 480w,\n/static/ci_result-dc15e109f9d52b272c263ec1bcae230f-e8cb9.png 641w"\n        sizes="(max-width: 641px) 100vw, 641px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    <br/><br/></p>\n<p>정식사이트(<a href="https://kujyp.github.io/robots.txt">https://kujyp.github.io/robots.txt</a>)에도 잘 반영되었다.<br/>\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/robotstxt_result-c88e06a6553837cdd4566c6e7f0349ff-021cc.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 484px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 40.082644628099175%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABDUlEQVQoz5VP2W6DMBDk/3+OR9IGCpiII9jgi1PA1LZCBSl96MqjkfeYnfWEVOj6AcM4QggJqTTII0dCHvhKCO5RjNtniI97hChOEaeZqxdVDW5mW3GG1wmOQSvorkPbtlBa41lTsKZFY/7PukZRVqgpA2WNGRLgZrHSHaZ5xjjNmA7wpGigOAXnAkVRoKoqh9k0/4ptM++FdcV6AS9JUuRGKM9zaOPuP2EFtuMSAy8IAvi+D0IIGGPm1AZSSjSGhTlv5z1HKXXc9/3L9HZa4sVx7MSswzRNkWUZbC6KIoRh6LgsSydgL7DiFtM0/QieHNqm3fqyLK7J8t5ga3/Fuzvn0G6+KlwNv+OY3+MbJxtqkHcolf0AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="robotstxt_result.png"\n        title=""\n        src="/static/robotstxt_result-c88e06a6553837cdd4566c6e7f0349ff-021cc.png"\n        srcset="/static/robotstxt_result-c88e06a6553837cdd4566c6e7f0349ff-e4e88.png 240w,\n/static/robotstxt_result-c88e06a6553837cdd4566c6e7f0349ff-1a69b.png 480w,\n/static/robotstxt_result-c88e06a6553837cdd4566c6e7f0349ff-021cc.png 484w"\n        sizes="(max-width: 484px) 100vw, 484px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    <br/><br/></p>\n<p>끝.<br/></p>\n<h3>참고</h3>\n<p>위에서 진행한 내용은 github 에서 commit내용으로 확인 가능하다.<br/>\n<a href="https://github.com/kujyp/kujyp.github.io/commit/abe64c99dbf10de22c303c5f0d9984d7cae8245d">https://github.com/kujyp/kujyp.github.io/commit/abe64c99dbf10de22c303c5f0d9984d7cae8245d</a></p>',fields:{slug:"/posts/2019-03-12---gatsby-starter-lumen으로-블로그-생성하기---3--Robot-txt/",tagSlugs:["/tags/gatsby/"]},frontmatter:{title:"gatsby starter lumen으로 블로그 생성하기 - 3. Robot.txt",tags:["gatsby"],date:"2019-03-13T00:40:00+09:00",description:"gatsby-starter-lumen 으로 만든 블로그에 robots.txt를 추가했다."}}},pathContext:{slug:"/posts/2019-03-12---gatsby-starter-lumen으로-블로그-생성하기---3--Robot-txt/"}}}});
//# sourceMappingURL=path---posts-2019-03-12-gatsby-starter-lumen으로-블로그-생성하기-3-robot-txt-de2e1e0f72c056080c22.js.map