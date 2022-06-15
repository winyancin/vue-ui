import Vue from "vue";
import Button from "./button";
import ButtonGroup from "./button-group";
import Icon from "./icon";
import Input from "./input";
import Row from "./row";
import Col from "./col";
import Layout from "./layout";
import Footer from "./footer";
import Header from "./header";
import Sider from "./sider";
import Content from "./content";
import Toast from "./toast";
import toastPlugin from "./plugin";
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'

Vue.component("d-button", Button);
Vue.component("d-icon", Icon);
Vue.component("d-button-group", ButtonGroup);
Vue.component("d-input", Input);
Vue.component("d-row", Row);
Vue.component("d-col", Col);
Vue.component("d-layout", Layout);
Vue.component("d-footer", Footer);
Vue.component("d-header", Header);
Vue.component("d-sider", Sider);
Vue.component("d-content", Content);
Vue.component("d-toast", Toast);
Vue.component("d-tabs", Tabs);
Vue.component("d-tabs-head", TabsHead);
Vue.component("d-tabs-body", TabsBody);
Vue.component("d-tabs-item", TabsItem);
Vue.component("d-tabs-pane", TabsPane);
Vue.use(toastPlugin);

new Vue({
  el: "#app",
  data: {
    loading1: false,
    loading2: false,
  },

  methods: {
    inputChange($event) {
      console.log($event);
    },

    showToast(position) {
      this.$toast('内容'+Math.random(10), {
        closeButton: {
          text: "关闭",
          cb: () => {
            console.log("closeTosssxxxast");
          },
        },
        position,
        autoClose: false
      });
    },
    yyy() {
      console.log('yyy');
    }
  },
});
