import React, { useContext } from 'react';
import { CarouselContext } from '../../contexts/CarouselContext';
import Carousel from './Carousel';

function CarouselIndex() {
  const { carouselImage } = useContext(CarouselContext);
  const SLIDE_COUNT = carouselImage.length;
  const slides = Array.from(Array(SLIDE_COUNT).keys());
  // console.log('slides: ', slides);
  return (
    <div>
      <Carousel slides={slides} />
    </div>
  );
}

export default CarouselIndex;
