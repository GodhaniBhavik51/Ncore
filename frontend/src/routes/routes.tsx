import { Routes, Route, Navigate } from 'react-router-dom';

import {
  HomePage,
  AboutPage,
  ContactPage,
} from '../pages';

import NotFoundPage from '../pages/404';
import { Layout } from '../components/layout';
import { ProductPage , ProductDetailPage } from '../components/product-card';

const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/ncore" replace />} />

      <Route path="/:brand" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about-us" element={<AboutPage />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="product/:slug" element={<ProductDetailPage />} />
        <Route path="contact-us" element={<ContactPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
      
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;