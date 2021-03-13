<!--template展示给前端用户的，相当于mvvm模式的v-->
<template>
  <div id="app">
    <!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <ul>
      <li>
        <router-link to="/loginNew">登陆2</router-link>
      </li>
      <li>
        <router-link to="/greeting">欢迎</router-link>
      </li>
      <li>
        <router-link to="/HelloWorld">主页</router-link>
      </li>
      <li>
        <router-link to="/ProjectList">问候</router-link>
      </li>
      <li>
        <router-link to="/ProjectsListNew">项目列表</router-link>
      </li>
      <li>
        <router-link to="/Login">登陆1</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
//导入子组件
import HelloWorld from './components/HelloWorld.vue'
import greeting from "@/components/greeting";
import ProjectList from "@/components/ProjectList";
import ProjectsListNew from "@/components/ProjectsListNew";
import Login from "@/components/Login";
import LoginNew from "@/components/LoginNew";
//定义组件名称
export default {
  name: 'App',
  components: { //声明子组件
    HelloWorld,
    greeting,
    ProjectList,
    ProjectsListNew,
    Login,
    LoginNew
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
