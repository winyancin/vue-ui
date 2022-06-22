<template>
  <transition name="slide">
    <div class="slides-item" v-if="visible" :class="{ reverse }">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: "d-slides-item",
  props: {
    name: {
      type: String,
      default: undefined,
    },
  },
  data() {
    return {
      selected: undefined,
      reverse: true,
    };
  },
  computed: {
    visible() {
      return this.selected === this.name;
    },
  },
};
</script>

<style lang="scss" scoped>
.slides-item {
  /* flex-shrink: 0; */
}
.slide-leave-active {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.slide-enter {
  transform: translateX(100%);
  opacity: 0;
}

.slide-enter.reverse {
  transform: translateX(-100%);
}
.slide-leave-to {
  transform: translateX(-100%) scale(0.5);
  opacity: 0;
}

.slide-leave-to.reverse {
  transform: translateX(100%)  scale(0.5);
}
.slide-enter-active {
  transition: all 1s;
}
.slide-leave-active {
  transition: all 1s;
}
</style>
