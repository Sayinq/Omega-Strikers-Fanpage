import React, { useState, useEffect } from 'react';

import ahtenMap from '../assets/maps/AhtenCity.png';
import aimiMap from '../assets/maps/AimiApp.png';
import atlasMap from '../assets/maps/AtlasLab.png';
import demonMap from '../assets/maps/DemonDais.png';
import nightMap from '../assets/maps/NightMarket.png';
import oniMap from '../assets/maps/OniVillage.png';

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
      className="w-screen h-screen bg-cover"
      style={{
        backgroundImage: `url(${backgrounds[currentBackground]})`,
        backgroundPosition: 'center',
      }}
    >
      <div className="flex justify-center items-center w-screen- h-screen">
        <h2 id="map-header" className="font-black lg:text-9xl sm:text-6xl text-4xl uppercase text-white text-center pointer-events-none select-none">
            Variety of maps
            <br />
            To fire you up!
        </h2>
      </div>
    </section>
  );
};

export default MapSection;
