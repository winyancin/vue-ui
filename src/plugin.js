import Toast from './toast';

function createToast({Vue, message, propsData, onClose}) {
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({ propsData })
  toast.$slots.default = [message];
  toast.$mount();
  toast.$on('close', onClose)
  document.body.appendChild(toast.$el);
  return toast;
}

let toast;

export default {
  install: (Vue, options) => {
    Vue.prototype.$toast = function(message, toastOptions) {
      if (toast) {
        toast.close();
      }
      toast = createToast({Vue, message, propsData: toastOptions, onClose: () => {
        toast = null;
      }})
    }
  }
}