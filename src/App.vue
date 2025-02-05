<script setup lang="ts">
import { onMounted, ref, provide } from 'vue';
import { getReq } from './utils/myFetch';

const list = ref([]);
provide('totalEmojis', list);
onMounted(async () => {
  const { result } = await getReq('/emoji/all', {});
  list.value = result;
});
</script>

<template>
  <el-container>
    <el-aside class="left-menu">
      <LeftMenu />
    </el-aside>
    <el-main>
      <router-view />
      <RightSide />
    </el-main>
  </el-container>
</template>

<style lang="less" scoped>
.el-container {
  height: 100vh;
  background-color: #f5f7fb;
  color: #3c4350;

  .left-menu {
    width: 250px;
    height: 100%;
    background-color: #202b3e;
  }

  .el-main {
    flex-grow: 0;
    width: 1050px;
    margin: 30px auto;
    display: inline-flex;
    justify-content: space-between;
    padding: 0;

    .right-side {
      flex-shrink: 0;
    }
  }
}
</style>
