import React from 'react';
import { motion } from 'framer-motion';

const PersonalDetails = ({ personalDetails }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
      <h3 className="text-2xl font-semibold text-white mb-6">
        Personal Details
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {personalDetails.map((detail, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="flex flex-col gap-1 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300"
          >
            <span className="text-gray-400 text-sm">{detail.label}</span>
            <span className="text-white font-medium">{detail.value}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PersonalDetails;
