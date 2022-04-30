import React from "react";
import { BsBoxArrowDownRight } from "react-icons/bs";
import styled from "styled-components";
import Product from "../../../Components/Product/Product";
const ProductItems = () => {
  return (
    <ProductItemsContainer className="py-20 bg-white bg-gradient-to-t">
      <div className="container">
        <div className="title">
          <span className="text-lg uppercase text-gray-400">
            We got a new Products in the weeks
          </span>
          <h2 className="text-3xl uppercase text-gray-700 font-semibold">
            Latest Items
          </h2>
        </div>
        <div className="products grid grid-cols-4 my-10 items-center flex-wrap  gap-6">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <div className="text-right flex justify-end">
          <button className="active:scale-95 transition-all text-white my-3 justify-center text-center flex items-center gap-2 bg-green-400 px-5 py-2 rounded">
            All Inventories Product <BsBoxArrowDownRight />
          </button>
        </div>
      </div>
    </ProductItemsContainer>
  );
};
const ProductItemsContainer = styled.section`
  position: relative;
`;
export default ProductItems;
