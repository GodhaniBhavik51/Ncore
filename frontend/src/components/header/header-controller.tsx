import { useEffect, useState } from 'react';
import axios from 'axios';

const HeaderController = () => {
    const theme = location.pathname.startsWith("/ncore")
    ? "ncore"
    : "renil";

  const [pageData, setPageData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/api/header?theme=${theme}`)
      .then((res) => {
        setPageData(res.data);
      })
      .finally(() => setLoading(false));
  }, [theme]);

  return {
    theme,
    pageData,
    loading,
  };
};

export { HeaderController };
