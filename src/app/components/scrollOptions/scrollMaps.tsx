'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import useDraggableScroll from 'use-draggable-scroll';
import LeftArrow from '../../../../public/images/leftArrowGold.svg';
import { PlaceClass } from '../../../../types';
import GoogleMaps from '../GoogleMaps/GoogleMaps';
import ShopCard from '../ShopCard/ShopCard';
import ShopDetail from '../ShopCard/ShopDetail';

type MapsScrollProps = {
  places: PlaceClass[];
};

export default function ScrollMaps({ places }: MapsScrollProps) {
  const ref = useRef(null);
  const { onMouseDown } = useDraggableScroll(ref);

  const [showDetail, setShowDetail] = useState(false);
  const [showSide, setShowSide] = useState(true);
  const [place, setPlace] = useState<PlaceClass>();
  const [center, setCenter] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCenter({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  const goToDetail = (card: PlaceClass) => {
    setCenter({
      lat: card.geometry.location.lat,
      lng: card.geometry.location.lng,
    });
    console.log('Go To Detail', card);
    setPlace(card);
    setShowDetail(!showDetail);
  };

  const goToList = () => {
    if (showDetail) {
      setShowDetail(!showDetail);
    } else {
      setShowSide(false);
      setShowDetail(false);
    }
  };

  return (
    <>
      <div
        className={`${
          showSide ? 'md:flex' : 'hidden'
        } w-full fixed top-20 z-10 flex-col overflow-y-scroll text-shadow-lg bg-cover bg-blue-950 bg-bgSideShop shadow-black no-scrollbar py-3 text-white md:w-1/4 h-screen`}
        ref={ref}
        onMouseDown={onMouseDown}
      >
        <div className="flex items-center mt-12 md:justify-center">
          <Image
            className="md:hidden mx-9"
            src={LeftArrow}
            alt={''}
            onClick={goToList}
          />
          <h1 className="text-5xl flex font-AclonicaR z-10 md:text-7xl text-white drop-shadow-lg">
            SHOPS
          </h1>
        </div>
        {showDetail ? (
          <div className="mt-12 mx-9">
            <ShopDetail
              place={place as PlaceClass}
              clickBack={() => {
                setShowDetail(!showDetail);
              }}
            />
          </div>
        ) : (
          <div className="mt-12 mx-9">
            {places.map((place, index) => (
              <div key={index}>
                <ShopCard
                  name={place.name}
                  address={place.vicinity}
                  open={place.opening_hours.open_now ? 'Open' : 'Closed'}
                  schedule={place.opening_hours.weekday_text[0].replace(
                    'Monday:',
                    ''
                  )}
                  phone={place.phone}
                  clickCard={() => goToDetail(place)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <GoogleMaps
        places={places}
        center={center}
        clickMarker={() => {
          setShowSide(true);
        }}
        clickMap={() => {
          setShowSide(false);
          setShowDetail(false);
        }}
      />
    </>
  );
}
