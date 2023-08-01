// import { useState } from 'react';
import { getPlaces } from '@/lib/getPlaces';
import BaseMaps from '../components/GoogleMaps/BaseMaps';

export default async function Page() {
  let places = await getPlaces({ lat: '26.3389184', lng: '-98.2122496' });
  // console.log('lugares', places);
  return (
    <>
      <div className="w-full overflow-y-hidden flex flex-col">
        <BaseMaps places={places} />
      </div>
    </>
  );
}
