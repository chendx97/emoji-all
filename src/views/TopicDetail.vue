<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { getReq } from '@/utils/myFetch';
const route = useRoute();

const list = ref([]);
watch(() => route.params.id, async () => {
  const { result } = await getReq('/cdxapi/topic/info', { id: route.params.id });
  list.value = result;
}, {
  immediate: true,
});
</script>

<template>
  <div class="main-wrapper topic-detail">
    <emoji-card v-for="info in list" :info="info" />
  </div>
</template>

<style lang="less" scoped>
.topic-detail {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
