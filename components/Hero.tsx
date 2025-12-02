import React from 'react';

export const Hero = () => {
  return (
    <div className="w-full relative bg-white">
      {/* Container - Image drives the height */}
      <div className="relative w-full">
        
        {/* The requested image - Added min-height to ensure text fits on mobile */}
        <img
          src="/assets/images/kars-reserve-banner.webp"
          alt="Kars Reserve - Gerçek Köy Lezzetleri"
          className="w-full h-auto object-cover min-h-[500px] md:min-h-0" 
        />

        
      </div>
    </div>
  );
};