import { NavLink } from 'react-router-dom';
import tabSectionController from './tab-section-controller';

const TabSection = () => {
  const { activeTheme, tabs } = tabSectionController();

  return (
    <div className={`tab-section ${activeTheme}`}>
      <div className="tabs-inner">
        {tabs?.map((tab:any) => (
          <NavLink
            key={tab?.path}
            to={tab?.path}
            className={({ isActive }) =>
              isActive
                ? `tab tab-active ${tab?.theme}`
                : `tab-unactive ${tab?.theme}`
            }>
            {tab?.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default TabSection;
