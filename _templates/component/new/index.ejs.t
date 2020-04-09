---
to: src/components/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.vue
---
<template>
  <div>
    <%= h.changeCase.lower(name) %>
  </div>
</template>

<script>
export default {
  name: '<%= h.changeCase.pascal(name) %>',
};
</script>

<style lang="scss" scoped>

</style>
