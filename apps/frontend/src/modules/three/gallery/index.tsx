/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 model.glb --transform --types
*/

import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF, RGBELoader } from "three-stdlib";
import model from "./assets/model-transformed.glb";
import { useLoader } from "@react-three/fiber";
import { useTrimesh } from "@react-three/cannon";

type GLTFResult = GLTF & {
  nodes: {
    平面005: THREE.Mesh;
    平面005_1: THREE.Mesh;
  };
  materials: {
    floor: THREE.MeshStandardMaterial;
    wall: THREE.MeshStandardMaterial;
  };
};

function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(model) as GLTFResult;
  const texture = useLoader(RGBELoader, "/skybox/sky.hdr");
  const [ref1] = useTrimesh(() => ({
    args: [
      nodes.平面005.geometry.attributes.position.array,
      nodes.平面005.geometry.index!.array,
    ],
    material: {
      friction: 0.1,
    },
  }));
  const [ref2] = useTrimesh(() => ({
    args: [
      nodes.平面005_1.geometry.attributes.position.array,
      nodes.平面005_1.geometry.index!.array,
    ],
    material: {
      friction: 0.1,
    },
  }));

  useEffect(() => {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.magFilter = THREE.LinearFilter;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    texture.flipY = false;
    texture.generateMipmaps = true;
    texture.needsUpdate = true;

    materials.floor.envMap = texture;
    materials.wall.envMap = texture;
  }, [texture]);

  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]} scale={1} >
        <mesh
          geometry={nodes.平面005.geometry}
          material={materials.floor}
          ref={ref1 as any}
        />
        <mesh
          geometry={nodes.平面005_1.geometry}
          material={materials.wall}
          ref={ref2 as any}
        />
      </group>
    </group>
  );
}

useGLTF.preload(model);

export default Model;
