'use client';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { PlaceClass } from '../../../../types';

const containerStyle = {
  width: '100%',
  height: '925px',
};

type GoogleMapsProps = {
  places: PlaceClass[];
  center: any;
  clickMarker: () => void;
  clickMap: () => void;
};

export default function GoogleMaps({
  places,
  center,
  clickMarker,
  clickMap,
}: GoogleMapsProps) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: ['places'] as any,
  });

  return isLoaded ? (
    <>
      <div className="w-full h-[89.5%] absolute">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
          onClick={clickMap}
          mapContainerClassName="w-full h-full"
        >
          {places.map((place, index) => (
            <div key={index} className="hover:bg-colorText-Sadows">
              <Marker
                position={place.geometry.location}
                icon={{ url: '/images/MarkerMaps.png' }}
                onClick={clickMarker}
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
