import { NavLink } from 'react-router-dom';
import {
  camera,
  facebook,
  google,
  mail,
  map,
  phone,
  twitter,
  ncoreIcon,
  renilIcon,
} from '../../assets/icon';
import { footerController } from './footer-controller';
import './index.css'


const ICON_MAP: any = {
  facebook,
  instagram: camera,
  google,
  twitter,
  map,
  phone,
  mail,
  ncoreIcon,
  renilIcon,
};

const Footer = () => {

  const { theme, pageData } = footerController()

  return (
    <footer className={`footer footer-${theme}`}>
      <div className="footer-wrap">
        <div className="footer-col-1">
          <div className="brand-box">
            <img src={ICON_MAP[pageData?.brand?.logo]} />
            <h2>
              {pageData?.brand?.title}
              <br />
              {pageData?.brand?.subtitle}
            </h2>
          </div>
          <div className="footer-col">
            <h3>Social Media</h3>
            <div className="social-row">
              {pageData?.social?.map((s: any) => (
                <a key={s?.icon} href={s?.url}>
                  <img src={ICON_MAP[s?.icon]} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          <ul className="nav-list">
            {pageData?.navigation?.map((n: any) => (
              <li key={n.label}>
                <NavLink
                  to={n.path}
                  className={({ isActive }) =>
                    isActive ? 'footer-link active' : 'footer-link'
                  }>
                  {n.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          {pageData?.contact?.map((c: any) => (
            <div className="info-row" key={c.value}>
              <img src={ICON_MAP[c?.icon]} />
              <p>{c?.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} {pageData.brand.title} {pageData.brand.subtitle}
      </div>
    </footer>
  );
};

export default Footer;
