<template>
  <div class="col" :class="colClass" :style="colStyle">
    <div style="border: 1px solid green; height: 100px">
      <slot></slot>
    </div>
  </div>
</template>

<script>
let validator = (value) => {
  const keys = Object.keys(value);
  const valid = true;
  keys.forEach((key) => {
    if (!["span", "offset"].includes(key)) {
      valid = false;
    }
  });
  return valid;
};
export default {
  name: "d-col",
  props: {
    span: {
      type: [Number, String],
    },
    offset: {
      type: [Number, String],
    },
    ipad: {
      type: Object,
      validator,
    },
    narrowPc: {
      type: Object,
      validator,
    },
    pc: {
      type: Object,
      validator,
    },
    widePc: {
      type: Object,
      validator,
    },
  },
  computed: {
    colClass() {
      const { span, offset, ipad, narrowPc, pc, widePc } = this;
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`,
        ...(ipad ? [`col-ipad-${ipad.span}`] : []),
        ...(narrowPc ? [`col-narrowPc-${narrowPc.span}`] : []),
        ...(pc ? [`col-pc-${pc.span}`] : []),
        ...(widePc ? [`col-widePc-${widePc.span}`] : []),
      ];
    },
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: this.gutter / 2 + "px",
      };
    },
  },
  data() {
    return {
      gutter: 0,
    };
  },

  created() {
    // console.log("col created");
  },
  mounted() {
    // console.log("col mounted");
  },
};
</script>

<style lang="scss" scoped>
.col {
  width: 50%;
  $class-prefix: col-;
  @for $i from 1 through 24 {
    &.#{$class-prefix}#{$i} {
      width: calc($i/24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $i from 1 through 24 {
    &.#{$class-prefix}#{$i} {
      margin-left: calc($i / 24) * 100%;
    }
  }

  @media (min-width: 577px) {
    $class-prefix: col-ipad-;
    @for $i from 1 through 24 {
      &.#{$class-prefix}#{$i} {
        width: calc($i/24) * 100%;
      }
    }
    $class-prefix: offset-ipad-;
    @for $i from 1 through 24 {
      &.#{$class-prefix}#{$i} {
        margin-left: calc($i / 24) * 100%;
      }
    }
  }

  @media (min-width: 769px) {
    $class-prefix: col-narrowPc-;
    @for $i from 1 through 24 {
      &.#{$class-prefix}#{$i} {
        width: calc($i/24) * 100%;
      }
    }
    $class-prefix: offset-narrowPc-;
    @for $i from 1 through 24 {
      &.#{$class-prefix}#{$i} {
        margin-left: calc($i / 24) * 100%;
      }
    }
  }

  @media (min-width: 993px) {
    $class-prefix: col-pc-;
    @for $i from 1 through 24 {
      &.#{$class-prefix}#{$i} {
        width: calc($i/24) * 100%;
      }
    }
    $class-prefix: offset-pc-;
    @for $i from 1 through 24 {
      &.#{$class-prefix}#{$i} {
        margin-left: calc($i / 24) * 100%;
      }
    }
  }

  @media (min-width: 1201px) {
    $class-prefix: col-widePc-;
    @for $i from 1 through 24 {
      &.#{$class-prefix}#{$i} {
        width: calc($i/24) * 100%;
      }
    }
    $class-prefix: offset-widePc-;
    @for $i from 1 through 24 {
      &.#{$class-prefix}#{$i} {
        margin-left: calc($i / 24) * 100%;
      }
    }
  }
}
</style>
