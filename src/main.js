import Vue from 'vue'
import App from './App.vue'
import HelloWorld from "@/components/HelloWorld";
//导入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 在创建vue实例之前，要讲element-ui之前加入到vue中

//声明全局组件
Vue.component('hello_world', HelloWorld)
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')