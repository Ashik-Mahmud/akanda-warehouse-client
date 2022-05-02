import axios from "axios";
import React from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "../../../Components/Loader/Loader";
import { auth } from "../../../Firebase/Firebase.config";
import { useCurrentUserBlogs } from "../../../Hooks/useCurrentUserBlogs";
import useTitle from "../../../Hooks/useTitle";
const ManageBlog = () => {
  useTitle("Manage blogs");
  const navigate = useNavigate();
  const { currentUserBlogs, setCurrentUserBlogs, loading } =
    useCurrentUserBlogs();

  /* Handle Blog Delete */
  const handleDeleteBlog = async (id) => {
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
            `https://akanda-warehouse-server.herokuapp.com/blogs?id=${id}&&userId=${auth?.currentUser?.uid}`,
            {
              headers: {
                authorization: `Bearer ${sessionStorage.getItem(
                  "accessToken"
                )}`,
              },
            }
          )
          .then((res) => {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            const restBlogs = currentUserBlogs.filter(
              (blog) => blog._id !== id
            );
            setCurrentUserBlogs(restBlogs);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };
  return (
    <div className="manage-blogs">
      <div className="container my-10">
        <div className="table-wrapper p-5 shadow rounded">
          {loading ? (
            <table className="w-full my-3 text-left">
              <thead className="bg-slate-100">
                <tr>
                  <th>ID</th>
                  <th>Date</th>
                  <th width="500">Title</th>
                  <th>Category</th>
                  <th>Image</th>
                  <th>status</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {currentUserBlogs.map((blog) => (
                  <tr key={blog._id}>
                    <td>{blog._id.slice(10, 15)}</td>
                    <td>{blog?.date}</td>
                    <td>{blog?.title}</td>
                    <td>{blog?.category}</td>
                    <td>
                      <img
                        src={blog?.imageUrl}
                        alt="img"
                        className="rounded"
                        width={60}
                      />
                    </td>
                    <td>Active</td>
                    <td>
                      <button
                        onClick={() => navigate(`/update-blog/${blog._id}`)}
                      >
                        <BiEdit />
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDeleteBlog(blog._id)}
                        className="text-red-500"
                      >
                        <BiTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageBlog;
