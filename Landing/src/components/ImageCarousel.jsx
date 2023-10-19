import React from 'react';
import Marquee from 'react-fast-marquee';
import '../index.css';

const images = [
  'https://cdn.midjourney.com/8ef1e3ab-8046-4770-8bc6-d399d5224682/0_0_384_N.webp',
  'https://cdn.midjourney.com/ef274612-8bb6-4fc3-96c2-c4cc18a0b23e/0_0_384_N.webp',
  'https://cdn.midjourney.com/ead86688-4486-4397-88e5-2d3db6ebb070/0_0.png',
  'https://cdn.midjourney.com/c760a5d6-2b81-4a33-bfa7-ac9720231f15/0_2_384_N.webp',
  'https://cdn.midjourney.com/70f3e0f2-a079-45ef-a168-474b0d8762dc/0_3_384_N.webp',
  'https://cdn.midjourney.com/ed4abd0a-b76b-4a3a-b52e-56edf5d3ab2a/0_1.png',
  'https://cdn.midjourney.com/db651aef-0408-4928-842c-0f1ecd1787b5/0_3_384_N.webp',
];

const ImageCarousel = () => {
  return (
    <div className="infinite-carousel">
      <Marquee gradient={false} speed={50} autoFill={true}> {/* Adjust the speed as needed */}
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} />
        ))}
      </Marquee>
    </div>
  );
};

export default ImageCarousel;