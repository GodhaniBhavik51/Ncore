import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const layoutController = () => {
  const { brand } = useParams<{ brand?: string }>();

  const activeBrand = brand || 'ncore';

  const [pageData, setPageData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/layout?theme=${activeBrand}`)
      .then((res) => setPageData(res?.data))
      .finally(() => setLoading(false));
  }, [activeBrand]);
  
useEffect(() => {
  document.body.classList.add("body-section");
}, [activeBrand]);

  return {
    theme: activeBrand,
    pageData,
    loading
  };
};

export default layoutController;
