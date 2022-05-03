import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "../../Components/Loader/Loader";
import { auth } from "../../Firebase/Firebase.config";
import useCurrentUserProduct from "../../Hooks/useCurrentUserProduct";
import useTitle from "../../Hooks/useTitle";
import Item from "./Item/Item";
const MyItems = () => {
  useTitle("My items");
  const navigate = useNavigate();
  const { currentUserProduct, loading, setCurrentUserProduct } =
    useCurrentUserProduct();
  const [search, setSearch] = useState("");
  /* Handle Delete Product from My Items */
  const handleDeleteMyItemsProduct = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://akanda-warehouse-server.herokuapp.com/current-user-product?id=${id}&&userId=${auth?.currentUser?.uid}`,
            {
              headers: {
                authorization: `Bearer ${sessionStorage.getItem(
                  "accessToken"
                )}`,
              },
            }
          )
          .then((res) => {
            Swal.fire("Deleted!", `${res.data.message}`, "success");
            const restProducts = currentUserProduct.filter(
              (product) => product._id !== id
            );
            setCurrentUserProduct(restProducts);
          });
      }
    });
  };

  /* Handle Search */
  const handleSearch = async () => {
    if (!search) return toast.error("Search field is required.");
    await axios
      .get(
        `https://akanda-warehouse-server.herokuapp.com/search?id=${auth?.currentUser?.uid}&&search=${search}`
      )
      .then((res) => {
        setCurrentUserProduct(res.data.result);
      });
  };

  return (
    <section className="my-items">
      <div className="container">
        <div className="title my-5 p-5 flex flex-col md:flex-row justify-between items-center bg-gray-100">
          <div>
            <h2 className="text-3xl font-semibold">
              <span className="text-sky-500">
                {auth?.currentUser?.displayName}
              </span>{" "}
              Items
            </h2>
            <p>We should get of mine added products.</p>
          </div>
          <div className="bg-white p-2 flex items-stretch mt-2">
            <input
              onChange={(event) => setSearch(event.target.value)}
              className="p-3 outline-none text-lg"
              type="search"
              placeholder="Search"
              id="search"
            />
            <button
              onClick={handleSearch}
              className="bg-sky-500 px-5 text-white"
            >
              <BsSearch />
            </button>
          </div>
        </div>
        {loading ? (
          currentUserProduct.length > 0 ? (
            <div className="items-container grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-7 py-10">
              {currentUserProduct.map((product) => (
                <Item
                  handleDeleteMyItemsProduct={handleDeleteMyItemsProduct}
                  key={product._id}
                  {...product}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <h3 className="text-2xl my-2">No Items found yet.</h3>
              <button
                onClick={() => navigate(`/add-product`)}
                className="bg-sky-500 p-3 text-white rounded my-3"
              >
                Add New Item
              </button>
            </div>
          )
        ) : (
          <Loader />
        )}
      </div>
    </section>
  );
};

export default MyItems;
