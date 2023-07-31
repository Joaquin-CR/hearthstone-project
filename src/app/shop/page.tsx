'use client';
import { useState } from 'react';
import GoogleMaps from '../components/GoogleMaps/GoogleMaps';
import ScrollMaps from '../components/scrollOptions/scrollMaps';

export default function Page() {
  const [showSide, setShowSide] = useState(false);
  // const markers = await getPlaces({ lat: '25.690559', lng: '-100.312982' });
  // console.log('ya en el componente', markers);
  return (
    <>
      <div className="w-full overflow-y-hidden flex flex-col">
        <h1
          className={`${
            showSide ? 'hidden' : 'md:block absolute'
          } text-5xl mt-6 flex left-1/4 font-AclonicaR z-10 md:top-32 md:left-16 md:text-7xl text-white drop-shadow-lg`}
        >
          SHOPS
        </h1>
        <GoogleMaps
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
      </div>
    </>
  );
}
