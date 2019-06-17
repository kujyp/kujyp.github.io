webpackJsonp([0xfa12c70654d7],{409:function(n,s){n.exports={data:{site:{siteMetadata:{title:"kujyp 개발블로그",subtitle:"ML DevOps, Python, Docker ...",author:{name:"kujyp",github:"kujyp"},disqusShortname:"kujyp",url:"https://kujyp.github.io"}},markdownRemark:{id:"/home/circleci/app/src/pages/posts/2019-02-23---Jenkins-Extended-E-mail-Notification-plugin에서-비어있는-환경변수-처리.md absPath of file >>> MarkdownRemark",html:'<h3>TL;DR</h3>\n<p>Jenkins Extended E-mail Notification plugin을 사용하여 email 알림을 보낼때 비어있는 환경변수를 처리한다. </p>\n<h4>Email-ext plugin</h4>\n<p><a href="https://wiki.jenkins.io/display/JENKINS/Email-ext+plugin">Email-ext plugin</a> 은 Jenkins에서 작업 완료 알림을 이메일로 받아 볼 수 있도록 해준다.</p>\n<p>나는 사내 Repository에서 Jenkins pipeline 중 post block을 아래의 내용으로 채우고있다.<br/>\ntag나 Pull Request로 유발된 작업이거나, master branch 인 경우, 작업이 끝났을때 알림 이메일을 보낸다는 내용이다.<br/> </p>\n<div class="gatsby-highlight">\n      <pre class="language-groovy"><code class="language-groovy">post <span class="token punctuation">{</span>\n    always <span class="token punctuation">{</span>\n        <span class="token comment">// recipientProviders document: https://jenkins.io/doc/pipeline/steps/email-ext/</span>\n        script <span class="token punctuation">{</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>env<span class="token operator">.</span>BRANCH_NAME <span class="token operator">==</span> <span class="token string">"master"</span>\n                    <span class="token operator">||</span> env<span class="token operator">.</span>BRANCH_NAME<span class="token operator">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">"PR"</span><span class="token punctuation">)</span>\n                    <span class="token operator">||</span> env<span class="token operator">.</span>TAG_NAME<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">def</span> committerEmail <span class="token operator">=</span> sh <span class="token punctuation">(</span>\n                    script<span class="token punctuation">:</span> <span class="token string">\'git --no-pager show -s --format=\\\'%ae\\\'\'</span><span class="token punctuation">,</span>\n                    returnStdout<span class="token punctuation">:</span> <span class="token boolean">true</span>\n                <span class="token punctuation">)</span><span class="token operator">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n                <span class="token function">emailext</span><span class="token punctuation">(</span>\n                  subject<span class="token punctuation">:</span> <span class="token string">\'$DEFAULT_SUBJECT\'</span><span class="token punctuation">,</span>\n                  body<span class="token punctuation">:</span> \'<span class="token punctuation">$</span>DEFAULT_CONTENT\\n\\\n\\n\\\nThis email triggered by <span class="token punctuation">(</span>PR<span class="token punctuation">,</span> tag<span class="token punctuation">,</span> master branch<span class="token punctuation">)</span> only<span class="token operator">.</span>\\n\\\n\'<span class="token punctuation">,</span>\n                  to<span class="token punctuation">:</span> committerEmail<span class="token punctuation">,</span>\n                  recipientProviders<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n                    <span class="token punctuation">[</span><span class="token punctuation">$</span><span class="token keyword">class</span><span class="token punctuation">:</span> <span class="token string">\'DevelopersRecipientProvider\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n                    <span class="token punctuation">[</span><span class="token punctuation">$</span><span class="token keyword">class</span><span class="token punctuation">:</span> <span class="token string">\'RequesterRecipientProvider\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n                    <span class="token punctuation">[</span><span class="token punctuation">$</span><span class="token keyword">class</span><span class="token punctuation">:</span> <span class="token string">\'CulpritsRecipientProvider\'</span><span class="token punctuation">]</span>\n                  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n                <span class="token punctuation">)</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token function">deleteDir</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        echo <span class="token string">\'done\'</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">...</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Email-ext plugin을 사용하면, <code class="language-text">Default Subject</code>(제목)이 <code class="language-text">$PROJECT_NAME - Build # $BUILD_NUMBER - $BUILD_STATUS!</code> 로 세팅되어있다.<br/>\n<code class="language-text">Manage Jenkins &gt; Configure System &gt; Extended E-mail Notification &gt; Defalt Subject, Default Content</code> 에서 변경이 가능한데,<br/>\nPull Request를 하는경우 어떤 PR에서 날라온 결과인지 구분하기위해 제목에 PR이름을 추가했다.<br/>\nJenkins에서는 이를 <code class="language-text">$CHANGE_TITLE</code> 로 제공한다.<br/></p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token variable">$PROJECT_NAME</span> <span class="token variable">$CHANGE_TITLE</span> - Build <span class="token comment"># $BUILD_NUMBER - $BUILD_STATUS!</span></code></pre>\n      </div>\n<p><img src="https://user-images.githubusercontent.com/19223089/57585996-f2da1c00-7529-11e9-9262-6155f73d8880.png" alt="before_setting"></p>\n<p>그런데 이것이 일반 브랜치(master, tag로 trigger되는경우)에서는 PR제목이 존재하지않아서, <code class="language-text">$CHANGE_TITLE</code> 에 넣을 값이 존재하지 않는 경우가 생긴다.<br/>\n이 경우 Email-ext plugin은 이메일에 <code class="language-text">$CHANGE_TITLE</code> 문자를 그대로 발송한다.<br/>\n<img src="https://user-images.githubusercontent.com/19223089/57585998-f372b280-7529-11e9-80d1-71f19b858657.png" alt="prev_example"></p>\n<p>이를 개선하려고 찾아보니 환경변수를 <code class="language-text">${ENV, var=&quot;VARIABLE_NAME&quot;}</code>로 가져올수 있어서, 이 포맷를 적용했다.<br/>\nShell 환경변수는 가져올때 해당변수가 할당이 안되어있는경우 공백("")을 제공하므로 위의 문제를 해결할 수 있다.<br/><br>\n<img width="1515" alt="env_setting" src="https://user-images.githubusercontent.com/19223089/57585997-f2da1c00-7529-11e9-9345-40c43b0411c5.png"></p>\n<ul>\n<li>아래는 참고했었던, 문서 위치.<br/>\n<code class="language-text">Manage Jenkins &gt; Configure System &gt; Extended E-mail Notification</code> 섹션에서, <code class="language-text">Content Reference</code> 오른쪽의 물음표(?)를 클릭하면 볼수있다.<br>\n<img src="https://user-images.githubusercontent.com/19223089/57585999-f372b280-7529-11e9-8b7f-eab0d5c53fe1.gif" alt="reference_gif"></li>\n<li>${ENV, var=“VARIABLENAME”}\n<img src="https://user-images.githubusercontent.com/19223089/57586000-f372b280-7529-11e9-8928-0183a6551fb9.png" alt="reference"></li>\n</ul>',fields:{slug:"/posts/2019-02-23---Jenkins-Extended-E-mail-Notification-plugin에서-비어있는-환경변수-처리/",tagSlugs:["/tags/jenkins/","/tags/devops/"]},frontmatter:{title:"Jenkins Extended E-mail Notification plugin에서 비어있는 환경변수 처리",tags:["jenkins","devops"],date:"2019-02-23T01:49:00.000Z",description:"Jenkins Extended E-mail Notification plugin을 사용하여 email 알림을 보낸다."}}},pathContext:{slug:"/posts/2019-02-23---Jenkins-Extended-E-mail-Notification-plugin에서-비어있는-환경변수-처리/"}}}});
//# sourceMappingURL=path---posts-2019-02-23-jenkins-extended-e-mail-notification-plugin에서-비어있는-환경변수-처리-5020ef9e9bbf6197f23e.js.map