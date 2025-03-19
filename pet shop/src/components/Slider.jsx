import React, { useState, useEffect } from "react";
import "./Slider.css";
const images = ['../../public/slide3.webp' , '../../public/slide2.webp', '../../public/slide1.webp']
const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sliderContainer">
      <img className="sliderImage" src={images[index]} alt={`Slide ${index + 1}`} />
    </div>
  );
};

export default Slider;