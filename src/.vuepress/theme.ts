import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/navbar.js";
import { zhSidebar } from "./sidebar/sidebar.js";

export default hopeTheme({
  //1.基本配置
  hostname: "http://aiface.hsshcn.com",
  author: {
    name: "红杉生活",
    url: "http://aiface.hsshcn.com",
  },

  //2.外观配置
  favicon: "/favicon.svg",
  darkmode: "toggle",
  print:true,
  // iconAssets: "iconfont",
  // 设置icon资源
  iconAssets:[
    //job
    "https://at.alicdn.com/t/c/font_4059879_im0k048s4ff.css?spm=a313x.7781069.1998910419.52&file=font_4059879_im0k048s4ff.css"

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
  ],
  lastUpdated: false,
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
      "/aiface/console/":["ai@2023"]
    },
    global:true,
    admin:["ai1901"]
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
    prismjs:{
      light:"one-dark",
      dark:"one-dark",
    },
    blog: {
      excerptLength:0,
      filter:(page)=>Boolean(page.filePathRelative) && !page.frontmatter.home && Boolean(page.frontmatter.article)
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

    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true, //缓存所有HTML页面
      cachePic: true, //缓存站点图片
      appendBase: true,
      maxSize:2000,
      maxPicSize:3000,
    },
  },
});
