<template>
  <div>
    <DPager v-model:current-page="currentPage" :total-pages="10" />
  </div>
</template>

<script>
import DPager from "./pager.vue";
export default {
  name: "demo-app",
  components: { DPager },
  data() {
    return {
      currentPage: 1
    }
  }
};
</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
:root {
  --button-font-size: 14px;
  --button-bg: #ffffff;
  --button-hover-bg: #eeeeee;
  --button-border-color: #999;
  --button-border-hover-color: #666666;
}
</style>
