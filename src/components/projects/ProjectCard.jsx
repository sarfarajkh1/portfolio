import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className="cursor-pointer group"
    >
      <div className="relative h-64 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300 shadow-lg hover:shadow-cyan-400/20">
        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 brightness-50"
        />

        {/* Overlay - always visible on small screens, hover on md+ */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-black/30 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content - visible on mobile, hover on md+ */}
        <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-white font-bold text-lg mb-1">{project.title}</h3>
          <p className="text-cyan-400 text-sm mb-2">{project.domain}</p>
          <p className="text-gray-300 text-xs">{project.company}</p>
        </div>

        {/* Domain Badge */}
        <div className="absolute top-3 right-3 bg-cyan-400/20 border border-cyan-400/50 rounded-full px-3 py-1 backdrop-blur-sm">
          <span className="text-cyan-400 text-xs font-medium">{project.domain}</span>
        </div>

        {/* Click Prompt */}
        <div className="absolute inset-0 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2">
            <p className="text-white text-sm font-medium">View Details</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
