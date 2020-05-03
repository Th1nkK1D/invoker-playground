import {
  PerspectiveCamera, Scene, WebGLRenderer, Object3D, Mesh, SphereGeometry, MeshBasicMaterial,
} from 'three';

class SceneController {
  constructor(width, height) {
    this.scene = new Scene();

    this.camera = new PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 5;

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

    this.nextOrbIndex = 0;
  }

  init(htmlDOM) {
    return htmlDOM.appendChild(this.renderer.domElement);
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    this.renderer.render(this.scene, this.camera);
  }

  pushOrb(orbKey) {
    const orbsColors = {
      q: 0x00AAFF,
      w: 0xBF5FFF,
      e: 0xFFAA00,
    };

    const targetOrb = this.orbs[this.nextOrbIndex];

    if (targetOrb.children) {
      targetOrb.children.pop();
    }

    targetOrb.add(
      new Mesh(new SphereGeometry(0.5), new MeshBasicMaterial({ color: orbsColors[orbKey] })),
    );

    this.nextOrbIndex = (this.nextOrbIndex + 1) % 3;
  }
}

export default SceneController;
