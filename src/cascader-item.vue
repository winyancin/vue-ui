<template>
  <div class="cascader-item">
    <div class="cascader-left">
      <div v-for="item in items" @click="selectedItem = item" class="left">
        {{ item.label }}
    </div>
    </div>
    
    <div v-if="rightItem" class="right">
      <cascader-item :items="rightItem"></cascader-item>
    </div>
  </div>
</template>

<script>
export default {
  name: "cascader-item",
  props: {
    items: {
      type: Array,
    },
  },
  data() {
    return {
      selectedItem: null,
    };
  },
  methods: {
    onSelect(item) {
      this.selctedItem = item;
    },
  },
  computed: {
    selctedItem() {
      return this.items && this.items[0];
    },
    rightItem() {
      return this.selectedItem?.children;
    },
  },
};
</script>

<style scoped lang="scss">
@import "./styles/var";
.cascader-item {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  .left {
    border: 1px solid red;
  }
  .right {
    margin-top: -1px;
  }
}
</style>
