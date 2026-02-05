const Product = require('../models/product.model');


const getProducts = async (req, res) => {
  try {
    const theme = String(req.query.theme || "ncore");

    const products = await Product.find({ theme }).lean();

    res.status(200).json({
      success: true,
      data:products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch products',
    });
  }
};


const getProductBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const theme = String(req.query.theme || "ncore");

    const productDoc = await Product.findOne(
      { theme, "products.slug": slug },
      { "products.$": 1, theme: 1 }
    ).lean();

    if (!productDoc || !productDoc.products?.length) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      product: productDoc.products,
      theme: productDoc.theme,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch products',
    });
  }
};

module.exports = {
  getProducts,
  getProductBySlug,
};
