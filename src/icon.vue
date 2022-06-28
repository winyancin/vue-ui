<template>
  <svg v-if="name" class="icon">
    <use :href='xlinkHref'></use>
  </svg>
</template>

<script>
import "./svg.js";
export default {
  name: "d-icon",
  props: {
    name: String
  },
  data() {
    return {
      xlinkHref: `#i-${this.name}`
    }
  }
}
</script>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
}
</style>