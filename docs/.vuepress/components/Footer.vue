<template lang="">
  <footer class="footer text--center">
    <div class="container container--fluid">
      <div class="footer__links">
        <a class="footer__link-item" href="https://workplus.io">公司官网</a>
        <span class="footer__link-separator">·</span>
        <a class="footer__link-item" href="https://lite.workplus.io">WorkPlus Lite</a>
        <span class="footer__link-separator">·</span>
        <a class="footer__link-item" href="http://openkunlun.io/">KunLun 中间件平台</a>
        </div>
      <div>
        ©2015-2022 深圳恒拓高科信息技术有限公司 版权所有</div>
      </div>
    </footer>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
<style lang="scss">
.footer {
  color: inherit;
  text-align: center;
  padding: 20px;
  font-size: 16px;
  background: #f5f6f7;
  margin-top: 20px;
  &__links {
    margin-bottom: 1rem;
  }
  &__link-item {
    color: #606770;
    line-height: 2;
    font-weight: normal;
  }
  &__link-separator {
    margin: 0 10px;
  }
}
</style>