<template>
  <div class="toast">
    <slot></slot>
    <div class="line" v-if="this.closeButton"></div>
    <div class="close" @click="onClose" v-if="this.closeButton">{{ this.closeButton.text }}</div>
  </div>
</template>

<script>
export default {
  name: "d-toast",
  props: {
    autoClose: {
      type: Boolean,
      default: true,
    },
    autoCloseDelay: {
      type: Number,
      default: 3,
    },
    closeButton:{
      type: Object,
      // default: () => {
      //   return {
      //     text: '关闭',
      //     cb: () => {
      //       console.log('on close click');
      //     }
      //   }
      // }
    }
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close();
      }, this.autoCloseDelay * 1000);
    }
  },
  methods: {
    close() {
      this.$el.remove();
      this.$destroy();
    },
    onClose() {
      this.close();
      if (typeof this.closeButton.cb === 'function') {
        this.closeButton.cb();
      }
    }
  },
};
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
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
.line {
  border-left: 1px solid #666;
  height: 100%;
  margin-left: 16px;
}
.close {
  margin-left: 16px;
  cursor: pointer;
}
</style>
