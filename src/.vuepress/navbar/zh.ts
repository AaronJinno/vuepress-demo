import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  // 测试导航1：无下拉的单导航
  {
    text: "指南",
    icon: "arrow",
    link:"/guide/"
  },

  // 测试导航2：有下拉的导航
  { 
    text: "二级导航", 
    icon: "ability", 
    prefix :"/second/",
    children:[
      {
        text:"控制台",
        icon: "yibiaopan", 
        link:"console/"
      },
      {
        text:"项目文档",
        icon: "wendang", 
        link:"itemdoc/"
      },
    ]
  },

  //测试导航3：三级导航，只支持二级导航，第三级通过分类显示
  {
    text: "三级导航",
    icon: "context",
    prefix: "/second/",
    children:[
      { 
        text: "分类一", 
        icon: "ability", 
        prefix :"/second/",
        children:[
          {
            text:"属于分类一",
            icon: "yibiaopan", 
            link:"console/"
          },
        ]
      },
      { 
        text: "分类二", 
        icon: "ability", 
        prefix :"/second/",
        children:[
          {
            text:"属于分类二",
            icon: "yibiaopan", 
            link:"console/"
          },
        ]
      },
    ]
  },


  //测试导航4：单文件导航，text就是文件内配置的title。
  "/使用指南"

]);
