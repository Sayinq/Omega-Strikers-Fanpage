import React from 'react';
import Marquee from 'react-fast-marquee';
import '../index.css';
import firstScreenshot from '../assets/Screenshots/FirstScreenshot.webp';
import secondScreenshot from '../assets/Screenshots/SecondScreenshot.webp';
import thirdScreenshot from '../assets/Screenshots/ThirdScreenshot.webp';
import fourthScreenshot from '../assets/Screenshots/FourthScreenshot.webp';
import fifthScreenshot from '../assets/Screenshots/FifthScreenshot.webp';
import sixthScreenshot from '../assets/Screenshots/SixthScreenshot.webp';
import seventhScreenshot from '../assets/Screenshots/SeventhScreenshot.webp';
import eighthScreenshot from '../assets/Screenshots/EighthScreenshot.webp';
import ninethScreenshot from '../assets/Screenshots/NinethScreenshot.webp';

const images = [
  firstScreenshot,
  secondScreenshot,
  thirdScreenshot,
  fourthScreenshot,
  fifthScreenshot,
  sixthScreenshot,
  seventhScreenshot,
  eighthScreenshot,
  ninethScreenshot,
];

export const ImageCarousel = () => {
  return (
    <div className="infinite-carousel">
      <Marquee gradient={false} speed={50} autoFill={true}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} className="min-h-[250px]"/>
        ))}
      </Marquee>
    </div>
  );
};