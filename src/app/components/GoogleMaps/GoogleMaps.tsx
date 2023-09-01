'use client';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useState } from 'react';
import { PlaceClass } from '../../../../types';

const containerStyle = {
  width: '100%',
  height: '925px',
};

type GoogleMapsProps = {
  places: PlaceClass[];
  center: any;
  clickMarker: (place: PlaceClass) => void;
  clickMap: () => void;
};

export default function GoogleMaps({
  places,
  center,
  clickMarker,
  clickMap,
}: GoogleMapsProps) {
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);
  // const [map, setMap] = useState<google.maps.Map | null>(null);
  const [activeMarker, setActiveMarker] = useState(null);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: ['places'] as any,
  });

  // function click(map: google.maps.Map, location: google.maps.LatLngLiteral) {
  //   if (map) {
  //     map.setZoom(16); // Optionally adjust the zoom level
  //     map.panTo(location);

  //     setMap(map);
  //   }
  // }

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
                icon={{
                  url:
                    place.place_id === activeMarker ||
                    place.place_id === hoveredMarker
                      ? '/images/MarkerMapGlowing.webp'
                      : '/images/MarkerMaps.png',
                }}
                onClick={() => {
                  clickMarker(place);
                  // click(map as google.maps.Map, place.geometry.location);
                  setActiveMarker(place.place_id);
                  setHoveredMarker(null);
                }}
                onMouseOver={() => setHoveredMarker(place.place_id)}
                onMouseOut={() => setHoveredMarker(null)}
                // options={{
                //   animation:
                //     hoveredMarker === place.place_id
                //       ? google.maps.Animation.BOUNCE
                //       : null,
                // }}
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
