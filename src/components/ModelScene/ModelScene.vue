<template>
  <div
    ref="scene"
    class="flex justify-center"
  />
</template>

<script>
import SceneController from '../../classes/SceneController/SceneController';

const SCREEN_WIDTH = 400;
const SCREEN_HEIGHT = 500;

export default {
  name: 'ModelScene',
  data() {
    return {
      sceneController: new SceneController(SCREEN_WIDTH, SCREEN_HEIGHT),
    };
  },
  mounted() {
    this.sceneController.init(this.$refs.scene);
    this.sceneController.animate();
  },
  methods: {
    pushOrb(orb) {
      this.sceneController.pushOrb(orb.key);
    },
  },
};
</script>
