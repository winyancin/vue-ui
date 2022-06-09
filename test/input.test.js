const expect = chai.expect;
import Vue from "vue";
import Input from "../src/input";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Input", () => {
  it("存在.", () => {
    expect(Input).to.be.ok;
  });

  describe("接受props", () => {
    it("接收 value", () => {
      const Constructor = Vue.extend(Input);
      const vm = new Constructor({
        propsData: {
          value: "1234",
        },
      }).$mount();
      const inputElement = vm.$el.querySelector("input");
      expect(inputElement.value).to.equal("1234");
      vm.$destroy();
    });

    it("接收 readonly", () => {
      const Constructor = Vue.extend(Input);
      const vm = new Constructor({
        propsData: {
          value: "1234",
        },
      }).$mount();
      const inputElement = vm.$el.querySelector("input");
      expect(inputElement.value).to.equal("1234");
      vm.$destroy();
    });

    it("接收 disabled", () => {
      const Constructor = Vue.extend(Input);
      const vm = new Constructor({
        propsData: {
          value: "1234",
        },
      }).$mount();
      const inputElement = vm.$el.querySelector("input");
      expect(inputElement.value).to.equal("1234");
      vm.$destroy();
    });

    it("接收 error", () => {
      const Constructor = Vue.extend(Input);
      const vm = new Constructor({
        propsData: {
          error: "你错了",
        },
      }).$mount();
      const useElement = vm.$el.querySelector("use");
      expect(useElement.getAttribute("xlink:href")).to.equal("#icon-error");
      const errorMessage = vm.$el.querySelector(".errorMessage");
      expect(errorMessage.innerText).to.equal("你错了");
    });
  });

  describe("支持 event", () => {
    it("触发事件", () => {
      ["change", "input", "focus", "blur"].map((eventName) => {
        const Constructor = Vue.extend(Input);
        const vm = new Constructor({}).$mount();
        const callback = sinon.fake();
        vm.$on(eventName, callback);
        // 触发input的change事件
        let event = new Event(eventName);
        let inputElement = vm.$el.querySelector("input");
        inputElement.dispatchEvent(event);
        expect(callback).to.have.been.calledWith(event);
      });
    });
  });
});
