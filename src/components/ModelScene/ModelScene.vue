<template>
  <div
    ref="scene"
    class="flex justify-center"
  />
</template>

<script>
import * as THREE from 'three';

const SCREEN_WIDTH = 400;
const SCREEN_HEIGHT = 500;

let scene;
let camera;
let renderer;
let cube;

export default {
  name: 'ModelScene',
  mounted() {
    this.init();
    this.animate();
  },
  methods: {
    init() {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, SCREEN_WIDTH / SCREEN_HEIGHT, 0.1, 1000);

      renderer = new THREE.WebGLRenderer();
      renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
      this.$refs.scene.appendChild(renderer.domElement);

      cube = new THREE.Mesh(
        new THREE.BoxGeometry(),
        new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
      );

      scene.add(cube);

      camera.position.z = 5;
    },
    animate() {
      requestAnimationFrame(this.animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    },
  },
};
</script>
