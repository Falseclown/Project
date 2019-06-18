# starbucks
# 前言

[README in English](README-en.md)

初学vue时曾在网上搜索vue的实战项目源码，无奈大部分都是简单的demo，对于深究vue没有太大的帮助，剩下的一些大部分都是像音乐播放器之类的展示型项目，交互没有预期那么复杂。但我们实际在工作中，经常会遇到有购物车的项目，这类项目因为涉及到money，所以对逻辑严谨度要求高，页面之间交互复杂，又会伴随着登录、注册、用户信息等等，常常会让我们很头疼。既然还没人用vue写过这样的项目，那不如我来写，开源出来对能看到的人也会有帮助。

这种功能性的项目很实用但是往往也很枯燥，没有音乐播放器那么看起来绚丽，思来想去发现饿了么是一个不错的素材，一来它足够复杂，开放的外卖平台比一般的公司独有商店更加复杂。二来 见到那么多美食，大家也不会感觉到厌烦。

此项目有最基本的用户登录验证，用户注册，用户加班休假详情列表，以及用户加班休假提交，以及审批历史等等

__注：此项目纯属个人业余爱好。__
# Vue-Demo

### 基于vue的简单演示

* Reactjs && ES6 && webpack构建星巴克员工加班休假应用
## 技术栈

vue + vuex + vue-router + webpack + ES6/7 + sass + flex 
## 克隆到本地
git clone https://github.com/Falseclown/Project.git
## 安装与运行程序

分别进入starbuck中的client目录安装依赖包

```
> $ npm install
```
在starbuck中的client目录下启动webpack服务

```
> $ npm start
```
## 开启本地服务器localhost:8088
npm run dev
## 发布环境
npm run build
## 关于接口数据
此项目的所有接口数据都来源于配套的后台系统

## 目标功能
- [x] 用户登录、注册 -- 完成
- [x] 搜索休假加班 -- 完成
- [x] 展示休假、加班列表页 -- 完成
- [x] 用户未处理、待处理、已处理数据加载 -- 完成
- [x] 根据日期、类型等进行排序和筛选 -- 完成
- [x] 休假、加班列表页详情 -- 完成
- [x] 弹出框功能 -- 完成
- [x] 加班休假申请页面 -- 完成
- [x] 申请提交上传图片 -- 完成
## 总结

1、vue因其轻量级的框架在中小型项目中表现亮眼，在大型单页面应用中因为vuex的存在，表现依然出色，在处理复杂交互逻辑的时候，vuex的存在是不可或缺的。所以说利用 vue + vuex 完全可以去做大型的单页面项目。

2、项目写到现在，从 登录注册到、首页、搜索、详情列表、审批历史、加班休假申请一个流程走完之后、不但对vue的理解更深一层，而且对以后掌控大型项目的时候也有非常多的帮助，做一个实际的项目才能对自己有很大的提升。
## 项目布局

```
.
├── build                                       // webpack配置文件
├── config                                      // 项目打包路径
├── client                                      // 上线项目文件，放在服务器即可正常访问
├── src                                         // 源码目录
│   ├── components                              // 公共组件
│   │   ├── alertMessage.vue                    // 弹出框组件
│   │   ├── popup.vue                           // 发起申请遮罩组件
│   │   ├── header.vue                          // 头部公共组件
数据接口
│   ├──api                                      //获取数据的统一调配文件，对接口进行统一管理

│   ├───├──├─── 
│   │   ├── commit
│   │   │   ├── index.vue                       // 加班休假提交申请
│   │   ├── home
│   │   │   ├── detail.vue                      // 加班休假列表详情页
│   │   │   ├── history                         //审批历史   
│   │   │   ├── item.vue                        //加班休假列表
│   │   │   ├── tablemenu.vue                   //（0待处理）（1已发起）（2已处理）类型切换
│   │   │   ├── tabletitle.vue                  //overtime/vacation切换
│   │   │   └── todolist.vue                    // 列表公共组件
│   │   ├── index.vue                           //主页组件
│   │   ├── login.vue                           //登录注册组件
│   │   ├── serarch.vue                         //搜索组件
页码views   ├── static                          // 静态文件
│   │   ├── css                                 //主页组件
│           ├── common.scss                     // 公共样式文件
│           ├── minix.scss                      // 样式配置文件
│           └── detail_common.scss              //详情及申请页公共样
│       ├── icon                                // 公共图标
│       ├── js                                  
│           ├── flexble.js                      // 字体
│   ├── plugins                                 // 引用的插件

│   ├── router
│   │   └── router.js                           // 路由配置
│   ├── store                                   // vuex的状态管理
│   │   ├── index.js                            // 引用vuex，创建store
│   │   ├── modules                             // store模块名式 
│   ├── utils                                   
│   │   ├── baseui.js                           //公共组件注册
│   │   ├── isfile.js                           //上传附件判断
│   │   ├── request.js                          //axios拦截器
│   ├── App.vue                                 // 页面入口文件
│   ├── main.js                                 // 程序入口文件，加
.
