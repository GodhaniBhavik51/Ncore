import { useEffect } from 'react';
import { setBranding } from '../../utils/setBranding';
import { ncoreIcon, renilIcon } from '../../assets/icon';
import { useLocation } from 'react-router-dom';

const tabSectionController = () => {
  const location = useLocation();

  const tabs = [
    { label: 'Ncore', path: '/ncore', theme: 'ncore' },
    { label: 'Renil', path: '/renil', theme: 'renil' },
  ];

  const activeTheme = location.pathname.startsWith('/renil')
    ? 'renil'
    : 'ncore';

  useEffect(() => {
    if (location.pathname.startsWith('/ncore')) {
      setBranding('Ncore Electricals Co', ncoreIcon);
    } else if (location.pathname.startsWith('/renil')) {
      setBranding('Renil', renilIcon);
    }
  }, [location.pathname]);

  return {
    activeTheme,
    tabs,
  };
};

export default tabSectionController;
