import React, { useState, useEffect } from 'react';

const MapSection = () => {
  const backgrounds = [
    './src/assets/maps/AhtenCity.png',
    './src/assets/maps/AimiApp.png',
    './src/assets/maps/AtlasLab.png',
    './src/assets/maps/DemonDais.png',
    './src/assets/maps/NightMarket.png',
    './src/assets/maps/OniVillage.png',
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
