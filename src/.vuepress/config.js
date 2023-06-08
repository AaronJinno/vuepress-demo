import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro"

export default defineUserConfig({
  base: "/doc/", //必须指定，除非放在根目录下
  lang: "zh-CN",
  title: "本站点的标题", //待修改站点信息
  description: "本站点的描述信息", //待修改站点信息

  dest:"doc", //默认是dest，可以改为doc和base设置成一样的
  theme, //引入主题配置文件

  //是否设置预加载，默认是true，这里采用默认
  shouldPreload: true,

  //是否全局懒加载，小站点可以设置，页面多就别设置了浪费CDN。
  shouldPrefetch: false,

  plugins:[
    //1.搜索插件
    searchProPlugin({ 
      indexContent:true, //是否索引正文，默认只索引title、tag和简要
      customFields: [ //自定义项目的获取器
        // 为分类和标签添加索引
        {
          getter: (page) => page.frontmatter.category,
          formatter:{
            "/":  "分类：$content",
          }
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter:{
            "/": "标签：$content",
          },
        }
      ]
    }),
    
  ]
});
