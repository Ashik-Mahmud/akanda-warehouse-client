import React from "react";
import { BsPlus, BsTrash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const ManageProducts = () => {
  const navigate = useNavigate();
  return (
    <ManageProductsContainer className="p-5">
      <div className="container">
        <div className="title my-6 flex justify-between items-center flex-wrap gap-3">
          <div>
            <span>You can see all the products here</span>
            <h2 className="text-2xl font-semibold">Manage All Products</h2>
          </div>
          <button
            onClick={() => navigate("/add-product")}
            className="flex gap-1 p-3 items-center bg-sky-500 rounded active:scale-95 transition-all text-white"
          >
            {" "}
            <BsPlus className="text-white text-2xl" /> Add Product
          </button>
        </div>
        <div className="table-wrapper bg-white p-10 border shadow-sm rounded overflow-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                <th>ID</th>
                <th width={300}>Name </th>
                <th> Price </th>
                <th> Stock </th>
                <th> Supplier </th>
                <th> Image </th>
                <th width={120}> Status </th>
                <th width={120}> Delete </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Laptop</td>
                <td>443$ </td>
                <td>434pcs</td>
                <td>Ashik Mahmud</td>
                <td>
                  <img
                    width={40}
                    className="rounded border w-14"
                    src="https://static-01.daraz.com.bd/p/9eb4281b7d9f084cec2d8e86fbc16259.jpg"
                    alt=""
                  />
                </td>
                <td>
                  <span className="text-sky-500">Active</span>
                </td>
                <td>
                  <button className="bg-red-400 text-white p-2">
                    <BsTrash />
                  </button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Laptop</td>
                <td>443$ </td>
                <td>434pcs</td>
                <td>Ashik Mahmud</td>
                <td>
                  <img
                    width={40}
                    className="rounded border w-14"
                    src="https://static-01.daraz.com.bd/p/9eb4281b7d9f084cec2d8e86fbc16259.jpg"
                    alt=""
                  />
                </td>
                <td>
                  <span className="text-sky-500">Active</span>
                </td>
                <td>
                  <button className="bg-red-400 text-white p-2">
                    <BsTrash />
                  </button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Laptop</td>
                <td>443$ </td>
                <td>434pcs</td>
                <td>Ashik Mahmud</td>
                <td>
                  <img
                    width={40}
                    className="rounded border w-14"
                    src="https://static-01.daraz.com.bd/p/9eb4281b7d9f084cec2d8e86fbc16259.jpg"
                    alt=""
                  />
                </td>
                <td>
                  <span className="text-sky-500">Active</span>
                </td>
                <td>
                  <button className="bg-red-400 text-white p-2">
                    <BsTrash />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="pagination flex justify-end gap-1 my-3 items-center">
            <button className="p-2 px-4 bg-sky-500 text-white">1</button>
            <button className="p-2 px-4 bg-gray-100">2</button>
            <button className="p-2 px-4 bg-gray-100">3</button>
            <button className="p-2 px-4 bg-gray-100">4</button>
            <select name="page" className="p-2 px-4 bg-gray-100" id="page">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </div>
        </div>
      </div>
    </ManageProductsContainer>
  );
};

const ManageProductsContainer = styled.section`
  position: relative;
  th,
  td {
    padding: 0.6rem;
    border-bottom: 1px solid #f8f8f8;
  }
`;

export default ManageProducts;
