import {
  Scene,
  WebGLRenderer,
  Object3D,
  Mesh,
  SphereGeometry,
  MeshBasicMaterial,
  Clock,
  AnimationMixer,
  AnimationClip,
  LoopOnce,
} from 'three';

import GLTFLoader from 'three-gltf-loader';

import GeometricGlowMesh from '../../libs/threex.geometricglowmesh/GeometricGlowMesh';

class SceneController {
  constructor(width, height) {
    this.scene = new Scene();
    this.loader = new GLTFLoader();

    this.renderer = new WebGLRenderer();
    this.renderer.setSize(width, height);

    this.clock = new Clock();

    this.invokerAnimationMixer = null;
    this.invokerAnimationClips = [];

    this.orbs = [
      new Object3D(),
      new Object3D(),
      new Object3D(),
    ];

    this.orbs[0].position.setX(-3).setY(4).setZ(-1);
    this.orbs[1].position.setX(0).setY(7.5).setZ(-1);
    this.orbs[2].position.setX(3).setY(4).setZ(-1);

    this.scene.add(...this.orbs);

    this.nextOrbIndex = 0;
    this.nextCastedHand = 'l';
  }

  render(htmlDOM) {
    this.loader.load(`${process.env.GRIDSOME_STATIC_PATH}/models/invoker.glb`, gltf => {
      this.scene.add(...gltf.scene.children);
      [this.camera] = gltf.cameras;

      this.invokerAnimationClips = gltf.animations;
      this.invokerAnimationMixer = new AnimationMixer(this.scene.getObjectByName('invoker'));

      this.getAnimationAction('idle').play();

      htmlDOM.appendChild(this.renderer.domElement);

      this.animate();
    });
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    if (this.invokerAnimationMixer !== null) {
      this.invokerAnimationMixer.update(this.clock.getDelta());
    }

    this.renderer.render(this.scene, this.camera);
  }

  pushOrb(orbColor) {
    this.getAnimationAction(`cast_${this.nextCastedHand}`)
      .stop()
      .setLoop(LoopOnce)
      .play();

    const targetOrb = this.orbs[this.nextOrbIndex];

    if (targetOrb.children) {
      targetOrb.children.pop();
    }

    targetOrb.add(SceneController.generateOrbMesh(orbColor));

    this.nextOrbIndex = (this.nextOrbIndex + 1) % 3;
    this.nextCastedHand = this.nextCastedHand === 'l' ? 'r' : 'l';
  }

  static generateOrbMesh(orbColor) {
    const orbMesh = new Mesh(
      new SphereGeometry(0.5),
      new MeshBasicMaterial({ color: 'white' }),
    );

    const glowMesh = new GeometricGlowMesh(orbMesh, orbColor);
    orbMesh.add(glowMesh.object3d);

    return orbMesh;
  }

  invoke() {
    this.getAnimationAction('invoke')
      .stop()
      .setLoop(LoopOnce)
      .play();
  }

  getAnimationAction(name) {
    return this.invokerAnimationMixer.clipAction(
      AnimationClip.findByName(this.invokerAnimationClips, name),
    );
  }
}

export default SceneController;
