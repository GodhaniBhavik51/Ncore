import Header from '../header';
import Footer from '../footer';
import layoutController from './layout-controller';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const { theme, pageData, loading } = layoutController();

  return (
    <>
      <Header theme={theme} pageData={pageData?.header} loading={loading} />
      <Outlet context={{ brand: theme }} />
      <Footer theme={theme} pageData={pageData?.footer} loading={loading} />
    </>
  );
};

export default Layout;
