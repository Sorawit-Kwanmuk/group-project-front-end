import React from 'react';
import Carousel from './Carousel';

function CarouselIndex() {
  const SLIDE_COUNT = 5;
  const slides = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <div>
      <Carousel slides={slides} />
    </div>
  );
}

export default CarouselIndex;
