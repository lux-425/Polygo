import { lazy, Suspense, useEffect, useRef } from 'react';

import * as THREE from 'three';
THREE.ColorManagement.legacyMode = false;

import { PresentationControls, useGLTF, Environment } from '@react-three/drei';

import Lights from './Light';

const Experience = () => {
  const testModel = useGLTF('/models/testModel.glb');
  testModel.scene.traverse(function (object) {
    if (object.isMesh) {
      object.material.color.set(0xff00ff);
      object.material.transparent = true;
      object.material.opacity = 0.5;
    }
  });

  return (
    <>
      <Environment preset='night' />

      <color args={['slategray']} attach='background' />

      <Lights />

      <group position={[-1.5, -2.5, -8]}>
        <PresentationControls
          global
          rotation={[0, 0, 0]}
          polar={[-0.1, 0.3]}
          azimuth={[-1, 1]}
          config={{ mass: 5, tension: 55 }}
          snap={{ mass: 5, tension: 55 }}
        >
          <primitive object={testModel.scene} scale={0.3} />
        </PresentationControls>
      </group>
    </>
  );
};

export default Experience;
