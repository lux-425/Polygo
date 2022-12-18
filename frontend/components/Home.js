import { React, useContext, useEffect, useState } from 'react';

import Authentication from './auth/Authentication';

import AuthContext from '../context/AuthContext';

const Home = ({ access_token }) => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  if (access_token) {
    setIsAuthenticated(true);
  }

  return (
    <>
      {!isAuthenticated && <Authentication />}
      {isAuthenticated && <>MENU</>}
    </>
  );
};

export default Home;
