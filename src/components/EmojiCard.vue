<script setup lang="ts">
import { ref, computed } from 'vue';
import { ElMessage } from 'element-plus';
const { info } = defineProps(['info']);

const isHover = ref(false);
const handleCopy = () => {
  navigator.clipboard.writeText(info.emoji);
  ElMessage.success('复制成功');
};

const fontSize = computed(() => {
  const length = info.text.length;
  if (length <= 8) {
    return '16px';
  } else if (length <= 10) {
    return '14px';
  } else if (length <= 12) {
    return '12px';
  }
  return '10px';
});
</script>

<template>
  <div class="emoji-card" @click="handleCopy" @mouseenter="isHover = true" @mouseleave="isHover = false">
    <span class="emoji">{{ info.emoji }}</span>
    <el-button v-if="isHover" class="copy-btn" text bg>复制</el-button>
    <span v-else class="emoji-title" :style="{ fontSize }">{{ info.text }}</span>
  </div>
</template>

<style lang="less" scoped>
.emoji-card {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  width: 160px;
  height: 100px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  }

  .emoji {
    font-size: 24px;
  }

  .copy-btn {
    height: 28px;
  }

  .emoji-title {
    height: 28px;
    line-height: 28px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
