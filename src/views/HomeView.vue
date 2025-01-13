<script setup lang="ts">
import emojiInfo from '../assets/emoji.json';
</script>

<template>
  <div class="page-home">
    <div class="level1-wrapper" v-for="(level1, i) in emojiInfo">
      <div class="title1">
        {{ level1.title }}
      </div>
      <div class="level2-wrapper" v-for="level2 in level1.children">
        <div class="title2">{{ level2.title }}</div>
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
    padding: 10px 0;
    font-size: 20px;
    font-weight: bold;
  }

  .title2 {
    padding: 0;
    font-size: 16px;
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
