import { React, useState } from 'react';

import Authentication from './auth/Authentication';

const Home = () => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <>
        {!authenticated && <Authentication />}
        {authenticated && <></>}
    </>
  );
};

export default Home;
