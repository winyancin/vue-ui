<template>
  <div class="popover" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible" :class="{ [`position-${position}`]: true }">
      <slot name="content" :close="close"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "d-popover",
  props: {
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "left", "right"].includes(value);
      },
    },
    trigger: {
      type: String,
      default: 'click',
      validator(value) {
        return ['click', 'hover'].includes(value);
      }
    }
  },
  data() {
    return {
      visible: false,
    };
  },
  computed: {

  },
  mounted() {
    if (this.trigger === 'click') {
      this.$refs.popover.addEventListener('click', this.onClick);
    } else if (this.trigger === 'hover') {
      this.$refs.popover.addEventListener('mouseenter', this.open);
      this.$refs.popover.addEventListener('mouseleave', this.close);
    }
  },
  methods: {
    onClickDocument(e) {
      if (!this.$refs.contentWrapper?.contains(e.target)) {
        this.close();
      }
    },
    positionContent() {
      const { width, height, left, top } = this.$refs.triggerWrapper.getBoundingClientRect();
      const { height: height2 } = this.$refs.contentWrapper.getBoundingClientRect();
      document.body.appendChild(this.$refs.contentWrapper);

      const positions = {
        top: {
          left: left + window.scrollX,
          top: top + window.scrollY,
        },
        bottom: {
          left: left + window.scrollX,
          top: top + height + window.scrollY,
        },
        left: {
          left: left + window.scrollX,
          top: top + window.scrollY,
        },
        right: {
          left: left + window.scrollX + width,
          top: top + window.scrollY,
        },
      };
      this.$refs.contentWrapper.style.left = positions[this.position].left + "px";
      this.$refs.contentWrapper.style.top = positions[this.position].top + "px";
    },
    open() {
      this.visible = true;
      console.log("打开");
      setTimeout(() => {
        this.positionContent();
        document.addEventListener("click", this.onClickDocument);
      });
    },
    close() {
      this.visible = false;
      console.log("关闭");
      document.removeEventListener("click", this.onClickDocument);
    },
    onClick(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        if (this.visible === true) {
          this.close();
        } else {
          this.open();
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
  position: absolute;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #333;
  background-color: white;
  filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.5));
  max-width: 20em;
  word-break: break-all;
  &:before,
  &::after {
    display: block;
    content: "";
    border: 10px solid red;
    width: 0;
    height: 0;
    border-color: transparent;
    position: absolute;
  }

  &.position-top {
    transform: translateY(calc(-100% - 10px));
    &:before {
      border-bottom: none;
      border-top-color: black;
      top: 100%;
    }
    &:after {
      border-bottom: none;
      border-top-color: white;
      top: calc(100% - 1px);
    }
  }
  &.position-bottom {
    transform: translateY(10px);
    &:before {
      border-bottom-color: black;
      border-top: none;
      bottom: 100%;
    }
    &:after {
      border-top: none;
      border-bottom-color: white;
      bottom: calc(100% - 1px);
    }
  }

  &.position-left {
    transform: translateX(calc(-100% - 10px));
    &:before {
      border-right: none;
      border-left-color: black;
      left: 100%;
    }
    &:after {
      border-right: none;
      transform: translateY(calc(-100% + 1px));
      border-left-color: white;
      left: calc(100% - 1px);
    }
  }

  &.position-right {
    transform: translateX(10px);
    &:before {
      border-left: none;
      border-right-color: black;
      right: 100%;
    }
    &:after {
      border-left: none;
      transform: translateY(calc(-100% + 1px));
      border-right-color: white;
      right: calc(100% - 1px);
    }
  }
}
</style>
