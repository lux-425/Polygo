import React from 'react';

import Head from 'next/head';
import Script from 'next/script';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, title = 'Polygo' }) => {
  return (
    <div>
      <Head>
        <title>{title} - Learn 日本語</title>
      </Head>

      <Header />
      {/* components that will be passed between the general layout */}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
