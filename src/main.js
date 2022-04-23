import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import router from './router'
import '@/font/font.css'

Vue.config.productionTip = false

Vue.use(ElementUI,{size:'small',zhLocale})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
