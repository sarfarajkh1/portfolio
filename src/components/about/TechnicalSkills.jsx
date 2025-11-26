import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const TechnicalSkills = ({ skills }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h3 className="text-2xl font-semibold text-white">
          Technical Skills
        </h3>
        {/* Legend */}
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <div className="size-3 rounded-full bg-green-400"></div>
            <span className="text-gray-400">Expert</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="size-3 rounded-full bg-cyan-400"></div>
            <span className="text-gray-400">Advanced</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="size-3 rounded-full bg-yellow-400"></div>
            <span className="text-gray-400">Intermediate</span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => {
          const levelConfig = {
            expert: { percentage: 100, strokeColor: '#4ade80', borderColor: 'border-green-500/30' },
            advanced: { percentage: 66, strokeColor: '#22d3ee', borderColor: 'border-cyan-500/30' },
            intermediate: { percentage: 33, strokeColor: '#facc15', borderColor: 'border-yellow-500/30' }
          };
          
          const config = levelConfig[skill.level] || levelConfig.intermediate;
          const circumference = 2 * Math.PI * 10;
          const offset = circumference - (config.percentage / 100) * circumference;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              whileHover={{ scale: 1.05 }}
              className={`inline-flex items-center gap-2.5 px-3 py-2 bg-white/5 border ${config.borderColor} rounded-lg hover:bg-white/10 transition-all duration-300`}
            >
              <div className="relative size-6 shrink-0">
                <svg className="size-full -rotate-90" viewBox="0 0 24 24">
                  {/* Background circle */}
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="2.5"
                  />
                  {/* Progress circle */}
                  <motion.circle
                    cx="12"
                    cy="12"
                    r="10"
                    fill="none"
                    stroke={config.strokeColor}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    whileInView={{ strokeDashoffset: offset }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.02 }}
                  />
                </svg>
              </div>
              <span className="text-sm text-gray-200 font-medium whitespace-nowrap">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default TechnicalSkills;
