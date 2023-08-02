import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import left from '../../../../public/images/ArrowLeft.svg';
import right from '../../../../public/images/ArrowRight.svg';
import { CardClass, SplitIntoSmallerLists } from '../../../../types';
import Carousel from './Carousel';

type CarouselProps = {
  cards: CardClass[];
};

export default function GridContainer({ cards }: CarouselProps) {
  let [startIndex, setStartIndex] = useState(0);
  let [endIndex, setEndIndex] = useState(4);
  const [currentSlide, setCurrentSlide] = useState(1);
  const smallerLists = SplitIntoSmallerLists(cards, 10);
  const eight = smallerLists.getItemsBetweenIndexes(startIndex, endIndex);
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
        className="grid grid-cols-8 gap-x-[900px] xl:gap-x-[1600px] lg:gap-x-[1200px] 2xl:gap-x-[2000px] no-scrollbar overflow-x-hidden overflow-y-hidden w-screen items-center h-full"
        ref={containerRef}
      >
        {eight.map((list, index) => (
          <div
            key={index}
            id={index.toString()}
            className="relative bottom-14 md:-left-[900px] xl:-left-[1600px] lg:-left-[1200px] 2xl:-left-[2000px] "
          >
            <Carousel cardList={list} />
          </div>
        ))}
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
      <div className="flex flex-row justify-center items-centerrounded-full px-1 text-white h-16">
        <div className=" flex flex-row justify-between gap-10 rounded-full h-[58px] ">
          <button
            className="font-outline-1 rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 w-12 text-xl drop-shadow-lg p-1"
            onClick={() => handleFirst()}
          >
            <div
              className={`bg-bgColor-Filters text-white flex text-center p-2 font-AclonicaR bg-opacity-80 rounded-lg items-center justify-center`}
            >
              1
            </div>
          </button>
          <button
            className="font-outline-1 rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 w-12 text-xl drop-shadow-lg p-1"
            onClick={() => handleSecond()}
          >
            <div
              className={`bg-bgColor-Filters text-white flex text-center p-2 font-AclonicaR bg-opacity-80 rounded-lg items-center justify-center`}
            >
              2
            </div>
          </button>
          <button
            className="font-outline-1 rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 w-12 text-xl drop-shadow-lg p-1"
            onClick={() => handleThird()}
          >
            <div
              className={`bg-bgColor-Filters text-white flex text-center p-2 font-AclonicaR bg-opacity-80 rounded-lg items-center justify-center`}
            >
              3
            </div>
          </button>
          <button
            className="font-outline-1 rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 w-12 text-xl drop-shadow-lg p-1"
            onClick={() => handleFourth()}
          >
            <div
              className={`bg-bgColor-Filters text-white flex text-center p-2 font-AclonicaR bg-opacity-80 rounded-lg items-center justify-center`}
            >
              4
            </div>
          </button>
          <button
            className="font-outline-1 rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 w-12 text-xl drop-shadow-lg p-1"
            onClick={() => handleFifth()}
          >
            <div
              className={`bg-bgColor-Filters text-white flex text-center p-2 font-AclonicaR bg-opacity-80 rounded-lg items-center justify-center`}
            >
              5
            </div>
          </button>
          <button
            className="font-outline-1 rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 w-12 text-xl drop-shadow-lg p-1"
            onClick={() => handleNextIndex()}
          >
            <div
              className={`bg-bgColor-Filters text-white flex text-center p-2 font-AclonicaR bg-opacity-80 rounded-lg items-center justify-center`}
            >
              ...
            </div>
          </button>
          <button className="font-outline-1 rounded-lg bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 mr-1 w-12 text-lg drop-shadow-lg p-1">
            <div
              className={`bg-bgColor-Filters text-white flex text-center p-2 font-AclonicaR bg-opacity-80 rounded-lg items-center justify-center`}
            >
              100
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
