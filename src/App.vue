<script setup lang="ts">
import { onMounted, ref, provide } from 'vue';
import { ElLoading } from 'element-plus';
import { getReq } from './utils/myFetch';

const list = ref([]);
provide('totalEmojis', list);
onMounted(async () => {
  const loading = ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)',
  });
  const { result } = await getReq('/cdxapi/emoji/all');
  list.value = result;
  loading.close();
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

    .main-wrapper {
      width: calc(100% - 300px);
      padding-right: 20px;
      overflow: auto;
    }

    .right-side {
      flex-shrink: 0;
    }
  }
}
</style>
