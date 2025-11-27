import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

const ExperienceGroup = ({ company, experiences }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      {/* Company Header */}
      <h3 className="text-xl font-bold text-purple-300 mb-6">{company}</h3>

      {/* Experiences for this company */}
      <div>
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>
    </motion.div>
  );
};

export default ExperienceGroup;
