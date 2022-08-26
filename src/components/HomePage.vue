<template>
  <div id="h">
    <el-container>
      <el-aside left width="300px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <div style="width: 100%">
            <NoteList />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NoteList from "./NoteList.vue";
export default {
  name: "HomePage",
  components: {
    NoteList,
  },
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>