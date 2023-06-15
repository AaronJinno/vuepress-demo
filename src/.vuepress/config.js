import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro"

export default defineUserConfig({
  //############ 1. 站点配置 ################
  base: "/doc/", //基本路径：默认是"/" 如果文档没有在根目录下就必须指定
  lang: "zh-CN", //站点语言，默认是en-US
  title: "本站点的标题", //待修改站点信息
  description: "本站点的描述信息", //待修改站点信息
  //temp: "docs/.vuepress/.temp", //指定临时文件目录
  //dest:"dest", //打包后的输出目录,[可选]默认是dest
  //public: "docs/.vuepress/public", //指定 Public 文件目录,[可选]
  debug: true, //是否启用 Debug 模式，默认false
  //permalinkPattern: ":year/:month/:day/:slug.html", //页面生成永久链接的patter
  shouldPreload: true,//是否设置预加载，默认是true，这里采用默认
  shouldPrefetch: false,//是否全局懒加载，小站点可以设置，页面多浪费CDN。

  //############ 2. 多语言locales配置 ################
  //暂略，暂时只使用一种语言


  //############ 3. 引入主题配置文件  ################
  theme, //引入主题配置文件


  //############ 4. dev与build配置  ################
  host: "https://aicell.cc", //指定开发服务器的主机名，iP或url
  port: 8080, //指定开发服务器的端口号，默认是8080，冲突时会自动改
  open: false, //是否在开发服务器启动后打开浏览器，默认是false


  //############ 5. plugins插件配置  ################
  plugins:[
    //搜索插件
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
