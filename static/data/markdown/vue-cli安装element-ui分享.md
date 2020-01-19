**作为一个rookie，在学习Vue.js的过程中，vue-cli安装element-ui遇到了一些问题( 比如按需引入问题 ) ，在网上搜到的教程也比较多，但是大多没有很细致**
<br>
## **那么现在分享一下我在vs code上的安装过程及解决问题的方法**
<br>
首先附上 Element-UI安装官方文档:
[http://element-cn.eleme.io/#/zh-CN/component/installation](http://element-cn.eleme.io/#/zh-CN/component/installation)

**安装vue-cli的过程就不多赘述( 我装的vue-cli版本是vue-cli3 )**

使用 npm 安装
```
npm i element-ui -S 
```

安装完成之后, 打开main.js, 在文件中加入以下内容

```JavaScript 
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  components: { App },
  template: '<App/>'
})
```
引入之后就可以在全局使用element-ui了
  
```JavaScript
//在有些教程中，安装 element-ui 可能是会先安装 style-loader | css-loader 等，
//刚开始的时候我也装了，但是后续安装使用运行的时候会报错。

//按照element-ui官网提供的教程直接安装使用是没有问题的。
```
我觉得这可能是vue-cli最新版本已经在webpack中已经配置完成引起的，具体原因我还需继续深入学习。
  
---
但是在实际开发中，我本一般不会去全局使用，按需引入 element-ui 组件
  
借助 babel-plugin-component，我们可以只引入需要的组件，以达到减小项目体积的目的。
  
安装 babel-plugin-component：
  
```
npm install babel-plugin-component -D
```
  
安装完成之后，打开 .babelrc 项目文件 
  
```JavaScript
//.babelrc在项目文件夹根目录下,也可以 ctrl + p 快捷键直接搜索打开此文件
```
将文件中的代码修改如下:
  
```JavaScript 
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}

/*
    请注意安装
    babel-plugin-component
    babel-preset-es2015
    这两个依赖,否则你会跟我一样遇到下面讲到的两个错误
*/
```
  
在main.js中做如下修改
  
```JavaScript 
import Vue from 'vue';
//引入组件,以Button为例
import {Button} from 'element-ui' 
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

//使用Button组件
Vue.use(Button);

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  components: { App },
  template: '<App/>'
})
```
保存运行
  
---
  
我遇到了以下错误
1. Module build failed: ReferenceError: Unknown plugin "component" ...
```JavaScript
//出现这个错误的原因是 .babelrc文件中 plugin 'component' 缺少依赖
```
![](https://raw.githubusercontent.com/WitcherYoung/MarkdownPhotos/master/%E6%8C%89%E9%9C%80%E5%BC%95%E5%85%A5%E6%8A%A5%E9%94%99.png)

```JavaScript
//执行命令 安装依赖 安装完成 启动项目
npm install babel-plugin-component -D
```
此问题解决参考:  https://blog.csdn.net/s_web_q/article/details/80185004
<br>

2. Module build failed: Error: Couldn't find preset "es2015" relative...
```JavaScript
//由于没使用ES标准，而 .babelrc 文件中使用了ES标准，所以编译会报错
```
![](https://raw.githubusercontent.com/WitcherYoung/MarkdownPhotos/master/es2015%20error.png)

```JavaScript
//执行命令安装依赖安装完成启动项目 
npm install babel-preset-es2015 --save-dev
```
此问题解决参考: https://www.cnblogs.com/weizaiyes/p/7462274.html
<br>
