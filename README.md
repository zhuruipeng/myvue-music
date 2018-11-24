## 记录盲人摸象开发过程
    vue+vue-router+webpack+axios+aplayer
#### 感谢binaryify提供的网易接口没有这个数据接口一切都是扯淡。
- 1、11月17日01:41:07
仿网易云音乐第0.0.1版本，用时3天，基本可以播放歌曲,存在的问题是模板组件重复，无法复用数据重复,样式不好看
demo：http://www.findcf.com/vuemusic/ 扫码(还不会传图片)
![](http://www.yaozhuanqian.club/vuemusicscanqr.png)
- 2、11月17日17:24 昨天的多个数据公用一个模板还没解决，今天又出现了新的问题，用axios发送请求的时候多个请求一起发送用了一个axios.all 但是回来的数据还要一个一个的渲染,肯定有捷径我没有发现.
明天不写了，出去玩一天。
- 3、11月19日00:35:52 今天写了2个小时把搜索页做出来了，另外学习了一下es6，解决了引用歌曲播放的问题，发现不能自动播放，有提示的警告还没有认真研究
- 4、21:37:22 今天信心满满的想把vuex用到项目里，但是愣是没学会，感觉很失望，现在看了很多的学习视频突然就迷茫了，学前端马上学了三个月了
但是很多东西还是不会，我真的适合学习开发吗，今天项目又出了新问题，显示列表只显示一个歌曲，怎么也找不到哪里的问题，同样的请求，别人的是全部list，而我的就是一条，搞不明白，对自己有点失望了,今天我在想做一个项目究竟是把框架做好，还是精益求精的把一个页面写完整呢，今天卡了一整天就是学习vuex数据转换，但是还是不会
- 5 11月21日15:30 加入vue-lazy load 加载图片，尝试用scroll 一直不滚动，还没有开始用,优化代码样式
尝试写按拼音排序没有成功，今天参考了vue-music-webapp的代码,感觉写的很复杂，有一些看不懂~~~
- 2018-11-24 21:13 部分优化




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


### 前端新手，12月底想找一份前端工作,想看简历的朋友发邮件 19663083@qq.com
