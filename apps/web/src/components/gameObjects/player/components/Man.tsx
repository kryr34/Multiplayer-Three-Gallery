'use client';

import { Event } from 'three';
import React, { MutableRefObject } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { Object3D } from 'three';

export type GLTFResult = GLTF & {
  nodes: {
    ['Body_(merged)baked']: THREE.SkinnedMesh;
    ['Body_(merged)baked_1']: THREE.SkinnedMesh;
    ['Body_(merged)baked_2']: THREE.SkinnedMesh;
    ['Body_(merged)baked_3']: THREE.SkinnedMesh;
    Hair: THREE.SkinnedMesh;
    ['Face_(merged)(Clone)baked']: THREE.SkinnedMesh;
    ['Face_(merged)(Clone)baked_1']: THREE.SkinnedMesh;
    ['Face_(merged)(Clone)baked_2']: THREE.SkinnedMesh;
    ['Face_(merged)(Clone)baked_3']: THREE.SkinnedMesh;
    ['Face_(merged)(Clone)baked_4']: THREE.SkinnedMesh;
    ['Face_(merged)(Clone)baked_5']: THREE.SkinnedMesh;
    ['Face_(merged)(Clone)baked_6']: THREE.SkinnedMesh;
    Root: THREE.Bone;
  };
  materials: {
    ['N00_000_00_Body_00_SKIN (Instance)']: THREE.MeshBasicMaterial;
    ['N00_006_01_Shoes_01_CLOTH (Instance)']: THREE.MeshBasicMaterial;
    ['N00_001_02_Bottoms_01_CLOTH (Instance)']: THREE.MeshBasicMaterial;
    ['N00_007_03_Tops_01_CLOTH (Instance)']: THREE.MeshBasicMaterial;
    ['N00_000_Hair_00_HAIR (Instance)']: THREE.MeshBasicMaterial;
    ['N00_000_00_FaceMouth_00_FACE (Instance)']: THREE.MeshBasicMaterial;
    ['N00_000_00_EyeIris_00_EYE (Instance)']: THREE.MeshBasicMaterial;
    ['N00_000_00_EyeHighlight_00_EYE (Instance)']: THREE.MeshBasicMaterial;
    ['N00_000_00_Face_00_SKIN (Instance)']: THREE.MeshBasicMaterial;
    ['N00_000_00_EyeWhite_00_EYE (Instance)']: THREE.MeshBasicMaterial;
    ['N00_000_00_FaceBrow_00_FACE (Instance)']: THREE.MeshBasicMaterial;
    ['N00_000_00_FaceEyeline_00_FACE (Instance)']: THREE.MeshBasicMaterial;
  };
};

export function ManModel(
  props: JSX.IntrinsicElements['group'] & {
    nodes: GLTFResult['nodes'];
    materials: GLTFResult['materials'];
    animationRef: MutableRefObject<Object3D<Event> | null | undefined>;
  },
) {
  const { nodes, materials, animationRef, ...rest } = props;
  return (
    <group {...rest} dispose={null}>
      <group name='Scene'>
        <group name='Armature' position={[0, -0.1, 0]}>
          <primitive object={nodes.Root} ref={animationRef} />
          <group name='secondary' />
          <group name='Body'>
            <skinnedMesh
              name='Body_(merged)baked'
              geometry={nodes['Body_(merged)baked'].geometry}
              material={materials['N00_000_00_Body_00_SKIN (Instance)']}
              skeleton={nodes['Body_(merged)baked'].skeleton}
            />
            <skinnedMesh
              name='Body_(merged)baked_1'
              geometry={nodes['Body_(merged)baked_1'].geometry}
              material={materials['N00_006_01_Shoes_01_CLOTH (Instance)']}
              skeleton={nodes['Body_(merged)baked_1'].skeleton}
            />
            <skinnedMesh
              name='Body_(merged)baked_2'
              geometry={nodes['Body_(merged)baked_2'].geometry}
              material={materials['N00_001_02_Bottoms_01_CLOTH (Instance)']}
              skeleton={nodes['Body_(merged)baked_2'].skeleton}
            />
            <skinnedMesh
              name='Body_(merged)baked_3'
              geometry={nodes['Body_(merged)baked_3'].geometry}
              material={materials['N00_007_03_Tops_01_CLOTH (Instance)']}
              skeleton={nodes['Body_(merged)baked_3'].skeleton}
            />
          </group>
          <skinnedMesh
            name='Hair'
            geometry={nodes.Hair.geometry}
            material={materials['N00_000_Hair_00_HAIR (Instance)']}
            skeleton={nodes.Hair.skeleton}
          />
          <group name='Face'>
            <skinnedMesh
              name='Face_(merged)(Clone)baked'
              geometry={nodes['Face_(merged)(Clone)baked'].geometry}
              material={materials['N00_000_00_FaceMouth_00_FACE (Instance)']}
              skeleton={nodes['Face_(merged)(Clone)baked'].skeleton}
              morphTargetDictionary={
                nodes['Face_(merged)(Clone)baked'].morphTargetDictionary
              }
              morphTargetInfluences={
                nodes['Face_(merged)(Clone)baked'].morphTargetInfluences
              }
            />
            <skinnedMesh
              name='Face_(merged)(Clone)baked_1'
              geometry={nodes['Face_(merged)(Clone)baked_1'].geometry}
              material={materials['N00_000_00_EyeIris_00_EYE (Instance)']}
              skeleton={nodes['Face_(merged)(Clone)baked_1'].skeleton}
              morphTargetDictionary={
                nodes['Face_(merged)(Clone)baked_1'].morphTargetDictionary
              }
              morphTargetInfluences={
                nodes['Face_(merged)(Clone)baked_1'].morphTargetInfluences
              }
            />
            <skinnedMesh
              name='Face_(merged)(Clone)baked_2'
              geometry={nodes['Face_(merged)(Clone)baked_2'].geometry}
              material={materials['N00_000_00_EyeHighlight_00_EYE (Instance)']}
              skeleton={nodes['Face_(merged)(Clone)baked_2'].skeleton}
              morphTargetDictionary={
                nodes['Face_(merged)(Clone)baked_2'].morphTargetDictionary
              }
              morphTargetInfluences={
                nodes['Face_(merged)(Clone)baked_2'].morphTargetInfluences
              }
            />
            <skinnedMesh
              name='Face_(merged)(Clone)baked_3'
              geometry={nodes['Face_(merged)(Clone)baked_3'].geometry}
              material={materials['N00_000_00_Face_00_SKIN (Instance)']}
              skeleton={nodes['Face_(merged)(Clone)baked_3'].skeleton}
              morphTargetDictionary={
                nodes['Face_(merged)(Clone)baked_3'].morphTargetDictionary
              }
              morphTargetInfluences={
                nodes['Face_(merged)(Clone)baked_3'].morphTargetInfluences
              }
            />
            <skinnedMesh
              name='Face_(merged)(Clone)baked_4'
              geometry={nodes['Face_(merged)(Clone)baked_4'].geometry}
              material={materials['N00_000_00_EyeWhite_00_EYE (Instance)']}
              skeleton={nodes['Face_(merged)(Clone)baked_4'].skeleton}
              morphTargetDictionary={
                nodes['Face_(merged)(Clone)baked_4'].morphTargetDictionary
              }
              morphTargetInfluences={
                nodes['Face_(merged)(Clone)baked_4'].morphTargetInfluences
              }
            />
            <skinnedMesh
              name='Face_(merged)(Clone)baked_5'
              geometry={nodes['Face_(merged)(Clone)baked_5'].geometry}
              material={materials['N00_000_00_FaceBrow_00_FACE (Instance)']}
              skeleton={nodes['Face_(merged)(Clone)baked_5'].skeleton}
              morphTargetDictionary={
                nodes['Face_(merged)(Clone)baked_5'].morphTargetDictionary
              }
              morphTargetInfluences={
                nodes['Face_(merged)(Clone)baked_5'].morphTargetInfluences
              }
            />
            <skinnedMesh
              name='Face_(merged)(Clone)baked_6'
              geometry={nodes['Face_(merged)(Clone)baked_6'].geometry}
              material={materials['N00_000_00_FaceEyeline_00_FACE (Instance)']}
              skeleton={nodes['Face_(merged)(Clone)baked_6'].skeleton}
              morphTargetDictionary={
                nodes['Face_(merged)(Clone)baked_6'].morphTargetDictionary
              }
              morphTargetInfluences={
                nodes['Face_(merged)(Clone)baked_6'].morphTargetInfluences
              }
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/man.glb');
