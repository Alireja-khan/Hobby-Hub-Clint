import React from 'react';
import { FaClock } from 'react-icons/fa';

const BlogDetails2 = ({ blog }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 text-gray-800">
      {/* Cover Image */}
      <img
        src={blog.coverImage}
        alt={blog.title}
        className="w-full h-[400px] object-cover rounded-2xl shadow-lg mb-8"
      />

      {/* Title & Meta */}
      <div className="mb-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          {blog.title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm">
          {/* Author */}
          <div className="flex items-center gap-2">
            <img
              src={blog.authorImage}
              alt={blog.author}
              className="w-9 h-9 rounded-full border object-cover"
            />
            <span className="font-medium">{blog.author}</span>
          </div>

          {/* Read Time */}
          <div className="flex items-center gap-1">
            <FaClock />
            <span>{blog.readTime}</span>
          </div>

          {/* Category */}
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
            {blog.category}
          </span>

          {/* Date */}
          <span className="text-xs text-gray-500">Published on {blog.date}</span>
        </div>
      </div>

      {/* Excerpt */}
      <p className="text-lg text-gray-700 italic mb-6 border-l-4 pl-4 border-blue-300">
        {blog.excerpt}
      </p>

      {/* Content */}
      <div className="prose lg:prose-lg max-w-none text-gray-800 mb-12">
        {blog.content.split('\n\n').map((block, i) => (
          <p key={i}>{block}</p>
        ))}
      </div>

      {/* Extra Images */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {blog.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Blog image ${index + 1}`}
              className="w-full h-56 object-cover rounded-xl shadow-md hover:scale-105 transition duration-300"
            />
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="mt-10 flex flex-wrap gap-2">
        {blog.tags.map((tag, i) => (
          <span
            key={i}
            className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails2;
