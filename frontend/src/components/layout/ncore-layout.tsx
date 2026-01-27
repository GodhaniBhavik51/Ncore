import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';

const NcoreLayout = () => {

  return (
    <>
      <Header theme="ncore" />
      <Outlet />
      <Footer theme='ncore' />
    </>
  );
};

export default NcoreLayout;
