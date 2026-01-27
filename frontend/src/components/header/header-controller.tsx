import { ncoreIcon, renilIcon } from '../../assets/icon';

const HeaderController = () => {
  const theme = location.pathname.startsWith('/ncore') ? 'ncore' : 'renil';

  const pageData = {
    icon: theme === 'ncore' ? ncoreIcon : renilIcon,
    title: theme === 'ncore' ? 'Ncore Electricals' : 'Renil Electricals',
  };
  return {
    theme,
    pageData,
  };
};

export { HeaderController };
