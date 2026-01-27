import { Routes, Route } from 'react-router-dom';

import {
  HomePage,
  AboutPage,
  ProductPage,
  ProductDetailPage,
  ContactPage,
} from '../pages/common';
import NotFoundPage from '../pages/404';
import Header from '../components/header';
import Footer from '../components/footer';

const AppRoutes = () => {
  return (
    <>
      <Header />
      <Routes>

        <Route path="/:brand" element={<BrandLayout />}>
          <Route path="about-us" element={<AboutPage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="product/:id" element={<ProductDetailPage />} />
          <Route path="contact-us" element={<ContactPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
