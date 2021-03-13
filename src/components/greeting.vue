<template>
  <div id="msgg">
    <p>{{ message }} {{ name }}</p>
    <!--    <span v-bind:title="dream">学好vue不是梦</span>-->
    <!--    每次都会重新删除或者创建元素-->
    <!--    <p v-if=isNotSxy>不会开车的老师不是好老师</p>-->
    <!--v-show:每次不会重新进行dom的操作，只是切换了元素的display标签-->
    <!--    <p v-show=isNotSxy>不会开车的老师不是好老师</p>-->
    <!--    v-on为vue中指令，用于绑定时间（各种事件），事件触发之后，可以执行js操作-->
    <!--    可以 缩写@-->
    <span @click=chageusername>{{ this.name }}想去网吧上网</span>
    <!--    <span v-on:click="username='路人'">{{ username }}想去网吧上网</span>-->

    <p v-if="age>50">{{ this.age }}想去网吧上网1222</p>
    <!--    <p v-else-if="age==20">{{ username }}想去网吧上网2</p>-->
    <!--    <p v-else>{{ username }}想去网吧上网3</p>-->
    <hello_world></hello_world>
  </div>
</template>

<script>
export default {
  name: "greeting",
  data() {
    return {
      message: 'python测试开发奥利给',
      name: 'myname',
      dream: '小目标',
      isNotSxy: true,
      username: '孙翔宇',
      age: 111
    }
  },
  methods: {
    chageusername: function () {
      this.username = '你好像一条狗啊'
    }
  }, created() {
    console.log('实例创建之后，能够获取到this')
    console.log("username为", this.username)
    this.name = this.$route.query.name
    this.age = this.$route.query.age

  },
  mounted() {
    console.log("biubiubiub")
  }
}
</script>

<style scoped>
#msgg {
  color: red;
}
</style>


<!--创建组件-->
<!--加到主组件-->