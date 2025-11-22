import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import contactDetails from '../../data/details.json';
import ContactForm from './ContactForm';
import FindMe from './FindMe';
import FollowMe from './FollowMe';

const ContactMe = () => {
  const { contact } = contactDetails;

  const contactInfo = [
    {
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: 'Phone',
      value: contact.phone,
      href: `tel:${contact.phone}`,
    },
  ];

  return (
    <section id="contact" className="relative min-h-screen py-20 px-4 sm:px-8 md:px-16 lg:px-24">
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
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-6 mb-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="shrink-0 size-12 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm mb-1">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-white hover:text-cyan-400 transition-colors duration-300 break-all"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white break-all">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Find Me Component */}
              <FindMe />
            </div>

            {/* Social Media Links */}
            <FollowMe />
          </motion.div>

          {/* Right Column - Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
