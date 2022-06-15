<template>
  <div class="d-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "button-group",
  mounted() {
    for (const child of this.$el.children) {
      const nodeName = child.nodeName.toLowerCase()
      if (nodeName !== 'button') {
        console.warn(`d-button-group 的子元素应该是 d-button, 而不是 ${nodeName}`);
      }
    }
  }
}
</script>

<style scoped lang="scss">
.d-button-group {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  >.d-button {
    border-radius: 0;
    &:hover {
      position: relative;
      z-index: 1;
    }
    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      margin-right: -1px;

    }
    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      margin-left: -1px;
    }
  }
}
</style>