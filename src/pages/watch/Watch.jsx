
import ProductsList from "../../components/products/ProductsList";
import SortMenu from "./../../components/menu/SortMenu";
import SideBarFilter from "../../components/filters/SideBarFilter";
import SortMobile from "../../components/filters/SortMobile";
import Layout from "../../Layout/Layout";

const Watch = () => {
  return (
    <div>
      <Layout>
        <SortMobile category="watch" />
        <SideBarFilter category="watch" />
        <SortMenu category="watch" />
        <ProductsList category="watch" />
      </Layout>
      a
    </div>
  );
};

export default Watch;
