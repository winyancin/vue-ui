import Vue from 'vue';
import Button from './button';
import Icon from './icon'

Vue.component('d-button', Button)
Vue.component('d-icon', Icon)

new Vue({
    el: "#app",
    data: {
        loading1: false,
        loading2: false
    }
})