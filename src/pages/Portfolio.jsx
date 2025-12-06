import React from 'react';
import SolarSystemBackground from '../components/SolarSystemBackground';
import Navigation from '../components/Navigation';
import About from '../components/about/About';
import Timeline from '../components/timeline/Timeline';
import Projects from '../components/projects/Projects';
import Blogs from '../components/blogs/Blogs';
import ContactMe from '../components/contactMe/ContactMe';

const Portfolio = () => {
  return (
    <>
  <SolarSystemBackground />
  <Navigation />
  <About />
  <Timeline />
  <Projects />
  <Blogs />
  <ContactMe />
    </>
  );
};

export default Portfolio;
