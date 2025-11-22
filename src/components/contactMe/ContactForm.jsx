import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../../config/emailConfig';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: false,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = true;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = true;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = true;
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = true;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = true;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setStatus({
        type: 'error',
        message: 'Please fill in all required fields correctly.',
      });
      return;
    }
    
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Sarfaraj', // Your name
      };
      
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams,
        emailConfig.publicKey
      );
      
      setStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.',
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10"
    >
      <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-300 ${
              errors.name
                ? 'border-red-500 focus:ring-red-400 focus:border-red-500'
                : 'border-white/10 focus:ring-cyan-400 focus:border-transparent'
            }`}
            placeholder="John Doe"
          />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Your Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-300 ${
              errors.email
                ? 'border-red-500 focus:ring-red-400 focus:border-red-500'
                : 'border-white/10 focus:ring-cyan-400 focus:border-transparent'
            }`}
            placeholder="john@example.com"
          />
        </div>

        {/* Subject Input */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-300 ${
              errors.subject
                ? 'border-red-500 focus:ring-red-400 focus:border-red-500'
                : 'border-white/10 focus:ring-cyan-400 focus:border-transparent'
            }`}
            placeholder="Project Inquiry"
          />
        </div>

        {/* Message Textarea */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
              errors.message
                ? 'border-red-500 focus:ring-red-400 focus:border-red-500'
                : 'border-white/10 focus:ring-cyan-400 focus:border-transparent'
            }`}
            placeholder="Tell me about your project..."
          />
        </div>

        {/* Status Message */}
        {status.message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-lg ${
              status.type === 'success'
                ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                : 'bg-red-500/10 border border-red-500/20 text-red-400'
            }`}
          >
            {status.message}
          </motion.div>
        )}

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 ${
            isSubmitting
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shadow-lg shadow-cyan-500/20'
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin size-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
