import React from 'react';
import { motion } from 'framer-motion';

const BlogCard = ({ blog, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onClick={onClick}
      className="cursor-pointer group"
    >
      <div className="relative h-60 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300 shadow-lg hover:shadow-cyan-400/20">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 brightness-50"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-black/30 opacity-100 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
          <h3 className="text-white font-bold text-lg">{blog.title}</h3>
          <p className="text-gray-300 text-sm mt-1">{blog.author} • {new Date(blog.date).toLocaleDateString()}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
