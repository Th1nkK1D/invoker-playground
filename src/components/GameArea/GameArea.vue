<template>
  <div>
    game-area
    <SkillBar
      data-testId="skillBar"
      :skill="targetSkill"
    />
    <Keypress
      :key-code="keycode.space"
      event="keypress"
      @pressed="getNextTargetSkill"
    />
  </div>
</template>

<script>
import Keypress from 'vue-keypress';

import SkillBar from '../SkillBar/SkillBar.vue';
import keycode from '../../data/keycode.json';

let skillPool = [];

export default {
  name: 'GameArea',
  components: {
    SkillBar,
    Keypress,
  },
  props: {
    skills: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      keycode,
      targetSkill: null,
    };
  },
  mounted() {
    skillPool = [...this.skills];
  },
  methods: {
    getNextTargetSkill() {
      const randomIndex = Math.floor(Math.random() * skillPool.length);

      const [nextTargetSkill] = skillPool.splice(randomIndex, 1);

      if (this.targetSkill !== null) {
        skillPool.push(this.targetSkill);
      }

      this.targetSkill = nextTargetSkill;
    },
  },
};
</script>
