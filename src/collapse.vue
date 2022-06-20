<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "d-collapse",
  props: {
    single: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Array,
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
    this.eventBus.$emit("update:selected", this.selected);
    this.eventBus.$on("update:addSelected", (name) => {
      if (this.single) {
        this.selected = [name];
      } else {
        this.selected.push(name);
      }
      this.$emit("update:selected", this.selected);
      this.eventBus.$emit("update:selected", this.selected);
    });
    this.eventBus.$on('update:removeSelected', name => {
      const index = this.selected.indexOf(name);
      this.selected.splice(index, 1);
      this.$emit("update:selected", this.selected);
      this.eventBus.$emit("update:selected", this.selected);
    })
  },
};
</script>

<style lang="scss" scoped>
.collapse {
  border: 1px solid #666;
  border-radius: 4px;
}
</style>
