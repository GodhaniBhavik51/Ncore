import {
  driver1,
  driver2,
  driver3,
  panelLights,
  streetLights,
  tubeLights,
} from '@images/index';
import productPageController from './product-card-controller';
import './index.css';
import Breadcrumb from '../breadcrumb/breadcrumb';

const ICON_MAP: any = {
  panelLights,
  streetLights,
  tubeLights,
  driver1,
  driver2,
  driver3,
};

const ProductPage = () => {
  const { products, loading, theme } = productPageController();

  if (loading || !products) return <div className="page-loading" />;

  const items = [
    { path: `/${theme}`, label: 'Home' },
    { path: `/${theme}/product`, label: 'Product' },
  ];

  return (
    <>
      <Breadcrumb items={items} />
      {products?.map((item: any,index:number) => {
        return (
          <section className="products-section" key={index.toString()}>
            <h2>{item?.title}</h2>
            <p className="products-sub">{item?.subtitle}</p>

            <div className="products-grid">
              {item?.products?.map((product: any,index:number) => {
                return (
                  <div className="product-card" key={index.toString()}>
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
              })}
            </div>
          </section>
        );
      })}
    </>
  );
};

export default ProductPage;
