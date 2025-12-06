import React from 'react';
import contactData from '../data/details.json';

const Footer = () => {
  const contact = contactData.contact || {};
  const social = contact.socialMedia || {};

  const navLinks = [
    { label: 'About', href: '#bio' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Projects', href: '#projects' },
    { label: 'Blog', href: '#blogs' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="mt-16 bg-black/60 border-t border-white/5 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          {/* Column layout for desktop */}
          <div className="hidden md:flex md:w-1/3 flex-col gap-4">
            <h4 className="text-white text-lg font-semibold">Contact</h4>
            <p className="text-gray-300">{contact.myAddress?.city || 'Ahmedabad'}</p>
            <a className="text-cyan-400 hover:underline" href={`mailto:${contact.email}`}>{contact.email}</a>
            <a className="text-gray-300" href={`tel:${contact.phone}`}>{contact.phone}</a>
          </div>

          <div className="hidden md:flex md:w-1/3 flex-col gap-4 items-start">
            <h4 className="text-white text-lg font-semibold">Follow Me</h4>
            <div className="flex gap-3 mt-1">
              {social.linkedin && (
                <a href={social.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/5 hover:bg-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0zM7.5 8h4.8v2.2h.1c.67-1.2 2.3-2.5 4.7-2.5 5 0 6 3.3 6 7.6V24h-5V15.6c0-2.0 0-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.4V24h-5V8z"/></svg>
                </a>
              )}
              {social.github && (
                <a href={social.github} target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/5 hover:bg-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.9 5.3.9 11.6c0 4.6 2.9 8.4 6.9 9.8.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.7.7 2.1 1.2.1-.9.4-1.5.7-1.9-2.2-.2-4.5-1.1-4.5-5 0-1.1.4-2 1.1-2.8-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 2.9 1.1.8-.2 1.6-.3 2.4-.3s1.6.1 2.4.3c2-1.4 2.9-1.1 2.9-1.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.7 1.1 2.8 0 3.9-2.3 4.8-4.5 5 .4.3.7.9.7 1.8v2.6c0 .3.2.6.7.5 4-1.4 6.9-5.2 6.9-9.8C23.1 5.3 18.3.5 12 .5z"/></svg>
                </a>
              )}
              {social.instagram && (
                <a href={social.instagram} target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/5 hover:bg-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zM12 7a5 5 0 100 10 5 5 0 000-10zm6.5-.5a1 1 0 11-.001 2.001A1 1 0 0118.5 6.5z"/></svg>
                </a>
              )}
            </div>
          </div>

          <div className="hidden md:flex md:w-1/3 flex-col gap-4 items-start">
            <h4 className="text-white text-lg font-semibold">Navigate</h4>
            <div className="flex flex-col">
              {navLinks.map((n) => (
                <a key={n.href} href={n.href} onClick={(e) => handleNavClick(e, n.href)} className="text-gray-300 hover:text-white py-1">{n.label}</a>
              ))}
            </div>
          </div>

          {/* Mobile simplified view: contact + social */}
          <div className="flex md:hidden w-full justify-between items-start">
            <div className="flex flex-col">
              <p className="text-white font-medium">Contact</p>
              <a className="text-cyan-400 text-sm" href={`mailto:${contact.email}`}>{contact.email}</a>
              <a className="text-gray-300 text-sm" href={`tel:${contact.phone}`}>{contact.phone}</a>
            </div>
            <div className="flex gap-3 items-center">
              {social.linkedin && (
                <a href={social.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0zM7.5 8h4.8v2.2h.1c.67-1.2 2.3-2.5 4.7-2.5 5 0 6 3.3 6 7.6V24h-5V15.6c0-2.0 0-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.4V24h-5V8z"/></svg>
                </a>
              )}
              {social.github && (
                <a href={social.github} target="_blank" rel="noreferrer" className="p-2 rounded-md bg-white/5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.7.5.9 5.3.9 11.6c0 4.6 2.9 8.4 6.9 9.8.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.7.7 2.1 1.2.1-.9.4-1.5.7-1.9-2.2-.2-4.5-1.1-4.5-5 0-1.1.4-2 1.1-2.8-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 2.9 1.1.8-.2 1.6-.3 2.4-.3s1.6.1 2.4.3c2-1.4 2.9-1.1 2.9-1.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.7 1.1 2.8 0 3.9-2.3 4.8-4.5 5 .4.3.7.9.7 1.8v2.6c0 .3.2.6.7.5 4-1.4 6.9-5.2 6.9-9.8C23.1 5.3 18.3.5 12 .5z"/></svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-400">© {new Date().getFullYear()} Sarfaraj Khatri. All rights reserved.</div>
      </div>
    </footer>
)}

export default Footer;
