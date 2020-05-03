import {
  PerspectiveCamera, Scene, WebGLRenderer, Object3D,
} from 'three';

class SceneController {
  constructor(width, height) {
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(75, width / height, 0.1, 1000);

    this.renderer = new WebGLRenderer();
    this.renderer.setSize(width, height);

    this.orbs = [
      new Object3D(),
      new Object3D(),
      new Object3D(),
    ];

    this.orbs[0].position.setX(-2);
    this.orbs[1].position.setX(0);
    this.orbs[2].position.setX(2);

    this.scene.add(...this.orbs);

    this.camera.position.z = 5;
  }

  init(htmlDOM) {
    return htmlDOM.appendChild(this.renderer.domElement);
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    this.renderer.render(this.scene, this.camera);
  }
}

export default SceneController;
