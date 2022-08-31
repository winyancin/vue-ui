<template>
  <div class="d-pager">
    <span class="nav" :class="{ disabled: currentPage === 1 }" @click="onClickPage(currentPage - 1)">
      <d-icon name="left"></d-icon>
    </span>
    <template v-for="page in pages" >
      <template v-if="page === currentPage">
        <span class="d-pager-item active">{{ page }}</span>
      </template>
      <template v-else-if="page === '...'">
        <span class="d-pager-item separator">{{ page }}</span>
      </template>
      <template v-else>
        <span class="d-pager-item" @click="onClickPage(page)">{{ page }}</span>
      </template>
    </template>
    <span class="nav" :class="{ disabled: currentPage === this.totalPages }" @click="onClickPage(currentPage + 1)">
      <d-icon name="right"></d-icon>
    </span>
  </div>
</template>

<script>
import DIcon from "./icon.vue";
export default {
  name: "d-pager",
  components: {
    DIcon,
  },
  props: {
    totalPages: {
      type: Number,
      default: 10,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    pages() {
      return unique([
        1,
        this.totalPages,
        this.currentPage,
        this.currentPage + 1,
        this.currentPage + 2,
        this.currentPage - 1,
        this.currentPage - 2,
      ])
        .filter((n) => n > 0 && n <= this.totalPages)
        .sort((a, b) => a - b)
        .reduce((prev, current, index, array) => {
          prev.push(current);
          if (array[index + 1] - array[index] > 1) {
            prev.push("...");
          }
          return prev;
        }, []);
    },
  },
  methods: {
    onClickPage(n) {
      if (n >= 1 && n <= this.totalPages) {
        this.$emit("update:currentPage", n);
      }
    },
  },
};

function unique(array) {
  return [...new Set(array)];
}
</script>

<style lang="scss" scoped>
@import "./styles/var";
$width: 20px;
$height: 20px;
$font-size: 12px;
.d-pager {
  display: flex;
  &-item {
    margin: 0 6px;
    border: 1px solid #e1e1e1;
    font-size: $font-size;
    border-radius: 4px;
    min-width: $width;
    text-align: center;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    line-height: $height;
    height: $height;
    padding: 4px;
    cursor: pointer;
    &:hover {
      border: 1px solid blue;
    }
    &.active {
      border: 1px solid $blue;
    }
    &.seperator {
      border: none;
    }
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  > .nav {
    margin: 0 4px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: $grey;
    width: $width;
    height: $height;
    border-radius: $border-radius;
    font-size: $font-size;
    cursor: pointer;
    &.disabled {
      svg {
        fill: darken($grey, 20%);
      }
      cursor:auto;
    }
  }
}
</style>
