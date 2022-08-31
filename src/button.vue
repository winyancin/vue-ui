<template>
  <button class="d-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
    <d-icon v-if="!loading" :name="icon"></d-icon>
    <d-icon v-if="loading" name="loading" class="loading"></d-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {
  name: "d-button",

  props: {
    loading: Boolean,
    icon: String,
    iconPosition: {
      type: String,
      default: 'left',
      validate(value) {
        return value === 'left' || value === 'right'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.d-button {
  font-size: var(--button-font-size);
  padding: 0 1em;
  background: var(--button-bg);
  border: 1px solid var(--button-border-color);
  border-radius: 4px;
  height: 32px;
  color: #666666;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:focus {
    outline: none;
  }
  &:hover {
    background: var(--button-hover-bg);
    border: 1px solid var(--button-border-hover-color);
  }
  >.icon {
    order: 1;
    margin-right: 0.3em;
  }
  >.content {
    order: 2;
  }
  &.icon-right {
    >.icon {
      order: 2;
      margin-left: 0.3em;
      margin-right: 0;
    }
    >.content {
      order: 1;
    }
  }
  .loading {
    animation: spin 1s infinite linear;
  }
}

</style>