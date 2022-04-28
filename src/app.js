import Vue from 'vue';
import Button from './button';
import ButtonGroup from './button-group';
import Icon from './icon'

Vue.component('d-button', Button)
Vue.component('d-icon', Icon)
Vue.component('d-button-group', ButtonGroup)

new Vue({
    el: "#app",
    data: {
        loading1: false,
        loading2: false
    }
})