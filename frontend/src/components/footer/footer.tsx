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
  renilFooterIcon,
} from '../../assets/icon';
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
  renilFooterIcon
};

const Footer = ({ theme,pageData, loading }: any) => {

  if (loading || !pageData) return null;

  return (
    <footer className={`footer footer-${theme}`}>
      <div className="footer-wrap">
        <div className="footer-col-1">
          <div className="brand-box">
            <img src={ICON_MAP[pageData?.brand?.logo]} alt={pageData?.brand?.title}/>
            <h2>
              {pageData?.brand?.title}
              {theme === 'renil' && <sup className="reg-circle-footer">R</sup>}
              <br />
              {pageData?.brand?.subtitle}
              {theme === 'ncore' && <sup className="tm-circle-footer">TM</sup>}
            </h2>
          </div>
          <div className="footer-col">
            <h3>Social Media</h3>
            <div className="social-row">
              {pageData?.social?.map((data: any) => (
                <a key={data?.url} href={data?.url} target="_blank">
                  <img src={ICON_MAP[data?.icon]} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-col">
          <h4>Navigation</h4>
          <ul className="nav-list">
            {pageData?.navigation?.map((nav: any) => (
              <li key={nav?.label}>
                <NavLink
                  to={nav?.path}
                  className={({ isActive }) =>
                    isActive ? 'footer-link active' : 'footer-link'
                  }>
                  {nav?.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          {pageData?.contact?.map((cnt: any) => (
            <div className="info-row" key={cnt?.value}>
              <img src={ICON_MAP[cnt?.icon]} />
              <p>{cnt?.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        Copyright {new Date().getFullYear()} {pageData?.brand?.title} {pageData?.brand?.subtitle}
      </div>
    </footer>
  );
};

export default Footer;
