import React from 'react';
import { motion } from 'framer-motion';

const Interests = ({ interests }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <h3 className="text-xl font-semibold text-white mb-4">
        Interests
      </h3>
      <div className="space-y-2">
        {interests.map((interest, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-center gap-2 text-gray-300"
          >
            <span className="text-cyan-400">▸</span>
            {interest}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Interests;
