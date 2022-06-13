<template>
<div class="toast">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'd-toast'
}
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0,0,0,0.75);
.toast {
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: $font-size;
  background-color: $toast-bg;
  line-height: 1.8;
  height: $toast-height;
  color: white;
  padding: 0 16px;
  border-radius: 4px;
}
</style>