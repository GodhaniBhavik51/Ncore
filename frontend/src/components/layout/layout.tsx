import { Outlet, useLocation } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import { ncoreIcon, renilIcon } from "../../assets/icon";

const brandConfig = {
  ncore: {
    theme: "ncore",
    title: "Ncore Electricals",
    icon: ncoreIcon,
  },
  renil: {
    theme: "renil",
    title: "Renil Industries",
    icon: renilIcon,
  },
};

export const BrandLayout = () => {
  const { pathname } = useLocation();
  const brandKey = pathname.split("/")[1] as "ncore" | "renil";
  const brand:any = brandConfig[brandKey];

  return (
    <div className={`app ${brand.theme}`}>
      <Header
        companyIcon={brand.icon}
        companyTitle={brand.title}
        theme={brand.theme}
      />

      <Outlet />

      <Footer theme={brand.theme} />
    </div>
  );
};