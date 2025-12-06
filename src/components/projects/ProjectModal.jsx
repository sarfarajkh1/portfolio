import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectModal = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <span className="text-white text-xl">×</span>
          </button>

          {/* Project Image */}
          <div className="relative h-64 sm:h-80 overflow-hidden rounded-t-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-cyan-400/20 border border-cyan-400/50 rounded-full px-3 py-1 text-cyan-400 text-xs font-medium">
                  {project.domain}
                </span>
                <span className="text-gray-400 text-sm">
                  {project.startDate} - {project.endDate}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">{project.title}</h2>
              <p className="text-gray-300">{project.company}</p>
            </div>

            {/* Intro */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Overview</h3>
              <p className="text-gray-300 leading-relaxed">{project.intro}</p>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Description</h3>
              <p className="text-gray-400 leading-relaxed">{project.description}</p>
            </div>

            {/* My Role */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">My Role</h3>
              <p className="text-cyan-400 font-medium">{project.myRole}</p>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-white/10 border border-white/20 rounded-lg px-3 py-1 text-gray-300 text-sm hover:bg-white/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Key Achievements</h3>
              <ul className="space-y-2">
                {project.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-300">
                    <span className="text-cyan-400 flex-shrink-0 mt-1">✓</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
