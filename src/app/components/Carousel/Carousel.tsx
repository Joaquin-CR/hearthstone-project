import { useState } from 'react';
// import Card from '../Card/Card';
import Image from 'next/image';
import ArrowLeft from '../../../../public/images/ArrowLeft.svg';
import ArrowRight from '../../../../public/images/ArrowRight.svg';

export interface ICarousel {
  items: any[];
}

const Carrusel: React.FC<ICarousel> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="relative w-full">
      {/* PUNTOS ENCIMA DEL CAROUSEL */}
      <div className="flex space-x-2 items-center justify-center mb-2">
        {items.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-gold' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
      {/* BODY CAROUSEL */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {items.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="p-4 rounded-lg shadow-md">{item}</div>
            </div>
          ))}
        </div>
      </div>
      {/* CHECAR SI SON NECESARIOS LOS NUMEROS EN LA PARTE INFERIOR */}
      <div className="flex space-x-2 items-center justify-center mb-2">
        {items.map((_, index) => (
          <>
            <button
              className="bg-gradient-to-b from-gold via-gold_2 to-gold_3 rounded-xl p-1"
              //   onClick={openDropdown}
            >
              <div
                className={`bg-bgColor-Filters text-white flex text-center py-4 px-6  font-AclonicaR items-center bg-opacity-80 rounded-xl`}
              >
                <p className={`pl-2 mr-2`}>{index + 1}</p>
              </div>
            </button>
          </>
        ))}
      </div>
      {/* BUTTONS */}
      <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`${
            currentIndex === 0 ? 'cursor-not-allowed' : 'cursor-pointer'
          }`}
        >
          <Image src={ArrowLeft} alt={''}></Image>
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === items.length - 1}
          className={` ${
            currentIndex === items.length - 1
              ? 'cursor-not-allowed'
              : 'cursor-pointer'
          }`}
        >
          <Image src={ArrowRight} alt={''}></Image>
        </button>
      </div>
    </div>
  );
};

export default Carrusel;
