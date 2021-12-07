<template><h1 id="应用消息通知" tabindex="-1"><a class="header-anchor" href="#应用消息通知" aria-hidden="true">#</a> 应用消息通知</h1>
<p class="w6s-image">
  <img :src="$withBase('/app/message.png')" alt="应用消息通知" width="250px" />
</p>
<p>通过接入应用消息功能，可以让轻应用具备通知提醒、流程反馈及推广的能力。</p>
<h2 id="消息类型" tabindex="-1"><a class="header-anchor" href="#消息类型" aria-hidden="true">#</a> 消息类型</h2>
<p>当前共支持 5 种消息类型，包括<code>文本</code>、<code>图片</code>、<code>文件</code>及<code>图文</code>和<code>模版消息</code>。</p>
<p><strong>文本：</strong></p>
<p>仅包含文本内容，适用于无动作的状态反馈。</p>
<p><strong>图片：</strong></p>
<p>推送一张图片，常用于介绍活动内容。</p>
<p><strong>文件：</strong></p>
<p>推送一份文件。</p>
<p><strong>图文：</strong></p>
<p>推送一份带图片及标题描述的消息，类似于服务号的图文消息，点击后打开一个链接。</p>
<p><strong>模版消息：</strong></p>
<p>推送一份模版消息，每个应用上架后，都可在应用设置栏目进行模版消息的自定义编辑，具体请查看<a href="/light-app/#%E6%B6%88%E6%81%AF%E6%A8%A1%E7%89%88" target="_blank" rel="noopener noreferrer">消息模版<OutboundLink/></a>。</p>
<h2 id="消息行为" tabindex="-1"><a class="header-anchor" href="#消息行为" aria-hidden="true">#</a> 消息行为</h2>
<p><strong>打开应用：</strong></p>
<p>通常在推送文本消息时，我们希望用户在会话列表点击消息时，可直接进入应用，可以通过在消息体中设置<code>@target_url</code>实现该功能。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span><span class="token punctuation">,</span>
  body<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token punctuation">,</span>
    <span class="token string">"@target_url"</span><span class="token operator">:</span> targetUrl<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>全屏打开：</strong></p>
<p>是否全屏打开，取决于应用本身是否为全屏应用。若推送消息的应用为全屏应用，可以通过在消息体中设置<code>display_mode</code>实现该功能。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span><span class="token punctuation">,</span>
  body_type<span class="token operator">:</span> <span class="token string">'ARTICLE'</span><span class="token punctuation">,</span> 
  body<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token punctuation">,</span>
    display_mode<span class="token operator">:</span> <span class="token string">'FULL_SCREEN'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><blockquote>
<p>仅在推送图文消息（即 body_type: 'ARTICLE'）时支持。</p>
</blockquote>
<p><strong>打开会话：</strong></p>
<p>在会话列表点击应用消息，默认打开该应用的会话页面，通常消息类型较多的情况下，优先选择该模式。</p>
<h2 id="消息推送" tabindex="-1"><a class="header-anchor" href="#消息推送" aria-hidden="true">#</a> 消息推送</h2>
<p>消息推送的实现一般分两步：</p>
<ol>
<li>获取应用的使用权限范围（包含管理员及超级管理员）；</li>
<li>根据业务场景给指定的人员推送特定的消息。</li>
</ol>
<p>具体的 API 使用方法，请查看<a href="/api/app/mbox.md" target="_blank" rel="noopener noreferrer">API文档-应用<OutboundLink/></a>。</p>
</template>
