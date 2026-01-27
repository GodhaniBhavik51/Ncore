
const footerController = () => {
  
  const theme = location.pathname.startsWith('/ncore') ? 'ncore' : 'renil';

  const pageData = {
    brand: {
      logo: 'ncoreIcon',
      title: 'Ncore',
      subtitle: 'electricals co',
      theme: 'ncore',
    },
    navigation: [
      { label: 'Home', path: '/' },
      { label: 'Products', path: '/ncore/product' },
      { label: 'About Us', path: '/ncore/about-us' },
      { label: 'Contact Us', path: '/ncore/contact-us' },
    ],
    social: [
      { icon: 'facebook', url: 'https://facebook.com/ncore' },
      { icon: 'instagram', url: 'https://instagram.com/ncore' },
      { icon: 'google', url: 'https://google.com/ncore' },
      { icon: 'twitter', url: 'https://twitter.com/ncore' },
    ],
    contact: [
      { icon: 'map', value: 'Vatva GIDC, Ahmedabad' },
      { icon: 'phone', value: '9636259125' },
      { icon: 'mail', value: 'info@ncore.com' },
    ],
  };
  return {theme, pageData };
};
export { footerController };
