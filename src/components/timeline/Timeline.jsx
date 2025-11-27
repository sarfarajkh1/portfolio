import React from 'react';
import { motion } from 'framer-motion';
import aboutData from '../../data/details.json';
import EducationCard from './EducationCard';
import ExperienceCard from './ExperienceCard';

const Timeline = () => {
  const { timeline } = aboutData;

  // Sort education by year descending (most recent first)
  const sortedEducation = React.useMemo(() => {
    return [...timeline.education].sort((a, b) => b.endYear - a.endYear);
  }, [timeline.education]);

  // Group experiences by company and sort
  const groupedExperiences = React.useMemo(() => {
    const groups = {};
    timeline.experience.forEach((exp) => {
      if (!groups[exp.company]) {
        groups[exp.company] = [];
      }
      groups[exp.company].push(exp);
    });

    // Sort within each company by year descending
    Object.keys(groups).forEach((company) => {
      groups[company].sort((a, b) => {
        if (b.startYear !== a.startYear) return b.startYear - a.startYear;
        return 0;
      });
    });

    return groups;
  }, [timeline.experience]);

  return (
    <section id="timeline" className="relative py-20 px-4 sm:px-8 md:px-16 lg:px-24">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-black/40 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Journey</span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
            Education & Professional Experience
          </p>
        </motion.div>

        {/* Two Section Timeline - Side by side on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Timeline - Black Box Container */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10"
          >
            <h3 className="text-2xl font-semibold text-white mb-8">
              Education
            </h3>

            <div className="relative">
              {/* Vertical line - on left for all devices */}
              <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400/30 via-cyan-400/50 to-cyan-400/30"></div>

              {/* Education items */}
              <div className="space-y-6">
                {sortedEducation.map((edu, index) => (
                  <EducationCard key={edu.id} education={edu} index={index} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Experience Timeline - Black Box Container */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10"
          >
            <h3 className="text-2xl font-semibold text-white mb-8">
              Experience
            </h3>

            <div className="relative">
              {/* Vertical line - on left */}
              <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400/30 via-cyan-400/50 to-cyan-400/30"></div>

              {/* Experience items grouped by company */}
              <div className="space-y-6">
                {Object.entries(groupedExperiences).map(([company, experiences], groupIndex) => (
                  <ExperienceCard
                    key={company}
                    company={company}
                    experiences={experiences}
                    index={groupIndex}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
