import ContactPage from './contact-us';
import AboutPage from './about-us';
import { HeroBanner } from '../components/hero-banner';
import { ProductCard } from '../components/product-card';

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <ProductCard />
      <AboutPage />
      <ContactPage />
    </>
  );
};
export default HomePage;
