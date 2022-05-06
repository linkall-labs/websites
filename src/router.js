import Vue from 'vue'
import VueRouter from 'vue-router'
const Products  = ()=>import('@/components/Products')
const Community = ()=>import('@/components/Community')
const Compony = ()=>import('@/components/Compony')
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
    name:Compony.name,
    component:Compony
},]

export default new VueRouter({routes})
