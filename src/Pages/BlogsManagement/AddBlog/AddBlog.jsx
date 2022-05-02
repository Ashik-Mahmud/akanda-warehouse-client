import React from "react";

const AddBlog = () => {
  return (
    <div className="add-blog ">
      <div className="container">
        <form
          action=""
          className="form-wrapper my-6 p-8 bg-white shadow rounded"
        >
          <div className="input-group flex flex-col gap-2">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="w-full p-3 rounded border outline-none"
              placeholder="Title"
              id="title"
            />
          </div>

          <div className="input-group w-full flex flex-col gap-2">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              className="w-full p-3 rounded border outline-none"
              placeholder="Category"
              id="category"
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
            ></textarea>
          </div>
          <div className="input-group mt-2 w-full flex flex-col gap-2">
            <label htmlFor="image">Image URL</label>
            <input
              type="url"
              className="w-full p-3 rounded border outline-none"
              placeholder="Image URL"
              id="image"
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
