<template>
  <Layout>
    <h1>About us</h1>
    <LoremIpsum />
  </Layout>
</template>

<script>
import LoremIpsum from '../components/LoremIpsum/LoremIpsum.vue';

export default {
  metaInfo: {
    title: 'About us',
  },
  components: {
    LoremIpsum,
  },
};
</script>
