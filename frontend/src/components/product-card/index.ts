import { lazy } from 'react';

const ProductCard = lazy(() => import('./product-card'));
const ProductPage = lazy(() => import('./product-card-layout-2'));
const ProductDetailPage = lazy(() => import('./product-detail-page'));
export { ProductCard, ProductPage, ProductDetailPage };
