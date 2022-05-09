import Vue from 'vue'
import VueRouter from 'vue-router'
const Products  = ()=>import('@/components/Products')
const Community = ()=>import('@/components/Community')
const Company = ()=>import('@/components/Company')
Vue.use(VueRouter)
const routes = [{
    path:'/',
    redirect:'/products'
},{
    path:'/products',
    name:Products.name,
    component:Products
},{
    path:'/community',
    name:Community.name,
    component:Community
},{
    path:'/company',
    name:Company.name,
    component:Company
},]

export default new VueRouter({routes})
