import Image from 'next/image';
import left from 'public/images/ArrowLeft.svg';
import right from 'public/images/ArrowRight.svg';
import glowingRight from 'public/images/GLowingArrowright.png';
import glowingLeft from 'public/images/GlowingArrowleft.svg';
import NotFound from 'public/images/no_cards_found/noCardsFound.webp';
import { useEffect, useRef, useState } from 'react';
import { CardClass, SplitIntoSmallerLists } from '../../../../types';
import Carousel from './Carousel';

type CarouselProps = {
  cardList: CardClass[];
};

export default function MobileCorusel({ cardList }: CarouselProps) {
  let [startMobileIndex, setMobileStartIndex] = useState(0);
  let [endMobileIndex, setMobileEndIndex] = useState(4);
  const [mobileSlide, setMobileSlide] = useState(-1);
  let [clicked, setClicked] = useState('');
  const smallerListsMobile = SplitIntoSmallerLists(cardList, 1);
  const eightMobile = smallerListsMobile.getItemsBetweenIndexes(
    startMobileIndex,
    endMobileIndex
  );
  const mobileRef = useRef<HTMLDivElement>(null);
  const tailMobile = smallerListsMobile.getTail();
  let filteredArray = eightMobile.filter((subArray) => subArray.length > 0);
  useEffect(() => {
    let f = document.getElementById(mobileSlide.toString());
    console.log(mobileSlide);
    f?.scrollIntoView({
      behavior: 'smooth',
      inline: 'start',
      block: 'nearest',
    });
  }, [mobileSlide]);

  useEffect(() => {
    let f = document.getElementById(mobileSlide.toString());
    console.log(mobileSlide);
    f?.scrollIntoView({
      behavior: 'smooth',
      inline: 'start',
      block: 'nearest',
    });
  }, [mobileSlide]);
  const handleConditionChange = () => {
    if (tailMobile === null || tailMobile.index === 0) {
      return true;
    } else {
      return false;
    }
  };

  //
  function handleMobileNextIndex() {
    if (endMobileIndex >= tailMobile!.index) {
      setMobileStartIndex(0);
      setMobileEndIndex(4);
      setMobileSlide(0);
    } else {
      startMobileIndex = startMobileIndex + 5;
      endMobileIndex = endMobileIndex + 5;
      setMobileStartIndex(startMobileIndex);
      setMobileEndIndex(endMobileIndex);
      setMobileSlide(0);
    }
  }
  function handleMobilePreviousIndex() {
    if (tailMobile!.index < 5) {
      return null;
    } else {
      if (startMobileIndex < 1) {
        setMobileStartIndex(tailMobile!.index - 4);
        setMobileEndIndex(tailMobile!.index);
        setMobileSlide(4);
      } else {
        startMobileIndex = startMobileIndex - 5;
        endMobileIndex = endMobileIndex - 5;
        setMobileStartIndex(startMobileIndex);
        setMobileEndIndex(endMobileIndex);
        setMobileSlide(4);
      }
    }
  }

  function handleMobileSlideRight() {
    if (mobileSlide === 0 && startMobileIndex + 1 > tailMobile!.index) {
      if (tailMobile!.index < 5) {
        setMobileSlide(0);
      } else {
        handleMobileNextIndex();
      }
    } else if (mobileSlide === 1 && startMobileIndex + 2 > tailMobile!.index) {
      if (tailMobile!.index < 5) {
        setMobileSlide(0);
      } else {
        handleMobileNextIndex();
      }
    } else if (mobileSlide === 2 && startMobileIndex + 3 > tailMobile!.index) {
      if (tailMobile!.index < 5) {
        setMobileSlide(0);
      } else {
        handleMobileNextIndex();
      }
    } else if (mobileSlide === 3 && startMobileIndex + 4 > tailMobile!.index) {
      if (tailMobile!.index < 5) {
        setMobileSlide(0);
      } else {
        handleMobileNextIndex();
      }
    } else if (mobileSlide === 4 && startMobileIndex + 5 > tailMobile!.index) {
      if (tailMobile!.index < 5) {
        setMobileSlide(0);
      } else {
        handleMobileNextIndex();
      }
    } else {
      if (mobileSlide === 4) {
        handleMobileNextIndex();
      } else if (mobileSlide === -1) {
        setMobileSlide(mobileSlide + 2);
      } else {
        setMobileSlide(mobileSlide + 1);
      }
    }
  }
  function handleMobileSlideLeft() {
    if (startMobileIndex <= 0 && mobileSlide === 0) {
      return null;
    } else {
      if (mobileSlide === -1) {
        setMobileSlide(4);
        handleMobilePreviousIndex();
      } else if (mobileSlide === 0) {
        handleMobilePreviousIndex();
      } else {
        setMobileSlide(mobileSlide - 1);
      }
    }
  }
  function handleMobileFirst() {
    setMobileSlide(0);
  }
  function handleMobileSecond() {
    setMobileSlide(1);
  }
  function handleMobileThird() {
    setMobileSlide(2);
  }
  function handleMobileFourth() {
    setMobileSlide(3);
  }
  function handleMobileFifth() {
    setMobileSlide(4);
  }

  // FINISH NEW CODE
  const [currentIndex, setCurrentIndex] = useState(0);

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
      {cardList.length === 0 ? (
        <>
          <div className="flex flex-col items-center mb-24 pb-11">
            <h1 className="font-AclonicaR text-white mt-9 text-3xl mb-3">
              No Cards
            </h1>
            <div className="flex md:hidden">
              <Image src={NotFound} alt={'Not found'} height={250}></Image>
            </div>
            <div className="hidden md:flex">
              <Image src={NotFound} alt={'Not found'}></Image>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="mb-3 flex flex-row justify-center items-center h-full">
            <button
              className="left-0"
              disabled={handleConditionChange()}
              onClick={() => {
                handleMobileSlideLeft();
                setClicked('left');
              }}
            >
              <Image
                src={clicked === 'left' ? glowingLeft : left}
                alt="left"
                height={650}
                width={650}
              ></Image>
            </button>
            <div
              ref={mobileRef}
              className={`sm:hidden snap-x grid grid-cols-5 h-full no-scrollbar overflow-x-hidden gap-x-[500px] items-center ${
                tailMobile ? '' : 'invisible p-44'
              }`}
            >
              {filteredArray.map((list, index) => (
                <div
                  key={index}
                  id={index.toString()}
                  className=" bottom-14 snap-start"
                >
                  <Carousel cardList={list} />
                </div>
              ))}
            </div>
            <button
              className="right-0"
              disabled={handleConditionChange()}
              onClick={() => {
                handleMobileSlideRight();
                setClicked('right');
              }}
            >
              <Image
                src={clicked === 'right' ? glowingRight : right}
                alt="right"
                height={650}
                width={650}
              ></Image>
            </button>
          </div>
          <div
            className={`sm:hidden flex flex-row justify-center items-center rounded-full px-1 py-5 text-white max-sm:text-sm ${
              tailMobile === null || tailMobile.index === 0 ? 'invisible' : ''
            }`}
          >
            <div className="flex flex-row justify-between max-sm:gap-0 rounded-full ">
              <button
                className={`${
                  startMobileIndex < 0 ? 'hidden' : ''
                } rounded-lg ${
                  mobileSlide === 0 || mobileSlide === -1
                    ? 'bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3'
                    : ''
                } p-1 drop-shadow-lg`}
                onClick={() => handleMobileFirst()}
              >
                <div
                  className={`${
                    mobileSlide === 0 || mobileSlide === -1
                      ? 'bg-bgColor-Filters'
                      : ''
                  } text-white flex text-center px-2 py-1 font-AclonicaR bg-opacity-80 rounded-lg items-center justify-center`}
                >
                  {startMobileIndex === (tailMobile ? tailMobile!.index : 0)
                    ? startMobileIndex
                    : startMobileIndex + 1}
                </div>
              </button>

              <button
                className={`${
                  startMobileIndex + 1 > (tailMobile ? tailMobile!.index : 0)
                    ? 'hidden'
                    : ''
                } ${
                  startMobileIndex < -1 ? 'hidden' : ''
                } rounded-lg mr-1 p-1 drop-shadow-lg
            ${
              mobileSlide === 1
                ? 'bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3'
                : ''
            } `}
                onClick={() => handleMobileSecond()}
              >
                <div
                  className={`${
                    mobileSlide === 1 ? 'bg-bgColor-Filters' : ''
                  } text-white flex text-center px-2 py-1 font-AclonicaR bg-opacity-80 rounded-lg items-center justify-center`}
                >
                  {startMobileIndex + 2}
                </div>
              </button>

              <button
                className={`${
                  startMobileIndex + 2 > (tailMobile ? tailMobile!.index : 0)
                    ? 'hidden'
                    : ''
                } rounded-lg ${
                  mobileSlide === 2
                    ? 'bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3'
                    : ''
                } mr-1 p-1 drop-shadow-lg`}
                onClick={() => handleMobileThird()}
              >
                <div
                  className={`${
                    mobileSlide === 2 ? 'bg-bgColor-Filters' : ''
                  } text-white flex text-center px-2 py-1 font-AclonicaR bg-opacity-80 rounded-lg items-center justify-center`}
                >
                  {startMobileIndex + 3}
                </div>
              </button>

              <button
                className={`${
                  startMobileIndex + 3 > (tailMobile ? tailMobile!.index : 0)
                    ? 'hidden'
                    : ''
                } rounded-lg ${
                  mobileSlide === 3
                    ? 'bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3'
                    : ''
                } mr-1 px-3 py-2 drop-shadow-lg`}
                onClick={() => handleMobileFourth()}
              >
                <div
                  className={`${
                    mobileSlide === 3 ? 'bg-bgColor-Filters' : ''
                  } text-white flex text-center px-2 py-1 font-AclonicaR bg-opacity-80 rounded-lg items-center justify-center`}
                >
                  {startMobileIndex + 4}
                </div>
              </button>
              <button
                className={`${
                  startMobileIndex + 4 > (tailMobile ? tailMobile!.index : 0)
                    ? 'hidden'
                    : ''
                } rounded-lg ${
                  mobileSlide === 4
                    ? 'bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3'
                    : ''
                } mr-1 px-3 py-2 drop-shadow-lg`}
                onClick={() => handleMobileFifth()}
              >
                <div
                  className={`${
                    mobileSlide === 4 ? 'bg-bgColor-Filters' : ''
                  } text-white flex text-center px-2 py-1 font-AclonicaR bg-opacity-80 rounded-lg items-center justify-center`}
                >
                  {startMobileIndex + 5}
                </div>
              </button>
              <button
                className={`sm:hidden mr-1 px-3 py-2 drop-shadow-lg ${
                  (tailMobile ? tailMobile!.index : 0) < 1 ? 'hidden' : ''
                }`}
                onClick={() => handleMobileNextIndex()}
              >
                <p className="font-AclonicaR">...</p>
              </button>

              <button
                className={`sm:hidden rounded-lg mr-1 px-3 py-2 drop-shadow-lg ${
                  (tailMobile ? tailMobile!.index : 0) < 1 ? 'hidden' : ''
                }`}
              >
                <p className="font-AclonicaR">
                  {(tailMobile ? tailMobile!.index : -1) < 1
                    ? 1
                    : tailMobile
                    ? tailMobile!.index + 1
                    : 0}
                </p>
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
