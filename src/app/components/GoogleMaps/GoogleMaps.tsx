'use client';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '925px',
};

const center = {
  lat: -98.15615,
  lng: 20.64866,
};

const openSlide = () => {
  console.log('open slide');
};

export default function GoogleMaps() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAnAA0HBfHN8fzBCB-vmvT-oPHX16dkN4E',
  });

  const handleZoomChanged = () => {
    console.log('Zoom');
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
          <Marker
            position={center}
            onClick={openSlide}
            // icon={{ url: '../../../../public/images/MarkerMaps.png' }}
          />
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
