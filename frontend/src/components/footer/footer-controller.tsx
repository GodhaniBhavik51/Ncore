import axios from 'axios';
import { useEffect, useState } from 'react';

const footerController = () => {
  const theme = location.pathname.startsWith('/ncore') ? 'ncore' : 'renil';

  const [pageData, setPageData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/api/footer?theme=${theme}`)
      .then((res) => setPageData(res.data))
      .finally(() => setLoading(false));
  }, [theme]);

  return { pageData, loading };
};
export { footerController };
