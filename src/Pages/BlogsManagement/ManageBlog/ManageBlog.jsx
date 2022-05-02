import React from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import Loader from "../../../Components/Loader/Loader";
import { useCurrentUserBlogs } from "../../../Hooks/useCurrentUserBlogs";
const ManageBlog = () => {
  const { currentUserBlogs, loading } = useCurrentUserBlogs();
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
                  <th>Title</th>
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
                    <td>1</td>
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
                      <button>
                        <BiEdit />
                      </button>
                    </td>
                    <td>
                      <button>
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
