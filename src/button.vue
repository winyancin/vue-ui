<template>
  <button class="d-button">按钮</button>
</template>

<script>
  export default {}
</script>

<style lang="scss">
.d-button {
  font-size: var(--button-font-size);
  padding: 0 1em;
  background: var(--button-bg);
  border: 1px solid var(--button-border-color);
  border-radius: 4px;
  height: 32px;
  color: #666666;
  &:focus {
    outline: none;
  }
  &:hover {
    background: var(--button-hover-bg);
    border: 1px solid var(--button-border-hover-color);
  }
}
</style>