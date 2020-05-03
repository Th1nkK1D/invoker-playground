<template>
  <div>
    <ModelScene ref="modelScene" />
    <SpellBar
      data-testId="spellBar"
      :spell="targetSpell"
    />
    <Keypress
      v-for="key in watchedKeys"
      :key="key.code"
      :key-code="key.code"
      event="keydown"
      @pressed="key.handler"
    />
  </div>
</template>

<script>
import Keypress from 'vue-keypress';

import SpellBar from '../SpellBar/SpellBar.vue';
import Invoker from '../../classes/Invoker/Invoker';
import keycode from '../../data/keycode.json';
import ModelScene from '../ModelScene/ModelScene.vue';

let invoker;

export default {
  name: 'GameArea',
  components: {
    SpellBar,
    Keypress,
    ModelScene,
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
        { code: keycode.space, handler: this.onStartPressed },
        { code: keycode.q, handler: this.onOrbPressed },
        { code: keycode.w, handler: this.onOrbPressed },
        { code: keycode.e, handler: this.onOrbPressed },
        { code: keycode.r, handler: this.onInvokePressed },
      ],
      targetSpell: null,
    };
  },
  computed: {
    isStarted() {
      return this.targetSpell !== null;
    },
  },
  methods: {
    getNextTargetSpell() {
      const spellPool = this.spells.filter(
        spell => spell !== this.targetSpell,
      );
      const randomIndex = Math.floor(Math.random() * spellPool.length);

      [this.targetSpell] = spellPool.splice(randomIndex, 1);
    },
    onStartPressed() {
      if (!this.isStarted) {
        invoker = new Invoker(this.spells);
        this.getNextTargetSpell();
      }
    },
    onOrbPressed(pressedKeyCode) {
      if (this.isStarted) {
        const orbKey = Object.keys(keycode).find(
          key => keycode[key] === pressedKeyCode,
        );
        const castedOrb = this.orbs.find(orb => orb.key === orbKey);

        invoker.castOrb(castedOrb);
        this.$refs.modelScene.pushOrb(castedOrb);
      }
    },
    onInvokePressed() {
      if (this.isStarted) {
        const spell = invoker.invoke();

        if (spell && spell.isEqualTo(this.targetSpell)) {
          this.getNextTargetSpell();
        }
      }
    },
  },
};
</script>
