import * as THREE from 'three';

import AtmosphereMaterial from './AtmosphereMaterial';
import DilateGeometry from './DilateGeometry';

function generateGlowingMesh(mesh, dilateLength, materialSetting) {
  const geometry = mesh.geometry.clone();

  DilateGeometry(geometry, dilateLength);

  const material = AtmosphereMaterial();
  const {
    color, coeficient, power, side,
  } = materialSetting;

  material.uniforms.glowColor.value = new THREE.Color(color);
  material.uniforms.coeficient.value = coeficient;
  material.uniforms.power.value = power;
  if (side) material.side = side;

  return new THREE.Mesh(geometry, material);
}

export default function (mesh, color = 'cyan', insideMaterialSetting = {}, outsideMaterialSetting = {}) {
  const object3d = new THREE.Object3D();

  const insideMesh = generateGlowingMesh(mesh, 0.01, {
    color, coeficient: 1.1, power: 1.4, ...insideMaterialSetting,
  });

  object3d.add(insideMesh);

  const outsideMesh = generateGlowingMesh(mesh, 0.1, {
    color, coeficient: 0.1, power: 1.2, back: THREE.BackSide, ...outsideMaterialSetting,
  });
  object3d.add(outsideMesh);

  // expose a few variable
  this.object3d = object3d;
  this.insideMesh = insideMesh;
  this.outsideMesh = outsideMesh;
}
