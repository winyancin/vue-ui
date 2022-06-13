<template>
  <div class="wapper" :class="positionClasses">
    <div class="toast" ref="toast">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-if="enableHtml" v-html="$slots.default[0]"></div>
      </div>
      <div class="line" v-if="this.closeButton" ref="line"></div>
      <div class="close" @click="onClose" v-if="this.closeButton">{{ this.closeButton.text }}</div>
    </div>
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
    closeButton: Object,
    enableHtml: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: "top",
      validator: (value) => {
        return ["top", "bottom", "middle"].includes(value);
      },
    },
  },
  computed: {
    positionClasses() {
      return {
        [`position-${this.position}`]: true,
      };
    },
  },
  mounted() {
    this.excuteAutoClose();
    this.updateStyles();
  },
  methods: {
    excuteAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseDelay * 1000);
      }
    },
    updateStyles() {
      this.$nextTick(() => {
        this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`;
      });
    },
    close() {
      this.$el.remove();
      this.$emit("close");
      this.$destroy();
    },
    onClose() {
      this.close();
      if (typeof this.closeButton.cb === "function") {
        this.closeButton.cb();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes slide-up {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes slide-down {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.wapper {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  &.position-top {
    top: 0;
    .toast {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      animation: slide-down 300ms;
    }
  }
  &.position-bottom {
    bottom: 0;
    .toast {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      animation: slide-up 300ms;
    }
  }
  &.position-middle {
    bottom: 50%;
    .toast {
      animation: fade-in 300ms;
    }
  }
  .toast {
    align-items: center;
    
    display: flex;
    font-size: $font-size;
    background-color: $toast-bg;
    line-height: 1.8;
    min-height: $toast-height;
    color: white;
    padding: 0 16px;
    border-radius: 4px;

    .message {
      padding: 16px;
    }
    .line {
      border-left: 1px solid #666;
      height: 100%;
      margin-left: 16px;
    }
    .close {
      margin-left: 16px;
      cursor: pointer;
      flex-shrink: 0;
    }
  }
}
</style>
