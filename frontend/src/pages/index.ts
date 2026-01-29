import { lazy } from 'react';
import './index.css';
const HomePage = lazy(() => import('./home'));
const AboutPage = lazy(() => import('./about-us'));
const ContactPage = lazy(() => import('./contact-us/contact-us'));
const ProductDetailPage = lazy(() => import('./product-detail-page'));
const ProductPage = lazy(() => import('./product-page'));

export { HomePage, AboutPage, ContactPage, ProductDetailPage, ProductPage };
