import { getPlaceDetail } from '@/lib/getPlaces';
import ScrollMaps from '../components/scrollOptions/scrollMaps';

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const key = searchParams.lat as string;
    const key2 = searchParams.lng as string;
    let places = await getPlaceDetail({
    lat: key.toString(),
    lng: key2.toString(),
  });

  return (
    <>
      <div className="">
        <ScrollMaps places={places} />
      </div>
    </>
  );
}
