<template>
<div class="content">
  <slot></slot>  
</div>
</template>

<script>
export default {
  name: 'd-content'
}
</script>

<style scoped>
.content {
  border: 1px solid grey;
  flex-grow: 1;
}
</style>