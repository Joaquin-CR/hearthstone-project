import { deserialize } from 'ts-jackson';
import { PlaceClass } from '../../types';

type propsPlaces = {
  lat: string;
  lng: string;
};

export async function getPlaces({ lat, lng }: propsPlaces) {
  const url =
    'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' +
    lat +
    ',' +
    lng +
    '&radius=10000' +
    '&type=store' +
    '&key=' +
    process.env.PUBLIC_GOOGLE_MAPS_API_KEY;
  const res = await fetch(url);
  const data = await res.json();
  console.log('Data', data);
  let places: PlaceClass[] = await data.results.map((place: any) => {
    return deserialize(place, PlaceClass);
  });
  console.log(data);
  return places;
}
