import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const aboutUsController = () => {
  const { brand } = useParams<{ brand?: string }>();
  const location = useLocation();

  const [pageData, setPageData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  const breadcrumb = [
    { path: `/${brand}`, label: 'Home' },
    { path: `/${brand}/about-us`, label: 'About Us' },
  ];

  const hideBreadcrumb =
  location.pathname === "/ncore" ||
  location.pathname === "/renil";

  useEffect(() => {
    axios
      .get(`/api/about?theme=${brand}`)
      .then((res) => setPageData(res?.data))
      .finally(() => setLoading(false));
  }, [brand]);

  return { pageData, loading,theme:brand,breadcrumb,hideBreadcrumb };
};

export default aboutUsController;
