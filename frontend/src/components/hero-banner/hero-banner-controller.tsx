import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const heroBannerController = () => {
  const { brand } = useParams<{ brand?: string }>();

  const activeBrand = brand || 'ncore';

  const [pageData, setPageData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/api/home/hero-banner?theme=${activeBrand}`)
      .then((res) => setPageData(res.data))
      .finally(() => setLoading(false));
  }, [activeBrand]);

  return {
    theme: activeBrand,
    pageData:pageData?.data,
    loading
  };
};

export default heroBannerController;
