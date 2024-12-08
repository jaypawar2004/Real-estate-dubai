import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Simulated blog data
  const blogs = [
    {
      id: 1,
      title: "Top 10 Real Estate Trends in 2024",
      content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.  
        Consequatur vero fugit, culpa doloremque similique accusantium...`,
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1000&auto=format&fit=crop&q=60",
    },
    {
      id: 2,
      title: "How to Invest in Real Estate Wisely",
      content: `Investing in real estate requires careful planning and insight...`,
      image:
        "https://images.unsplash.com/photo-1559717865-a99cac1c95d8?w=1000&auto=format&fit=crop&q=60",
    },
    {
      id: 3,
      title: "Benefits of Buying vs. Renting Property",
      content: `Discover the pros and cons of buying versus renting properties...`,
      image:
        "https://images.unsplash.com/photo-1559717201-fbb671ff56b7?w=1000&auto=format&fit=crop&q=60",
    },
  ];

  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog)
    return <p className="text-center text-red-500 mt-10">Blog not found!</p>;

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 px-4 invisible py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition lg:visible"
        >
          ← Back to Blogs
        </button>

        {/* Title and Meta Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            {blog.title}
          </h1>
          <p className="text-gray-600">Published on April 4, 2024</p>
        </div>

        {/* Image Section */}
        <div className="mb-10">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
          <p className="text-gray-700 text-lg leading-relaxed">{blog.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
