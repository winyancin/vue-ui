<template>
  <div class="wrapper" :class="{error}">
    <input type="text" :value="value" :disabled="disabled" :readonly="readonly">
    <template v-if="error">
      <icon name="settings"></icon>
      <span>{{error}}</span>
    </template>
  </div>
</template>

<script>
/**
 * 属性
 * disabled
 * readOnly
 * error
 * 状态
 * focus
 * hover
 */
import Icon from './icon'
export default {
  components: {Icon},
  name: "input",
  props: {
    value: String,
    disabled: {
      default: false,
      type: Boolean
    },
    readonly: {
      default: false,
      type: Boolean
    },
    error: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
  $error-color: #F1453D;
  .wrapper {
    display: inline-flex;
    align-items: center;
    > :not(:last-child) {margin-right: 4px;}
    &.error {
      >input {border: 1px solid $error-color;}
      svg {fill: $error-color;}
      span {color: $error-color;font-size: 14px;}
    }
    >input {
      outline: none;
      background: #FFFFFF;
      border: 1px solid rgba(102,102,102,0.5);
      border-radius: 4px;
      font-size: 14px;
      padding: 6px;
      &:focus, &:hover {
        border: 1px solid rgba(102,102,102,1);
      }
      &[readonly], &[disabled] {
        color: rgba(102,102,102,0.5);
      }
      &[error] {
        color: rgba(102,102,102,0.5);
      }
    }
  }
</style>