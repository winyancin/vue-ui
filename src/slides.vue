<template>
  <div class="slides">
    <div class="slides-window">
      <div class="slides-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "d-slides",
  props: {
    selected: {
      type: String,
    },
    autoPlay: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    this.updateChildren();
    this.playAutomatically();
  },
  updated() {
    this.updateChildren();
  },
  methods: {
    playAutomatically() {
      const names = this.$children.map((vm) => vm.name);
      let index = names.indexOf(this.getSelected());
      const run = () => {
        if (index === names.length) {
          index = 0;
        }
        this.$emit('update:selected', names[index + 1]);
        index++;
        console.log(index);
        setTimeout(run, 3000);
      }
      setTimeout(run, 3000);
    },
    getSelected() {
      return this.selected || this.$children[0].name;
    },
    updateChildren() {
      const selected = this.getSelected();
      this.$children.forEach((vm) => {
        vm.selected = selected;
        const names = this.$children.map((vm) => vm.name);
        const newIndex = names.indexOf(selected);
        const oldIndex = names.indexOf(vm.name);
        console.log({newIndex}, {oldIndex})
        vm.reverse = newIndex > oldIndex ? false : true;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.slides {
  border: 1px solid black;
  &-window {
    overflow: hidden;
  }
  &-wrapper {
    border: 1px solid green;
    position: relative;
  }
}
</style>
