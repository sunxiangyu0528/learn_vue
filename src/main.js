import Vue from 'vue'
import App from './App.vue'
//导入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 在创建vue实例之前，要讲element-ui之前加入到vue中
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')