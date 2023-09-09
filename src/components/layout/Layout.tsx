import './Layout.css';

import Footer from './Footer';
import Header from './Header';
import { PropsWithChildren } from 'react';
import React from 'react';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className='layout w-screen min-h-screen grid grid-rows-[64px_minmax(calc(100vh-64px-100px),_1fr)_100px] h-full'>
      <Header />
      <div className='container mt-8'>{children}</div>
      <Footer />
    </div>
  );
};
