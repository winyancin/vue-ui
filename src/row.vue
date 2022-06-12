<template>
  <div class="row" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "d-row",
  props: {
    gutter: {
      type: [Number, String],
    },
  },
  computed: {
    rowStyle() {
      const {gutter} = this;
      return { marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px' }
    }
  },
  created() {

  },
  mounted() {
    console.log(this.$children);
    this.$children.forEach(vm => {
      vm.gutter = this.gutter
    });
  }
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-wrap: wrap;
}
</style>
