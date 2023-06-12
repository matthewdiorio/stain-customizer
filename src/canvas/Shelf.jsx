import React, { useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { useSelector } from 'react-redux';
import * as THREE from 'three';

const Shelf = () => {
  const { scene, nodes } = useGLTF('shelf.glb');
  const texture = useTexture(useSelector((state) => state.texture.texture));
  const ref = useRef();
  const stainColor = useSelector((state) => state.stain.color);

 

  Object.entries(nodes).forEach(([nodeName, node]) => {

    if (node.material && stainColor) {
      if (Array.isArray(node.material)) {
        node.material.forEach((material) => {
          const colorMaterial = new THREE.MeshStandardMaterial({
            map: texture,
            color: stainColor,
            transparent: true,
            opacity: 0.5,
          });

          const colorLayerMesh = new THREE.Mesh(node.geometry, colorMaterial);
          colorLayerMesh.castShadow = true;
          colorLayerMesh.receiveShadow = true;
          node.add(colorLayerMesh);
        });
      } else {
        const colorMaterial = new THREE.MeshStandardMaterial({
          map: texture,
          color: stainColor,
          transparent: true,
          opacity: 0.5,
        });

        const colorLayerMesh = new THREE.Mesh(node.geometry, colorMaterial);
        colorLayerMesh.castShadow = true;
        colorLayerMesh.receiveShadow = true;
        node.add(colorLayerMesh);
      }
    } else if (node.material) { // Add else condition to use plain oak.png texture
      if (Array.isArray(node.material)) {
        node.material.forEach((material) => {
          material.map = texture; // Set the map to the oak.png texture
          material.transparent = true;
          material.opacity = 0.5;
        });
      } else {
        node.material.map = texture; // Set the map to the oak.png texture
        node.material.transparent = true;
        node.material.opacity = 1;
      }
    }
  });

  return (
    <group ref={ref} dispose={null}>
      <primitive object={scene} receiveShadow />
    </group>
  );
};

export default Shelf;
