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
      <div className="mb-3">
        <button className="absolute left-0" onClick={() => handleSlideLeft()}>
          <Image src={left} alt="left"></Image>
        </button>
        <button className="absolute right-0" onClick={() => handleSlideRight()}>
          <Image src={right} alt="right"></Image>
        </button>
        <Card
          id={cardList[currentIndex].cardid}
          pic={cardList[currentIndex].img ? cardList[currentIndex].img : null}
          name={cardList[currentIndex].cardname}
          type={cardList[currentIndex].type}
          rarity={cardList[currentIndex].rarity}
          text={cardList[currentIndex].text}
          race={cardList[currentIndex].race}
          playerClass={cardList[currentIndex].playerclass}
          attack={cardList[currentIndex].attack}
          health={cardList[currentIndex].health}
          mechcanics={cardList[currentIndex].mechanics}
          cardSet={cardList[currentIndex].cardset}
          fav={cardList[currentIndex].fav ? true : false}
          like={function (like: boolean): void {
            console.log(like);
          }}
        ></Card>
      </div>
    </>
  );
}
