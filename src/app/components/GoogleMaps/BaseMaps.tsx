'use client';
import { useState } from 'react';
import { PlaceClass } from '../../../../types';
import ScrollMaps from '../scrollOptions/scrollMaps';
import GoogleMaps from './GoogleMaps';

type props = {
  places: PlaceClass[];
};

export default function BaseMaps({ places }: props) {
  const [showSide, setShowSide] = useState(false);
  return (
    <>
      <h1
        className={`${
          showSide ? 'hidden' : 'md:block absolute'
        } text-5xl mt-6 flex left-1/4 font-AclonicaR z-10 md:top-32 md:left-16 md:text-7xl text-white drop-shadow-lg`}
      >
        SHOPS
      </h1>
      <GoogleMaps
        places={places}
        clicknMarker={(show: boolean) => {
          setShowSide(show);
        }}
      ></GoogleMaps>
      {/* hidden */}
      <div className={`${!showSide && 'hidden'}`}>
        <ScrollMaps
          clickBack={(show: boolean) => {
            setShowSide(show);
          }}
        />
      </div>
    </>
  );
}
