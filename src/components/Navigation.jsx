import React, { useState, useEffect } from 'react';
import profileImg from '../assets/profile.jpeg';

const Navigation = () => {
  const menuItems = ['About', 'Timeline', 'Projects', 'Blogs', 'Contact Me'];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const roles = ['an Engineer', 'a Programmer', 'a Teacher', 'a Freelancer', 'a Blogger'];
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        // Typing forward
        setDisplayText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        // Deleting backward
        setDisplayText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && charIndex === 0) {
        // Move to next role
        setIsDeleting(false);
        setCurrentRoleIndex((currentRoleIndex + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentRoleIndex]);

  const handleMenuClick = (item) => {
    setMobileMenuOpen(false);
    
    // Convert menu item to section ID
    const sectionId = item.toLowerCase().replace(/\s+/g, '-');
    
    // Special handling for some menu labels -> section IDs
    // "About" should scroll to the '#bio' section
    let targetId = sectionId;
    if (item === 'Contact Me') targetId = 'contact';
    if (item === 'About') targetId = 'bio';
    if (item === 'Timeline') targetId = 'timeline';
    
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/5">
        <div className="w-full px-4 py-3 sm:px-8 md:px-8">
          <div className="flex flex-row items-center justify-between">
            {/* Animated Text on Left */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Professional Avatar with Photo */}
              <div className="relative size-10 sm:size-10 rounded-full bg-linear-to-br from-cyan-500 via-blue-500 to-purple-600 p-0.5 shadow-lg shadow-cyan-500/20 cursor-pointer">
                <img 
                  src={profileImg} 
                  alt="Sarfaraj Khatri" 
                  title="Sarfaraj Khatri"
                  className="size-full rounded-full object-cover scale-125"
                />
              </div>
              
              <span className="text-white/90 text-base sm:text-base md:text-lg font-medium">
                I am <span className="text-cyan-400 font-semibold">{displayText}</span>
                <span className="text-cyan-400 animate-pulse">|</span>
              </span>
            </div>
            
            {/* Desktop Menu Items */}
            <ul className="hidden md:flex flex-row gap-12 items-center">
              {menuItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleMenuClick(item)}
                    className="text-white/90 hover:text-white transition-all duration-300 text-lg font-medium whitespace-nowrap relative group cursor-pointer"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                  </button>
                </li>
              ))}
            </ul>

            {/* Hamburger Menu Button - Mobile Only */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex flex-col gap-1.5 cursor-pointer p-2"
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-white/90 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white/90 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white/90 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed top-[57px] left-0 right-0 z-40 bg-black/95 backdrop-blur-md border-b border-white/5 md:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col py-4">
          {menuItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => handleMenuClick(item)}
                className="w-full text-left px-6 py-3 text-white/90 hover:text-white hover:bg-white/5 transition-all duration-300 text-base font-medium"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navigation;
