<template>
  <div class="collapse-item">
    <div class="title" @click="toggle">{{ title }}</div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "d-collapse-item",
  props: {
    title: {
      type: String,
      default: "",
    },
    name: {
      type: String,
    },
  },
  data() {
    return {
      open: false,
      single: false,
    };
  },
  computed: {},
  inject: ["eventBus"],
  mounted() {
    this.eventBus.$on("update:selected", (selected) => {
      if (selected.includes(this.name)) {
        this.open = true
      } else {
        this.open = false
      }
    });
  },
  methods: {
    toggle() {
      if (this.open) {
        this.eventBus && this.eventBus.$emit("update:removeSelected", this.name);
      } else {
        this.eventBus && this.eventBus.$emit("update:addSelected", this.name);
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.collapse-item {
  > .title {
    border: 1px solid #666;
    margin: -1px;
    padding: 6px;
  }
  &:first-child {
    > .title {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }
  &:last-child {
    .title:last-child {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
  > .content {
    padding: 6px;
  }
}
</style>
