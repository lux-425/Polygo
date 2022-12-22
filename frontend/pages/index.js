import Experience from '../components/three/Experience';
import Home from '../components/Home';

import { Canvas } from '@react-three/fiber';

import { isUserAuthenticated } from '../utils/isAuthenticated';

export default function Index({ access_token }) {
  // const getDeviceType = () => {
  //   const ua = global.navigator.userAgent;
  //   if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
  //     return 'tablet';
  //   }
  //   if (
  //     /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
  //       ua
  //     )
  //   ) {
  //     return 'mobile';
  //   }
  //   return 'desktop';
  // };
  // let deviceType = getDeviceType();
  // let cameraZ = 0;
  // if (deviceType === 'desktop') {
  //   cameraZ = -15;
  // } else {
  //   cameraZ = -35;
  // }
  let deviceType = 'desktop';
  let cameraZ = -15;

  return (
    <>
      <div id='scene'>
        <Canvas
          shadows
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [0, 0, cameraZ],
          }}
        >
          <Experience deviceType={deviceType} />
        </Canvas>
      </div>

      <div id='interface'>
        <Home access_token={access_token} />
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
