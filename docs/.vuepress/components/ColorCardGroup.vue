<template>
  <div class="w6s-color-card-group el-row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ColorCardGroup',
}
</script>

<style lang="scss">
.w6s-color-card-group {
  display: flex;
}
</style>