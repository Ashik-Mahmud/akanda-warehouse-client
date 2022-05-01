import React from "react";
import { BsBoxArrowDownRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Loader from "../../../Components/Loader/Loader";
import Product from "../../../Components/Product/Product";
import useProducts from "../../../Hooks/useProducts";
const ProductItems = () => {
  const navigate = useNavigate();
  const { products, loading } = useProducts();
  return (
    <ProductItemsContainer
      id="best"
      className="py-20 bg-white bg-gradient-to-t"
    >
      <div className="container">
        <div className="title">
          <span className="text-lg uppercase text-gray-400">
            We got a new Products in the weeks
          </span>
          <h2 className="text-3xl uppercase text-gray-700 font-semibold">
            Latest Items
          </h2>
        </div>
        {loading ? (
          products.length > 0 ? (
            <div className="products grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 my-10 items-center flex-wrap  gap-6">
              {products?.slice(0, 6)?.map((product) => (
                <Product key={product._id} {...product} />
              ))}
            </div>
          ) : (
            "No data found"
          )
        ) : (
          <Loader />
        )}

        <div className="text-right flex justify-end">
          <button
            onClick={() => navigate(`/manage-products`)}
            className="active:scale-95 transition-all text-white my-3 justify-center text-center flex items-center gap-2 bg-sky-500 px-5 py-2 rounded"
          >
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
