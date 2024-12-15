import React from "react";
import blogs from "../data/Blogs";
import BlogPost from "./BlogPost";

const BlogPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-[15vh]">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Real Estate Blogs
      </h1>
      {blogs.map((blog) => (
        <BlogPost
          key={blog.id}
          id={blog.id}
          title={blog.title}
          description={blog.description}
          image={blog.image}
        />
      ))}
    </div>
  );
};

export default BlogPage;
