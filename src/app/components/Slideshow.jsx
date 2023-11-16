import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import president from "../board/images/onye.jpeg"
import treasurer from "../board/images/xidan.jpeg"
import vice_president from "../board/images/abhinav.jpeg"
import manager from "../board/images/justin.jpeg"
import secretary from "../board/images/aina.jpeg"
import aboutusImage from "./aboutusImage.jpeg"
import s1 from "./images/s1.jpeg"
import s2 from "./images/s2.jpeg"
import s3 from "./images/s3.jpeg"
import s4 from "./images/s4.jpeg"
import s5 from "./images/aboutus.jpeg"
import s6 from "./images/s6.jpeg"
import s7 from "./images/s7.jpeg"


const images = [
  s1,
  s4,
  s7,
  s2,
  s5,
  s3,
  s6,
  aboutusImage
  // ...add as many images as you like
];

function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);

  useEffect(() => {
    const transitionTime = 1000; // time in ms
    const slideDuration = 3000; // time in ms

    const slide = () => {
      setCurrentIndex(nextIndex);
      setNextIndex((nextIndex + 1) % images.length);
    };

    const timer = setTimeout(slide, slideDuration);

    return () => clearTimeout(timer);
  }, [nextIndex]);

  return (

    <div>
    {/* larger devices */}
    <div className="slideshow-container lg:block md:block hidden ">
      <div className="slide" key={currentIndex}>
        <Image
          src={images[currentIndex]}
          alt="Slideshow image"
          
          priority={true}
        />
      </div>
      <div className="slide next rounded-md" key={nextIndex}>
        <Image
          src={images[nextIndex]}
          alt="Slideshow image"
          width={500}
          height={500}
          priority={true}
          className='rounded-md'
        />
      </div>
    </div>

    {/* smaller devices */}
    <div className="slideshow-container-small lg:hidden md:hidden block">
      <div className="slide" key={currentIndex}>
        <Image
          src={images[currentIndex]}
          alt="Slideshow image"
          
          priority={true}
        />
      </div>
      <div className="slide next" key={nextIndex}>
        <Image
          src={images[nextIndex]}
          alt="Slideshow image"
          width={500}
          height={500}
          priority={true}
        />
      </div>
    </div>
    </div>
  );
}

export default Slideshow;
