import Image from 'next/image';
import { useEffect, useState } from 'react';
import left from '../../../../public/images/ArrowLeft.svg';
import right from '../../../../public/images/ArrowRight.svg';
import NotFound from '../../../../public/images/no_cards_found/noCardsFound.webp';
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
  let eight = smallerLists.getItemsBetweenIndexes(startIndex, endIndex);
  let tail = smallerLists.getTail();
  // let filteredArray = eight.filter((subArray) => subArray.length > 0);

  const handleConditionChange = () => {
    if (tail === null || tail.index === 0) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    let e = document.getElementById(currentSlide.toString());
    e?.scrollIntoView({
      behavior: 'smooth',
      inline: 'start',
      block: 'nearest',
    });
  }, [currentSlide]);

  function handleNextIndex() {
    if (endIndex >= tail!.index) {
      setStartIndex(0);
      setEndIndex(4);
      setCurrentSlide(1);
    } else {
      startIndex = startIndex + 5;
      endIndex = endIndex + 5;
      setStartIndex(startIndex);
      setEndIndex(endIndex);
      setCurrentSlide(1);
    }
  }
  function handlePreviousIndex() {
    if (tail!.index < 6) {
      return null;
    } else {
      if (startIndex < 1) {
        setStartIndex(tail!.index - 4);
        setEndIndex(tail!.index);
        setCurrentSlide(5);
      } else {
        startIndex = startIndex - 5;
        endIndex = endIndex - 5;
        setStartIndex(startIndex);
        setEndIndex(endIndex);
        setCurrentSlide(5);
      }
    }
  }

  function handleSlideRight() {
    if (currentSlide === 1 && startIndex + 1 > tail!.index) {
      if (tail!.index < 6) {
        setCurrentSlide(1);
      } else {
        handleNextIndex();
      }
    } else if (currentSlide === 2 && startIndex + 2 > tail!.index) {
      if (tail!.index < 6) {
        setCurrentSlide(1);
      } else {
        handleNextIndex();
      }
    } else if (currentSlide === 3 && startIndex + 3 > tail!.index) {
      console.log('HERE');
      if (tail!.index < 6) {
        setCurrentSlide(1);
      } else {
        handleNextIndex();
      }
    } else if (currentSlide === 4 && startIndex + 4 > tail!.index) {
      if (tail!.index < 6) {
        setCurrentSlide(1);
      } else {
        handleNextIndex();
      }
    } else if (currentSlide === 5 && startIndex + 5 > tail!.index) {
      if (tail!.index < 6) {
        setCurrentSlide(1);
      } else {
        handleNextIndex();
      }
    } else {
      if (currentSlide === 5) {
        handleNextIndex();
      } else if (currentSlide === -1) {
        setCurrentSlide(currentSlide + 3);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    }
  }

  function handleSlideLeft() {
    if (startIndex <= 0 && currentSlide === 0) {
      return null;
    } else {
      if (currentSlide === -1) {
        setCurrentSlide(5);
        handlePreviousIndex();
      } else if (currentSlide === 1) {
        handlePreviousIndex();
      } else {
        setCurrentSlide(currentSlide - 1);
      }
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
      {cards.length == 0 ? (
        <>
          <div className="w-full flex flex-col items-center">
            <h1 className="font-AclonicaR text-white mt-9 text-3xl">
              No Cards found
            </h1>
            <Image src={NotFound} alt={'Not found'}></Image>
          </div>
        </>
      ) : (
        <>
          <div
            className={`mt-3 grid grid-cols-8 gap-x-[800px] xl:gap-x-[1600px] lg:gap-x-[1200px] 2xl:gap-x-[2000px] no-scrollbar overflow-x-hidden overflow-y-hidden w-screen items-center h-full ${
              tail === null ? 'invisible' : ''
            }`}
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
            <button
              disabled={handleConditionChange()}
              className="absolute left-0 z-10 hover:drop-shadow-blue"
              onClick={() => handleSlideLeft()}
            >
              <Image src={left} alt="left"></Image>
            </button>
            <button
              disabled={handleConditionChange()}
              className="absolute right-0 z-10 hover:drop-shadow-blue"
              onClick={() => handleSlideRight()}
            >
              <Image src={right} alt="right"></Image>
            </button>
          </div>
          <div className="flex flex-row justify-center items-center rounded-full px-1 text-white">
            <div className=" flex flex-row justify-between gap-10 h-[58px] ">
              <button
                className={`${startIndex < 0 ? 'hidden' : ''} ${
                  currentSlide === 1
                    ? 'bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3'
                    : ''
                } font-outline-1 rounded-lg mr-1 w-12 text-xl drop-shadow-lg p-1`}
                onClick={() => handleFirst()}
              >
                <div
                  className={`${
                    currentSlide === 1 ? 'bg-bgColor-Filters' : ''
                  } text-white flex text-center p-2 font-AclonicaR bg-opacity-80 rounded-lg items-center justify-center`}
                >
                  {startIndex === (tail ? tail!.index : 0)
                    ? currentSlide
                    : startIndex + 1}{' '}
                </div>
              </button>
              <button
                disabled={startIndex === (tail ? tail!.index : 0)}
                className={`font-outline-1 rounded-lg mr-1 w-12 text-xl drop-shadow-lg p-1 ${
                  startIndex < 0 ? 'hidden' : ''
                } ${
                  currentSlide === 2
                    ? 'bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3'
                    : ''
                }`}
                onClick={() => handleSecond()}
              >
                <div
                  className={`${
                    currentSlide === 2 ? 'bg-bgColor-Filters' : ''
                  } text-white flex text-center p-2 font-AclonicaR bg-opacity-80 rounded-lg items-center justify-center`}
                >
                  {startIndex + 2}
                </div>
              </button>
              <button
                disabled={startIndex === (tail ? tail!.index : 0)}
                className={`${startIndex < 0 ? 'hidden' : ''} ${
                  currentSlide === 3
                    ? 'bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3'
                    : ''
                } font-outline-1 rounded-lg mr-1 w-12 text-xl drop-shadow-lg p-1`}
                onClick={() => handleThird()}
              >
                <div
                  className={`${
                    currentSlide === 3 ? 'bg-bgColor-Filters' : ''
                  } text-white flex text-center p-2 font-AclonicaR bg-opacity-80 rounded-lg items-center justify-center`}
                >
                  {startIndex + 3}
                </div>
              </button>
              <button
                disabled={startIndex === (tail ? tail!.index : 0)}
                className={`${startIndex < 0 ? 'hidden' : ''} ${
                  currentSlide === 4
                    ? 'bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3'
                    : ''
                } font-outline-1 rounded-lg mr-1 w-12 text-xl drop-shadow-lg p-1`}
                onClick={() => handleFourth()}
              >
                <div
                  className={`${
                    currentSlide === 4 ? 'bg-bgColor-Filters' : ''
                  } text-white flex text-center p-2 font-AclonicaR bg-opacity-80 rounded-lg items-center justify-center`}
                >
                  {startIndex + 4}
                </div>
              </button>
              <button
                disabled={startIndex === (tail ? tail!.index : 0)}
                className={`${startIndex < 0 ? 'hidden' : ''} ${
                  currentSlide === 5
                    ? 'bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3'
                    : ''
                } font-outline-1 rounded-lg mr-1 w-12 text-xl drop-shadow-lg p-1`}
                onClick={() => handleFifth()}
              >
                <div
                  className={`${
                    currentSlide === 5 ? 'bg-bgColor-Filters' : ''
                  } text-white flex text-center p-2 font-AclonicaR bg-opacity-80 rounded-lg items-center justify-center`}
                >
                  {startIndex + 5}
                </div>
              </button>
              <button
                className={`rounded-lg mr-1 py-1 px-3 text-lg drop-shadow-lg ${
                  (tail ? tail!.index : 0) < 1 ? 'hidden' : ''
                }`}
                onClick={() => handleNextIndex()}
              >
                <div
                  className={`hover:bg-bgColor-Filters text-white flex text-center p-2 font-AclonicaR bg-opacity-80 rounded-lg items-center justify-center`}
                >
                  ...
                </div>
              </button>
              <button
                className={` rounded-lg text-white mr-1 py-1 px-3 text-lg drop-shadow-lg font-AclonicaR ${
                  (tail ? tail!.index - 1 : 0) < 1 ? 'hidden' : ''
                }`}
              >
                {(tail ? tail!.index : -1) < 1 ? 1 : tail ? tail!.index + 1 : 0}
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
