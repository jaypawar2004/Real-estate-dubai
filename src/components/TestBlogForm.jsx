import React from "react";
import BlogForm from "./BlogForm";

const TestBlogForm = () => {
  const handleAddBlog = (blog) => {
    console.log("New Blog Data:", blog);
    alert(`Blog Added:\nTitle: ${blog.title}\nDescription: ${blog.description}\nImage URL: ${blog.image}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Test Blog Form</h1>
      <BlogForm onAddBlog={handleAddBlog} />
    </div>
  );
};

export default TestBlogForm;
