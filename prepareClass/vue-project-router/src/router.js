import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */'./pages/Home.vue'),
      children: [
        {
          path: 'project',
          name: 'project',
          component: () => import(/* webpackChunkName: "Project" */'./views/Project/Project.vue')
        },
        {
          path: 'follower',
          name: 'follower',
          component: () => import(/* webpackChunkName: "Follower" */'./views/Follower/Follower.vue'),
          children: [
            {
              path: 'attentionYou',
              name: 'attentionYou',
              component: () => import(/* webpackChunkName: "AttentionYou" */'./views/Follower/pages/AttentionYou.vue')
            },
            {
              path: 'attentionMe',
              name: 'attentionMe',
              component: () => import(/* webpackChunkName: "AttentionMe" */'./views/Follower/pages/AttentionMe.vue')
            }
          ]
        },
        {
          path: 'main',
          name: 'main',
          component: () => import(/* webpackChunkName: "Main" */'./views/Main/Main.vue')
        }
      ]
    }
  ]
})

// 其中 /* webpackChunkName: "home" */ 是一个特殊的注释语法，用来提供 chunk name (需要 Webpack > 2.4)。上面处理后，打包的dist目录下的文件如下：
// dist/js/chunk-vendors.70d314fb.js      
// dist/js/app.ff1d5c7f.js                 
// dist/js/report.6c761e68.js             
// dist/js/home.fe0e7528.js                
// dist/js/users.ade47d0f.js   