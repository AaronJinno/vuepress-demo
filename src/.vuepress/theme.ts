import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/navbar.js";
import { zhSidebar } from "./sidebar/sidebar.js";

export default hopeTheme({
  //############# 1.基础信息配置 ################
  hostname: "https://cybercell.cc/", //网站部署的域名
  author: { //作者信息：将会在很多地方被引用
    name: "Victor Da V", //作者名
    url: "https://cybercell.cc/about", //这个链接在很多地方会加到作者名上
  },


  //############# 2.外观配置 ################
  favicon: "/favicon.svg", //标签栏的站点图标
  darkmode: "toggle", //深色模式切换方式，使用toggle就好
  print:true, //是否在文档右边显示打印按钮
  // iconAssets: "iconfont",  //设置icon资源，字符串形式
  // 色泽iconfont的前缀
  iconPrefix:"iconfont icon-",
  iconAssets:[ // 设置icon资源，数组形式，可包含多个资源链接
    //阿里云的iconfont项目链接
    "https://at.alicdn.com/t/c/font_4059879_im0k048s4ff.css",
    //本地iconfont文件:注意要加真实的base地址
    "/doc/iconfont/java/iconfont.css"
  ],
  themeColor: false, //主题色选择器
  fullscreen: false, //是否显示全屏按钮
  backToTop: true, //是否显示返回顶部按钮
  pure: false, //是否开启纯净模式



  //############# 3. Navbar 导航栏配置 ################
  logo: "/logo.svg", //导航栏网站图标
  logoDark: "/darklogo.svg", //暗黑导航栏图标,默认和logo一样
  repo: "https://github.com/AaronJinno", //仓库配置
  repoDisplay: false, //是否显示git仓库
  //docsDir: "demo/theme-docs/src", //文档的根目录
  navbarIcon: true, //导航栏图标是否显示的全局控制
  navbarAutoHide: "mobile", //是否向下滚动时自动隐藏导航栏[always | mobile | none]
  //hideSiteNameOnMobile: true, //是否在移动视图下隐藏站点名称
  navbarLayout: { //导航栏显示的元素和布局
    start: ["Brand"], //左边：网站导航栏logo，start是现在在最左边
    center: ["Links"], //中间：网站的导航
    //右端：语言切换、外观弹窗、代码仓库、搜索
    end: ["Language","Outlook","Repo","Search"] 
  },


  //############# 4. Sidebar 侧边栏配置 ################ 
  sidebarIcon: true, //侧边栏图标全局控制
  //sidebarSorter:[] //文档排序依据
  headerDepth: 2, //侧边栏标题深度，设置层1，只会显示h2子标题,2就显示h2和h3


  //############# 4. 文档内容配置 ################ 

  //4.1 //页面文档显示的元信息
  //titleIcon: true, //是否在页面标题旁显示图标
  pageInfo:[
    "Author", //作者
    "Date", //写作日期
    "Category", //分类
    "Tag", //标签
    "Word", //字数
    //"PageView" //页面浏览量,需要评论插件配合
  ],

  //4.2 辅助链接、导航
  //breadcrumb: true, //是否开启全局路径面包屑导航
  //breadcrumbIcon: true, //是否在路径面包屑导航显示图标
  //prevLink: true, //是否在页面底部显示上一篇链接
  //nextLink: true, //是否在页面底部显示下一篇链接
  //toc: true,//是否在桌面模式下右侧展示标题列表

  //4.3 mete
  //lastUpdated: false, //是否在底部显示页面最后更新时间,需要Git配合
  //contributors: false, //是否显示页面贡献者,需要Git配合
  //editLink: false, //是否展示编辑此页链接
  //docsRepo: "repo", //文档仓库
  //docsBranch: "main", //文档所在分支
  //docsDir: "", //文档在仓库中的目录

  //4.4 页脚
  footer: "Victor Da V",//页脚信息（首页可设置独立的页脚-备案信息）
  displayFooter: true, //是否默认显示页脚
  copyright: "Copyright © Free To Copy",//页脚的版权信息
  

  //############# 5. locales多语言 ################ 
  //当前配置是单语言，不进行过多配置，仅以导航栏和侧边栏为例
  locales: {
    "/": {
      navbar: zhNavbar,
      sidebar: zhSidebar,
    },
  },


  //############### 6. 功能配置 ##################

  //6.1 加密配置
  encrypt: { 
    config: { //配置需要加密的页面或目录
      // 开启全局密码后，这里就不生效了。
      "/aiface/console/":["2021"]
    },
    global:true, //是否开启全局加密,默认是false 
    admin:["2020"] //全局加密的密码
  },

  //6.2 博客配置：博客模式下使用，需要开启博客插件
  blog:{ 
    avatar:"/avatar.jpg", //博主头像
    name:"Victor Da V", //博主名字,默认是author中的配置
    description: "未来世界的流浪者，AI学习者",//博客的口号、座右铭或介绍语
    intro: "/about", //博主的个人介绍地址
    roundAvatar: true, //是否剪裁头像为圆形形状
    timeline:"时光机", //时间轴的顶部文字
    sidebarDisplay: "always", //是否在侧边栏展示博主信息[always | mobile | none]
    //articlePerPage: 20,//4.3.8 每页的文章数量

    medias:{ //博主的媒体链接配置，非常多，基本常用的媒体都有了，这里列出最常用的
      Github:"https://www.github.com/aaronjinno",
      Gmail:"/about/gmail",
      Wechat:"/about/wechat",
      QQ:"/about/qq",
      BiliBili:"https://space.bilibili.com/47292194",
    }
  },


  //#################### 7. 插件配置 #######################
  //PS: 这里都是Hope主题内置的插件，自己下载的插件需要在cofig.js中配置
  plugins: {

    //7.1 代码块主题色
    prismjs:{
      light:"one-dark",
      dark:"one-dark",
    },

    //7.2 博客配置
    blog: { //可以直接设置为true，采用默认配置
      excerpt: false, //是否生成摘要
      excerptLength:0,//自动生成的摘要的长度，0表示不生成
      //fileter：过滤器。规定满足那些条件的文档才属于文章，显示在文章列表
      filter:(page)=>Boolean(page.filePathRelative)
      && !page.frontmatter.home //条件2：非主页
      && Boolean(page.frontmatter.article), //条件3：需要包含article配置
      //article:"/article/", //博客文章列表路由路径
      //category: "/category/", //分类地图路由路径
      //tag: "/tag/", //标签地图路由路径
      //star: "/star/", //收藏文章列表路由路径
      //timeline: "/timeline/", //时间线列表路由路径
    },

    //7.3  copyCode 代码复制按钮
    copyCode: { //设置为true或者空对象即可,
      duration: 2000, //显示多久 "已复制",单位ms
    },

    //7.4 copyright 版权信息
    copyright: { //默认不开启版权限制，随便复制
      global: true,
      triggerWords:10, //触发附加版权的最小字数
      author:"Victor da V",
      license: "ok",
    },

    //7.5 Markdown增强配置，
    mdEnhance: { //设置插件中哪些功能开启, true开启，false关闭
      align: true,  //容器内的内容对齐
      attrs: true,  //属性支持
      card: true, //卡片
      chart: true,  //chart图表
      codetabs: true,  //代码块分组
      container: true, //容器支持
      demo: true, //是否启用代码案例支持
      echarts: true,
      figure: true, //图片figure
      flowchart: true, //是否启用流程图支持
      footnote: true, //是否启用脚注格式支持
      gfm: true, //是否支持完整的 GFM 语法
      imgLazyload: true,//图片懒加载
      imgMark: true, //是否启用图片标注支持
      imgSize: true, //设置图片尺寸
      include: true, //导入其他md文件的内容
      katex: true,//通过 KaTeX 启用tex语法支持(公式)
      mark: true, //为文字设置黄色背景的mark
      mermaid: true, //是否启用 Mermaid 支持
      playground: { //交互演示选项
        presets: ["ts", "vue"],
      },
      presentation: { //幻灯片支持
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [//对行内语法进行样式化以创建代码片段
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
      sub: true, //下角标
      sup: true, //上角标
      tabs: true, //选项卡
      tasklist: false, // 是否启用任务列表格式支持
      vPre: true, //是否启用 v-pre 容器
      vuePlayground: true, //是否启用 Vue 交互演示支持
    },

    //7.6 缓存和更新时机配置
    pwa: {
      favicon: "/favicon.ico",
      //cacheHTML: true, //缓存所有HTML页面
      cachePic: true, //缓存站点图片
      appendBase: true,
      maxSize:2000,//缓存的文件大小控制
      maxPicSize:3000,//缓存的图片大小控制
      //更新控制：开发时设置为hint，维护时设置为available
      update:"hint"
    },

    //7.7 components 内置组件启用
    components:{
      components:[ //添加激活的内置组件
        "ArtPlayer",
        "AudioPlayer",   
        "CodePen"
        //... 用到那个加那个，有十几个。
      ]
    },

    //7.8 其他插件配置
    nprogress: true, //页面切换进度条

    // comment: { //评论配置：配置很复杂，不需要就别配置
    //   provider: "Twikoo", //选择引擎
    // },
    //photoSwipe:false,// photoSwipe图片浏览功能
    //seo:false, //SEO, 默认不需要配置
    //sitemap:false, //默认不需要任何配置
  },
});
