
import ProductsList from "../../components/products/ProductsList";
import SortMenu from "./../../components/menu/SortMenu";
import SideBarFilter from "../../components/filters/SideBarFilter";
import SortMobile from "../../components/filters/SortMobile";
import Layout from "../../Layout/Layout";

const HeadPhone = () => {
  return (
    <div>
      <Layout>
        <SortMobile category="headPhone" />
        <SideBarFilter category="headPhone" />
        <SortMenu category="headPhone" />
        <ProductsList category="headPhone" />
      </Layout>
      a
    </div>
  );
};

export default HeadPhone;
