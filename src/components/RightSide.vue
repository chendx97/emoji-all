<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();

const hotTopics = [
  {
    emoji: '🎄',
    name: '圣诞节',
  },
  {
    emoji: '🧨',
    name: '春节',
  },
  {
    emoji: '🛍️',
    name: '购物节',
  },
  {
    emoji: '🎓',
    name: '开学/毕业',
  },
  {
    emoji: '🏆',
    name: '体育比赛',
  },
];

const goTopics = () => {
  router.push('/topics');
}
</script>

<template>
  <div class="right-side">
    <el-card class="card-topic">
      <template #header>
        专题
      </template>
      <p v-for="topic in hotTopics" :key="topic.name" class="topic-item">
        <span class="emoji">{{ topic.emoji }}</span>
        <span>{{ topic.name }}</span>
        <span class="icon-hot">🔥</span>
      </p>
      <template #footer>
        <el-button class="btn-more" type="primary" color="#ffd04b" @click="goTopics">全部专题</el-button>
      </template>
    </el-card>
  </div>
</template>

<style lang="less">
.right-side {
  width: 250px;

  .card-topic {
    .el-card__header {
      font-weight: 600;
      font-size: 18px;
    }

    .topic-item {
      margin: 10px 0;
      display: flex;
      align-items: center;

      .emoji {
        margin-right: 10px;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: #ff7fff;
        display: inline-block;
        text-align: center;
        line-height: 32px;
      }

      .icon-hot {
        margin-left: auto;
      }

      &:nth-child(2) .emoji {
        background-color: #00ffff;
      }

      &:nth-child(3) .emoji {
        background-color: #7fff7f;
      }

      &:nth-child(4) .emoji {
        background-color: #7f7f7f;
      }

      &:nth-child(5) .emoji {
        background-color: #4747ff;
      }
    }

    .el-card__footer {
      text-align: center;

      .btn-more {
        width: 100%;
        height: 38px;
        font-size: 16px;
      }
    }
  }
}
</style>
