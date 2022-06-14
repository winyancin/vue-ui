const expect = chai.expect;
import Vue from "vue";
import Toast from "../src/Toast";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Toast", () => {
  it("存在.", () => {
    expect(Toast).to.be.ok;
  });
  // 测试用例包括2秒的超时设置
  describe("接受props", () => {
    it("接受 autoClose", (done) => {
      const div = document.createElement("div");
      const Constructor = Vue.extend(Toast);
      const vm = new Constructor({
        propsData: {
          autoClose: 1.5,
        },
      }).$mount(div);
      vm.$on("close", () => {
        expect(document.body.contains(vm.$el)).to.eq(false);
        done();
      });
    });

    it("接收closeButton", () => {
      const callback = sinon.fake();
      const Constructor = Vue.extend(Toast);
      const vm = new Constructor({
        propsData: {
          closeButton: {
            text: "关闭吧",
            cb: callback,
          },
        },
      }).$mount();
      const closeButton = vm.$el.querySelector(".close");
      expect(closeButton.textContent).to.eq("关闭吧");
      closeButton.click();
      expect(callback).to.have.been.called;
    });

    it("enableHtml", () => {
      const Constructor = Vue.extend(Toast);
      const vm = new Constructor({
        propsData: {
          enableHtml: true
        }
      });
      vm.$slots.default = ['<strong id="test">hi</strong>'];
      vm.$mount();
      const strong = vm.$el.querySelector('#test');
      expect(strong).to.exist;
    });

    it("position", () => {
      const Constructor = Vue.extend(Toast);
      const vm = new Constructor({
        propsData: {
          position: 'bottom'
        }
      });
      vm.$mount();
      expect(vm.$el.classList.contains('position-bottom')).to.eq(true);
    });

  });
});
