import React, { useState } from "react";
import { AiOutlineStock } from "react-icons/ai";
import { MdOutlineDeliveryDining } from "react-icons/md";
import styled from "styled-components";
import Modal from "./Modal/Modal";
const Inventory = () => {
  const [modal, setModal] = useState(false);
  const [isDelivery, setIsDelivery] = useState(false);
  return (
    <ProductDetailsContainer className="p-10">
      <Modal modal={modal} setModal={setModal} isDelivery={isDelivery} />
      <div className="container">
        <div className="card shadow-md rounded p-10">
          <div className="card-header flex justify-between flex-wrap gap-3">
            <h3 className="text-2xl font-semibold">Name Goes here</h3>
            <div className="flex gap-3  flex-wrap items-center">
              <button
                onClick={() => {
                  setModal(true);
                  setIsDelivery(true);
                }}
                className="bg-green-400 justify-center w-full sm:w-auto  p-3 flex items-center gap-2 transition-all active:scale-95 rounded text-white"
              >
                <MdOutlineDeliveryDining className="text-2xl" />
                Delivery
              </button>
              <button
                onClick={() => {
                  setModal(true);
                  setIsDelivery(false);
                }}
                className="bg-transparent w-full justify-center sm:w-auto border border-green-400 hover:bg-green-400 hover:text-white transition-all text-green-400 p-3 rounded  flex items-center gap-2"
              >
                <AiOutlineStock className="text-2xl" />
                Update Stock
              </button>
            </div>
          </div>
          <div className="card-body">
            <div className="image h-96 w-full border bg-white rounded overflow-hidden my-6">
              <img
                className="w-full h-full object-contain"
                src="https://static-01.daraz.com.bd/p/9eb4281b7d9f084cec2d8e86fbc16259.jpg"
                alt="img"
              />
            </div>
            <div className="details">
              <ul className="meta flex justify-between my-5 flex-wrap gap-3">
                <li>
                  Prices - <span className="text-green-400">154$</span>
                </li>
                <li>
                  Total Stock - <span className="text-green-400">434pcs</span>
                </li>
                <li>
                  Supplier Name -{" "}
                  <span className="text-green-400">Ashik Mahmud</span>
                </li>
              </ul>
              <p className="desc leading-7 text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eveniet eligendi ipsam praesentium. Reiciendis ipsum, ut
                architecto ullam sapiente tenetur quod, omnis voluptatem eius
                maxime quos aut? Earum voluptatibus cupiditate corrupti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ProductDetailsContainer>
  );
};
const ProductDetailsContainer = styled.section`
  position: relative;
`;
export default Inventory;
