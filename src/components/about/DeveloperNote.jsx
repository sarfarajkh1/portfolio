import React from 'react';

const DeveloperNote = () => {
  return (
    <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6">
      <div className="flex items-start gap-3">
        <div>
          <h4 className="text-blue-300 font-semibold mb-2">Developer Note</h4>
          <p className="text-blue-200 text-sm leading-relaxed">
            All data is dynamically loaded from <code className="px-2 py-1 bg-white/10 rounded text-cyan-400">src/data/details.json</code>. 
            Update the <code className="px-2 py-1 bg-white/10 rounded text-cyan-400">about</code> object with your actual information, 
            including skills, experience, qualifications, and personal details. Replace placeholder values as needed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeveloperNote;
