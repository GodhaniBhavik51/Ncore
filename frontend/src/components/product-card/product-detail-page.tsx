import productPageController from './product-card-controller';
import './index.css';

import Breadcrumb from '../breadcrumb/breadcrumb';
import { base64ToObjectUrl } from '../../utils/base64Image';


const ProductDetailPage = () => {
  const { productsDetail, productsLoading, theme, breadcrumb } =
    productPageController();

  if (productsLoading || !productsDetail) return <div className="page-loading" />;

  return (
    <>
    <Breadcrumb items={breadcrumb }/>
      {productsDetail?.map((item: any) => {
        return (
          <section className="products-section">
            <h2>{item?.title}</h2>
            <p className="products-sub">{item?.description}</p>

            <div className="product-grid product-detail-card">
              {item?.features?.map((product: any,index:number) => (
                <div className="product-detail-card" key={index.toString()}>
                  <div
                    className={`${theme === 'renil' ? 'product-image-wrapper' : ''}`}>
                    <img
                      className={theme}
                      src={base64ToObjectUrl(product?.image)}
                      alt={product?.name}
                    />
                  </div>
                  <h4>{product?.name}</h4>
                  <p>{product?.description}</p>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </>
  );
};

export default ProductDetailPage;
