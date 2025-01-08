'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
//icons
import { FaCaretLeft } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa";

const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  let touchStartX = 0;
  let touchEndX = 0;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStartX - touchEndX > 50) {
      handlePrev();
    }
    if (touchStartX - touchEndX < -50) {
      handleNext();
    }
  };

  return (
    <div
      className="transition-all duration-200 flex w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] overflow-hidden relative rounded-md"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {data.map((item, index) => (
        <Link
          key={index}
          className="flex flex-shrink-0 w-full h-full relative transition-transform duration-500 ease-in-out"
          href=""
          style={{ transform: `translateX(${currentIndex * 100}%)` }}
        >
          <Image
            src={item.url}
            className="w-full h-full object-cover object-center bg-gray-50"
            alt={item.title}
            quality={100}
            fill
            priority
          />
        </Link>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={handleNext}
        className="transition-all duration-200 hover:text-xl hover:left-1.5 hover:shadow-lg hover:bg-opacity-60 absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 text-white p-2 font-bold rounded-full z-10"
      >
        <FaCaretLeft />
      </button>
      <button
        onClick={handlePrev}
        className="transition-all duration-200 hover:text-xl hover:right-1.5 hover:shadow-lg hover:bg-opacity-60 absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 text-white font-bold p-2 rounded-full z-10"
      >
        <FaCaretRight />
      </button>
    </div>
  );
};

export default Carousel;