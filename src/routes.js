import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import Admin from './components/Admin.vue'
import About from './components/about/About.vue'
import Register from './components/Register.vue'
import Login from './components/Login.vue'

/* 二级路由 */
import History from "./components/about/History.vue"
import Contect from './components/about/Contect.vue'
import OrderingGuide from './components/about/OrderingGuide.vue'
import Delivery from './components/about/Delivery.vue'

/* 三级路由 */
import Phone from './components/about/contect/Phone.vue'
import PersonName from './components/about/contect/PersonName.vue'

/* 配置路由 */
export const routes = [
    {path : '/',name : "homeLink" ,components : {
      defalut : Home,
      'orderingGuide' : OrderingGuide,
      'delivery' : Delivery,
      'history' : History
    }},
    {path : '/menu',name : "menuLink",component : Menu},
    {path : '/admin',name : "adminLink",component : Admin},
    {path : '/about',name : "aboutLink",component : About,redirect : '/about/contect',children:[
      {path : '/about/history',       name : "historyLink",   component : History},
      {path : '/about/contect',       name : "contectLink",   component : Contect ,redirect : '/about/contect/phone',children : [
        {path : '/about/contect/phone',	name : 'phoneNumber',	component : Phone},
        {path : '/about/contect/personname',	name : 'personName',	component : PersonName},
      ]},
      {path : '/about/orderingGuide', name : 'orderingGuideLink', component : OrderingGuide},
      {path : '/about/delivery',      name : 'deliveryLink',      component : Delivery}
    ]},
    {path : '/login',name : "loginLink",component : Login},
    {path : '/register',name : "registerLink",component : Register},
    {path : '*',redirect : '/'}
  ]