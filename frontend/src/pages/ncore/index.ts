import { lazy } from 'react';
import './index.css'
const HomePage = lazy(() => import('../ncore/home'));
const AboutPage = lazy(() => import('../ncore/about-us'));
const ContactPage = lazy(() => import('../ncore/contact-us'));
const ProductDetailPage = lazy(() => import('../ncore/product-detail-page'));
const ProductPage = lazy(() => import('../ncore/product-page'));

export {HomePage, AboutPage, ContactPage, ProductDetailPage, ProductPage };
