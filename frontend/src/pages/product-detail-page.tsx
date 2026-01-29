const ProductDetailPage = () => {
  const productdetail = {
    category_title: 'LED Tube Lights',
    category_description:
      'High-efficiency LED tube lights for commercial and residential use.',
    products: [
      {
        id: 1,
        name: 'Batten Regular PC',
        description: 'Standard polycarbonate batten for everyday use.',
        image: '/images/batten-regular.png',
      },
      {
        id: 2,
        name: 'Batten ES Regular PC',
        description: 'Energy saving regular polycarbonate batten.',
        image: '/images/batten-es.png',
      },
      {
        id: 3,
        name: 'Batten Aluminium',
        description: 'Durable aluminium housing for better heat dissipation.',
        image: '/images/batten-aluminium.png',
      },
      {
        id: 4,
        name: 'Batten High Wattage PC',
        description: 'High brightness solution for large spaces.',
        image: '/images/batten-high.png',
      },
    ],
  };

  return (
    <section className="product-page">
      {/* HEADER */}
      <div className="page-header">
        <h1>{productdetail?.category_title}</h1>
        <p>{productdetail?.category_description}</p>
      </div>

      {/* PRODUCT GRID */}
      <div className="product-grid">
        {productdetail.products.map((product: any) => (
          <div className="product-detail-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductDetailPage;
