import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { TabSection } from '../../pages/tab-section';
import './index.css';
import { HeaderController } from './header-controller';

const Header = () => {
  const [open, setOpen] = useState(false);

  const { pageData, theme } = HeaderController();

  return (
    <>
      <TabSection />

      <header className={`site-header ${theme}`}>
        <div className="header-inner">
          {/* Brand */}
          <div className="brand">
            <img src={pageData?.icon} alt={pageData?.title} />
            <span className="brand-title">{pageData?.title}</span>
          </div>

          <button
            className="menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu">
            {open ? '✕' : '☰'}
          </button>

          <nav className={`nav ${open ? 'open' : ''}`}>
            <NavLink to="." end onClick={() => setOpen(false)}>
              Home
            </NavLink>
            <NavLink to="product" onClick={() => setOpen(false)}>
              Product
            </NavLink>
            <NavLink to="about-us" onClick={() => setOpen(false)}>
              About Us
            </NavLink>
            <NavLink to="contact-us" onClick={() => setOpen(false)}>
              Contact Us
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
