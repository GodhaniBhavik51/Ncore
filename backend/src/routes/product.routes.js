const express = require('express');
const {
  getProducts,
  getProductBySlug,
} = require('../controllers/product.controller');

const router = express.Router();

router.get('/products', getProducts);
router.get('/products/:slug', getProductBySlug);

module.exports = router;
