<template>
  <div class="tabs-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'd-tabs-pane',
  inject: ['eventBus'],
  props: {
    name: {
      // eslint-disable-next-line vue/require-prop-type-constructor
      type: String | Number,
      required: true
    }
  },
  data() {
    return {
      active: false
    }
  },
  computed: {
    classes () {
      return {active: this.active}
    }
  },
  created() {
    this.eventBus.$on('update:selected', (name) => {
      this.active = name === this.name 
    })
  }
}
</script>

<style lang="scss" scoped>
  .tabs-pane {
    &.active {
      /* background: red; */
    }
  }
</style>