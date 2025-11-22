import React, { useState } from 'react';
import contactDetails from '../../data/details.json';

const FindMe = () => {
  const { contact } = contactDetails;
  const [mapLocation, setMapLocation] = useState(null);

  const handleFindMe = () => {
    setMapLocation(contact.myAddress.city);
  };

  return (
    <>
      {/* Find Me Button */}
      <button
        onClick={handleFindMe}
        className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-lg text-cyan-400 hover:text-cyan-300 transition-all duration-300 font-medium mb-4"
      >
        <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        Find me on map
      </button>

      {/* Google Map */}
      <div className="relative w-full h-56 rounded-lg overflow-hidden border border-white/10">
        <iframe
          key={mapLocation || 'default'}
          src={mapLocation ? `https://www.google.com/maps/embed/v1/place?key=AIzaSyAVf8mXCgnb8m2-EWBJzho7z2D_0vi2EKQ&q=${encodeURIComponent(mapLocation)}&zoom=12` : `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30773911.544881165!2d61.0245165!3d19.99576685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
          title="Location Map"
        />
      </div>
    </>
  );
};

export default FindMe;
