// import { createApp } from 'vue'
// import Demo from './demo.vue'
// import toastPlugin from "./plugin";
// const app = createApp(Demo);
// app.use(toastPlugin);
// app.mount('#app')

import Vue from "vue";
import Demo from "./demo.vue";
import toastPlugin from "./plugin";

Vue.config.productionTip = false;
Vue.use(toastPlugin);

new Vue({
    render: h => h(Demo)
}).$mount("#app");