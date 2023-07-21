import { useState } from 'react';
// import Card from '../Card/Card';
import Image from 'next/image';
import ArrowLeft from '../../../../public/images/ArrowLeft.svg';
import ArrowRight from '../../../../public/images/ArrowRight.svg';
import Card from '../Card/Card';

export interface ICarousel {
  items: any[];
}

const Carrusel: React.FC<ICarousel> = ({ items }) => {
  console.log(items);
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
      <div className="relative overflow-hidden mx-40 z-10 mb-7">
        <div
          className="transition-transform duration-300 ease-in-out grid grid-cols-5"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {items.map(
            (item) =>
              item.carrouselview.map((card: any) => {
                <div key={card.cardId}>
                  <Card
                    name={card.name}
                    img={card.img}
                    cardSet={card.cardSet}
                    type={card.type}
                    rarity={card.rarity}
                    favorite={true}
                  ></Card>
                </div>;
              })

            // <div key={index} className="w-full flex-shrink-0">
            //     <div className="p-4 rounded-lg shadow-md">{item}</div>
            //   </div>
          )}
        </div>
      </div>
      {/* BUTTONS */}
      <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full z-0">
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
      {/* CHECAR SI SON NECESARIOS LOS NUMEROS EN LA PARTE INFERIOR */}
      <div className="flex space-x-2 items-center justify-center mb-2 z-20">
        {items.map((_, index) => (
          <>
            <button
              className={`${
                index === currentIndex
                  ? 'bg-gradient-to-b from-gold via-gold_2 to-gold_3'
                  : 'bg-transparent'
              } rounded-xl p-1`}
              onClick={() => {
                setCurrentIndex(index);
              }}
            >
              <div
                className={`${
                  index === currentIndex
                    ? 'bg-bgColor-Filters'
                    : 'bg-transparent'
                } text-white flex text-center p-2  font-AclonicaR items-center bg-opacity-80 rounded-xl`}
              >
                <p className={`pl-2 mr-2`}>{index + 1}</p>
              </div>
            </button>
          </>
        ))}
      </div>
    </div>
  );
};

export default Carrusel;
