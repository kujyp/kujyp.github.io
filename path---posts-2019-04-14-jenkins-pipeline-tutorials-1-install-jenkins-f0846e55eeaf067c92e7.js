webpackJsonp([0x9d0a88091e66],{416:function(n,s){n.exports={data:{site:{siteMetadata:{title:"kujyp 개발블로그",subtitle:"ML DevOps, Python, Docker ...",author:{name:"kujyp",github:"kujyp"},disqusShortname:"kujyp",url:"https://kujyp.github.io"}},markdownRemark:{id:"/home/circleci/app/src/pages/posts/2019-04-14---Jenkins-pipeline-tutorials---1--Install-Jenkins.md absPath of file >>> MarkdownRemark",html:'<h3>개요</h3>\n<p>아래 스펙의 jenkins를 설치하는것을 목적으로 합니다.</p>\n<ul>\n<li>jenkins(host container)를 docker image를 사용하여 구동합니다.</li>\n<li>jenkins login을 github auth와 연동합니다.</li>\n<li>UI로 blueocean을 사용합니다.</li>\n<li>Jenkins job item 으로 pipeline job(organization, multi branch) 을 사용합니다.</li>\n<li>Groovy 언어로 작성된 Jenkinsfile 을 사용합니다.</li>\n<li>메일발송으로 emailext plugin를 사용합니다.</li>\n<li>jenkins job을 docker agent를 사용하여 구동합니다.(위의 host container와 구분되는 runner container 입니다)</li>\n</ul>\n<h2>목차</h2>\n<ul>\n<li>\n<p><a href="/posts/2019-04-14---Jenkins-pipeline-tutorials---1--Install-Jenkins/"><strong>1. Install Jenkins</strong></a></p>\n<ul>\n<li>1-1. docker 설치</li>\n<li>1-2. jenkins container 실행</li>\n<li>1-3. jenkins web 접속</li>\n</ul>\n</li>\n<li>\n<p><a href="/posts/2019-04-25---Jenkins-pipeline-tutorials---2--Install-github-authentication-plugin/">2. Install github authentication plugin</a></p>\n<ul>\n<li>2-1. plugin 설치</li>\n<li>2-2. plugin 설정</li>\n</ul>\n</li>\n<li><a href="/posts/2019-05-01---Jenkins-pipeline-tutorials---3--Webhook-settings/">3. Webhook settings</a></li>\n<li>\n<p><a href="/posts/2019-05-06---Jenkins-pipeline-tutorials---4--Jenkins-Job-%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0/">4. Jenkins Job 생성하기</a></p>\n<ul>\n<li>4-1. Pipeline Organization job 생성하기</li>\n<li>4-2. tag automatic trigger 문제</li>\n<li>4-3. tag automatic trigger 문제해결</li>\n</ul>\n</li>\n<li>\n<p>(미작성)</p>\n<ul>\n<li>\n<ol start="5">\n<li>jenkins concurrency\n<br/></li>\n</ol>\n</li>\n</ul>\n</li>\n</ul>\n<h2>과정</h2>\n<h3>1. Install jenkins</h3>\n<h4>1-1. docker 설치</h4>\n<p>가이드는 Centos를 기준으로 작성합니다. Ubuntu나 기타 OS 사용자는 Reference 링크 참조하면 될 것 같습니다.</p>\n<p>제 경우 GPU 가 필요한 job을 돌려야하기 때문에, nvidia-docker 까지 설치합니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token assign-left variable">yellow</span><span class="token operator">=</span><span class="token string">"<span class="token entity" title="\\033">\\033</span>[0;33m"</span>\n<span class="token assign-left variable">red</span><span class="token operator">=</span><span class="token string">"<span class="token entity" title="\\033">\\033</span>[0;31m"</span>\n<span class="token assign-left variable">nocolor</span><span class="token operator">=</span><span class="token string">"<span class="token entity" title="\\033">\\033</span>[0m"</span>\n\n<span class="token keyword">function</span> <span class="token function-name function">command_exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token builtin class-name">command</span> -v <span class="token string">"<span class="token variable">$@</span>"</span> <span class="token operator"><span class="token file-descriptor important">1</span>></span> /dev/null <span class="token operator"><span class="token file-descriptor important">2</span>></span><span class="token file-descriptor important">&amp;1</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function-name function">check_gpu_exists</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    nvidia-smi <span class="token operator"><span class="token file-descriptor important">1</span>></span> /dev/null <span class="token operator"><span class="token file-descriptor important">2</span>></span><span class="token file-descriptor important">&amp;1</span>\n<span class="token punctuation">}</span>\n\n\n<span class="token comment">### Main</span>\n<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> -u<span class="token variable">)</span></span>"</span> -ne <span class="token string">"0"</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>\n    <span class="token builtin class-name">echo</span> -e <span class="token string">"<span class="token variable">${red}</span>[ERROR] install with root privilege.<span class="token variable">${nocolor}</span>"</span>\n    <span class="token builtin class-name">exit</span> <span class="token number">1</span>\n<span class="token keyword">fi</span>\n\n<span class="token comment"># Remove legacy docker</span>\nyum remove docker <span class="token punctuation">\\</span>\n    docker-client <span class="token punctuation">\\</span>\n    docker-client-latest <span class="token punctuation">\\</span>\n    docker-common <span class="token punctuation">\\</span>\n    docker-latest <span class="token punctuation">\\</span>\n    docker-latest-logrotate <span class="token punctuation">\\</span>\n    docker-logrotate <span class="token punctuation">\\</span>\n    docker-engine\n\n<span class="token comment"># Remove pre-installed docker, nvidia-docker</span>\nyum remove docker -y <span class="token punctuation">\\</span>\n    docker-engine <span class="token punctuation">\\</span>\n    containerd.io <span class="token punctuation">\\</span>\n    docker-ce-cli <span class="token punctuation">\\</span>\n    nvidia-container-runtime\n\n<span class="token comment"># Install dependencies</span>\nyum <span class="token function">install</span> -y yum-utils <span class="token punctuation">\\</span>\n    device-mapper-persistent-data <span class="token punctuation">\\</span>\n    lvm2\n\nyum-config-manager <span class="token punctuation">\\</span>\n    --add-repo <span class="token punctuation">\\</span>\n    https://download.docker.com/linux/centos/docker-ce.repo\n\n\n<span class="token keyword">if</span> check_gpu_exists<span class="token punctuation">;</span> <span class="token keyword">then</span>\n    <span class="token assign-left variable">distribution</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">.</span> /etc/os-release<span class="token punctuation">;</span><span class="token builtin class-name">echo</span> $ID$VERSION_ID<span class="token variable">)</span></span>\n    <span class="token function">curl</span> -s -L https://nvidia.github.io/nvidia-docker/<span class="token variable">$distribution</span>/nvidia-docker.repo <span class="token operator">|</span> <span class="token punctuation">\\</span>\n        <span class="token function">tee</span> /etc/yum.repos.d/nvidia-docker.repo\n\n    yum <span class="token function">install</span> -y nvidia-docker2\n    <span class="token function">sed</span> -i <span class="token string">\'2i \\    \\"default-runtime\\": \\"nvidia\\",\'</span> /etc/docker/daemon.json\n<span class="token keyword">else</span>\n    yum <span class="token function">install</span> -y docker-ce\n<span class="token keyword">fi</span>\n\n<span class="token comment"># Replace &lt;LINUX_USERNAME> with your username.</span>\n<span class="token function">usermod</span> -aG docker <span class="token operator">&lt;</span>LINUX_USERNAME<span class="token operator">></span>\n\n<span class="token comment"># Start docker service on startup</span>\nsystemctl <span class="token builtin class-name">enable</span> docker.service\n\nsystemctl start docker</code></pre>\n      </div>\n<br/>\n<ul>\n<li>Ref: <a href="https://docs.docker.com/install/linux/docker-ce/centos/">https://docs.docker.com/install/linux/docker-ce/centos/</a></li>\n<li>Ref: <a href="https://docs.docker.com/install/linux/docker-ce/ubuntu/">https://docs.docker.com/install/linux/docker-ce/ubuntu/</a>\n<br/><br/></li>\n</ul>\n<h3>1-2. jenkins container 실행</h3>\n<ul>\n<li>\n<p>jenkins를 docker container로 구동합니다.</p>\n</li>\n<li>\n<p>Jenkins image는 <code class="language-text">jenkinsci/blueocean:1.9.0</code> 를 사용합니다.<br/>\n사용가능한 tag list는 아래링크에서 확인가능합니다.<br/>\n<a href="https://hub.docker.com/r/jenkins/jenkins/tags">https://hub.docker.com/r/jenkins/jenkins/tags</a> (official jenkins)<br/>\n<a href="https://hub.docker.com/r/jenkinsci/blueocean/tags">https://hub.docker.com/r/jenkinsci/blueocean/tags</a> (official jenkins/blueocean)</p>\n</li>\n<li>\n<p>아래의 <code class="language-text">&lt;JENKINS_HOME></code> 부분을 본인이 jenkins home으로 사용하고싶은 경로로 지정합니다.<br/>\njenkins 는 jenkins home 경로에 Configurations, Installed Jenkins plugins, <br/>\nJob 도중 생성되는 files(cloned source codes, build artifacts)를 저장합니다.</p>\n</li>\n<li>\n<p>즉 Jenkins docker container 를 삭제, 재생성할때, 위의 경로에 이전에 사용하던 파일이 존재하면, 그 상태 그대로 복구가능합니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">docker run -d --restart=always \\\n    --name jenkins \\\n    -p 80:8080 \\\n    -u root \\\n    -v &lt;JENKINS_HOME&gt;:/var/jenkins_home \\\n    -v /var/run/docker.sock:/var/run/docker.sock \\\n    jenkinsci/blueocean:1.9.0</code></pre>\n      </div>\n<br/>\n</li>\n<li>\n<p>실행후 <code class="language-text">docker ps</code> 로 실행여부 확인해줍니다.<br/>\n<img src="https://user-images.githubusercontent.com/19223089/57585936-a0006480-7529-11e9-8528-026412b5ea05.png" alt="2-0-dockerps">\n<br/><br/></p>\n</li>\n<li>\n<p>참고: 이때 docker run 옵션에서 <code class="language-text">-v /var/run/docker.sock:/var/run/docker.sock</code> 는 jenkins 내부에서 docker agent를 돌려야하는데, jenkins 이미지는 <a href="https://github.com/jpetazzo/dind">docker in docker</a>가 구현되어있지않아서 내부에 docker container를 생성할수없습니다.<br/>\n따라서 외부의 docker를 사용하기위해 docker.sock을 공유해줍니다.</p>\n</li>\n<li>\n<p>ref: <a href="https://jenkins.io/doc/tutorials/build-a-python-app-with-pyinstaller/#run-jenkins-in-docker">https://jenkins.io/doc/tutorials/build-a-python-app-with-pyinstaller/#run-jenkins-in-docker</a> <br/><br/></p>\n</li>\n</ul>\n<h4>1-3. jenkins web 접속</h4>\n<ul>\n<li>2번과정에서 80포트로 개방한 jenkins web으로 접속합니다.</li>\n<li>Jenkins container 를 띄운 곳의 Web domain or ip 를 브라우저에 입력하여 접속합니다.</li>\n<li>최초 Unlock 진행해야합니다. <code class="language-text">docker logs jenkins</code> 로 로그로 찍혀있는 password 복사, 입력합니다.<br/>\n<img src="https://user-images.githubusercontent.com/19223089/57585944-a1319180-7529-11e9-8adc-2b7a5d7de8de.png" alt="2-1-unlock_jenkins">\n<br/><br/>\n<img src="https://user-images.githubusercontent.com/19223089/57585938-a098fb00-7529-11e9-8a0d-f3c5737f60e1.png" alt="2-1-docker_logs_password">\n<br/><br/></li>\n<li>이어서 나오는메뉴에서 Install suggested 입력합니다.<br/>\n<img src="https://user-images.githubusercontent.com/19223089/57585940-a098fb00-7529-11e9-97dc-bb824ea9e8e3.gif" alt="2-1-install_suggested">\n<br/><br/></li>\n<li>admin 계정생성하라고 나오는데, 대충 만들어줍니다. github auth 사용하면 이 계정으로 로그인 불가합니다.<br/>\n<img src="https://user-images.githubusercontent.com/19223089/57585937-a0006480-7529-11e9-960b-5ffcd2a18b6a.png" alt="2-1-create_admin">\n<br/><br/></li>\n<li>jenkins URL 입력해줍니다.</li>\n<li>domain 을 사용할 계획이라면, 여기에서 ip address 를 domain 으로 바꿔야합니다.<br/>\n제 경우 여기에서 넘어갔다가, 나중에 새로 할당받은 도메인으로 변경하려고 하니 proxy 설정에러가 발생해 재설치가 필요했습니다.<br/>\n<img src="https://user-images.githubusercontent.com/19223089/57585941-a098fb00-7529-11e9-82f0-1c53b0027879.png" alt="2-1-jenkins_url">\n<br/><br/></li>\n<li>restart 해줍니다.<br/>\n<img src="https://user-images.githubusercontent.com/19223089/57585942-a1319180-7529-11e9-8c92-dc91e7c04f40.png" alt="2-1-restart">\n<br/><br/></li>\n<li>restart 하니 제 경우 계속 저 progress창에서 멈춰있었습니다.</li>\n<li>새로고침하면 다시 뜹니다.<br/>\n<img src="https://user-images.githubusercontent.com/19223089/57585939-a098fb00-7529-11e9-9205-04d51a2a165b.gif" alt="2-1-hangged_progress">\n<br/><br/></li>\n<li>로그인창이 나타납니다.<br/>\n<img src="https://user-images.githubusercontent.com/19223089/57585943-a1319180-7529-11e9-83e4-2617337154f4.png" alt="2-1-signin_after_restart">\n<br/><br/></li>\n</ul>\n<h4>참고1. jenkins web 언어 한글로 나올때.</h4>\n<ul>\n<li>언어가 한글로 나오는경우 메뉴이름이 달라져서 구글링도 힘들어지고 여러모로 불편합니다.</li>\n<li>브라우저 주 언어설정을 English로 변경합니다.</li>\n<li>chrome의경우 settings(cmd+,) - advance - language - english(미국)을 맨 위로 올려주면 됩니다.<br/>\n<img src="https://user-images.githubusercontent.com/19223089/57585945-a1319180-7529-11e9-92a0-3e9e7dfffdbd.gif" alt="2-2-language">\n<br/><br/></li>\n</ul>\n<h4>참고2. jenkins log</h4>\n<ul>\n<li>jenkins log를 보면서 과정을 진행하면 문제가 생겼을때 상황을 알기 더 용이합니다.</li>\n<li><code class="language-text">docker logs -f jenkins</code>로 로그를 무중단으로 볼수있습니다.<br/>\n<img src="https://user-images.githubusercontent.com/19223089/57585946-a1ca2800-7529-11e9-97bd-cf5e38becf5a.gif" alt="2-3-jenkinslog">\n<br/><br/></li>\n</ul>',fields:{slug:"/posts/2019-04-14---Jenkins-pipeline-tutorials---1--Install-Jenkins/",tagSlugs:["/tags/jenkins/"]},frontmatter:{title:"Jenkins pipeline tutorials - 1. Install Jenkins",tags:["jenkins"],date:"2019-04-14T21:15:00+0900",description:"아래 스펙의 jenkins를 설치하는것을 목적으로 합니다. jenkins(host container)를 docker image를 사용하여 구동합니다. jenkins login을 github auth와 연동합니다."}}},pathContext:{slug:"/posts/2019-04-14---Jenkins-pipeline-tutorials---1--Install-Jenkins/"}}}});
//# sourceMappingURL=path---posts-2019-04-14-jenkins-pipeline-tutorials-1-install-jenkins-f0846e55eeaf067c92e7.js.map