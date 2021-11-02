import { createContext, useState, useEffect } from 'react';
import React from 'react';
import axios from '../config/axios';

const CarouselContext = createContext();

function CarouselContextProvider({ children }) {
  const [carouselImage, setCarouselImage] = useState([]);
  useEffect(() => {
    try {
      const fetchDataBanner = async () => {
        const response = await axios.get('/banner');
        // console.log(response.data);
        setCarouselImage(response.data.result);
      };
      fetchDataBanner();
    } catch (error) {}
  }, []);
  return (
    <CarouselContext.Provider value={{ carouselImage }}>
      {children}
    </CarouselContext.Provider>
  );
}

export { CarouselContext, CarouselContextProvider };
