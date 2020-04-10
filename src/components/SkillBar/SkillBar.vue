<template>
  <div>
    <img
      v-if="skill"
      :src="skill.icon"
      :alt="skill.name"
      role="img"
    >
    {{ skill ? skill.name : 'Press space to start' }}
  </div>
</template>

<script>
import Skill from '../../classes/Skill/Skill';

export default {
  name: 'SkillBar',
  props: {
    skill: Skill,
  },
};
</script>
