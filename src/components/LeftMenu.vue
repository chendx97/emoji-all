<script setup lang="ts">
import emojiInfo from '../assets/emoji.json';

const handleOpen = () => {
  console.log('open');
};
const handleClose = () => {
  console.log('close');
};
</script>

<template>
  <el-menu default-active="0" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"
    @open="handleOpen" @close="handleClose">
    <el-menu-item index="all">
      <span class="emoji">👀</span>
      <span>全部</span>
    </el-menu-item>
    <el-sub-menu v-for="(level1, i) in emojiInfo" :index="`${i}`">
      <template #title>
        <span class="emoji">{{ level1.emoji }}</span>
        <span>{{ level1.title }}</span>
      </template>
      <el-menu-item v-for="(level2, j) in level1.children" :key="`${i}-${j}`">
        <span class="emoji">{{ level2.emoji }}</span>
        <span>{{ level2.title }}</span>
        <span class="count">{{ level2.count }}</span>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<style lang="less" scoped>
.el-menu {
  // height: 100%;
  border-right: 0;

  .emoji {
    width: 25px;
    text-align: center;
  }

  .count {
    margin-left: auto;
    color: #aaa;
    font-size: 12px;
  }
}
</style>
