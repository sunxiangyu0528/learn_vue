<template>
  <el-table
      ref="multipleTable"
      @selection-change="handleSelectChange"
      class="project_list_new"
      :data="tableData"
      style="width: 100%">
    <el-table-column
        type="selection"
        width="55">
    </el-table-column>
    <el-table-column
        prop="name"
        label="项目名称"
        width="180">
    </el-table-column>
    <el-table-column
        prop="leader"
        label="项目负责人"
        width="180">
    </el-table-column>
    <el-table-column
        prop="app_name"
        label="应用名称">
    </el-table-column>

  </el-table>

</template>


<script>
export default {
  name: "ProjectsListNew",
  data() {
    return {
      project_headers: ['项目名称', '项目负责人', '应用名称'],
      tableData: [
        {name: '前程贷项目', leader: '孙翔宇', app_name: 'p2p平台应用'},
        {
          name: '前程贷项目',
          leader: '张光耀',
          app_name: 'p2p平台应用'
        },
      ], multipleSelection: []
    }
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
}
</script>
<style scoped>
.project_list_new {
  margin: 150px 400px;
  /*border-collapse: collapse;*/
  /*width: 40%;*/
}


</style>