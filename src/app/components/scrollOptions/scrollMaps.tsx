'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import LeftArrow from '../../../../public/images/leftArrowGold.svg';
import { PlaceClass } from '../../../../types';
import GoogleMaps from '../GoogleMaps/GoogleMaps';
import ShopCard from '../ShopCard/ShopCard';
import ShopDetail from '../ShopCard/ShopDetail';

type MapsScrollProps = {
  places: PlaceClass[];
};

export default function ScrollMaps({ places }: MapsScrollProps) {
  const [showDetail, setShowDetail] = useState(false);
  const [showList, setShowList] = useState(true);
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
    setPlace(card);
    setShowDetail(!showDetail);
  };

  const goToList = () => {
    if (showDetail) {
      setShowDetail(!showDetail);
    } else if (showList) {
      setShowList(!showList);
    }
  };
  const handleShowList = () => {
    setShowList(true);
  };
  function handleShowDetailsMaps(place: PlaceClass) {
    goToDetail(place), setShowDetail(true);
  }

  return (
    <>
      {showList && (
        <div className="w-full absolute top-20 z-10 md:flex flex-col overflow-y-scroll text-shadow-lg bg-cover bg-blue-950 bg-bgImgHome shadow-black no-scrollbar py-3 text-white md:w-1/4 h-[89.5%]">
          <div className="flex items-center max-sm:ml-5 mt-5 md:mt-12 md:justify-center">
            <Image
              className="md:hidden p-9"
              src={LeftArrow}
              alt={'left'}
              onClick={goToList}
            />
            <h1 className="text-5xl flex font-AclonicaR z-10 md:text-7xl text-white drop-shadow-lg">
              SHOPS
            </h1>
          </div>
          {showDetail ? (
            <div className="md:mt-12 mt-5 mx-0.5 2xl:mx-5 max-sm:ml-5">
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
                    open={place.opening_hours?.open_now ? 'Open' : 'Closed'}
                    schedule={
                      place.opening_hours?.weekday_text
                        ? place.opening_hours?.weekday_text[0].replace(
                            'Monday:',
                            ''
                          )
                        : 'n/a'
                    }
                    phone={place.phone}
                    clickCard={() => goToDetail(place)}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      <GoogleMaps
        places={places}
        center={center}
        clickBack={handleShowList}
        showDetails={handleShowDetailsMaps}
      />
    </>
  );
}
