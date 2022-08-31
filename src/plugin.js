/* eslint-disable no-unused-vars */
import Toast from "./toast";
import { createApp, h } from "vue";

let toastInstance;

function createToast({ app, message, propsData, onClose }) {
  let root = document.createElement("div");
  document.querySelector("body")?.appendChild(root);
  const toast = h(
    Toast,
    {
      ...propsData,
    },
    {
      default: () => [message],
    }
  );
  toastInstance = createApp(toast);
  toastInstance.mount(root);
  return toastInstance;
}

export default {
  install: (app) => {
    app.config.globalProperties.$toast = function (message, toastOptions) {
      if (toastInstance) {
        toastInstance.unmount();
      }
      toastInstance = createToast({
        app,
        message,
        propsData: toastOptions,
        onClose: () => {
          toastInstance = null;
        },
      });
    };
  },
};
