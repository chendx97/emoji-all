<script setup lang="ts">
defineProps(['info']);
</script>
<template>
  <div class="topic-card" @click="() => $router.push(`/topic/${info.key}`)">
    <div class="logo-wrapper">
      <span>{{ info.emojis[0] }}</span>
    </div>
    <div class="name">{{ info.name }}</div>
    <div class="hot-list">
      <div class="hot-item" v-for="icon in info.emojis">{{ icon }}</div>
      <div class="hot-item">+{{ info.count }}</div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.topic-card {
  padding: 30px 0;
  width: 100%;
  height: 250px;
  background: linear-gradient(to bottom, #f90 80px, #fff 80px);
  border-radius: 4px;
  cursor: pointer;

  &:nth-of-type(4n + 2) {
    background: linear-gradient(to bottom, #4485ed 80px, #fff 80px);
  }

  &:nth-of-type(4n + 3) {
    background: linear-gradient(to bottom, #ff5e3a 80px, #fff 80px);
  }

  &:nth-of-type(4n + 4) {
    background: linear-gradient(to bottom, #35a541 80px, #fff 80px);
  }

  .logo-wrapper {
    margin: 0 auto;
    width: 105px;
    height: 105px;
    background-color: #fff;
    border-radius: 50%;
    font-size: 60px;
    text-align: center;
    line-height: 105px;
  }

  .name {
    font-size: 18px;
    text-align: center;
  }

  .hot-list {
    display: flex;
    width: fit-content;
    margin: 15px auto 0;

    .hot-item {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #f90;
      font-size: 20px;
      text-align: center;
      line-height: 40px;

      &:not(:first-child) {
        margin-left: -15px;
      }

      &:nth-of-type(4n + 2) {
        background-color: #4485ed;
      }

      &:nth-of-type(4n + 3) {
        background-color: #ff5e3a;
      }

      &:nth-of-type(4n + 4) {
        background-color: #35a541;
      }

      &:nth-of-type(4n + 5) {
        background-color: #6f61f2;
        color: #fff;
        font-size: 14px;
      }
    }
  }
}
</style>
