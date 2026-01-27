import { Outlet } from 'react-router-dom';
import Header from '../header';
import { renilIcon } from '../../assets/icon';
import Footer from '../footer';

const RenilLayout = () => {

  return (
    <>
      <Header theme="renil" />
      <Outlet />
      <Footer theme='renil'/>
    </>
  );
};

export default RenilLayout;
