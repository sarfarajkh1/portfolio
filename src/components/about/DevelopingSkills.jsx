import React from 'react';
import { motion } from 'framer-motion';

const DevelopingSkills = ({ developingSkills }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
      <h3 className="text-xl font-semibold text-white mb-4">
        Developing Skills
      </h3>
      <div className="space-y-2">
        {developingSkills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-center gap-2 text-gray-300"
          >
            <span className="text-cyan-400">▸</span>
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DevelopingSkills;
