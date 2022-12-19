import { React, useContext, useEffect, useState } from 'react';

import Layout from '../components/layout/Layout';
import Authentication from './auth/Authentication';
import Menu from './layout/Menu';

import AuthContext from '../context/AuthContext';

const Home = ({ access_token }) => {
  const { isAuthenticated } = useContext(AuthContext);

  let openMenu = isAuthenticated;

  if (access_token) {
    openMenu = true;
  }

  return (
    <Layout openMenu={openMenu}>
      {!openMenu && <Authentication />}
      {openMenu && <Menu />}
    </Layout>
  );
};

export default Home;
