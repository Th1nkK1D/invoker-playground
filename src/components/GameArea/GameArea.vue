<template>
  <div>
    game-area
    <SpellBar
      data-testId="spellBar"
      :spell="targetSpell"
    />
    <Keypress
      :key-code="keycode.space"
      event="keypress"
      @pressed="getNextTargetSpell"
    />
  </div>
</template>

<script>
import Keypress from 'vue-keypress';

import SpellBar from '../SpellBar/SpellBar.vue';
import keycode from '../../data/keycode.json';

let spellPool = [];

export default {
  name: 'GameArea',
  components: {
    SpellBar,
    Keypress,
  },
  props: {
    spells: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      keycode,
      targetSpell: null,
    };
  },
  mounted() {
    spellPool = [...this.spells];
  },
  methods: {
    getNextTargetSpell() {
      const randomIndex = Math.floor(Math.random() * spellPool.length);

      const [nextTargetSpell] = spellPool.splice(randomIndex, 1);

      if (this.targetSpell !== null) {
        spellPool.push(this.targetSpell);
      }

      this.targetSpell = nextTargetSpell;
    },
  },
};
</script>
