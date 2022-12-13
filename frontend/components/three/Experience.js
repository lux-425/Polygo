import React from 'react';

import * as THREE from 'three';
THREE.ColorManagement.legacyMode = false;

import { PresentationControls } from '@react-three/drei';

const Experience = () => {
  return (
    <>
      <color args={['slategray']} attach='background' />

      <PresentationControls
        global
        rotation={[0.15, 0.15, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 55 }}
        snap={{ mass: 4, tension: 55 }}
      >
        <mesh position={[0, 0, 0]}>
          <boxGeometry />
          <meshBasicMaterial color='magenta' />
        </mesh>
      </PresentationControls>
    </>
  );
};

export default Experience;
