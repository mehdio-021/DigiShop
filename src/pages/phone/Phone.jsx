import React from "react";
import ProductsList from "../../components/products/ProductsList";
import SortMenu from "./../../components/menu/SortMenu";
import SideBarFilter from "../../components/filters/SideBarFilter";
import SortMobile from "../../components/filters/SortMobile";
import Layout from "../../Layout/Layout";

const Phone = () => {
  return (
    <div>
      <Layout>
        <SortMobile category="phone"/>
        <SideBarFilter category="phone"/>
        <SortMenu category="phone"/>
        <ProductsList category="phone"/>
      </Layout>a
    </div>
  );
};

export default Phone;
