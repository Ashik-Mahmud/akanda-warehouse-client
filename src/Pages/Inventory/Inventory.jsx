import React, { useEffect, useState } from "react";
import { AiOutlineStock } from "react-icons/ai";
import { BsChevronDoubleLeft } from "react-icons/bs";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Loader from "../../Components/Loader/Loader";
import useProducts from "../../Hooks/useProducts";
import useTitle from "../../Hooks/useTitle";
import Modal from "./Modal/Modal";
const Inventory = () => {
  const [modal, setModal] = useState(false);
  const [isDelivery, setIsDelivery] = useState(false);
  const { products, loading } = useProducts();
  const { inventoryId } = useParams();

  const currentProduct = products.find(
    (product) => product._id === inventoryId
  );
  const navigate = useNavigate();
  const [stock, setStock] = useState(currentProduct?.stockQty);
  useEffect(() => {
    setStock(currentProduct?.stockQty);
  }, [currentProduct]);

  /* title */
  useTitle(currentProduct?.name || "loading...");

  return (
    <ProductDetailsContainer className="p-10">
      <Modal
        modal={modal}
        setModal={setModal}
        inventoryId={inventoryId}
        isDelivery={isDelivery}
        setStock={setStock}
        stock={stock}
        productName={currentProduct?.name}
      />
      <div className="container">
        {loading ? (
          <div className="card shadow-md rounded p-10">
            <div className="card-header flex justify-between flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <BsChevronDoubleLeft
                  className="cursor-pointer text-xl"
                  onClick={() => navigate(-1)}
                />
                <h3 className="text-2xl font-semibold">
                  {currentProduct?.name}
                </h3>
              </div>
              <div className="flex gap-3  flex-wrap items-center">
                <button
                  onClick={() => {
                    setModal(true);
                    setIsDelivery(true);
                  }}
                  className="bg-sky-500 justify-center w-full sm:w-auto  p-3 flex items-center gap-2 transition-all active:scale-95 rounded text-white"
                >
                  <MdOutlineDeliveryDining className="text-2xl" />
                  Delivery
                </button>
                <button
                  onClick={() => {
                    setModal(true);
                    setIsDelivery(false);
                  }}
                  className="bg-transparent w-full justify-center sm:w-auto border border-sky-500 hover:bg-sky-500 hover:text-white transition-all text-sky-500 p-3 rounded  flex items-center gap-2"
                >
                  <AiOutlineStock className="text-2xl" />
                  Restock
                </button>
              </div>
            </div>
            <div className="card-body">
              <div className="image p-10 h-96 w-full border bg-white rounded overflow-hidden my-6">
                <img
                  className="w-full h-full object-contain"
                  src={currentProduct?.imageUrl}
                  alt={currentProduct?.name}
                />
              </div>
              <div className="details">
                <ul className="meta flex justify-between my-5 flex-wrap gap-3">
                  <li>
                    Prices -{" "}
                    <span className="text-sky-500">
                      {currentProduct?.price}$
                    </span>
                  </li>
                  <li>
                    Total Stock -{" "}
                    <span
                      className={`${
                        stock === 0 ? "text-red-500" : "text-sky-400"
                      }`}
                    >
                      {stock === 0 ? "Out of Stock" : stock + "pcs"}
                    </span>
                  </li>
                  <li>
                    Supplier Name -{" "}
                    <span className="text-sky-500">
                      {currentProduct?.supplierName}
                    </span>
                  </li>
                </ul>
                <p className="desc leading-7 text-gray-500">
                  {currentProduct?.description}
                </p>
              </div>
              <div className="card-footer bg-gray-100 mt-8 p-3 text-right">
                <Link to="/manage-products" className="text-sky-500">
                  Manage All Products.
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </ProductDetailsContainer>
  );
};
const ProductDetailsContainer = styled.section`
  position: relative;
`;
export default Inventory;
