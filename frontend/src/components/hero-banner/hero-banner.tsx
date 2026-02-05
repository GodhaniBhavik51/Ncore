import { heroBannerNcore, heroBannerRenil } from '../../assets/images';
import './index.css'
import heroBannerController from './hero-banner-controller';

const getHighlightParts = (text = "") => {
  const words = text?.trim()?.split(" ");
  return {
    first: words?.slice(0, -1)?.join(" "),
    last: words?.at(-1),
  };
};

const heroBanner = () => {
  const ICON_MAP: any = {
    heroBannerNcore,
    heroBannerRenil,
  };

  const { theme, pageData, loading } = heroBannerController();
  if (loading || !pageData) return null;

  const { first, last } = getHighlightParts(pageData?.highlightText);

  return (
    <section className="hero-banner" data-theme={theme}>
      <div className="hero-container">

        <div className="hero-content">
         <h1>
            {pageData?.title}
            <br />
            <strong>
              {first}{" "}
              <span className="brand-highlight">
                <strong>{last}</strong>
              </span>
            </strong>
          </h1>

          <p>{pageData?.description}</p>

          <div className="hero-actions">
            {pageData?.primaryButton && (
              <a
                href={pageData?.primaryButton?.link}
                className="btn btn-primary"
              >
                {pageData?.primaryButton?.text}
              </a>
            )}

            {pageData?.secondaryButton && (
              <a
                href={pageData?.secondaryButton?.link}
                className="btn btn-outline"
              >
                {pageData?.secondaryButton?.text}
              </a>
            )}
          </div>
        </div>

        <div className="hero-image">
          <img
            src={ICON_MAP[pageData?.image]}
            alt={pageData?.highlightText}
          />
        </div>
      </div>
    </section>
  );
};

export default heroBanner;