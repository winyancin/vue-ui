<template>
  <div class="tabs-item" @click="onClick" :class="classes" :data-name="name">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "d-tabs-item",
  inject: ["eventBus"],
  data() {
    return {
      active: false,
    };
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String | Number,
      require: true,
    },
  },
  computed: {
    classes() {
      return {
        active: this.active,
        disabled: this.disabled
      };
    },
  },
  mounted() {
    this.eventBus.$on("update:selected", (name, el) => {
      this.active = name === this.name;
    });
  },
  methods: {
    onClick() {
      if (this.disabled) return;
      this.eventBus.$emit("update:selected", this.name, this);
    },
  },
};
</script>

<style lang="scss" scoped>$blue: blue;
  $disabled-text-color: grey;
  .tabs-item {
    flex-shrink: 0;
    padding: 0 1em;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;

    &.active {
      color: $blue;
      font-weight: bold;
    }
    &.disabled {
      color: $disabled-text-color;
      cursor: not-allowed;
    }
  }
</style>
