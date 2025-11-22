import React from 'react';
import { motion } from 'framer-motion';

const PlanetCard = ({ celestialBody, isActive }) => {
  const { name, type, image, description, facts, moons, color } = celestialBody;

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center px-4 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Planet Image */}
        <motion.div
          className="relative"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <motion.div
            className="relative w-full aspect-square rounded-full overflow-hidden shadow-2xl"
            style={{
              boxShadow: `0 0 100px 20px ${color}40`,
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.05, 1],
            }}
            transition={{
              rotate: { duration: 60, repeat: Infinity, ease: 'linear' },
              scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div
              className="absolute inset-0 bg-linear-to-br from-transparent to-black opacity-30"
            />
          </motion.div>

          {/* Orbiting ring effect */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border-2 rounded-full opacity-30"
            style={{ borderColor: color }}
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>

        {/* Planet Info */}
        <motion.div
          className="space-y-6"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div>
            <motion.div
              className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-3"
              style={{
                backgroundColor: `${color}20`,
                color: color,
                border: `1px solid ${color}`,
              }}
            >
              {type}
            </motion.div>
            <h2 className="text-6xl font-bold text-white mb-4" style={{ color }}>
              {name}
            </h2>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed">
            {description}
          </p>

          {/* Facts */}
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-white">Key Facts</h3>
            <ul className="space-y-2">
              {facts.map((fact, i) => (
                <motion.li
                  key={i}
                  className="flex items-start space-x-3 text-gray-300"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                >
                  <span
                    className="size-2 rounded-full mt-2 shrink-0"
                    style={{ backgroundColor: color }}
                  />
                  <span>{fact}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Moons */}
          {moons && moons.length > 0 && (
            <motion.div
              className="pt-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                Moons ({moons.length})
              </h3>
              <div className="flex flex-wrap gap-2">
                {moons.map((moon, i) => (
                  <motion.span
                    key={i}
                    className="px-3 py-1 rounded-full text-sm bg-gray-800 text-gray-300 border border-gray-700"
                    whileHover={{ scale: 1.1, backgroundColor: `${color}20` }}
                    transition={{ duration: 0.2 }}
                  >
                    {moon}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Scroll indicator */}
          <motion.div
            className="flex items-center space-x-2 text-gray-400 pt-8"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm">Scroll to explore</span>
            <svg
              className="size-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PlanetCard;
