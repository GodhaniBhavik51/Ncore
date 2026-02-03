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
      {products?.map((item: any,index:number) => {
        return (
          <section className="products-section" key={index}>
            <h2>{item?.title}</h2>
            <p className="products-sub">{item?.subtitle}</p>

              <div className="embla" >
                 <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                  {[...item?.products,...item?.products]?.map(
                    (product: any, index: number) => {
                      return (
                        <div className="embla__slide" key={index}>
                          <div className="product-card product-card-slider">
                            <div
                              className={`${theme === 'renil' ? 'product-image-wrapper' : ''} embla__slide__img`}>
                              <img
                                className={theme}
                                src={ICON_MAP[product?.image]}
                                alt={product.title}
                              />
                            </div>
                            <h4>{product.title}</h4>
                            <p className="product-desc">
                              {product.description}
                            </p>

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
