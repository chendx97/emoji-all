<script setup lang="ts">
</script>

<template>
  <el-container>
    <el-aside width="200px">
      <LeftMenu />
    </el-aside>
    <el-main>
      <router-view />
    </el-main>
    <el-aside width="200px">
      <RightSide />
    </el-aside>
  </el-container>
</template>

<style lang="less" scoped>
.el-container {
  height: 100vh;
}
</style>
