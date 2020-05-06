<template>
  <div
    ref="scene"
    class="flex justify-center"
  >
    <div
      v-if="isLoading"
      class="flex flex-col justify-center"
      :style="`width: ${SCREEN_WIDTH}px; height: ${SCREEN_HEIGHT}px;`"
    >
      Summoning Invoker...
    </div>
  </div>
</template>

<script>
import SceneController from '../../classes/SceneController/SceneController';

export default {
  name: 'ModelScene',
  data() {
    return {
      sceneController: null,
      SCREEN_WIDTH: 500,
      SCREEN_HEIGHT: 500,
      isLoading: true,
    };
  },
  mounted() {
    this.sceneController = new SceneController(this.SCREEN_WIDTH, this.SCREEN_HEIGHT);
    this.sceneController.render(this.$refs.scene).then(() => {
      this.isLoading = false;
    });
  },
  methods: {
    pushOrb(orb) {
      this.sceneController.pushOrb(orb.color);
    },
    invoke() {
      this.sceneController.invoke();
    },
  },
};
</script>
