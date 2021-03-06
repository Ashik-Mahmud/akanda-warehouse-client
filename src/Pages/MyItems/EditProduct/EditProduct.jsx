import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { HiSave } from "react-icons/hi";
import { useNavigate, useParams } from "react-router-dom";
import { auth } from "../../../Firebase/Firebase.config";
import useCurrentUserProduct from "../../../Hooks/useCurrentUserProduct";
import useTitle from "../../../Hooks/useTitle";

const EditProduct = () => {
  useTitle("Edit Item");
  const { productId } = useParams();
  const { currentUserProduct } = useCurrentUserProduct();
  const navigate = useNavigate();
  const [currentProduct, setCurrentProduct] = useState({});
  /* get current product */
  useEffect(() => {
    const product = currentUserProduct.find(
      (product) => product._id === productId
    );
    setCurrentProduct(product);
  }, [currentUserProduct, productId]);

  /* Handle Add Product On Server */
  const [productInput, setProductInput] = useState({
    name: currentProduct?.name,
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
      stockQty: productInput.stockQty,
      description: productInput.description,
      imageUrl: productInput.imageUrl,
      supplierName: productInput.supplierName,
      Brand: productInput.brand,
    };

    await axios
      .put(
        `https://akanda-warehouse-server.herokuapp.com/product?id=${productId}&&uid=${auth?.currentUser?.uid}`,
        {
          data: productData,
          authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        navigate(`/my-items`);
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
            <span>You can Update your product from here</span>
            <h2 className="text-2xl font-semibold">Update Product</h2>
          </div>
          <button
            onClick={() => navigate("/my-items")}
            className="flex gap-1 p-3 items-center bg-sky-500 rounded active:scale-95 transition-all text-white"
          >
            Your Products
          </button>
        </div>

        <form
          action=""
          onSubmit={handleAddProductForm}
          className="add-product-wrapper p-8 md:p-20 rounded border shadow bg-white"
        >
          <div className="input-group flex flex-col gap-2">
            <label htmlFor="name">Product Name</label>
            <input
              type="text"
              className="p-3 border border-gray-300 focus:border-sky-500 rounded outline-none text-lg"
              placeholder="Product Name"
              id="name"
              value={productInput?.name || currentProduct?.name || ""}
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
                value={productInput?.price || currentProduct?.price || ""}
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
                value={productInput?.stockQty || currentProduct?.stockQty || ""}
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
                value={
                  productInput?.supplierName ||
                  currentProduct?.supplierName ||
                  ""
                }
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
                value={productInput?.brand || currentProduct?.Brand || ""}
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
              value={
                productInput?.description || currentProduct?.description || ""
              }
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
              value={productInput?.imageUrl || currentProduct?.imageUrl || ""}
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
              <HiSave className="text-2xl" /> Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
