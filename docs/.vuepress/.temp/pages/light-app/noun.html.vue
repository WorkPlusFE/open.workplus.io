<template><h1 id="名词解析" tabindex="-1"><a class="header-anchor" href="#名词解析" aria-hidden="true">#</a> 名词解析</h1>
<h2 id="域" tabindex="-1"><a class="header-anchor" href="#域" aria-hidden="true">#</a> 域</h2>
<p>域是 WorkPlus 里一个表示租户的概念，用来承载用户，组织，应用等，在数据中以<code>domain_id</code>表示。</p>
<h2 id="组织" tabindex="-1"><a class="header-anchor" href="#组织" aria-hidden="true">#</a> 组织</h2>
<p>组织包含在域中，一个域可以有多个组织。通过在数据中以<code>org_id</code>或<code>org_code</code>表示。</p>
<h2 id="用户" tabindex="-1"><a class="header-anchor" href="#用户" aria-hidden="true">#</a> 用户</h2>
<p>一个账号在 WorkPlus 中，通常有两个角色：<code>用户</code>和<code>雇员</code>。</p>
<p>用户就是一个普通的角色，只包含常规的个人信息。而雇员，就是所在的组织部门里的角色，通常会包含职位信息等。一个人可以存在于多个组织或部门里。</p>
<h2 id="appkey-appsecret" tabindex="-1"><a class="header-anchor" href="#appkey-appsecret" aria-hidden="true">#</a> AppKey/AppSecret</h2>
<p>应用的<code>key</code>和<code>secret</code>，在管理后台创建应用后可获得，通常用于做单点登录。</p>
</template>
