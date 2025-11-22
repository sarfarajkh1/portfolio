import React, { useState, useEffect } from 'react';
import profileImg from '../assets/profile.jpeg';

const Navigation = () => {
  const menuItems = ['Bio', 'Projects', 'Blog', 'Contact Me'];
  
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
    // Scroll to section logic can be added here
    console.log(`Clicked: ${item}`);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/5">
      <div className="w-full px-6 py-3">
        <div className="flex flex-row items-center justify-between">
          {/* Animated Text on Left */}
          <div className="flex items-center gap-4">
            {/* Professional Avatar with Photo */}
            <div className="relative size-10 rounded-full bg-linear-to-br from-cyan-500 via-blue-500 to-purple-600 p-0.5 shadow-lg shadow-cyan-500/20 cursor-pointer">
              <img 
                src={profileImg} 
                alt="Sarfaraj Khatri" 
                title="Sarfaraj Khatri"
                className="size-full rounded-full object-cover scale-125"
              />
            </div>
            
            <span className="text-white/90 text-lg font-medium">
              I am <span className="text-cyan-400 font-semibold">{displayText}</span>
              <span className="text-cyan-400 animate-pulse">|</span>
            </span>
          </div>
          
          {/* Menu Items */}
          <ul className="flex flex-row gap-12 items-center">
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
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
