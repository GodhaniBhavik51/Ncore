import { Routes, Route } from "react-router-dom";
import { Header } from "../components/header";
import { Suspense } from "react";
import { Loader } from "../components/loader";
import { HomePage } from "../pages/home-page";
import { AboutPage } from "../pages/about-us";
import { ProductPage } from "../pages/product-page";
import { ProductDetailPage } from "../pages/product-detail-page";
import { ContactPage } from "../pages/content-us";
import NotFoundPage from "../pages/404";
import { Footer } from "../components/footer";

const AppRoutes = () => {
  return (
    <>
      <Header />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/contact-us" element={<ContactPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
};

export default AppRoutes;
