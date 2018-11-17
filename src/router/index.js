import Vue from 'vue'
import Router from 'vue-router'
import Rank from '@/components/rank/rank'
import Singer from '@/components/singer/singer'
import Recommend from '@/components/recommend/recommend'
import Recommendlist from '@/components/recommend/recommendlist'
import Songsdetail from '@/components/recommend/songsdetail'
import Playsong from '@/components/recommend/playsong'
import Playsong1 from '@/components/recommend/playsongs1'
import Singersongs from '@/components/singer/singersongs'



Vue.use(Router)
export default new Router({
  // mode: 'history',
  routes: [
    {
      path:'/recommend',
      name: 'recommend',
      component: Recommend
    },
    {path: '/singer',
        component: Singer
      }, {
          path:'/',
          redirect:  'recommend',
        }, {
          path: '/rank',
          name: 'rank',
          component: Rank
        }
    , {
      path: '/recommendlist',
      name: 'recommendlist',
      component: Recommendlist
    }, {
      path: '/recommend/:id',
      name: 'songsdetail',
      component: Songsdetail,
    },
    {
      path: '/playsong/:id',
      name: 'playsong',
      component: Playsong,
    },
    {
      path: '/playsong1/:id',
      name: 'playsong1',
      component: Playsong1,
    },
    {
      path:'/singer/singersongs/:id',
      name:'singersongs',
      component:Singersongs
    },
  ]
})

// 看一下query和params区别
// this.$router.push({
//   path:'/xxx'
//   query:{
//     id:id
//   }
// })
// 接收参数:
//   this.$route.query.id
// 传参:
//   this.$router.push({
//     name:'xxx'
//     params:{
//       id:id
//     }
//   })
// 接收参数:
//   this.$route.params.id
// 注意:params传参，push里面只能是 name:'xxxx',不能是path:'/xxx',
//   因为params只能用name来引入路由
// ，如果这里写成了path，接收参数页面会是undefined！！！
