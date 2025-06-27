import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaClock } from 'react-icons/fa';
import BlogDetails2 from './BlogDetails2';

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch('/blogs.json') // Correct path assuming blogs.json is in public folder
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === id);
        setBlog(found);
      });
  }, [id]);

  if (!blog) return <div className="text-center py-10 text-xl">Loading blog details...</div>;

  if (blog.id === "1") {
    return <BlogDetails2 blog={blog}></BlogDetails2>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Blog Cover Image */}
      <img
        src={blog.coverImage}
        alt={blog.title}
        className="w-full h-[400px] object-cover rounded-xl shadow-lg mb-8"
      />

      {/* Title & Meta Info */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>
        <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm">
          {/* Author */}
          <div className="flex items-center gap-2">
            <img
              src={blog.authorImage}
              alt={blog.author}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span>{blog.author}</span>
          </div>
          {/* Read Time */}
          <div className="flex items-center gap-1">
            <FaClock className="text-gray-500" />
            <span>{blog.readTime}</span>
          </div>
          {/* Category */}
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
            {blog.category}
          </span>
          {/* Date */}
          <span className="text-xs">Published on {blog.date}</span>
        </div>
      </div>

      {/* Blog Content */}
      <div className="prose lg:prose-lg max-w-none text-gray-800">
        {blog.content.split('\n\n').map((block, index) => {
          if (block.startsWith('1. ') || block.startsWith('🔹')) {
            return <p key={index} dangerouslySetInnerHTML={{ __html: block }} />;
          } else {
            return <p key={index}>{block}</p>;
          }
        })}
      </div>

      {/* Tags */}
      <div className="mt-8 flex flex-wrap gap-2">
        {blog.tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
