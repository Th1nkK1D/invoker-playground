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

const sceneController = new SceneController(SCREEN_WIDTH, SCREEN_HEIGHT);

export default {
  name: 'ModelScene',
  mounted() {
    sceneController.init(this.$refs.scene);
    sceneController.animate();
  },
};
</script>
