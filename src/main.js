import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes'

Vue.use(VueRouter)



const router = new VueRouter({
  routes,
  mode : "history",		/* 跳转无需重新加载页面 */
})

/* 全局守卫 */
// router.beforeEach((to,from,next)=>{
// 	/* 判断store.gettes.isLogin === false */
// 	if(to.path == '/login' || to.path == '/register'){
// 		next();
// 	}else{
// 		alert("还未登录，请登录后重试");
// 		next('/login');
// 	}
// })

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
