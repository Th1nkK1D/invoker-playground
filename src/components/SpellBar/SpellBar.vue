<template>
  <div
    ref="container"
    class="flex flex-row bg-white h-12 max-w-md m-auto rounded-full p-1 shadow-md
    transition-colors duration-500 ease-in-out"
  >
    <img
      v-if="spell"
      :src="spell.icon"
      :alt="spell.name"
      role="img"
      class="h-full rounded-full"
    >
    <div class="flex-1 flex flex-col justify-center">
      <div class="text-black font-bold">
        {{ spell ? spell.name : 'Press space to start' }}
      </div>
      <div
        v-if="!spell"
        class="text-xs text-gray-500"
      >
        Q, W, E to cast Quas, Wex and Exort - R to invoke
      </div>
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
  methods: {
    triggerContainerClass(className) {
      this.$refs.container.classList.add(className);

      setTimeout(() => this.$refs.container.classList.remove(className), 500);
    },
    triggerValidInvoke() {
      this.triggerContainerClass('bg-green-500');
    },
    triggerInvalidInvoke() {
      this.triggerContainerClass('bg-red-500');
    },
  },
};
</script>
