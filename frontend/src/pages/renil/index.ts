import { lazy } from 'react';
import './index.css'
const HomePage = lazy(() => import('../renil/home'));
const AboutPage = lazy(() => import('../renil/about-us'));
const ContactPage = lazy(() => import('../renil/contact-us'));
const ProductDetailPage = lazy(() => import('../renil/product-detail-page'));
const ProductPage = lazy(() => import('../renil/product-page'));

export {HomePage, AboutPage, ContactPage, ProductDetailPage, ProductPage };
