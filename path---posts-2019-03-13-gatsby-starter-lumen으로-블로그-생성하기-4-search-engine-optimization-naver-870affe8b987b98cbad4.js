webpackJsonp([0xd00d3d64b12e],{412:function(a,e){a.exports={data:{site:{siteMetadata:{title:"kujyp 개발블로그",subtitle:"ML DevOps, Python, Docker ...",author:{name:"kujyp",github:"kujyp"},disqusShortname:"kujyp",url:"https://kujyp.github.io"}},markdownRemark:{id:"/home/circleci/app/src/pages/articles/2019-03-13---gatsby-starter-lumen으로-블로그-생성하기---4--Search-Engine-Optimization---Naver/index.md absPath of file >>> MarkdownRemark",html:'<h3>TL;DR</h3>\n<p>네이버 검색엔진 Console에서 robots.txt추가, Open Graph meta tag 추가 등의 검색노출을 위한 작업을 진행했다.</p>\n<h3>Naver webmaster tool</h3>\n<p><a href="https://webmastertool.naver.com/guide/site_check.naver">https://webmastertool.naver.com/guide/site_check.naver</a></p>\n<p>먼저 네이버 웹 마스터 툴을 이용해서 사이트 간단체크를 진행하였다.<br/>\nrobots.txt, Open Graph tag가 미비한것으로 확인되었고, 추가를 진행했다.\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/naver_console-ee720136a5a92962b1df2827f5edc40b-93d29.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 911px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 92.86498353457739%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsSAAALEgHS3X78AAACWklEQVQ4y4VUSZLUMBD0X/kKH+HGBzjxA7hPBAcCpqejN++bVttJZbXVtIdpxhEVJVmqrMxSSZm1FofDAcfjUW2/3+O9b1mWh2tZjBHWORgBNsZcvdg4jmrDMKhxzOTzPP8XNHOyqbpcUOU5SvG1+Los0TQN6rpGVVUoigIXrjcV4jzdAN8CzeZJNkh2SQ8IU/XebyViGzi/J7kTSb2AJh8kCaXREqNv7S98+PEJn8/fb6APGM4I1sEZCzdaePGyO1HDtNbsaTjg4/MXfK2eNoCvLRuCxbMpcHQNfpscJ/EvpsTP/ozGj2vw/KbkeyCs/zITHE62wcW1OIovXKeAL2NxY7eSRYSUYa3n8qCdsknqRaljP8IMBnOcEJcJi5SCp8wT5on3fY+2bdV3XQfWnsZWc3KYrLcC8mfTtBJYqvkQYOYAFzwubCMB5R5uZvJknBOI4EySDiiLsth1vWSyslFOVRhiCjKOEuA1SJva2X8kco1NT5YE5jwjABlSjvcBQdj46BTw/rbQB2HPIN4YLZWMyS7t8dK/G8lkxPk4eV3M5XbYu2vIMQMJoldW5hwnY0KV3LadWmI4Tk4Z6N0We/QxKYGSbB6MSq6qWo2AcQWMIvleKv+//gjCu143tZaMJBTwL8MowdIK01V6kseCM5iMaKlNOE5JNwwJlueFtEijWfhYRNms2aVtaKW8QGwj/kvBrCGTkV3qUQVkywwDC2+0bZZwbRu7vpHj2rwc8+1MDJmc5aCRLVVlXGD9Tqez+ol9KDLc+pIn40u+2+1k30klMo5yyTwZWf4BqITG3ff/aqgAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="naver_console.png"\n        title=""\n        src="/static/naver_console-ee720136a5a92962b1df2827f5edc40b-93d29.png"\n        srcset="/static/naver_console-ee720136a5a92962b1df2827f5edc40b-146e1.png 240w,\n/static/naver_console-ee720136a5a92962b1df2827f5edc40b-dd671.png 480w,\n/static/naver_console-ee720136a5a92962b1df2827f5edc40b-93d29.png 911w"\n        sizes="(max-width: 911px) 100vw, 911px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    <br/><br/></p>\n<h3>robots.txt 추가</h3>\n<p><a href="/posts/2019-03-12---gatsby-starter-lumen%EC%9C%BC%EB%A1%9C-%EB%B8%94%EB%A1%9C%EA%B7%B8-%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0---3-Robot.txt/">gatsby starter lumen으로 블로그 생성하기 - 3. Robot.txt</a><br/><br/></p>\n<h3>Open Graph tag</h3>\n<p><code class="language-text">src/pages/index.jsx</code> 에서 <Helmet> 태그 내부에 Open Graph 요소를 <meta> tag로 넣었다.\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/opengraph-f33f703889492270f8aa94958dd5b195-1658f.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 960px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 30.51224944320713%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAABYlAAAWJQFJUiTwAAABPElEQVQY013Ry07CQBiG4d6EGDdqJAKdU6GHKdIKAoLGA0qMiacIiQvjRSgbwlYX3u/rVJsYXTz5Zr7FJPP/XmzbGGPop4o4NAip0UojpcT3C4KG4wv1w3XCpSjPRSfkLy9O2yiliJo+01GTPLd0Oook8okjTRI3SZ1WsEtgdmkGtb9cZ0QV1XD8qnvQpojAIsOc8eUD+fQFfXyDGt0Sn86dGe2zZ/zDObXhjFqZ9SIL/UeqnXs27R1bjmeTiK3OExujFfndivDmk+rFku3JEnX9gXF3efXOztGC9d4ra90i36h0CwsqPefAdSXPui83goxwb8jkbEx3PCUdnJBmfWx2QrJ/TpKNsWFC1GphtHQzVujv/KVKXrEUrRUtXWPUzxgOB8SJIQyFm5mPEnWkaKDcwJUsFiK+yTL/+wJVcMXpmaWfAQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="opengraph.png"\n        title=""\n        src="/static/opengraph-f33f703889492270f8aa94958dd5b195-c83f1.png"\n        srcset="/static/opengraph-f33f703889492270f8aa94958dd5b195-569e3.png 240w,\n/static/opengraph-f33f703889492270f8aa94958dd5b195-93400.png 480w,\n/static/opengraph-f33f703889492270f8aa94958dd5b195-c83f1.png 960w,\n/static/opengraph-f33f703889492270f8aa94958dd5b195-23e13.png 1440w,\n/static/opengraph-f33f703889492270f8aa94958dd5b195-1658f.png 1796w"\n        sizes="(max-width: 960px) 100vw, 960px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    <br/><br/></p>\n<p>다시 위의 Naver webmaster console 에서 확인하니 Open graph 태그가 재대로 반영된것을 확인가능했다.<br/>\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/naver_tagerror_but_opengraph_changed-b9199975a8ed91ac13c1e364111a4261-d1f51.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 960px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 75.66844919786095%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAABy0lEQVQ4y41UW26kMBDMhfc8e4S9Ru6xH/sVRYEBzMP4iWurzBAxJJEGqeXGdJeruhu/+BARY8Q0z9UWa7Ft27emp5RS7eq7EDAtFi+eYG5d0bct+tsNpusw9D16Gf2W+92tQ+TBTwHKKSmikFlxrq4bD9kYeDCLOSGW/CRDOillzPOChWbtykhUS3eZv99e8evvH+TyKPtbwEApNnl064SeZtwCEyzm5D6D5+zRJ4v97QnAKa14cwPevcG7M/i3NGjXUZl7M7ZSGcs/AHAC/yI5U3LX9WzGgMD6+S1R/oymabAsKoOt3V/ZvJxzXWd+l3+HhfMPNUy1huvqOEKJhDIcG3QAnFnJD8zRd43bMU4nwH0OxVDyk4JyqEliNo5jTRawDtYq1mKob4q7AO4Mh8HUDkf6VfJd6sFUpj3FnvcO2Y+AlNmxfp6bQYA5Ivid4fWRZO1P01QP+FFy07RVsv4cyzERoBLEQqzOY6L9YRgq6GeXr4Bte8NoRgKGOpfBecxMOJpymBgJUPUzxlT5XyRHjk2rsSFgIIArlM2DFrLTfKXTxSDAoyFiKQUPgI7sior78YGNF0HhBVF4KWjVezUCXFmK+fkWOgb7P4Xykz+9RZmGAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="naver_tagerror_but_opengraph_changed.png"\n        title=""\n        src="/static/naver_tagerror_but_opengraph_changed-b9199975a8ed91ac13c1e364111a4261-c83f1.png"\n        srcset="/static/naver_tagerror_but_opengraph_changed-b9199975a8ed91ac13c1e364111a4261-569e3.png 240w,\n/static/naver_tagerror_but_opengraph_changed-b9199975a8ed91ac13c1e364111a4261-93400.png 480w,\n/static/naver_tagerror_but_opengraph_changed-b9199975a8ed91ac13c1e364111a4261-c83f1.png 960w,\n/static/naver_tagerror_but_opengraph_changed-b9199975a8ed91ac13c1e364111a4261-d1f51.png 1122w"\n        sizes="(max-width: 960px) 100vw, 960px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    <br/><br/></p>\n<h3>Naver webmaster 사이트추가</h3>\n<p><a href="https://webmastertool.naver.com/board/main.naver">https://webmastertool.naver.com/board/main.naver</a></p>\n<p>위 링크에서 사이트 추가를 진행하였다.<br/>\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/naver_siteadd-a4c5a4948e1e78127ca9dd5b41f0114e-f54d4.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 960px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 44.04404404404404%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAABG0lEQVQoz6WSDUrEMBCFe1IP4YE8gPcRWVgR3HVbaN00zf/vcya1K4K4Cw58JM1MJy8v6XbTEU/jG14+eihtIbXBcgO9mHB4P+HYDxjkGYe+xzid0UlnMDsN5S1CjDdjvYMxFs56+BBgrMWiNDr8M0JNiDW3ufMBnTEGSinElBBop1IqUf4kExxztLh7fsD9/hGlFjjn0ZWSkXO+FNdar8J1vLkNHjt5wqsZQRlYbrgWXFf1Q2FeG0byEonUrideG8aYKZGayphyK+YNeGQSrYUQwXWJfrZ0Cca4djzvY/vmHAu7KPTeY1mWBnuq6Vlsymloa0IISCmb30LMmAmpFwzmjJjTt0KebL5sHpYv07f4Ld+gi8gE+7c1/ARacb85A64dCwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="naver_siteadd.png"\n        title=""\n        src="/static/naver_siteadd-a4c5a4948e1e78127ca9dd5b41f0114e-c83f1.png"\n        srcset="/static/naver_siteadd-a4c5a4948e1e78127ca9dd5b41f0114e-569e3.png 240w,\n/static/naver_siteadd-a4c5a4948e1e78127ca9dd5b41f0114e-93400.png 480w,\n/static/naver_siteadd-a4c5a4948e1e78127ca9dd5b41f0114e-c83f1.png 960w,\n/static/naver_siteadd-a4c5a4948e1e78127ca9dd5b41f0114e-23e13.png 1440w,\n/static/naver_siteadd-a4c5a4948e1e78127ca9dd5b41f0114e-10d8f.png 1920w,\n/static/naver_siteadd-a4c5a4948e1e78127ca9dd5b41f0114e-f54d4.png 1998w"\n        sizes="(max-width: 960px) 100vw, 960px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    <br/><br/></p>\n<p><code class="language-text">소유확인하기</code>를 눌러 인증을 진행했다. HTML 태그를 이용해 넣고, 위의 Open Graph 처럼 태그를 추가했다.<br/>\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/naver_verify-f967d9ff95b4e28d7ae38d100030ed68-65670.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 960px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 67.95634920634922%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAABYlAAAWJQFJUiTwAAABy0lEQVQ4y4VT3YrTQBjtY3rlEwjqhc+w+CAqLAha9kYfQZBakEVYL3TbQrdJmmT+ZzKZ4/dN22y726wDJ2d+kjPn+8kkpYS/iwUWqxX+3N5mjn2PrusyAnOMSNiNAyMNs5Mx4QPfNLBVBb3ZwJYlFK1l20ISC4IWAomEwcLMdOGY6CQ/tQaUAowBpASsBZzbwfvdmpAY9G6ivZT10gkGQeMstuSkJlf9Pqz/4ow73pv0tK+NJ3MakcMZyQ0euDmH7DCSpXXRoioLeOcRfICj0ByFy2y0gTWW0seF2X+YMC7IDyFa3BUbLKs1luU6852oUOoGhaxRqBq1k6iDQhM0tl5mjinuK5/uQ+ZJCB2MNRS6gdIqc9fHRznrB/SZRx1KqmxVVuRUZBwOR3OVzud0EOypr47x1EhPXTS0jXUQUlG4u7C3NeWOGrzmBqf9llw3rcjvWCoc/zmhO0XcG8mCq+US89kM19e/MJ//xM3Nb5SUgpZE+DJNVeaLmFmQBTzl/RgxHgl++fgJF8+e4+2rN3jx8jWmV1MoapkNtVJHH+dCUMPeO+pO3D0SnM3mmL7/gK+fp3h3eYlvP75Ta2i0VPkQItwDNweRc4L/AIK7P4mNHKdJAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="naver_verify.png"\n        title=""\n        src="/static/naver_verify-f967d9ff95b4e28d7ae38d100030ed68-c83f1.png"\n        srcset="/static/naver_verify-f967d9ff95b4e28d7ae38d100030ed68-569e3.png 240w,\n/static/naver_verify-f967d9ff95b4e28d7ae38d100030ed68-93400.png 480w,\n/static/naver_verify-f967d9ff95b4e28d7ae38d100030ed68-c83f1.png 960w,\n/static/naver_verify-f967d9ff95b4e28d7ae38d100030ed68-23e13.png 1440w,\n/static/naver_verify-f967d9ff95b4e28d7ae38d100030ed68-10d8f.png 1920w,\n/static/naver_verify-f967d9ff95b4e28d7ae38d100030ed68-65670.png 2016w"\n        sizes="(max-width: 960px) 100vw, 960px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    <br/><br/></p>\n<p>이유는 모르겠으나 메타태그를 찾을수 없다고 진행이 되지않았다..<br/>\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/naver_tagerror-0b09385a70c5d2bcb595f40b715e876e-0fa07.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 960px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABNElEQVQoz4WSy26DMBBF8/8f13XVRTeRIoIJYPx+cTMzIJRUSWrpyMjIx3M9PqWcUWtFa+1gmmZ01yvUMKBXCsYYhBCx1oRaEnIuKLSnFJpLBTsYXj+FmETonIP3Xma9LOj7HuM4QakBw3CDWTS+zw5nFQA0rOt64OkwbRwW63CKic0J165Dd7kIxlpYEhtrZM5UCdaGr9+En0skIYtwDBayzDi/VUg5Aa2BeQaVhUIV5p1CcStJGWS3V8fOrbrXQjoxxShxOb7seKLJoa0Sm23/9UZY6krx6A5pAQ9R3o5d9lIYE3WNhD1f/nSDdgY3PWGyGqPRGOjbpoBQMzx1mSmtbt5PkTkui5QeBZuDbHYlHlghIP8vBL0zqsIHucunFr5L/bEp9EOERExRHvfjO/vEX+EdvowNr0rF+/YAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="naver_tagerror.png"\n        title=""\n        src="/static/naver_tagerror-0b09385a70c5d2bcb595f40b715e876e-c83f1.png"\n        srcset="/static/naver_tagerror-0b09385a70c5d2bcb595f40b715e876e-569e3.png 240w,\n/static/naver_tagerror-0b09385a70c5d2bcb595f40b715e876e-93400.png 480w,\n/static/naver_tagerror-0b09385a70c5d2bcb595f40b715e876e-c83f1.png 960w,\n/static/naver_tagerror-0b09385a70c5d2bcb595f40b715e876e-0fa07.png 1196w"\n        sizes="(max-width: 960px) 100vw, 960px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    <br/><br/></p>\n<p>site로 가서 태그가 재대로 적용이 되었는지 한번 더 확인을 해 보았다.<br/>\n아래 내용으로 meta 태그가 붙어있는것을 확인가능했다.<br/>\n설마 <code class="language-text">data-react-helmet=&quot;true&quot;</code> 때문인가.<br/>\n아니겠지 설마 그정도로 단순하게 parsing code를 넣어놓진 않았겠지…</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">data-react-helmet</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>naver-site-verification<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>cd14eb7aa77c570360a07270cab55fbabb276d18<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/naver_verify_metatag-cfb9a94ed03e58916344f84651ad8e45-ee9a8.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 960px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 43.63438520130576%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB4ElEQVQoz3WRS2/TQBSF8y/ZwYYVC9jzh5AQFQipSBXsiISaQlrapDRP23FcO45fY4/Hr8QfY4uq3XClT6OZuTpzzp1B27Z0HA4HGk17PED7jyfl+z5RFBNECfswJo4TRKIRQpOQpilhEDDoxLoKwxBrsyFLQvLQQSV7yrIkyzKUUiwWc1xPcLMI+H4dsTZ2WKbHn7VgHyvitMJ2vUdB0zQZj8c9k8mU5WrFaDRiOp3iui6WZRKFORsrwnEE/n2onUqMXU2U1TrlEZFmj4JS5iQ6wn6/7111MWzbxvM8iqLAMNckUY7vxDqqQolM90tsv8ILKwpVEkchg+Px2AsGOr9hGP0sOsEOKWW/5nnOYrlEJik7R/c5uXanCLRDz1e4fkGaNXqu0YPDFlW11E3L/8o0jT7y2gi5NQR3mpmZsrmXWNuMVEjqumHQNXeild4URUnT1PpA0xT9Qw+1Wi2JdoL1zGFjbAi2W4SfImOdSJQoWdHU9eMMLcvqP8TUsWeTMf52zc6917OztHjJt4nH85OIt19jXp9K3pzmvDhJefkp5ZXePzvJ+eU8EbT1i8PhkNHFBdc3E8aXV5yfnzOfz/t7Tx54f6n48CPg80+bs7HBlzvF2W3Mx985764K3OzAX995oLwvawFMAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="naver_verify_metatag.png"\n        title=""\n        src="/static/naver_verify_metatag-cfb9a94ed03e58916344f84651ad8e45-c83f1.png"\n        srcset="/static/naver_verify_metatag-cfb9a94ed03e58916344f84651ad8e45-569e3.png 240w,\n/static/naver_verify_metatag-cfb9a94ed03e58916344f84651ad8e45-93400.png 480w,\n/static/naver_verify_metatag-cfb9a94ed03e58916344f84651ad8e45-c83f1.png 960w,\n/static/naver_verify_metatag-cfb9a94ed03e58916344f84651ad8e45-23e13.png 1440w,\n/static/naver_verify_metatag-cfb9a94ed03e58916344f84651ad8e45-ee9a8.png 1838w"\n        sizes="(max-width: 960px) 100vw, 960px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    <br/><br/></p>\n<p>일단 이 내용은 스킵하고 Google 쪽을 먼저 진행했다.<br/>\n다음글에서 계속…<br/></p>\n<h3>도움을 받았던 링크</h3>\n<ul>\n<li><a href="https://intiwatana.github.io/FrontEnd/SEO/%EA%B5%AC%EA%B8%80-%EB%84%A4%EC%9D%B4%EB%B2%84-%EA%B2%80%EC%83%89%EB%85%B8%EC%B6%9C-%EC%A6%89%EC%8B%9C%EB%B0%98%EC%98%81/">구글 네이버 검색노출(SEO) 즉시반영하기 - intiwatana</a></li>\n</ul>',fields:{slug:"/posts/2019-03-13---gatsby-starter-lumen으로-블로그-생성하기---4--Search-Engine-Optimization---Naver/",tagSlugs:["/tags/gatsby/"]},frontmatter:{title:"gatsby starter lumen으로 블로그 생성하기 - 4. Search Engine Optimization - Naver",tags:["gatsby"],date:"2019-03-13T01:51:00+0900",description:"네이버 검색엔진 Console에서 robots.txt추가, Open Graph meta tag 추가 등의 검색노출을 위한 작업을 진행했다."}}},pathContext:{slug:"/posts/2019-03-13---gatsby-starter-lumen으로-블로그-생성하기---4--Search-Engine-Optimization---Naver/"}}}});
//# sourceMappingURL=path---posts-2019-03-13-gatsby-starter-lumen으로-블로그-생성하기-4-search-engine-optimization-naver-870affe8b987b98cbad4.js.map