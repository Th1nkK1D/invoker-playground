import * as THREE from 'three';

export default function (geometry, length) {
  // gather vertexNormals from geometry.faces
  const vertexNormals = new Array(geometry.vertices.length);
  geometry.faces.forEach(face => {
    if (face instanceof THREE.Face4) {
      [vertexNormals[face.a],
        vertexNormals[face.b],
        vertexNormals[face.c],
        vertexNormals[face.d]] = face.vertexNormals;
    } else if (face instanceof THREE.Face3) {
      [vertexNormals[face.a],
        vertexNormals[face.b],
        vertexNormals[face.c]] = face.vertexNormals;
    }
  });
  // modify the vertices according to vertextNormal
  geometry.vertices.map((vertex, idx) => {
    const vertexNormal = vertexNormals[idx];
    return {
      ...vertex,
      x: vertex.x + vertexNormal.x * length,
      y: vertex.y + vertexNormal.y * length,
      z: vertex.z + vertexNormal.z * length,
    };
  });
}
