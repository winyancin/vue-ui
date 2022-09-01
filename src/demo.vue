<template>
  <!-- <div>
    <h3>分页</h3>
    <Table></Table>
    <Pager v-model:current-page="currentPage" :total-pages="10" />
    <Tabs :selected.sync="selectedTab" @update:selected="yyy">
      <TabsHead @update:selected="yyy">
        <template slot="actions">
          <button>设置</button>
        </template>
        <TabsItem name="woman" disabled>
          美女
        </TabsItem>
        <TabsItem name="finance">
          财经
        </TabsItem>
        <TabsItem name="sports">
          体育
        </TabsItem>
      </TabsHead>
      <TabsBody>
        <TabsPane name="woman">
          美女相关资讯
        </TabsPane>
        <TabsPane name="finance">
          财经相关资讯
        </TabsPane>
        <TabsPane name="sports">
          体育相关资讯
        </TabsPane>
      </TabsBody>
    </Tabs>
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
    </div>
    <div>
      <d-button @click="showToast('top')">创建Toast</d-button>
    </div>

    <div>
      <Collapse :selected.sync="selected">
        <CollapseItem title="标题1" name="1">内容1</CollapseItem>
        <CollapseItem title="标题2" name="2">内容2</CollapseItem>
        <CollapseItem title="标题3" name="3">内容3</CollapseItem>
      </Collapse>
    </div>

    <div>
      <Popover position="right">
        <template slot="content">
          <div>popover</div>
        </template>
        <div>内容</div>
      </Popover>
    </div>

  </div> -->

  <div style="width: 500px;">
    <Cascader :source="source" />
  </div>
</template>

<script>
import Collapse from "@/collapse";
import CollapseItem from "@/collapse-item";
import Pager from "./pager.vue";
import Table from "./table.vue";
import Row from "./row.vue";
import Col from "./col.vue";
import Button from "./button.vue";
import Tabs from "./tabs";
import TabsHead from "@/tabs-head";
import TabsItem from "@/tabs-item";
import TabsPane from "@/tabs-pane";
import TabsBody from "@/tabs-body";
import Popover from "@/popover";
import Cascader from "./cascader.vue";

export default {
  name: "demo-app",
  components: {
    'd-button': Button, Tabs, TabsHead, TabsItem, TabsPane, TabsBody, Pager, Table, Row, Col,
  Popover, CollapseItem, Collapse, Cascader,},
  data() {
    return {
      selectedTab: "finance",
      currentPage: 1,
      selected: ["1","2"],
      source: [
        {
          name: "标题1",
          content: "内容1"
        },
        {
          name: "标题2",
          content: "内容2"
        },
        {
          name: "标题3",
          content: "内容3"
        }
      ]
    };
  },
  mounted() {
    console.log('mounted') ;
  },
  methods: {
    yyy() {
      console.log("yyy");
    },
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
