<template>
  <div class="tabs-item" @click="xxx" :class="classes">
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
      };
    },
  },
  mounted() {
    console.log("eventBus", this.eventBus);
    this.eventBus.$on("update:selected", (name) => {
      console.log("name", name);
      this.active = name === this.name;
    });
  },
  methods: {
    xxx() {
      console.log("xxxx");
      this.eventBus.$emit("update:selected", this.name);
    },
  },
};
</script>

<style lang="scss" scoped>
.tabs-item {
  flex-shrink: 0;
  padding: 0 1em;
  &.active {
    border: 1px solid rgba(0, 128, 0, 1);
    opacity: 1;
  }
  border: 1px solid rgb(128, 128, 128, 0.1);
}
</style>
