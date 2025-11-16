import React from 'react';

const Navigation = () => {
  const menuItems = ['Bio', 'Projects', 'Blog', 'Contact Me'];

  const handleMenuClick = (item) => {
    // Scroll to section logic can be added here
    console.log(`Clicked: ${item}`);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/5">
      <div className="w-full px-16 py-4">
        <div className="flex flex-row items-center justify-end">
          {/* Menu Items */}
          <ul className="flex flex-row gap-[48px] items-center">
            {menuItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => handleMenuClick(item)}
                  className="text-white/90 hover:text-white transition-all duration-300 text-lg font-medium whitespace-nowrap relative group"
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
