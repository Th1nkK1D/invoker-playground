<template>
  <div>
    game-area
    <SpellBar
      data-testId="spellBar"
      :spell="targetSpell"
    />
    <Keypress
      v-for="key in watchedKeys"
      :key="key.code"
      :key-code="key.code"
      event="keypress"
      @pressed="key.handler"
    />
  </div>
</template>

<script>
import Keypress from 'vue-keypress';

import SpellBar from '../SpellBar/SpellBar.vue';
import Invoker from '../../classes/Invoker/Invoker';
import keycode from '../../data/keycode.json';

let invoker;

export default {
  name: 'GameArea',
  components: {
    SpellBar,
    Keypress,
  },
  props: {
    orbs: {
      type: Array,
      default: () => [],
    },
    spells: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      watchedKeys: [
        { code: keycode.space, handler: this.getNextTargetSpell },
        { code: keycode.q, handler: this.onOrbPressed },
        { code: keycode.w, handler: this.onOrbPressed },
        { code: keycode.e, handler: this.onOrbPressed },
        { code: keycode.r, handler: this.onInvokePressed },
      ],
      targetSpell: null,
    };
  },
  mounted() {
    invoker = new Invoker(this.spells);
  },
  methods: {
    getNextTargetSpell() {
      const spellPool = this.spells.filter(spell => spell !== this.targetSpell);
      const randomIndex = Math.floor(Math.random() * spellPool.length);

      [this.targetSpell] = spellPool.splice(randomIndex, 1);
    },
    onOrbPressed(pressedKeyCode) {
      const orbKey = Object.keys(keycode).find(key => keycode[key] === pressedKeyCode);
      const castedOrb = this.orbs.find(orb => orb.key === orbKey);

      invoker.castOrb(castedOrb);
    },
    onInvokePressed() {
      const spell = invoker.invoke();

      if (spell && spell.isEqualTo(this.targetSpell)) {
        this.getNextTargetSpell();
      }
    },
  },
};
</script>
