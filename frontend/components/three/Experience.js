import { lazy, Suspense, useEffect, useRef } from 'react';

import * as THREE from 'three';
THREE.ColorManagement.legacyMode = false;

import { PresentationControls, useGLTF, Environment } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

import Lights from './Light';

const Experience = ({ deviceType }) => {
  const testModel = useGLTF('/models/testModel.glb');
  testModel.scene.traverse(function (object) {
    if (object.isMesh) {
      object.material.color.set(0xff00ff);
      object.material.transparent = true;
      object.material.opacity = 0.5;
    }
  });

  let modelScale = 0;
  let modelYPos = 0;
  switch (deviceType) {
    case 'desktop':
      modelScale = 0.2;
      modelYPos = -2.5;
      break;
    case 'mobile':
      modelScale = 0.1;
      modelYPos = -2.5;
      break;
    default:
      modelScale = 1;
      modelYPos = 1;
  }

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    state.camera.position.z =
      Math.sin(time * 0.25) + Math.cos(time * 0.25) - 15;
  });

  return (
    <>
      <Environment preset='night' />

      <color args={['slategray']} attach='background' />

      <Lights />

      <group position={[0, modelYPos, 0]}>
        <PresentationControls
          global
          rotation={[0, 0, 0]}
          polar={[-0.1, 0.3]}
          azimuth={[-1, 1]}
          config={{ mass: 5, tension: 55 }}
          snap={{ mass: 5, tension: 55 }}
        >
          <primitive object={testModel.scene} scale={modelScale} />
        </PresentationControls>
      </group>
    </>
  );
};

export default Experience;
