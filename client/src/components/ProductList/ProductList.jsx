import React from "react";
import GridView from "../../view/GridView/GridView";
import ListView from "../../view/ListView/ListView";
import { useFilterProduct } from "../../context/FilterContext";
const ProductList = () => {
  const { filter_products, grid_view } = useFilterProduct();
  if (filter_products.length < 1) {
    return <h2 style={{ marginTop: "2rem" }}>There are no products matched your search...</h2>;
  }
  if (grid_view) {
    return <GridView filter_products={filter_products} />;
  }
  return <ListView filter_products={filter_products} />;
};

export default ProductList;
