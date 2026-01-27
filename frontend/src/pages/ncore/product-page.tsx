import { panelLights, streetLights, tubeLights } from "@images/index";

const ProductPage = () => {
  const pageData = {
    page: {
      title: 'Our Products',
      subtitle:
        'Explore our wide range of high-quality LED lighting solutions designed for performance and longevity.',
    },
    products: [
      {
        id: 1,
        image: panelLights,
        title: 'LED Tube Lights',
        description:
          'High-efficiency LED tube lights for commercial and residential use.',
        features: [
          'Better Regular PC',
          'Bottom ESD PC',
          'Batten Aluminum',
          '1.2mm Aluminium',
        ],
        slug: 'tube-lights',
      },
      {
        id: 2,
        image: streetLights,
        title: 'LED Panel Light',
        description: 'Sleek and modern panel lights for offices and homes.',
        features: [
          'Panel Light PC Backlit',
          'Edge & Recessed',
          'Detachable Surface Kit',
          '1.2mm Steel Frame',
        ],
        slug: 'panel-lights',
      },
      {
        id: 3,
        image: tubeLights,
        title: 'LED Flood & Street Lights',
        description: 'Powerful outdoor lighting solutions for security and streets',
        features: [
          'Flood Light Booster 20w - DoB',
          'Down Chowk',
          'Back Chowk',
        ],
        slug: 'street-light',
      },
    ],
  };

  return (
    <section className="products-section">
      <h2>{pageData?.page?.title}</h2>
      <p className="products-sub">{pageData?.page?.subtitle}</p>

      <div className="products-grid">
        {pageData?.products?.map((product: any) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />

            <h4>{product.title}</h4>
            <p className="product-desc">{product.description}</p>

            <ul className="product-features">
              {product.features.map((f: string, i: number) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            <a href={`/ncore/product/${product.slug}`} className="product-btn">
              View Collection →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductPage;
