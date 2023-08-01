'use client';
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from '@react-google-maps/api';
import { useEffect, useMemo, useState } from 'react';
import { PlaceClass } from '../../../../types';

const containerStyle = {
  width: '100%',
  height: '925px',
};

type GoogleMapsProps = {
  places: PlaceClass[];
  center: any;
};

const openSlide = (name: string, vicinity: string, rating: string) => {
  return (
    <InfoWindow>
      <div>{name}</div>
      <div>{vicinity}</div>
      <div>{rating}</div>
    </InfoWindow>
  );
};

export default function GoogleMaps({ places, center }: GoogleMapsProps) {
  const libraries = useMemo(() => ['places'], []);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: libraries as any,
  });

  // CHECAR SI SIGUE SIENDO UTIL
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  const openCloseSlide = () => {
    // clicknMarker(true);
  };

  const handleZoomChanged = () => {
    console.log('Zoom');
    // clicknMarker(true);
  };

  return isLoaded ? (
    <>
      <div className="overflow-y-none">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onZoomChanged={handleZoomChanged}
        >
          {/* Puedes agregar marcadores u otros elementos aquí */}
          {places.map((place, index) => (
            <div key={index} className=" hover:bg-colorText-Sadows">
              <Marker
                position={place.geometry.location}
                icon={{ url: '/images/MarkerMaps.png' }}
                onClick={openCloseSlide}
              ></Marker>
            </div>
          ))}
        </GoogleMap>
      </div>
    </>
  ) : (
    <>
      <div className="flex gap-10 min-h-screen overflow-y-none items-center justify-center">
        <h1 className="font-AclonicaR text-white text-7xl">Loading...</h1>
      </div>
    </>
  );
}
