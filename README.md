## 记录盲人摸象开发过程
    vue+vue-router+webpack
- 1、11月17日01:41:07
仿网易云音乐第0.0.1版本，用时3天，基本可以播放歌曲,存在的问题是模板组件重复，无法复用数据重复,样式不好看
demo：http://www.findcf.com/vuemusic/ 扫码(还不会传图片)
- 2、11月17日17:24 昨天的多个数据公用一个模板还没解决，今天又出现了新的问题，用axios发送请求的时候多个请求一起发送用了一个axios.all 但是回来的数据还要一个一个的渲染,肯定有捷径我没有发现.
明天不写了，出去玩一天。
- 3、11月19日00:35:52 今天写了2个小时把搜索页做出来了，另外学习了一下es6，解决了引用歌曲播放的问题，发现不能自动播放，有提示的警告还没有认真研究

[image](https://note.youdao.com/favicon.ico)
# myvue-music

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
# myvue-music


### 前端新手，12月底想找一份前端工作,想看简历的朋友发邮件 1966308@qq.com
