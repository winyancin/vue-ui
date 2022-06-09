import Vue from 'vue';
import Button from './button';
import ButtonGroup from './button-group';
import Icon from './icon';
import Input from './input';

Vue.component('d-button', Button)
Vue.component('d-icon', Icon)
Vue.component('d-button-group', ButtonGroup)
Vue.component('d-input', Input);

new Vue({
    el: "#app",
    data: {
        loading1: false,
        loading2: false
    },
    methods: {
        inputChange($event) {
            console.log($event);
        }
    }
})