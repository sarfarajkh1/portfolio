import React from 'react';
import { motion } from 'framer-motion';

const ProfessionalSummary = ({ about }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
      <h3 className="text-2xl font-semibold text-white mb-4">
        Professional Summary
      </h3>
      <p className="text-gray-300 leading-relaxed text-base sm:text-lg mb-6">
        {about.summary}
      </p>
      <div className="p-4 bg-cyan-500/10 border-l-4 border-cyan-400 rounded-r-lg">
        <p className="text-cyan-300 italic font-medium">
          "{about.highlightSentence}"
        </p>
      </div>
    </div>
  );
};

export default ProfessionalSummary;
