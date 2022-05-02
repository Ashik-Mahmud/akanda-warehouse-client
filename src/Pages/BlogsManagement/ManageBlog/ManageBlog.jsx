import React from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
const ManageBlog = () => {
  return (
    <div className="manage-blogs">
      <div className="container my-10">
        <div className="table-wrapper p-5 shadow rounded">
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
              <tr>
                <td>1</td>
                <td>20 jan, 2022</td>
                <td>Title Goes here</td>
                <td>Tech</td>
                <td>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZdDVfx8SFEV8icT9J9pkG4V3mc1RuPFOzr02eHuSG2cwO5MaaCQiEvGtnLqqU3rZRyLY&usqp=CAU"
                    alt="img"
                    width={40}
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageBlog;
