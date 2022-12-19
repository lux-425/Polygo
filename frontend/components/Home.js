import { React, useContext, useEffect, useState } from 'react';

import Authentication from './auth/Authentication';

import AuthContext from '../context/AuthContext';

const Home = ({ access_token }) => {
  const { isAuthenticated } = useContext(AuthContext);

  let openMenu = isAuthenticated;

  if (access_token) {
    openMenu = true;
  }

  return (
    <>
      {!openMenu && <Authentication />}
      {openMenu && <>MENU</>}
    </>
  );
};

export default Home;
