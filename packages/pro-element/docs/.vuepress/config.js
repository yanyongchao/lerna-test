// 很多时候，我们引入自己的组件库，路径是不对的，
//这时就需要引入path，并在后面的chainWebpack进行配置
// const path = require('path')
// function resolve (dir) {
//   return path.join(__dirname, '../../', dir)
// }

// -------------------！！！重要！！！！-----------------
// 为了更好的理解，以下所有配置，注释，须配合查看页面实际效果！

module.exports = {
  title: 'pro-element', //标题
  description: '开箱即用的vue2组件库文档', //描述
  base: '/', //基本url
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }], // 增加一个自定义的 favicon
  ],
  dest: './docs_dist', //打包位置
  port: 6868,

  //主题配置
  themeConfig: {
    //顶部导航栏配置
    nav: [
      { text: '主页', link: '/' }, // 内部链接 以docs为根目录
      { text: '组件文档', link: '/components/quickstart' },
      { text: 'gitlab地址', link: 'https://github.com/1011cat' },
    ],
    // 这里使用的是多个侧边栏设置
    sidebar: {
      '/components/': [
        {
          title: '开发指南', // 必要的
          path: '', //如果你不想'基础组件'可点击并有对应说明，就直接设为空，或者不写,并且nav的link也不要指向 '/components/2.0/'而是'/components/2.0/catButton'
          collapsable: false, // 可选的, 右侧侧边栏是否展开,默认值是 true
          // 如果组件很多时，建议将children配置单独放到一个js文件中，然后进行引入
          children: [
            {
              title: '快速开始',
              path: 'quickstart',
            },
          ],
        },
        {
          title: '基础组件',
          path: '',
          collapsable: false,
          children: [
            {
              title: 'Button 按钮',
              path: 'catButton',
            },
          ],
        },
      ],
    },
    sidebarDepth: 1, // 将同时提取markdown中h2，显示在侧边栏上
    lastUpdated: '最后更新于', // 文档更新时间：每个文件git最后提交的时间
  },

  markdown: {
    lineNumbers: true, // 代码块显示行号
  },

  plugins: [
    // 官方回到顶部插件
    '@vuepress/back-to-top',

    //官方图片放大组件 目前是所有img都可以点击放大。具体配置见https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-medium-zoom.html
    ['@vuepress/medium-zoom', { selector: 'img' }],
  ],

  // vuepress里修改webpack配置，使用的是chainWebpack进行链式调用
  // 具体使用可以参考我这个例子和 https://github.com/neutrinojs/webpack-chain/tree/v5
  // chainWebpack: (config, isServer) => {
  //   config.resolve.alias
  //     .set('@',resolve('src'))
  // }
};
