import { useParams } from "react-router-dom";

const layoutController = () => {
  const { brand } = useParams<{ brand?: string }>();

  const activeBrand = brand || 'ncore';

  return {
    theme: activeBrand,
  };
};

export default layoutController;
