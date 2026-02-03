import { established, innovation } from '../../assets/icon';
import {
  aboutImage,
  ncoreOwner,
  renilOwner,
  ncoreCoOwner,
  aboutRenil,
} from '../../assets/images';
import Breadcrumb from '../../components/breadcrumb/breadcrumb';
import aboutUsController from './about-us-controller';

const ICON_MAP: any = {
  established,
  innovation,
  aboutImage,
  ncoreOwner,
  renilOwner,
  ncoreCoOwner,
  aboutRenil,
};

const AboutPage = () => {
  const { pageData, loading, breadcrumb, hideBreadcrumb } = aboutUsController();

  if (loading || !pageData) return <div className="page-loading" />;

  return (
    <>
      {!hideBreadcrumb && <Breadcrumb items={breadcrumb} />}
      <section className="about-intro">
        <div className="about-detail">
          <h2>{pageData.intro.title}</h2>
          <p className="about-tagline">{pageData.intro.tagline}</p>
        </div>

        <div className="about-container">
          <div className="about-text">
            <h3>{pageData.story.heading}</h3>
            <p className="about-description">{pageData.story.description}</p>

            <ul className="about-points">
              {pageData.story.points.map((item: any, i: number) => (
                <li key={i}>
                  <img src={ICON_MAP[item.icon]} alt={item.label} />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="about-image">
            <img
              src={ICON_MAP[pageData.story.image]}
              alt={pageData.intro.title}
            />
          </div>
        </div>
      </section>
      <section className="leadership">
        <h2>{pageData.leadership.heading}</h2>
        <p className="leadership-sub">{pageData.leadership.subTitle}</p>

        <div className="leader-grid">
          {pageData.leadership.members.map((member: any, i: number) => (
            <div className="leader-card" key={i}>
              <img src={ICON_MAP[member.photo]} alt={member.name} />
              <h4>{member.name}</h4>
              <span>{member.role}</span>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutPage;
