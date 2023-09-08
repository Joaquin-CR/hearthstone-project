'use client';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useCallback, useEffect, useState } from 'react';
import { PlaceClass } from '../../../../types';

const containerStyle = {
  width: '100%',
  height: '100%',
};

type GoogleMapProps = {
  places: PlaceClass[];
  center: any;
  clickBack: () => void;
  showDetails: (location: PlaceClass) => void;
};

export default function GoogleMaps({
  places,
  center,
  clickBack,
  showDetails,
}: GoogleMapProps) {
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [isApiLoaded, setIsApiLoaded] = useState(false);
  const [markers, setMarkers] = useState(places);
  const [activeMarker, setActiveMarker] = useState(null);

  const handleMarkerMouseOver = (markerId: any) => {
    setMarkers((prevMarkers) =>
      prevMarkers.map((marker) =>
        marker.place_id === markerId ? { ...marker, isHovered: true } : marker
      )
    );
  };

  const handleMarkerMouseOut = (markerId: any) => {
    setMarkers((prevMarkers) =>
      prevMarkers.map((marker) =>
        marker.place_id === markerId ? { ...marker, isHovered: false } : marker
      )
    );
  };

  const handleMarkerClick = (markerId: any) => {
    setActiveMarker(markerId);
  };
  const onLoad = useCallback(
    function onLoadCallback(googleMap: google.maps.Map) {
      googleMap.panTo(center);
      setMap(googleMap);
    },
    [center]
  );
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: ['places'] as any,
  });

  useEffect(() => {
    if (isLoaded) {
      setIsApiLoaded(true);
      console.log('Google Maps API loaded');
    }
  }, [isLoaded]);

  function click(map: google.maps.Map, location: google.maps.LatLngLiteral) {
    if (map) {
      map.setZoom(16); // Optionally adjust the zoom level
      map.panTo(location);

      setMap(map);
    }
  }

  return isLoaded ? (
    <div className="w-full h-[89.5%] absolute">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        onLoad={onLoad}
      >
        {places.map((place) => (
          <Marker
            key={place.place_id}
            position={place.geometry.location}
            onClick={() => {
              clickBack();
              click(map as google.maps.Map, place.geometry.location);
              handleMarkerClick(place.place_id);
              showDetails(place);
            }}
            icon={{
              url:
                place.place_id === activeMarker ||
                place.place_id === hoveredMarker
                  ? '/images/MarkerMapGlowing.webp'
                  : '/images/MarkerMaps.png',
            }}
            onMouseOver={() => setHoveredMarker(place.place_id)}
            onMouseOut={() => setHoveredMarker(null)}
            options={{
              animation:
                hoveredMarker === place.place_id
                  ? google.maps.Animation.BOUNCE
                  : null,
            }}
          />
        ))}
      </GoogleMap>
    </div>
  ) : (
    <>
      <div className="flex gap-10 min-h-screen overflow-y-none items-center justify-center">
        <h1 className="font-AclonicaR text-white text-7xl">Loading...</h1>
      </div>
    </>
  );
}
