import React from "react";
import styled from "styled-components";

const Modal = ({ modal, setModal, isDelivery }) => {
  return (
    <ModalContainer
      className={`h-full grid place-items-center w-full z-10 fixed inset-0 pointer-events-none opacity-0 transition-all ${
        modal && "opacity-100 pointer-events-auto z-20"
      }`}
    >
      <div
        onClick={() => setModal(false)}
        className="overlay h-full grid place-items-center w-full z-10 fixed inset-0 "
      ></div>
      <div className="card sm:w-96 p-10 bg-gray-50 z-50">
        <div className="card-header">
          <h3 className="text-2xl font-semibold">
            {isDelivery ? "Delivery Product" : "Update Stock"}
          </h3>
        </div>
        <div className="card-body my-3">
          <form action="">
            <div className="input-group flex gap-2 flex-col">
              <label htmlFor="quantity">
                {isDelivery ? "Quantity" : "Update Stock"}
              </label>
              {isDelivery ? (
                <input
                  type="text"
                  className="w-full p-3 border outline-none rounded"
                  id="quantity"
                  placeholder="Quantity"
                />
              ) : (
                <input
                  type="text"
                  className="w-full p-3 border outline-none rounded"
                  id="stock"
                  placeholder="Stock"
                />
              )}
            </div>
            {isDelivery ? (
              <button className="bg-green-400 p-2 text-lg w-full my-2 text-white rounded">
                Delivered
              </button>
            ) : (
              <button className="bg-green-400 p-2 text-lg w-full my-2 text-white rounded">
                Update Stock
              </button>
            )}
          </form>
        </div>
      </div>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: fixed;

  .overlay {
    background-color: #00182154;
    backdrop-filter: blur(5px);
  }
`;

export default Modal;
