<script setup lang="ts">
import emojiInfo from '../assets/emoji.json';

const handleSelect = (key: string) => {
  if (key === 'all') {
    const element = document.querySelector('.el-main');
    if (element) {
      element.scrollTo({ top: 0, behavior: 'smooth' });
    }
  } else {
    const element = document.getElementById(key);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};
</script>

<template>
  <el-menu default-active="0" background-color="#202b3e" text-color="#fff" active-text-color="#ffd04b"
    @select="handleSelect">
    <el-menu-item index="all">
      <span class="emoji">👀</span>
      <span>全部</span>
      <span class="count">3781</span>
    </el-menu-item>
    <el-sub-menu v-for="(level1, i) in emojiInfo" :index="level1.title">
      <template #title>
        <span class="emoji">{{ level1.emoji }}</span>
        <span>{{ level1.title }}</span>
      </template>
      <el-menu-item :index="level1.title">
        <span class="emoji">{{ level1.emoji }}</span>
        <span>全部</span>
        <span class="count">{{ level1.count }}</span>
      </el-menu-item>
      <el-menu-item v-for="(level2, j) in level1.children" :key="`${i}-${j}`" :index="level2.title">
        <span class="emoji">{{ level2.emoji }}</span>
        <span>{{ level2.title }}</span>
        <span class="count">{{ level2.count }}</span>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<style lang="less" scoped>
.el-menu {
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
