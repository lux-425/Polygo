import Head from 'next/head';
import Image from 'next/image';

import Layout from '../components/layout/Layout';
import Home from '../components/Home';

import { Canvas } from '@react-three/fiber';
import Experience from '../components/three/Experience';

export default function Index() {
  return (
    <>
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 0, 0],
        }}
      >
        <Experience />
      </Canvas>

      <Layout>
        <Home />
      </Layout>
    </>
  );
}
