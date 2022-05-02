import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { auth } from "../../../Firebase/Firebase.config";
const AddBlog = () => {
  /* handle Add blogs */
  const [blogInput, setBlogInput] = useState({
    title: "",
    category: "",
    description: "",
    imageUrl: "",
  });
  const handleAddBlogs = async (event) => {
    event.preventDefault();
    if (!blogInput.title) return toast.error(`Title field is required.`);
    if (!blogInput.category) return toast.error(`Category field is required.`);
    if (!blogInput.description)
      return toast.error(`Description field is required.`);
    if (!blogInput.imageUrl) return toast.error(`Image URL field is required.`);

    const blogData = {
      title: blogInput.title,
      category: blogInput.category,
      description: blogInput.description,
      imageUrl: blogInput.imageUrl,
      author: {
        name: auth?.currentUser?.displayName,
        email: auth?.currentUser?.email,
        uid: auth?.currentUser?.uid,
      },
    };
    await axios
      .post(`http://localhost:5000/blogs`, {
        data: blogData,
        authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(blogData);
  };

  return (
    <div className="add-blog ">
      <div className="container">
        <form
          action=""
          onSubmit={handleAddBlogs}
          className="form-wrapper my-6 p-8 bg-white shadow rounded"
        >
          <div className="input-group flex flex-col gap-2">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="w-full p-3 rounded border outline-none"
              placeholder="Title"
              id="title"
              onChange={(event) =>
                setBlogInput({ ...blogInput, title: event.target.value })
              }
            />
          </div>

          <div className="input-group w-full flex flex-col gap-2">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              className="w-full p-3 rounded border outline-none"
              placeholder="Category"
              id="category"
              onChange={(event) =>
                setBlogInput({ ...blogInput, category: event.target.value })
              }
            />
          </div>
          <div className="input-group w-full flex flex-col gap-2">
            <label htmlFor="desc">Description</label>
            <textarea
              name="desc"
              id="desc"
              cols="30"
              className="w-full p-3 rounded border outline-none"
              rows="5"
              placeholder="Description"
              onChange={(event) =>
                setBlogInput({ ...blogInput, description: event.target.value })
              }
            ></textarea>
          </div>
          <div className="input-group mt-2 w-full flex flex-col gap-2">
            <label htmlFor="image">Image URL</label>
            <input
              type="url"
              className="w-full p-3 rounded border outline-none"
              placeholder="Image URL"
              id="image"
              onChange={(event) =>
                setBlogInput({ ...blogInput, imageUrl: event.target.value })
              }
            />
          </div>
          <div className="input-group my-3">
            <button className="bg-sky-400 p-3 rounded text-white">
              Save Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
