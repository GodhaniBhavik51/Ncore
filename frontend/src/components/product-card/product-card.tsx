import productCardController from './product-card-controller';
import './index.css';
import {
  driver1,
  driver2,
  driver3,
  panelLights,
  streetLights,
  tubeLights,
} from '@images/index';

const ICON_MAP: any = {
  panelLights,
  streetLights,
  tubeLights,
  driver1,
  driver2,
  driver3,
};

const ProductCard = () => {
  const { emblaRef, products, loading, theme } = productCardController();

  if (loading || !products) return null;

  return (
    <>
      {products?.map((item: any) => {
        return (
          <section className="products-section">
            <h2>{item?.title}</h2>
            <p className="products-sub">{item?.subtitle}</p>

            <div className="products-slider-wrapper">
              <div className="embla" ref={emblaRef}>
                <div className="embla__container products-home-card">
                  {[...item?.products, ...item?.products]?.map(
                    (product: any, index: number) => {
                      return (
                        <div className="product-card embla__slide" key={index.toString()}>
                          <div
                            className={`${theme === 'renil' ? 'product-image-wrapper' : ''}`}>
                            <img
                              className={theme}
                              src={ICON_MAP[product?.image]}
                              alt={product.title}
                            />
                          </div>
                          <h4>{product.title}</h4>
                          <p className="product-desc">{product.description}</p>

                          <ul className="product-features">
                            {product.features.map((f: any, i: number) => (
                              <li key={i}>{f?.name}</li>
                            ))}
                          </ul>

                          <a
                            href={`/${theme}/product/${product.slug}`}
                            className={`product-btn ${theme}`}>
                            View Collection →
                          </a>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default ProductCard;
