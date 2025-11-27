import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ExperienceCard = ({ company, experiences, index }) => {
  const [hoveredExpId, setHoveredExpId] = useState(null);

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

      {/* Content - left aligned with margin */}
      <div className="relative ml-8 pl-3">
        <h3 className="text-base font-semibold text-white mb-3">{company}</h3>

        {/* Designations within company */}
        <div className="space-y-3">
          {experiences.map((exp, expIndex) => (
            <div key={exp.id} className="relative">
              {/* Designation with hover tooltip trigger */}
              <div
                className="relative inline-block"
                onMouseEnter={() => setHoveredExpId(exp.id)}
                onMouseLeave={() => setHoveredExpId(null)}
              >
                <h4 className="text-sm font-medium text-cyan-400 mb-1 cursor-pointer hover:text-cyan-300 transition-colors">
                  {exp.designation}
                </h4>

                {/* Tooltip - Responsibilities */}
                {hoveredExpId === exp.id && exp.responsibilities && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 top-full mt-2 z-30 bg-slate-900/95 backdrop-blur-md border border-cyan-400/30 rounded-lg p-4 min-w-max shadow-2xl"
                  >
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-gray-200 text-xs leading-relaxed whitespace-normal max-w-sm flex gap-2">
                          <span className="text-cyan-400 flex-shrink-0">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
              
              {/* Duration */}
              <p className="text-gray-600 text-sm">
                {exp.startMonth} {exp.startYear} - {exp.endMonth} {exp.endYear}
              </p>

              {/* Separation line between designations */}
              {expIndex < experiences.length - 1 && (
                <div className="border-t border-white/10 my-3"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
