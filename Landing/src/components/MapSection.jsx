import React, { useState, useEffect } from 'react';

import ahtenMap from '../assets/maps/AhtenCity.webp';
import aimiMap from '../assets/maps/AimiApp.webp';
import atlasMap from '../assets/maps/AtlasLab.webp';
import demonMap from '../assets/maps/DemonDais.webp';
import nightMap from '../assets/maps/NightMarket.webp';
import oniMap from '../assets/maps/OniVillage.webp';

const MapSection = () => {
  const backgrounds = [
    ahtenMap,
    aimiMap,
    demonMap,
    nightMap,
    atlasMap,
    oniMap,
  ];

  const [currentBackground, setCurrentBackground] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((currentBackground + 1) % backgrounds.length);
    }, 5000); // Change background every 5 seconds (adjust as needed)

    return () => {
      clearInterval(interval); // Clean up the interval when the component unmounts
    };
  }, [currentBackground]);

  return (
    <section
      id="maps"
      className="relative w-screen h-screen bg-cover bg-[#d2d2d2] overflow-hidden"
      style={{
        backgroundImage: `url(${backgrounds[currentBackground]})`,
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content */}
      <div className="relative flex justify-center items-center w-full h-full z-[20]">
        <h2
          id="map-header"
          className="font-black lg:text-9xl sm:text-6xl text-4xl uppercase text-white text-center pointer-events-none select-none"
        >
          Variety of maps
          <br />
          To fire you up!
        </h2>
      </div>
    </section>
  );
};

export default MapSection;
