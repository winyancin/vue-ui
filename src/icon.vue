<template>
  <svg v-if="name" class="icon">
    <use :xlink:href=`#icon-${name}`></use>
  </svg>
</template>

<script>
export default {
  name: "icon",
  props: {
    name: String
  }
}
</script>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
}
</style>