import axios from 'axios';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Autoplay from 'embla-carousel-autoplay';

const productCardController = () => {
  const { brand } = useParams<{ brand?: string }>();
  const { slug }: any = useParams();

  const emblaOptions: any = {
    active: true,
    loop: true,
    slidesToScroll: 1,
    dragFree: true,
    align: 'center',
  };

  const [emblaRef] = useEmblaCarousel(emblaOptions, [
    Autoplay({ playOnInit: true, delay: 1500, stopOnInteraction:false }),
  ]);

  const [products, setProducts] = useState<any>(null);
  const [productsDetail, setProductsDetail] = useState<any>(null);
  const [productsLoading, setProductsLoading] = useState(true);
  const [loading, setLoading] = useState(true);

  const breadcrumb = [
    { path: `/${brand}`, label: 'Home' },
    { path: `/${brand}/product`, label: 'Product' },
    { path: `/${brand}/product/${slug}`, label: `${slug}` },
  ];

  useEffect(() => {
    if (!slug || !brand) return;

    setProductsLoading(true);

    axios
      .get(`/api/products/${slug}?theme=${brand}`)
      .then((res) => {
        setProductsDetail(res.data.product);
      })
      .finally(() => setProductsLoading(false));
  }, [brand]);

  useEffect(() => {
    if (slug) return;
    axios
      .get(`/api/products/?theme=${brand}`)
      .then((res) => {
        setProducts(res.data);
      })
      .finally(() => setLoading(false));
  }, [brand]);

  return {
    theme: brand,
    emblaRef,
    products: products?.data,
    loading,
    productsDetail,
    productsLoading,
    breadcrumb
  };
};

export default productCardController;
