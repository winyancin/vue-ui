<template>
  <div class="cascader">
    {{source}}
    <div class="trigger" @click="popoverVisible = !popoverVisible"></div>
    <div class="popover" v-if="popoverVisible">
      <CascaderItem :items="source" ></CascaderItem>
    </div>
  </div>
</template>

<script>
import CascaderItem from "@/cascader-item";
export default {
  name: "cascader",
  components: { CascaderItem },

  data() {
    return {
      selected: [],
      popoverVisible: false,
      source: [
        {
          value: "标题1",
          label: "内容1",
          children: [
            {
              value: "标题1-1",
              label: "内容1-1",
            },
            {
              value: "标题1-2",
              label: "内容1-2",
            },
            {
              value: "标题1-3",
              label: "内容1-3",
              children: [
                {
                  value: "标题1-3-1",
                  label: "内容1-3-1",
                },
              ],
            },
          ],
        },
        {
          value: "标题2",
          label: "内容2",
          children: [
            {
              value: "标题2-1",
              label: "内容2-1",
            },
            {
              value: "标题2-2",
              label: "内容2-2",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.trigger {
  width: 200px;
  height: 40px;
  border: 1px solid red;
}
.popover {
  display: flex;
  border: 1px solid green;
  position: absolute;
  width: 500px;
  height: 400px;
}
.cascader {
  font-size: 12px;
  position: relative;
}
</style>
