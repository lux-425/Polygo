import React from 'react';

import Head from 'next/head';
import Script from 'next/script';

import Header from './Header';
import Footer from './Footer';

import { ToastContainer } from 'react-toastify';

const Layout = ({ children, title = 'Learn 日本語' }) => {
  return (
    <>
      <Head>
        <title>Polygo - {title}</title>
      </Head>

      <ToastContainer position='bottom-center' />

      <Header />
      {/* components that will be passed between the general layout */}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
