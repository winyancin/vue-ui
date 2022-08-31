import { createApp } from 'vue'
import Demo from './demo.vue'
import toastPlugin from "./plugin";
const app = createApp(Demo);
app.use(toastPlugin);
app.mount('#app')