<template>
  <div class="login">
    <el-form :model="ruleForm" status-icon :rules="rules"
             ref="ruleForm" label-width="70px" class="demo-ruleForm"
            label-position='left'>
      <el-form-item label="用户名">
        <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>

    </el-form>
    <p>账号{{ username }}</p>
    <p>密码{{ password }}</p>

  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      labelposition:'right',
      // username: "",
      // password: "",
      ruleForm: {
        username: '',
        password: '',
      }
    }
  }
}
</script>

<style scoped>
input {
  margin: 10px auto;
  font-size:medium;
}

label {
  margin-right: 10px;
}
.el-form{
  width: 350px ;
  margin: 50px auto;
}
</style>