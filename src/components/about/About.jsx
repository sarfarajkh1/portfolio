import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import aboutData from '../../data/details.json';
import ProfileCard from './ProfileCard';
import ProfessionalSummary from './ProfessionalSummary';
import TechnicalSkills from './TechnicalSkills';
import PersonalDetails from './PersonalDetails';
import DesignPatterns from './DesignPatterns';
import VersionControl from './VersionControl';
import Interests from './Interests';
import DeveloperNote from './DeveloperNote';

const About = () => {
  const { about } = aboutData;

  // Calculate years of experience dynamically from career start date
  const careerStartDate = new Date(about.careerStartDate);
  const currentDate = new Date();
  const yearsOfExperience = Math.floor((currentDate - careerStartDate) / (1000 * 60 * 60 * 24 * 365.25));

  const personalDetails = [
    { label: 'Full Name', value: about.fullName },
    { label: 'Birthday', value: about.birthday },
    { label: 'Qualification', value: about.qualification },
    { label: 'Email', value: about.email || aboutData.contact.email },
    { label: 'Mobile', value: about.mobile },
    { label: 'Address', value: about.address },
    { label: 'Languages', value: about.languagesKnown.join(', ') },
    { label: 'Marital Status', value: about.maritalStatus },
  ];

  const stats = [
    { label: 'Years Experience', value: `${yearsOfExperience}+`, icon: '💼' },
    { label: 'Projects Completed', value: about.projectsCompleted, icon: '✅' },
    { label: 'Technologies', value: `${about.technicalSkills.length}+`, icon: '⚡' },
  ];

  const additionalStats = about.additionalStats || [];

  return (
    <section id="bio" className="relative min-h-screen py-20 px-4 sm:px-8 md:px-16 lg:px-24">
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
            About <span className="text-cyan-400">Me</span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
            {about.title}
          </p>
        </motion.div>

        {/* Two Column Layout: Image + Professional Summary + Technical Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-8">
          {/* Left Column - Profile Image (30%) */}
          <ProfileCard about={about} stats={stats} additionalStats={additionalStats} />

          {/* Right Column - Professional Summary + Technical Skills (70%) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 space-y-8"
          >
            {/* Professional Summary */}
            <ProfessionalSummary about={about} />

            {/* Technical Skills */}
            <TechnicalSkills skills={about.technicalSkills} />
          </motion.div>
        </div>

        {/* Full Width Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Personal Details & Design Patterns - Two Column */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Personal Details */}
            <PersonalDetails personalDetails={personalDetails} />

            {/* Design Patterns */}
            <DesignPatterns patterns={about.designPatterns} />
          </div>

          {/* Version Control & Other Tools */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Version Control */}
            <VersionControl tools={about.versionControl} />

            {/* Interests */}
            <Interests interests={about.interests} />
          </div>

          {/* Developer Note */}
          <DeveloperNote />
        </motion.div>
        </div>
      </section>
    );
  };

  export default About;
