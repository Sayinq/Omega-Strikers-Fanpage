import React from 'react';
import Marquee from 'react-fast-marquee';
import '../index.css';
import firstScreenshot from '../assets/Screenshots/FirstScreenshot.jpg';
import secondScreenshot from '../assets/Screenshots/SecondScreenshot.jpg';
import thirdScreenshot from '../assets/Screenshots/ThirdScreenshot.jpg';
import fourthScreenshot from '../assets/Screenshots/FourthScreenshot.jpg';
import fifthScreenshot from '../assets/Screenshots/FifthScreenshot.jpg';
import sixthScreenshot from '../assets/Screenshots/SixthScreenshot.jpg';
import seventhScreenshot from '../assets/Screenshots/SeventhScreenshot.jpg';
import eighthScreenshot from '../assets/Screenshots/EighthScreenshot.jpg';
import ninethScreenshot from '../assets/Screenshots/NinethScreenshot.jpg';

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
    <div className="infinite-carousel h-auto">
      <Marquee gradient={false} speed={50} autoFill={true}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`}/>
        ))}
      </Marquee>
    </div>
  );
};