import Head from 'next/head';
import Image from 'next/image';

import Layout from '../components/layout/Layout';
import Home from '../components/Home';

import { Canvas } from '@react-three/fiber';
import Experience from '../components/three/Experience';

export default function Index() {
  return (
    <>
      <div className='scene'>
        <Canvas
          shadows
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [1, 0, 5],
          }}
        >
          <Experience />
        </Canvas>
      </div>

      <Layout>
        <Home />
      </Layout>
    </>
  );
}
