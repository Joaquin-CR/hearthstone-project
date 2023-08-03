import Image from 'next/image';
import { useState } from 'react';
import left from '../../../../public/images/ArrowLeft.svg';
import right from '../../../../public/images/ArrowRight.svg';
import { CardClass } from '../../../../types';
import Card from '../Card/Card';

type CarouselProps = {
  cardList: CardClass[];
};

export default function MobileCorusel({ cardList }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  let [startIndex, setStartIndex] = useState(0);
  let [endIndex, setEndIndex] = useState(4);

  function handleNextIndex() {
    startIndex = startIndex + 5;
    endIndex = endIndex + 5;
    setStartIndex(startIndex);
    setEndIndex(endIndex);
  }
  function handlePreviousIndex() {
    startIndex = startIndex - 5;
    endIndex = endIndex - 5;
    setStartIndex(startIndex);
    setEndIndex(endIndex);
  }

  function handleSlideRight() {
    if (currentIndex === cardList.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }
  function handleSlideLeft() {
    if (currentIndex === 0) {
      setCurrentIndex(cardList.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  return (
    <>
      <div className="">
        <button className="absolute left-0" onClick={() => handleSlideLeft()}>
          <Image src={left} alt="left"></Image>
        </button>
        <button className="absolute right-0" onClick={() => handleSlideRight()}>
          <Image src={right} alt="right"></Image>
        </button>
        <Card
          pic={cardList[currentIndex].img}
          name={cardList[currentIndex].cardName}
          type={cardList[currentIndex].type}
          rarity={cardList[currentIndex].rarity}
          text={cardList[currentIndex].text}
          like={function (like: boolean): void {
            console.log(like);
          }}
        ></Card>
      </div>
    </>
  );
}
