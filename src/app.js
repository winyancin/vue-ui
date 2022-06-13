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
Vue.use(toastPlugin);

new Vue({
  el: "#app",
  data: {
    loading1: false,
    loading2: false,
  },
  // created() {
  //     this.$toast()
  // },
  methods: {
    inputChange($event) {
      console.log($event);
    },

    showToast() {
      this.$toast('我是 加粗文字加粗文字加粗文字加粗文字加粗文字加粗文字加粗文字加粗文字加粗文字加粗文字加粗文字加粗文字加粗文字加粗文字加粗文字加粗文字加粗文字加粗文字加粗文字加粗文字加粗文字加粗文字加粗文字加粗文字加粗文字加粗文字加粗文字加粗文字加粗文字加粗文字加粗文字加粗文字加粗文字加粗文字加粗文字加粗文字加粗文字加粗文字加粗文字加粗文字', {
        closeButton: {
          text: "关闭关闭关闭关闭",
          cb: () => {
            console.log("closeTosssxxxast");
          },
        },
        position: 'middle',
        autoClose: false
      });
    },
  },
});
