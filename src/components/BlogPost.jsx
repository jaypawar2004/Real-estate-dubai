import React from "react";  
import { Link } from "react-router-dom";  

const BlogPost = ({ id, title, description, image }) => {  
  
  return (  
    <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden mb-8">  
      {/* Image Section */}
      <div className="relative">  
        <img  
          src={image}  
          alt={title}  
          className="w-full h-56 object-cover"  
        />  
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-75"></div>  
      </div>  

      {/* Content Section */}
      <div className="p-6">  
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>  
        <p className="text-gray-600 mb-5 line-clamp-3">  
          {description}  
        </p>  
        <Link  
          to={`/blog/${id}`}  
          className="inline-block px-4 py-2 bg-blue-500 text-white rounded-full font-medium text-sm hover:bg-blue-600 transition-all duration-300"  
        >  
          Read More →  
        </Link>  
      </div>  
    </div>  
  );  
};  

export default BlogPost;  
