<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getReq } from '@/utils/myFetch';

const topics = ref([]);
onMounted(async () => {
  const { result } = await getReq('/api/topics/all');
  topics.value = result;
});
</script>

<template>
  <div class="topics">
    <topic-card v-for="topic in topics" :info="topic" />
  </div>
</template>

<style lang="less" scoped>
.topics {
  width: calc(100% - 300px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}
</style>
