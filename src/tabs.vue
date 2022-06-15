<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "d-tabs",
  props: {
    selected: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },
  mounted() {
    this.$children.forEach((vm) => {
      if (vm.$options.name === "d-tabs-head") {
        vm.$children.forEach((child) => {
          console.log(child.$options.name);
          if (child.$options.name === "d-tabs-item" && this.selected === child.name) {
            this.eventBus.$emit("update:selected", this.selected, child);
          }
        });
      }
    });
  },
};
</script>

<style></style>
