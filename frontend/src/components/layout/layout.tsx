import Header from '../header';
import Footer from '../footer';
import layoutController from './layout-controller';
import { Outlet } from 'react-router-dom';
import React from 'react';
import NotFoundPage from '../../pages/404';

const Layout = () => {
  const { theme, pageData, loading } = layoutController();
  
  if (!theme || !['ncore','renil'].includes(theme)) {
    return <NotFoundPage />;
  }

  return (
    <>
      <Header theme={theme} pageData={pageData?.header} loading={loading} />
      <Outlet context={{ brand: theme }} />
      <Footer theme={theme} pageData={pageData?.footer} loading={loading} />
    </>
  );
};

export default React.memo(Layout);
