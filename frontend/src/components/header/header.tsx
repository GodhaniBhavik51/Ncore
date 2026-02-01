import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { TabSection } from '../../pages/tab-section';
import './index.css';
import { ncoreIcon, renilIcon } from '../../assets/icon';

const Header = ({ theme, pageData, loading }: any) => {
  const [open, setOpen] = useState(false);

  if (loading || !pageData) return null;

  return (
    <>
      <TabSection />

      <header className={`site-header ${theme}`}>
        <div className="header-inner">
          {/* Brand */}
          <div className="brand">
            <NavLink to={theme === 'ncore' ? '/ncore' : '/renil'}>
              <img
                src={theme === 'ncore' ? ncoreIcon : renilIcon}
                alt={pageData.title}
              />
            </NavLink>
            <span className="brand-title">
              {pageData.title}
              {theme === 'ncore' && <sup className="tm-circle">TM</sup>}
              {theme === 'renil' && <sup className="reg-circle">R</sup>}
            </span>
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
                end={item.exact}
                onClick={() => setOpen(false)}
                className={({ isActive }) => (isActive ? 'active' : '')}>
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
