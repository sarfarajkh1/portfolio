import React from 'react';
import { motion } from 'framer-motion';

const DesignPatterns = ({ patterns }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
      <h3 className="text-2xl font-semibold text-white mb-6">
        Design Patterns & Architecture
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {patterns.map((pattern, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300"
          >
            <div className="shrink-0 size-2 rounded-full bg-cyan-400"></div>
            <span className="text-gray-200 text-sm">{pattern}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DesignPatterns;
