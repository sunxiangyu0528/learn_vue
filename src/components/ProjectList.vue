<template>
  <table>
    <tr>
      <th v-for="(project,key) in project_headers" v-bind:key="key">{{ project }}</th>
    </tr>
    <tr v-for="(item,key) in projects" v-bind:key="key">
      <td>{{ item.name }}</td>
      <td>{{ item.leader }}</td>
      <td>{{ item.app_name }}</td>
    </tr>

  </table>
</template>

<script>
export default {
  name: "ProjectList",
  data() {
    return {
      project_headers: ['项目名称', '项目负责人', '应用名称'],
      projects: [
        {name: '前程贷项目', leader: '孙翔宇', 'app_name': 'p2p平台应用'},
        {
          name: '前程贷项目',
          leader: '张光耀',
          'app_name': 'p2p平台应用'
        },
      ]
    }
  }
}
</script>

<style scoped>
table {
  margin: 50px auto;
  border-collapse: collapse;
  width: 40%;
}

td, th {
  border: 1px solid;
}
</style>