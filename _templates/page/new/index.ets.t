---
to: src/pages/<%= h.changeCase.pascal(name) %>.vue
---
<template>
  <Layout>
    <h1><%= h.changeCase.sentence(name) %></h1>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: '<%= h.changeCase.sentence(name) %>',
  },
};
</script>

<style lang="scss" scoped>

</style>
