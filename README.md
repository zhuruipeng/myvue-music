##记录盲人摸象开发过程
vue+vue-router+webpack
2018年11月17日01:41:07
仿网易云音乐第0.0.1版本，用时3天，基本可以播放歌曲,存在的问题是模板组件重复，无法复用数据重复,样式不好看
demo：http://www.findcf.com/vuemusic/ 扫码
（怎么不能上传图片。。。）
2018年11月17日17:24 昨天的多个数据公用一个模板还没解决，今天又出现了新的问题，用axios发送请求的时候多个请求一起发送用了一个axios.all 但是回来的数据还要一个一个的渲染,肯定有捷径我没有发现.
明天不写了，出去玩一天。

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
