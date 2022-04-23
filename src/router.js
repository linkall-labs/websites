import Vue from 'vue'
import VueRouter from 'vue-router'
const Products  = ()=>import('@/components/Products')
const Opensource = ()=>import('@/components/Opensource')
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
    path:'/open-source',
    name:Opensource.name,
    component:Opensource
},{
    path:'/compony',
    name:Compony.name,
    component:Compony
},]

export default new VueRouter({routes})
