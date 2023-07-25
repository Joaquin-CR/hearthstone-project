import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import left from '../../../../public/images/ArrowLeft.svg';
import right from '../../../../public/images/ArrowRight.svg';
import { CardClass, SplitIntoSmallerLists } from '../../../../types';

type CarouselProps = {
  cards: CardClass[];
};

export default function GridContainer({ cards }: CarouselProps) {
  let [startIndex, setStartIndex] = useState(0);
  let [endIndex, setEndIndex] = useState(4);
  const [currentSlide, setCurrentSlide] = useState(1);
  const smallerLists = SplitIntoSmallerLists(cards, 10);
  console.log(smallerLists.getItemsBetweenIndexes(startIndex, endIndex));
  // const eight = smallerLists.getItemsBetweenIndexes(startIndex, endIndex);
  // const last = smallerLists.getTail();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let e = document.getElementById(currentSlide.toString());
    e?.scrollIntoView({ behavior: 'smooth', inline: 'start' });
  }, [currentSlide]);

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
    if (currentSlide === 5) {
      handleNextIndex();
      setCurrentSlide(1);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }
  function handleSlideLeft() {
    if (currentSlide === 1) {
      handlePreviousIndex();
      setCurrentSlide(5);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  }
  function handleFirst() {
    setCurrentSlide(1);
  }
  function handleSecond() {
    setCurrentSlide(2);
  }
  function handleThird() {
    setCurrentSlide(3);
  }
  function handleFourth() {
    setCurrentSlide(4);
  }
  function handleFifth() {
    setCurrentSlide(5);
  }
  return (
    <>
      <div
        className="grid grid-cols-8 gap-x-[900px] xl:gap-x-[1600px] lg:gap-x-[1200px] 2xl:gap-x-[2000px] no-scrollbar overflow-x-scroll overflow-y-hidden w-screen items-center"
        ref={containerRef}
      >
        {/* {eight.map((list, index) => (
          <div
            key={index}
            id={index.toString()}
            className="relative bottom-14 md:-left-[900px] xl:-left-[1600px] lg:-left-[1200px] 2xl:-left-[2000px] "
          >
            <Carousel cardList={list} />
          </div>
        ))} */}
        <div className="relative bottom-14" id="6">
          {/* <Carousel cardList={last ? last : []} /> */}
        </div>
        <button className="absolute left-0" onClick={() => handleSlideLeft()}>
          <Image src={left} alt="left"></Image>
        </button>
        <button
          className="absolute right-0 "
          onClick={() => handleSlideRight()}
        >
          <Image src={right} alt="right"></Image>
        </button>
      </div>
      <div className="flex flex-row  justify-center items-centerrounded-full px-1 text-white h-16">
        <div className=" flex flex-row justify-between gap-10 rounded-full h-[58px] ">
          <button
            className="font-outline-1 rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 w-12 text-xl drop-shadow-lg"
            onClick={() => handleFirst()}
          >
            1
          </button>
          <button
            className="font-outline-1 rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 w-12 text-xl drop-shadow-lg"
            onClick={() => handleSecond()}
          >
            2
          </button>
          <button
            className="font-outline-1 rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 w-12 text-xl drop-shadow-lg"
            onClick={() => handleThird()}
          >
            3
          </button>
          <button
            className="font-outline-1 rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 w-12 text-xl drop-shadow-lg"
            onClick={() => handleFourth()}
          >
            4
          </button>
          <button
            className="font-outline-1 rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 w-12 text-xl drop-shadow-lg"
            onClick={() => handleFifth()}
          >
            5
          </button>
          <button
            className="font-outline-1 rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 w-12 text-xl drop-shadow-lg"
            onClick={() => handleNextIndex()}
          >
            ...
          </button>
          <button className="font-outline-1 rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 w-12 text-xl drop-shadow-lg">
            100
          </button>
        </div>
      </div>
    </>
  );
}