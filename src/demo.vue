<template>
  <div>
    <!-- <h3>分页</h3>
    <Table></Table>
    <Pager v-model:current-page="currentPage" :total-pages="10" />

    <h3>网格</h3>
    <div style="border: 1px solid grey">
      <Row>
        <Col span="24" :ipad="{ span: 12 }" :narrow-pc="{ span: 24 }">
          <div style="border: 1px solid green; height: 100px"></div>
        </Col>
        <Col span="24" :ipad="{ span: 12 }" :narrow-pc="{ span: 8 }">
          <div style="border: 1px solid green; height: 100px"></div>
        </Col>
        <Col span="24" :ipad="{ span: 12 }" :narrow-pc="{ span: 8 }">
          <div style="border: 1px solid green; height: 100px"></div>
        </Col>
        <Col span="24" :ipad="{ span: 12 }" :narrow-pc="{ span: 8 }">
          <div style="border: 1px solid green; height: 100px"></div>
        </Col>
        <Col span="24" :ipad="{ span: 12 }" :narrow-pc="{ span: 8 }">
          <div style="border: 1px solid green; height: 100px"></div>
        </Col>
        <Col span="24" :ipad="{ span: 12 }" :narrow-pc="{ span: 8 }">
          <div style="border: 1px solid green; height: 100px"></div>
        </Col>
      </Row>
    </div>-->
  </div> 
  <Button @click="showToast('top')">创建Toast</Button>
</template>

<script>
// import Pager from "./pager.vue";
// import Table from "./table.vue";
// import Row from "./row.vue";
// import Col from "./col.vue";
import Button from "./button.vue";

export default {
  name: "demo-app",
  components: { Button },
  data() {
    return {
      currentPage: 1,
    };
  },
  mounted() {
    console.log('mounted') ;
  },
  methods: {
    showToast(position) {
      this.$toast("内容" + Math.random(10), {
        closeButton: {
          text: "关闭",
          cb: () => {
            console.log("closeTosssxxxast");
          },
        },
        position,
        autoClose: false,
      });
    },
  },
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
