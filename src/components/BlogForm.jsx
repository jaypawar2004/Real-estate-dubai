import React, { useState } from "react";

const BlogForm = ({ onAddBlog }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !image) {
      alert("Please fill all fields!");
      return;
    }
    onAddBlog({ title, description, image });
    setTitle("");
    setDescription("");
    setImage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-6 mb-8 mt-[5vw]"
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Blog</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Add Blog
      </button>
    </form>
  );
};

export default BlogForm;
