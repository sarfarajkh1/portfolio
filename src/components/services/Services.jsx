import React from 'react';
import { motion } from 'framer-motion';
import servicesData from '../../data/details.json';
import ServiceCard from './ServiceCard';

const Services = () => {
  const { services } = servicesData;

  const handleHireMe = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="services" className="relative min-h-screen py-20 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Services</span>
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto">{services.intro}</p>
        </motion.div>

        {/* Services Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.list.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </motion.div>

        {/* Hire Me Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-16"
        >
          <button
            onClick={handleHireMe}
            className="px-8 py-3 bg-cyan-400 text-slate-900 font-bold rounded-lg hover:bg-cyan-300 transition-all duration-300 shadow-lg hover:shadow-cyan-400/50"
          >
            Hire Me
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
