import Layout from '../components/layout/Layout';
import Home from '../components/Home';
import Experience from '../components/three/Experience';

import { Canvas } from '@react-three/fiber';

import { isUserAuthenticated } from '../utils/isAuthenticated';

export default function Index({ access_token }) {
  return (
    <>
      <div id='scene'>
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

      <div id='interface'>
        <Layout>
          <Home access_token={access_token} />
        </Layout>
      </div>
    </>
  );
}

export async function getServerSideProps({ req }) {
  const access_token = req.cookies.access;
  const user = await isUserAuthenticated(access_token);

  if (!user) {
    return {
      props: { access_token: null },
    };
  }

  return {
    props: { access_token },
  };
}
