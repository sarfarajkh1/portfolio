import React, { useState } from 'react';
import { motion } from 'framer-motion';
import blogsData from '../../data/blogs.json';
import BlogCard from './BlogCard';
import BlogModal from './BlogModal';

const Blogs = () => {
  const { blogs } = blogsData;
  const [selected, setSelected] = useState(null);

  return (
    <section id="blogs" className="relative py-20 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Blog</span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">Insights on OOP and practical architecture patterns.</p>
        </motion.div>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {blogs.map((b, i) => (
            <BlogCard key={b.id} blog={b} index={i} onClick={() => setSelected(b)} />
          ))}
        </motion.div>
      </div>

      {selected && <BlogModal blog={selected} onClose={() => setSelected(null)} />}
    </section>
  );
};

export default Blogs;
