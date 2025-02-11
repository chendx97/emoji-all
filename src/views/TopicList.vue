<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getReq } from '@/utils/myFetch';

const topics = ref([]);
onMounted(async () => {
  const { result } = await getReq('/cdxapi/topics/all');
  topics.value = result;
});
</script>

<template>
  <div class="main-wrapper topics">
    <topic-card v-for="topic in topics" :info="topic" />
  </div>
</template>

<style lang="less" scoped>
.topics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}
</style>
