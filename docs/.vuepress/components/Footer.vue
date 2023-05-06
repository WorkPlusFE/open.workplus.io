<template lang="">
  <footer class="footer text--center">
    <div class="container container--fluid">
      <div class="footer__links">
        <a class="footer__link-item" target="_blank" href="https://www.workplus.io">公司官网</a>
        <span class="footer__link-separator">·</span>
        <a class="footer__link-item" target="_blank" href="https://lite.workplus.io">WorkPlus Lite</a>
        <span class="footer__link-separator">·</span>
        <a class="footer__link-item" target="_blank" href="https://openkunlun.io/">KunLun 中间件平台</a>
      </div>
    <a class="footer_copyright" href="https://beian.miit.gov.cn" target="_blank" rel="nofollow" title="深圳恒拓高科信息技术有限公司 版权所有">
      ©2015-{{year}} 深圳恒拓高科信息技术有限公司 版权所有 | 粤ICP备15040561号</a>
    </div>
    <div class="disbale-icon">
      <img class="we-artwork__image" src="https://open.workplus.io/logo.jpg"  alt="logo"/>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>
<style lang="scss">
.footer {
  color: inherit;
  text-align: center;
  padding: 20px;
  font-size: 16px;
  background: var(--c-bg);
  margin-top: 20px;
  &__links {
    margin-bottom: 1rem;
  }
  &__link-item {
    color: var(--c-text);
    line-height: 2;
    font-weight: normal;
  }
  &__link-separator {
    margin: 0 10px;
  }

  a.footer_copyright {
    color: var(--c-text-lighter);
    font-size: 14px;
    font-weight: 400;
  }
}

.disbale-icon {
  width: 0;
  height: 0;
}
</style>