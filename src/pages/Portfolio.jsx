import React from 'react';
import SolarSystemBackground from '../components/SolarSystemBackground';
import Navigation from '../components/Navigation';
import About from '../components/about/About';
import Timeline from '../components/timeline/Timeline';
import Projects from '../components/projects/Projects';
import Services from '../components/services/Services';
import Blogs from '../components/blogs/Blogs';
import ContactMe from '../components/contactMe/ContactMe';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const Portfolio = () => {
  return (
    <>
  <SolarSystemBackground />
  <Navigation />
  <About />
  <Timeline />
  <Projects />
  <Services />
  <Blogs />
  <ContactMe />
  <Footer />
  <BackToTop />
    </>
  );
};

export default Portfolio;
