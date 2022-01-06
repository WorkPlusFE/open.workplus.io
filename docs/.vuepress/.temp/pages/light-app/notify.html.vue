<template><h1 id="应用红点数字" tabindex="-1"><a class="header-anchor" href="#应用红点数字" aria-hidden="true">#</a> 应用红点数字</h1>
<div class="custom-container tip"><p class="custom-container-title">阅读本文，你将了解：</p>
<ul>
<li>应用红点的所有类型；</li>
<li>应用红点生成的链接规则，以及消除的方式。</li>
</ul>
</div>
<h2 id="什么是应用红点数字" tabindex="-1"><a class="header-anchor" href="#什么是应用红点数字" aria-hidden="true">#</a> 什么是应用红点数字</h2>
<p class="w6s-image">
  <img :src="$withBase('/app/reddot.png')" alt="应用红点" width="400" />
</p>
<p>如上图中的<code>流程大师</code>应用右上角的红点数字，当前支持显示红点、数字及图标。除了默认的“应用中心”栏目，在<RouterLink to="/light-app/workbench.html">工作台</RouterLink>上的应用同样支持。通过约定好链接的方式，在管理后台上架应用时可以指定红点请求的地址。</p>
<p>在添加“应用入口”时，可以根据实际需求添加“红点数字提醒源”，如下图：</p>
<p class="w6s-image">
  <img :src="$withBase('/app/notify-setting.png')" alt="应用红点设置" width="600" />
</p>
<h2 id="显示规则" tabindex="-1"><a class="header-anchor" href="#显示规则" aria-hidden="true">#</a> 显示规则</h2>
<ul>
<li>接口由各轻应用提供，但调用的<code>URL</code>及返回数据，需遵守<code>WorkPlus</code>设定的规则；</li>
<li>对于应用<code>Tab</code>页中的各个轻应用，在应用<code>Tab</code>显示对应轻应用时调用<code>API</code>更新显示此值；</li>
<li>用户点击进入轻应用后，<strong>由轻应用自己负责清除当前用户的红点，数字或图标</strong>；当返回到<code>Tab</code>页时，APP 会重新再次拉取以刷新。</li>
</ul>
<h2 id="api-调用规则" tabindex="-1"><a class="header-anchor" href="#api-调用规则" aria-hidden="true">#</a> API 调用规则</h2>
<p>调用 URL 规则：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>$<span class="token punctuation">{</span><span class="token constant">URL</span><span class="token punctuation">}</span><span class="token operator">&amp;</span>tenantId<span class="token operator">=</span><span class="token punctuation">{</span>tenantId<span class="token punctuation">}</span><span class="token operator">&amp;</span>username<span class="token operator">=</span><span class="token punctuation">{</span>username<span class="token punctuation">}</span><span class="token operator">&amp;</span>ticket<span class="token operator">=</span><span class="token punctuation">{</span>ticket<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>参数说明：</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>URL</td>
<td>String</td>
<td>这个值由轻应用提供，此项在后台中配置</td>
</tr>
<tr>
<td>tenantId</td>
<td>String</td>
<td>租户ID，当前移动端的用户的域id，由移动端自动填充</td>
</tr>
<tr>
<td>username</td>
<td>String</td>
<td>当前用户帐号，由移动端自动填充</td>
</tr>
<tr>
<td>ticket</td>
<td>String</td>
<td>给轻应用做单点登陆所用，由移动端自动填充</td>
</tr>
</tbody>
</table>
<p><RouterLink to="/light-app/create.html#%E5%90%AF%E5%8A%A8%E5%9C%B0%E5%9D%80">应用访问地址的参数</RouterLink>，在这里同样适用。</p>
<p>返回格式规则：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
 status<span class="token operator">:</span> <span class="token number">0</span>
 message<span class="token operator">:</span> <span class="token string">'Everything is ok'</span>
 tip<span class="token operator">:</span><span class="token punctuation">{</span>
   notify_type<span class="token operator">:</span> <span class="token string">'dot'</span><span class="token punctuation">,</span>
   icon_url<span class="token operator">:</span> <span class="token string">'url'</span><span class="token punctuation">,</span>
   num<span class="token operator">:</span> <span class="token number">2</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><code>status</code>为<code>0</code>时，表示接口调用成功；非<code>0</code>时，表示接口调用失败，<code>message</code>此时表示失败的原因。</p>
<p><code>notify_type</code>包括4种类型，如下：</p>
<ul>
<li><code>dot</code> 在轻应用上显示一个红点</li>
<li><code>digit</code> 在轻应用上显示一个数字</li>
<li><code>icon</code> 在轻应用上显示一个图标</li>
<li><code>nothing</code> 轻应用上不显示红点或数字或图标</li>
</ul>
<p>而<code>icon_url</code>，只有在<code>notify_type</code>为<code>icon</code>时才会获取，此值为图标资源地址。</p>
<p><code>num</code> 当notify_type为digit 时，此值表示一个数字。</p>
<div class="custom-container warning"><p class="custom-container-title">关于清空提醒</p>
<p>如果应用添加了“红点数字提醒源”，在需要清空的时候，接口必须返回<code>nothing</code>的<code>type</code>，而不是返回一个空的结果。</p>
</div>
</template>
