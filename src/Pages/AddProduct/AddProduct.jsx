import axios from "axios";
import { sendEmailVerification } from "firebase/auth";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineReload } from "react-icons/ai";
import { BiMailSend } from "react-icons/bi";
import { HiSave } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/Firebase.config";
import useTitle from "../../Hooks/useTitle";

export const AddProduct = () => {
  useTitle("add product");
  const navigate = useNavigate();
  const [isReload, setIsReload] = useState(false);

  /* Handle Email Verify */
  const handleEmailVerified = async () => {
    await sendEmailVerification(auth?.currentUser)
      .then((res) => {
        toast.success(
          `We sent you verification email on ${auth?.currentUser?.email}`
        );
        setIsReload(true);
      })
      .catch((err) => {
        toast.error(err.message.split(":")[1]);
      });
  };

  /* Handle Add Product On Server */
  const [productInput, setProductInput] = useState({
    name: "",
    price: "",
    stockQty: "",
    description: "",
    brand: "",
    supplierName: "",
    imageUrl: "",
  });

  const handleAddProductForm = async (event) => {
    event.preventDefault();
    if (!productInput.name) return toast.error(`Name field is required.`);

    if (!productInput.price) return toast.error(`Price field is required.`);

    if (!productInput.stockQty)
      return toast.error(`Stock Quantity field is required.`);

    if (!productInput.supplierName)
      return toast.error(`Supplier Name field is required.`);

    if (!productInput.brand)
      return toast.error(`Brand Name field is required.`);

    if (!productInput.description)
      return toast.error(`Description field is required.`);

    if (!productInput.imageUrl)
      return toast.error(`Image URL field is required.`);

    const productData = {
      name: productInput.name,
      price: productInput.price,
      stockQty: Number(productInput.stockQty),
      description: productInput.description,
      imageUrl: productInput.imageUrl,
      supplierName: productInput.supplierName,
      Brand: productInput.brand,
      author: {
        name: auth?.currentUser?.displayName,
        email: auth?.currentUser?.email,
        uid: auth?.currentUser?.uid,
      },
      date: new Date().toDateString(),
    };

    await axios
      .post(`http://localhost:5000/add-product`, {
        data: productData,
        authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      })
      .then((res) => {
        toast.success(res.data.message);
        event.target.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="p-5 md:p-10">
      <div className="container">
        <div className="title my-6 flex justify-between items-center flex-wrap gap-3">
          <div>
            <span>You can add product from here</span>
            <h2 className="text-2xl font-semibold">Add Product</h2>
          </div>
          <button
            onClick={() => navigate("/my-items")}
            className="flex gap-1 p-3 items-center bg-sky-500 rounded active:scale-95 transition-all text-white"
          >
            Your Products
          </button>
        </div>
        {!auth?.currentUser?.emailVerified &&
        auth?.currentUser?.providerData[0]?.providerId === "password" ? (
          <>
            <div className="text-center">
              <h2 className="text-3xl text-center my-4">Verify Email</h2>
              <p>Don't add product if you are unverified user.</p>
              {isReload ? (
                <button
                  onClick={() => window.location.reload()}
                  className="bg-red-700 p-3 text-white my-4 flex mx-auto items-center gap-1"
                >
                  <AiOutlineReload className="text-2xl" /> Reload
                </button>
              ) : (
                <button
                  onClick={handleEmailVerified}
                  className="bg-sky-400 p-3 text-white my-4 flex mx-auto items-center gap-1"
                >
                  <BiMailSend className="text-2xl" /> Send Verify Email
                </button>
              )}
            </div>
          </>
        ) : (
          <form
            action=""
            onSubmit={handleAddProductForm}
            className="add-product-wrapper p-5 sm:p-8 md:p-20 rounded border shadow bg-white"
          >
            <div className="input-group flex flex-col gap-2">
              <label htmlFor="name">Product Name</label>
              <input
                type="text"
                className="p-3 border border-gray-300 focus:border-sky-500 rounded outline-none text-lg"
                placeholder="Product Name"
                id="name"
                onChange={(event) =>
                  setProductInput({ ...productInput, name: event.target.value })
                }
              />
            </div>
            <div className="flex items-center gap-2 my-3 flex-col sm:flex-row">
              <div className="input-group w-full flex flex-col gap-2">
                <label htmlFor="price">Price ($)</label>
                <input
                  type="text"
                  className="p-3 border border-gray-300 focus:border-sky-500 rounded outline-none text-lg"
                  placeholder="Price"
                  id="price"
                  onChange={(event) =>
                    setProductInput({
                      ...productInput,
                      price: event.target.value,
                    })
                  }
                />
              </div>
              <div className="input-group w-full flex flex-col gap-2">
                <label htmlFor="stock-quantity">Stock Quantity (pcs)</label>
                <input
                  type="text"
                  className="p-3 border border-gray-300 focus:border-sky-500 rounded outline-none text-lg"
                  placeholder="Stock Quantity"
                  id="stock-quantity"
                  onChange={(event) =>
                    setProductInput({
                      ...productInput,
                      stockQty: event.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="flex items-center gap-2 my-3 flex-col sm:flex-row">
              <div className="input-group w-full flex flex-col gap-2">
                <label htmlFor="supplierName">Supplier Name</label>
                <input
                  type="text"
                  className="p-3 border border-gray-300 focus:border-sky-500 rounded outline-none text-lg"
                  placeholder="Supplier Name"
                  id="supplierName"
                  onChange={(event) =>
                    setProductInput({
                      ...productInput,
                      supplierName: event.target.value,
                    })
                  }
                />
              </div>
              <div className="input-group w-full flex flex-col gap-2">
                <label htmlFor="brand">Brand</label>
                <input
                  type="text"
                  className="p-3 border border-gray-300 focus:border-sky-500 rounded outline-none text-lg"
                  placeholder="Brand"
                  id="brand"
                  onChange={(event) =>
                    setProductInput({
                      ...productInput,
                      brand: event.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="input-group my-3">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                cols="30"
                placeholder="Short Description"
                rows="3"
                className="w-full p-3 rounded border border-gray-300 outline-none focus:border-sky-500"
                onChange={(event) =>
                  setProductInput({
                    ...productInput,
                    description: event.target.value,
                  })
                }
              ></textarea>
            </div>
            <div className="input-group w-full flex flex-col gap-2">
              <label htmlFor="imageUrl">Image URl</label>
              <input
                type="url"
                className="p-3 border border-gray-300 focus:border-sky-500 rounded outline-none text-lg"
                placeholder="Image URL"
                id="imageUrl"
                onChange={(event) =>
                  setProductInput({
                    ...productInput,
                    imageUrl: event.target.value,
                  })
                }
              />
            </div>
            <div className="input-group justify-end flex my-2">
              <button className="bg-sky-500 transition-all active:scale-95 p-4 text-white text-lg rounded my-3 flex gap-2 items-center">
                <HiSave className="text-2xl" /> Save Product
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
