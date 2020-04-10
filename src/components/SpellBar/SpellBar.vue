<template>
  <div class="flex flex-row bg-white h-12 max-w-md m-auto rounded-full p-1 shadow-md">
    <img
      v-if="spell"
      :src="spell.icon"
      :alt="spell.name"
      role="img"
      class="h-full rounded-full"
    >
    <div class="text-black flex-1 flex flex-col justify-center font-bold">
      {{ spell ? spell.name : 'Press space to start' }}
    </div>
    <div
      v-if="spell"
      class="w-10"
    />
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
