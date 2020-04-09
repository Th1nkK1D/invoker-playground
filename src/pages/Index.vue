<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image
      alt="Example image"
      src="~/favicon.png"
      width="135"
    />

    <h1>Hello, world!</h1>

    <LoremIpsum />

    <p class="home-links">
      <a
        href="https://gridsome.org/docs/"
        target="_blank"
        rel="noopener"
      >Gridsome Docs</a>
      <a
        href="https://github.com/gridsome/gridsome"
        target="_blank"
        rel="noopener"
      >GitHub</a>
    </p>
  </Layout>
</template>

<script>
import LoremIpsum from '../components/LoremIpsum/LoremIpsum.vue';

export default {
  metaInfo: {
    title: 'Hello, world!',
  },
  components: {
    LoremIpsum,
  },
};
</script>

<style lang="scss">
.home-links {
  a {
    margin-right: 1rem;
  }
}
</style>
