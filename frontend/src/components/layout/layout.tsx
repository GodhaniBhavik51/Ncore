import Header from '../header';
import Footer from '../footer';
import layoutController from './layout-controller';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  const { theme } = layoutController()

   return (
    <>
      <Header theme={theme}/>
      <Outlet context={{ brand: theme }} />
      <Footer theme={theme}/>
    </>
  );
}

export default Layout