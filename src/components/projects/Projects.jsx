import React, { useState } from 'react';
import { motion } from 'framer-motion';
import aboutData from '../../data/details.json';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';


const Projects = () => {
  const { projects } = aboutData;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="relative min-h-screen py-20 px-4 sm:px-8 md:px-16 lg:px-24">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-black/40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
            Showcasing expertise across diverse domains and technologies
          </p>
        </motion.div>

        {/* Projects Summary in Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 sm:p-10 mb-12 max-w-4xl mx-auto"
        >
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            From <span className="text-cyan-400 font-semibold">FinTech</span> to <span className="text-cyan-400 font-semibold">ERP</span>, I've delivered end-to-end solutions that solve real-world business challenges with technology.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
        >
          {projects.list.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
