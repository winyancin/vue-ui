<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'd-tabs-body',
  inject: ['eventBus'],
  created() {

  }
}
</script>

<style>
.tabs-body {

}
</style>