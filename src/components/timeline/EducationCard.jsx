import React from 'react';
import { motion } from 'framer-motion';

const EducationCard = ({ education, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline dot - aligned with title */}
      <div className="absolute left-2 -translate-x-1/2 top-1 z-20">
        <div className="w-5 h-5 bg-cyan-400 rounded-full border-3 border-slate-950 shadow-lg shadow-cyan-400/50" />
      </div>

      {/* Content - No box, just text with left margin */}
      <div className="relative ml-8 pl-3">
        <h3 className="text-base font-semibold text-white mb-1">{education.course}</h3>
        <p className="text-gray-400 text-sm mb-2">{education.specialization}</p>
        <p className="text-gray-500 text-sm mb-2">{education.institute}</p>
        <p className="text-gray-600 text-sm mb-2">
          {education.startMonth} {education.startYear} - {education.endMonth} {education.endYear}
        </p>
        {(education.cgpa || education.percentage) && (
          <p className="text-cyan-400 text-sm font-medium">
            {education.cgpa && `CGPA: ${education.cgpa}`}
            {education.percentage && `Percentage: ${education.percentage}`}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default EducationCard;
