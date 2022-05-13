const expect = chai.expect;
import Vue from 'vue';
import Icon from '../src/icon';

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Icon', () => {
    it('存在', () => {
        expect(Icon).to.be.ok
    })

    it('可以设置name', () => {
        const Constructor = Vue.extend(Icon)
        const vm = new Constructor({
            propsData: {
                name: 'settings'
            }
        }).$mount();
        console.log(vm.$el);
        const useElement = vm.$el.querySelector('use')

        expect(useElement.getAttribute('xlink:href')).to.equal('#icon-settings')
        vm.$destroy()
    })
})