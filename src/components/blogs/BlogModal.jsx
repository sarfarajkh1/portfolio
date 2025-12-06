import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BlogModal = ({ blog, onClose }) => {
  if (!blog) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <span className="text-white text-xl">×</span>
          </button>

          <div className="relative h-56 sm:h-72 overflow-hidden rounded-t-2xl">
            <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white">{blog.title}</h2>
              <p className="text-gray-400 text-sm">{blog.author} • {new Date(blog.date).toLocaleDateString()}</p>
            </div>

            <div className="prose prose-invert text-gray-200 max-w-none">
              <p>{blog.description}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BlogModal;
