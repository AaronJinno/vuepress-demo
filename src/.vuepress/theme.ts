import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/navbar.js";
import { zhSidebar } from "./sidebar/sidebar.js";

export default hopeTheme({
  //1.基本配置
  hostname: "https://cybercell.cc/",
  author: {
    name: "Victor Da V",
    url: "https://cybercell.cc/about",
  },

  //2.外观配置
  favicon: "/favicon.svg",
  darkmode: "toggle",
  print:true,
  // iconAssets: "iconfont",
  // 设置icon资源
  iconAssets:[
    //job
    "/base/iconfont/xxx/iconfont.css"

  ],

  //3.布局配置
  logo: "/logo.svg",
  repoDisplay: false,
  navbarIcon: true,
  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Language","Outlook","Search"]
  },
  sidebarIcon: true,
  headerDepth: 1,
  pageInfo:[
    "Date"
    //"Author","Date","Category","Tag","Word"
  ],
  lastUpdated: false, //上次更新时间
  contributors: false,
  editLink: false,
  // footer: "Victor Da V",
  displayFooter: true,
  // copyright: "Copyright © Free To Copy",
  toc: true,

  //4.locale
  locales: {
    "/": {
      navbar: zhNavbar,
      sidebar: zhSidebar,
      // blog:{
      //   description:"Rangers for the future of the world, AI learners"
      // }
    },
  },

  //5.功能配置
  encrypt: {
    config: {
      // 开启全局密码后，这里就不生效了。
      "/aiface/console/":["2021"]
    },
    global:true,
    admin:["2020"]
  },
  // blog:{
    // avatar:"/avatar.jpg",
    // name:"Victor Da V",
    // description: "未来世界的流浪者，AI学习者",
    // intro: "/about",
    // roundAvatar: true,
    // timeline:"时光机",
    // medias:{
      // Github:"https://www.github.com/aaronjinno",
      // Gmail:"/about/gmail",
      // Wechat:"/about/wechat",
      // QQ:"/about/qq",
      // BiliBili:"https://space.bilibili.com/47292194",
    // }
  // },


  //6.插件配置
  plugins: {
    prismjs:{ //代码主题插件
      light:"one-dark",
      dark:"one-dark",
    },
    blog: {
      excerptLength:0,
      filter:(page)=>Boolean(page.filePathRelative) && !page.frontmatter.home && Boolean(page.frontmatter.article)
    },
    components:{
      components:[
        //配置激活的内置组件
      ]
    },
    copyCode: {},
    nprogress: true,
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      footnote: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: false,
      vPre: true,
      vuePlayground: true,
    },

    // 缓存设置
    pwa: {
      favicon: "/favicon.ico",
      //缓存所有HTML页面，体积小或者要离线使用就设置为true。
      // cacheHTML: true, 
      cachePic: true, // 缓存站点图片
      appendBase: true,
      maxSize:2000,//缓存的最大文件大小
      maxPicSize:3000, //换成图片的大小限制
      //更新控制：开发时设置为hint，维护时设置为available
      update:"hint"
    },
  },
});
