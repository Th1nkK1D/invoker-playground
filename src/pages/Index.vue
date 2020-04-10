<template>
  <Layout>
    <div class="h-full flex flex-col justify-center text-center text-white">
      <GameArea />
    </div>
  </Layout>
</template>

<script>
import GameArea from '../components/GameArea/GameArea.vue';

export default {
  metaInfo: {
    title: 'Invoker Playground',
  },
  components: {
    GameArea,
  },
};
</script>
