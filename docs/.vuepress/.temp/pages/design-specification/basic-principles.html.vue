<template><h1 id="基本原则" tabindex="-1"><a class="header-anchor" href="#基本原则" aria-hidden="true">#</a> 基本原则</h1>
<div class="hidden-xs-only">
<br />
<br />
<el-row :gutter="20" justify="center">
  <el-col :span="6">
    <div class="grid-content bg-purple">
      <img :src="$withBase('/design-specification/consistency.png')" alt="Consistency" width="90" />
      <p><strong>一致</strong></p>
    </div>
  </el-col>
  <el-col :span="6">
    <div class="grid-content bg-purple">
      <img :src="$withBase('/design-specification/feedback.png')" alt="Feedback" width="90" />
      <p><strong>反馈</strong></p>
    </div>
  </el-col>
  <el-col :span="6">
    <div class="grid-content bg-purple">
      <img :src="$withBase('/design-specification/efficiency.png')" alt="Efficiency" width="90" />
      <p><strong>效率</strong></p>
    </div>
  </el-col>
  <el-col :span="6">
    <div class="grid-content bg-purple">
      <img :src="$withBase('/design-specification/Controllability.png')" alt="Controllability" width="90" />
      <p><strong>可控</strong></p>
    </div>
  </el-col>
</el-row>
<br />
</div>
<h4 id="一致-consistency" tabindex="-1"><a class="header-anchor" href="#一致-consistency" aria-hidden="true">#</a> 一致 Consistency</h4>
<ul>
<li><strong>与现实生活一致：</strong> 与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</li>
<li><strong>在界面中一致：</strong> 所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</li>
</ul>
<h4 id="反馈-feedback" tabindex="-1"><a class="header-anchor" href="#反馈-feedback" aria-hidden="true">#</a> 反馈 Feedback</h4>
<ul>
<li><strong>控制反馈：</strong> 通过界面样式和交互动效让用户可以清晰地感知自己的操作；</li>
<li><strong>页面反馈：</strong> 操作后，通过页面元素的变化清晰地展现当前状态。</li>
</ul>
<h4 id="效率-efficiency" tabindex="-1"><a class="header-anchor" href="#效率-efficiency" aria-hidden="true">#</a> 效率 Efficiency</h4>
<ul>
<li><strong>简化流程：</strong> 设计简洁直观的操作流程；</li>
<li><strong>清晰明确：</strong> 语言表达清晰且表意明确，让用户快速理解进而作出决策；</li>
<li><strong>帮助用户识别：</strong> 界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</li>
</ul>
<h4 id="可控-controllability" tabindex="-1"><a class="header-anchor" href="#可控-controllability" aria-hidden="true">#</a> 可控 Controllability</h4>
<ul>
<li><strong>用户决策：</strong> 根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</li>
<li><strong>结果可控：</strong> 用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</li>
</ul>
</template>

<style>
.grid-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #fbfcfd;
  height: 204px;
}
</style>
