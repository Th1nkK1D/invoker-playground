<template>
  <div>
    <img
      v-if="spell"
      :src="spell.icon"
      :alt="spell.name"
      role="img"
    >
    {{ spell ? spell.name : 'Press space to start' }}
  </div>
</template>

<script>
import Spell from '../../classes/Spell/Spell';

export default {
  name: 'SpellBar',
  props: {
    spell: Spell,
  },
};
</script>
