<script setup lang="ts">
import emojiInfo from '../assets/emoji.json';

const goTo = (title: string) => {
  const element = document.getElementById(title);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <div class="page-home">
    <div class="level1-wrapper" v-for="(level1, i) in emojiInfo">
      <div :id="level1.title" class="title1" @click="goTo(level1.title)">
        <span class="emoji">{{ level1.emoji }}</span>
        <span class="title">{{ level1.title }}</span>
        <el-tag type="info" round effect="plain" size="small">{{ level1.count }}</el-tag>
      </div>
      <div class="level2-wrapper" v-for="level2 in level1.children">
        <div :id="level2.title" class="title2" @click="goTo(level2.title)">
          <span class="emoji">{{ level2.emoji }}</span>
          <span class="title">{{ level2.title }}</span>
          <el-tag type="info" round effect="plain" size="small">{{ level2.count }}</el-tag>
        </div>
        <div class="card-list">
          <emoji-card v-for="detail in level2.children" :info="detail" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.page-home {
  margin: 30px auto;
  width: 830px;

  .title1 {
    padding: 5px 0;
    width: fit-content;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;

    .emoji {
      display: inline-block;
      width: 32px;
      vertical-align: middle;
    }
  }

  .title {
    display: inline-block;
    vertical-align: middle;
  }

  .el-tag {
    margin-left: 10px;
  }

  .title2 {
    padding: 0;
    width: fit-content;
    font-size: 16px;
    cursor: pointer;

    .emoji {
      display: inline-block;
      width: 25px;
      vertical-align: middle;
    }
  }

  .level2-wrapper {
    margin-top: 30px;

    &:nth-child(2) {
      margin-top: 10px;
    }
  }

  .card-list {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
}
</style>
