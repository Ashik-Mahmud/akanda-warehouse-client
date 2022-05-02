import axios from "axios";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";

const Modal = ({
  modal,
  setModal,
  isDelivery,
  inventoryId,
  setStock,
  stock,
  productName,
}) => {
  const formRef = useRef(null);
  const [delivery, setDelivery] = useState(0);
  /* Handle Delivery count  */
  const handleDeliveryCount = async () => {
    if (!delivery) return toast.error("Stock Quantity field is required.");
    if (delivery < 1)
      return toast.error("Stock Quantity must be positive number");
    if (delivery > stock)
      return toast.error(
        `You can't deliver more than of your stock. available ${stock}`
      );
    setStock((prev) => prev - Number(delivery));
    await axios
      .put(
        `https://akanda-warehouse-server.herokuapp.com/increase-stock?id=${inventoryId}`,
        {
          stock: delivery,
        }
      )
      .then((res) => {
        toast.success(`Delivered Product ${delivery} pcs`);
        setModal(false);
        formRef.current.reset();
        setDelivery(0);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /* Handle Update Stock */
  /* 
   REVIEW: Really sorry for duplicate code.
  */
  const [restock, setRestock] = useState(0);
  const handleUpdateStock = async () => {
    if (!restock) return toast.error(`Update Stock field is required.`);
    if (restock < 1) return toast.error("Stock must be positive number");
    setStock((prev) => prev + Number(restock));
    await axios
      .put(
        `https://akanda-warehouse-server.herokuapp.com/update-stock?id=${inventoryId}`,
        {
          stock: restock,
        }
      )
      .then((res) => {
        toast.success(`Stock Updated ${restock} pcs`);
        setModal(false);
        formRef.current.reset();
        setRestock(0);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          <h4>
            I <span className="text-sky-500">{productName}</span>
          </h4>
          <h3 className="text-2xl font-semibold">
            {isDelivery ? "Delivery Product" : "Update Stock"}
          </h3>
        </div>
        <div className="card-body my-3">
          <form action="" ref={formRef}>
            <div className="input-group flex gap-2 flex-col">
              <label htmlFor="quantity">
                {isDelivery ? "Quantity" : "Stock"}
              </label>
              {isDelivery ? (
                <input
                  type="number"
                  className="w-full p-3 border outline-none rounded"
                  id="quantity"
                  placeholder="Quantity"
                  value={delivery || ""}
                  onChange={(event) => setDelivery(event.target.value)}
                />
              ) : (
                <input
                  type="number"
                  className="w-full p-3 border outline-none rounded"
                  id="stock"
                  placeholder="Stock"
                  value={restock || ""}
                  onChange={(event) => setRestock(event.target.value)}
                />
              )}
            </div>
            {isDelivery ? (
              <button
                type="button"
                onClick={() => handleDeliveryCount()}
                className="bg-sky-500 p-2 text-lg w-full my-2 text-white rounded"
              >
                Delivered
              </button>
            ) : (
              <button
                type="button"
                onClick={handleUpdateStock}
                className="bg-sky-500 p-2 text-lg w-full my-2 text-white rounded"
              >
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
