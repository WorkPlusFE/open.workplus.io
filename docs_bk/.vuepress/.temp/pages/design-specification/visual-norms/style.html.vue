<template><h1 id="全局样式" tabindex="-1"><a class="header-anchor" href="#全局样式" aria-hidden="true">#</a> 全局样式</h1>
<h2 id="颜色" tabindex="-1"><a class="header-anchor" href="#颜色" aria-hidden="true">#</a> 颜色</h2>
<p>颜色在人机交互中，扮演着极具重要的角色，它传达品牌特色，凸显内容的强弱层次，传达关联性等信息。良好的色彩搭配，可以更好得帮助用户完成任务，执行操作。</p>
<p>经过了多年企业服务积累与实践，我们不断抽象视觉，沉淀出独有的色彩规范，满足不同企业级视觉文化价值观的需求。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>以下色彩规范主要展示不同场景，不同组件，颜色的使用规范，指引每个设计者或开发者做更好地判断和决策，所展示的具体色值以<code>恒拓高科</code>为例，仅供参考，并非指定使用。</p>
</div>
<p><strong>一、主色</strong></p>
<ColorCardGroup>
<ColorCard name="Primary" color="#007AFF" summary="主题色" />
</ColorCardGroup>
<p><strong>二、辅助色</strong></p>
<p>除了主色外的场景色，需要在不同的场景中使用，例如危险色表示危险的操作。</p>
<ColorCardGroup>
<ColorCard name="Success" color="#54AB41" summary="成功色" />
<ColorCard name="Warning" color="#E6A23C" summary="警告色" />
<ColorCard name="Danger" color="#E44C27" summary="危险色" />
<ColorCard name="Info" color="#909399" summary="提示色" />
</ColorCardGroup>
<p><strong>三、点缀色</strong></p>
<ColorCardGroup>
<ColorCard name="Accent0" color="#5F70FB" />
<ColorCard name="Accent1" color="#0099AA" />
<ColorCard name="Accent2" color="#E44C27" />
<ColorCard name="Accent3" color="#54AB41" />
</ColorCardGroup>
<p><strong>四、背景色</strong></p>
<ColorCardGroup>
<ColorCard name="Primary" color="#F5F5F5" summary="主要背景色" :light="true" />
<ColorCard name="Secondary" color="#EDEDED" summary="辅助背景色" :light="true" />
<ColorCard name="View" color="#FFFFFF" summary="显示页面背景色" :border="true" :light="true" />
<ColorCard name="Search-box" color="#EDEDED" summary="搜索框背景色" :light="true" />
</ColorCardGroup>
<ColorCardGroup>
<ColorCard name="Selected" color="#F5F5F5" summary="元素选中背景色" :light="true" />
<ColorCard name="Focus" color="#F6F6F7" summary="元素获取光标后背景色" :light="true" />
<ColorCard name="Mask" color="rgba(0, 0, 0, .4)" summary="遮罩层颜色" />
</ColorCardGroup>
<p><strong>五、图标颜色</strong></p>
<ColorCardGroup>
<ColorCard name="Light" color="rgba(255, 255, 255, .5)" summary="白色图标" :border="true" :light="true" />
<ColorCard name="Dark" color="#585858" summary="暗黑图标" />
<ColorCard name="Gray" color="#CCCCCC" summary="灰色图标" :light="true" />
</ColorCardGroup>
<p><strong>六、边框颜色</strong></p>
<ColorCardGroup>
<ColorCard name="Light" color="rgba(51, 51, 51, .05)" summary="分割线" :light="true" />
<ColorCard name="Form" color="#D6D6D6" summary="表单边框色" :light="true" />
</ColorCardGroup>
<h2 id="字体" tabindex="-1"><a class="header-anchor" href="#字体" aria-hidden="true">#</a> 字体</h2>
<p>字体是体系化界面设计中最基本的构成之一。</p>
<p>我们的用户通过文本来理解内容和完成工作，科学的字体系统将大大提升用户的阅读体验及工作效率。</p>
<p><strong>一、字体家族</strong></p>
<p>优先使用系统默认的界面字体，同时提供了一套利于屏显的备用字体库，来维护在不同平台以及浏览器的显示下，字体始终保持良好的易读性和可读性，体现了友好、稳定和专业的特性。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@font-family</span><span class="token punctuation">:</span> -apple-system<span class="token punctuation">,</span> BlinkMacSystemFont<span class="token punctuation">,</span> <span class="token string">'Segoe UI'</span><span class="token punctuation">,</span> Roboto<span class="token punctuation">,</span> <span class="token string">'Helvetica Neue'</span><span class="token punctuation">,</span> Arial<span class="token punctuation">,</span>
  <span class="token string">'Noto Sans'</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">,</span> <span class="token string">'Apple Color Emoji'</span><span class="token punctuation">,</span> <span class="token string">'Segoe UI Emoji'</span><span class="token punctuation">,</span> <span class="token string">'Segoe UI Symbol'</span><span class="token punctuation">,</span>
  <span class="token string">'Noto Color Emoji'</span><span class="token punctuation">;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>另外，在中后台系统中，数字经常需要进行纵向对比展示，我们单独将数字的字体 <a href="https://www.fonts.com/content/learning/fontology/level-3/numbers/proportional-vs-tabular-figures" target="_blank" rel="noopener noreferrer">font-variant-numeric<OutboundLink/></a> 设置为 tabular-nums，使其为等宽字体。</p>
<p><strong>二、字体大小</strong></p>
<ul>
<li><code>12px</code> 小号字体，用于提示信息、备注等辅助场景；</li>
<li><code>14px</code> 常规字体大小，适用于90%的场景，正文、列表、详情等；</li>
<li><code>16px</code> 加大，较多用于标题；</li>
<li><code>18px</code> 特大，个人详情的姓名昵称等。</li>
</ul>
<p><strong>三、字阶与行高</strong></p>
<p>行高可以理解为一个包裹在字体外面的无形的盒子，为了让布局更加自然，行高会和字体大小形成一种比例：</p>
<ul>
<li><code>12px</code> 小号字体，对应行高 <code>18px</code>；</li>
<li><code>14px</code> 常规字体，对应行高 <code>20px</code>；</li>
<li><code>16px</code> 加大字体，对应行高 <code>22px</code>；</li>
<li><code>18px</code> 特大字体，对应行高 <code>24px</code>。</li>
</ul>
<blockquote>
<p>行高等于字体大小加 6。</p>
</blockquote>
<p><strong>四、字重</strong></p>
<p>字重的选择同样基于秩序、稳定、克制的原则。多数情况下，只出现 regular 以及 medium 的两种字体重量，分别对应代码中的 400 和 500。在英文字体加粗的情况下会采用 semibold 的字体重量，对应代码中的 600。</p>
<p><strong>五、字体颜色</strong></p>
<p>文本颜色如果和背景颜色太接近就会难以阅读。</p>
<ColorCardGroup>
<ColorCard name="Primary" color="#333333" summary="主颜色" />
<ColorCard name="Secondary" color="#666666" summary="辅助颜色" />
<ColorCard name="Hint" color="#999999" summary="提示颜色" />
<ColorCard name="Disabled" color="#CCCCCC" summary="可不用颜色" />
<ColorCard name="White" color="#FFFFFF" summary="白色" :border='true' :light="true" />
</ColorCardGroup>
<h2 id="间隔" tabindex="-1"><a class="header-anchor" href="#间隔" aria-hidden="true">#</a> 间隔</h2>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">--block-space-compact</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
<span class="token property">--block-space</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
<span class="token property">--block-space-interval</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="图标" tabindex="-1"><a class="header-anchor" href="#图标" aria-hidden="true">#</a> 图标</h2>
<h2 id="圆角" tabindex="-1"><a class="header-anchor" href="#圆角" aria-hidden="true">#</a> 圆角</h2>
<p>圆角默认使用<code>4px</code>，部分场景会使用<code>2px</code>。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">--border-radius-small</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
<span class="token property">--border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
<span class="token property">--border-radius-round</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></template>
