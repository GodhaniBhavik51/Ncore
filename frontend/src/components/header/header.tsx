import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { TabSection } from '../../pages/tab-section';
import './index.css';
import { HeaderController } from './header-controller';
import { ncoreIcon, renilIcon } from '../../assets/icon';

const Header = ({ theme }: any) => {
  const [open, setOpen] = useState(false);
  const { pageData, loading } = HeaderController();

  if (loading || !pageData) return null;

  return (
    <>
      <TabSection />

      <header className={`site-header ${theme}`}>
        <div className="header-inner">
          {/* Brand */}
          <div className="brand">
            <img
              src={theme === 'ncore' ? ncoreIcon : renilIcon}
              alt={pageData.title}
            />
            <span className="brand-title">{pageData.title}</span>
          </div>

          <button
            className="menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu">
            {open ? '✕' : '☰'}
          </button>

          {/* MENU FROM API */}
          <nav className={`nav ${open ? 'open' : ''}`}>
            {pageData.menu.map((item: any) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '.'}
                onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
