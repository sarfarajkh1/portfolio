import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const ProfileCard = ({ about, stats, additionalStats }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="lg:col-span-4"
    >
      <div className="relative group">
        <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
        <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
          <img
            src={about.profileImage}
            alt={about.fullName}
            className="w-full rounded-xl object-cover aspect-square"
          />
          
          {/* Stats Overlay */}
          <div className="mt-6 space-y-3">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5"
              >
                <span className="text-gray-400 text-sm">{stat.label}</span>
                <span className="text-white font-semibold">
                  {stat.value}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Additional Stats */}
          {additionalStats && additionalStats.length > 0 && (
            <div className="mt-6 pt-6 border-t border-white/10">
              <h4 className="text-sm font-semibold text-cyan-400 mb-3">Career Highlights</h4>
              <div className="grid grid-cols-2 gap-2">
                {additionalStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                    className="flex items-center justify-between p-2 bg-white/5 rounded-lg border border-white/5"
                  >
                    <span className="text-gray-400 text-xs">{stat.label}</span>
                    <span className="text-white font-semibold text-xs">
                      {stat.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
