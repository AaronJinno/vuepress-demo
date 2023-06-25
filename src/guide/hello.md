---
title: "页面的标题"
date: 2020-02-02 # 页面的日期

category:
    - 所属分类
    - 可以多个
tag:
    - 添加标签
    - 可以多个

##### 根据情况自选 ######
navbar: false # 是否在当前页面展示导航栏
pageClass: custom-page-class # 为当前页面添加额外的类名
permalink: 01102 # 为页面制定一个自定义的永久链接
index: true # 是否将当前页加入侧边栏
headerDepth: 2 # 配置本页面的侧边栏深度

##### 下面是基本不用的 #####
description: "页面描述信息"
head:  #添加header标签
    - [meta,{name: foo,content: yaml数组语法}]
    - [meta,{name: bar,content: bar的值}] 
lang: zh-CN #单独指定该页面的语言
editLink: false # 是否在本页面中启用 编辑此页 链接（git仓库）
lastUpdated: true # 是否在本页面中启用最近更新时间戳
contributors: true # 是否在本页面中启用 贡献者列表
layout: CustomLayout #页面的布局，选择一个自定义布局覆盖默认的
---