import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { setBranding } from '../../utils/setBranding';
import ncoreIcon from '../../assets/icon/ncore.svg';
import renilIcon from '../../assets/icon/renil.svg';

const tabs = [
  { label: 'Ncore', path: '/ncore', theme: 'ncore' },
  { label: 'Renil', path: '/renil', theme: 'renil' },
];

const TabSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith('/ncore')) {
      setBranding('Ncore Electricals', ncoreIcon);
    } else if (location.pathname.startsWith('/renil')) {
      setBranding('Renil Company', renilIcon);
    }
  }, [location.pathname]);
const activeTheme = location.pathname.startsWith("/renil") ? "renil" : "ncore";
  return (
    <div className={`tab-section ${activeTheme}`}>
      <div className="tabs-inner">
        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            className={({ isActive }) =>
              isActive ? `tab tab-active ${tab.theme}` : `tab-unactive ${tab.theme}`
            }>
            {tab.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default TabSection;
