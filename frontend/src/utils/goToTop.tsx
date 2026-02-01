
const ScrollToTop  = () => {
  window.scrollTo({
    top: 0,
    behavior: 'instant',
  });
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

export default ScrollToTop;
