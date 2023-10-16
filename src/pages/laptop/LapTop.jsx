import React from "react";
import ProductsList from "../../components/products/ProductsList";
import SortMenu from "./../../components/menu/SortMenu";
import SideBarFilter from "../../components/filters/SideBarFilter";
import SortMobile from "../../components/filters/SortMobile";
import Layout from "../../Layout/Layout";

const Laptop = () => {
  return (
    <div>
      <Layout>
        <SortMobile category="laptop" />
        <SideBarFilter category="laptop" />
        <SortMenu category="laptop" />
        <ProductsList category="laptop" />
      </Layout>
      a
    </div>
  );
};

export default Laptop;
