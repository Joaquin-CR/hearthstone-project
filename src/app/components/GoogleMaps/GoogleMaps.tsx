'use client';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useEffect, useMemo, useState } from 'react';
import { PlaceClass } from '../../../../types';

const containerStyle = {
  width: '100%',
  height: '925px',
};

type GoogleMapsProps = {
  places: PlaceClass[];
  clicknMarker: (show: boolean) => void;
};

export default function GoogleMaps({ places, clicknMarker }: GoogleMapsProps) {
  const libraries = useMemo(() => ['places'], []);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [isMarkerHovered, setIsMarkerHovered] = useState(false);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: '',
    libraries: libraries as any,
  });
  let center = { lat: 26.3389184, lng: -98.2122496 };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  const openCloseSlide = () => {
    clicknMarker(true);
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
          center={{ lat: latitude, lng: longitude }}
          zoom={10}
          onZoomChanged={handleZoomChanged}
          onClick={() => {
            clicknMarker(false);
          }}
        >
          {/* Puedes agregar marcadores u otros elementos aquí */}
          {/* TEST MARKER */}
          <Marker
            position={center}
            onMouseOver={() => {
              setIsMarkerHovered(true);
            }}
            onMouseOut={() => {
              setIsMarkerHovered(false);
            }}
            icon={{ url: '/images/MarkerMaps.png' }}
            options={
              isMarkerHovered
                ? { animation: window.google.maps.Animation.BOUNCE }
                : { animation: window.google.maps.Animation.DROP }
            }
            onClick={openCloseSlide}
          ></Marker>
          {/* END TEST MARKER */}
          {places.map((place, index) => (
            <div key={index} className=" hover:drop-shadow-blue">
              <Marker
                position={place.geometry.location}
                onMouseOver={() => {
                  setIsMarkerHovered(true);
                }}
                onMouseOut={() => {
                  setIsMarkerHovered(false);
                }}
                icon={{ url: '/images/MarkerMaps.png' }}
                options={
                  isMarkerHovered
                    ? { animation: window.google.maps.Animation.BOUNCE }
                    : { animation: window.google.maps.Animation.DROP }
                }
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
