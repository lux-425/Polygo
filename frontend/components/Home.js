import { React, useContext, useState } from 'react';

import Authentication from './auth/Authentication';

import AuthContext from '../context/AuthContext';

const Home = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <>
      {!isAuthenticated && <Authentication />}
      {isAuthenticated && <></>}
    </>
  );
};

export default Home;
