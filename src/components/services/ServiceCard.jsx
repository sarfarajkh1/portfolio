import React from 'react';
import { motion } from 'framer-motion';

const getServiceIcon = (index) => {
  const icons = [
    // Custom Software Development
    <svg key="laptop" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><path d="M2 17h20"/></svg>,
    // System Optimization
    <svg key="chart" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="2" x2="12" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
    // Cloud & DevOps
    <svg key="cloud" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
    // Team Mentoring
    <svg key="users" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    // API Integration & Security
    <svg key="shield" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    // IT Consulting
    <svg key="chat" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  ];
  return icons[index % icons.length];
};

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-400/50 transition-all duration-300 h-full hover:shadow-lg hover:shadow-cyan-400/10">
        {/* Icon */}
        <div className="w-12 h-12 rounded-full bg-cyan-400/20 border border-cyan-400/50 flex items-center justify-center mb-4 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-900 transition-all duration-300">
          {getServiceIcon(index)}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>

        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>

        {/* Hover accent line */}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full" />
      </div>
    </motion.div>
  );
};

export default ServiceCard;
