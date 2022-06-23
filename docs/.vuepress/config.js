const { defaultTheme } = require("@vuepress/theme-default");

module.exports = {
  base: "vue-ui",
  lang: "zh-CN",
  title: "你好， VuePress ！",
  description: "这是我的第dadasdas一个 VuePress 站点",
  theme: defaultTheme({
    // 侧边栏数组
    // 所有页面会使用相同的侧边栏
    sidebar: [
      // SidebarItem
      {
        text: "入门",
        // link: "/install/README.md",
        children: [
          // SidebarItem
          {
            text: "安装",
            link: "/install/README.md",
            // children: [],
          },
          // 字符串 - 页面文件路径
          {
            text: "快速上手",
            link: "/get-started/README.md",
            // children: [],
          },
        ],
      },
      // 字符串 - 页面文件路径
      {
        text: "组件",
        // link: "/install/README.md",
        children: [
          // SidebarItem
          {
            text: "按钮",
            link: "/components/button.md",
            // children: [],
          },
          // 字符串 - 页面文件路径
          {
            text: "输入框",
            link: "/get-started/README.md",
            // children: [],
          },
        ],
      },
    ],
  }),
};
