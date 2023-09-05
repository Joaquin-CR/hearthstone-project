import { SearchCards } from '@/lib/getClassCard';
import Link from 'next/link';
import { CardClass } from '../../../../types';
import FilterResult from '../../components/HomeScreen/FilterResult';

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const key = searchParams.q as string;
  let cards: CardClass[] | undefined | null = await SearchCards(key);
  if (cards == undefined || cards == null) {
    cards = [];
  }

  console.log(cards);

  return (
    <>
      <div className="flex flex-col items-center bg-bgImgHome bg-no-repeat bg-fixed bg-cover">
        <Link
          href={{
            pathname: '/',
          }}
        >
          <button className="hidden md:flex fixed text-gold font-AclonicaR text-xl top-5 z-50 right-11">
            CANCEL SEARCH
          </button>
        </Link>
      </div>
      <div className="flex flex-col items-center bg-bgImgHome bg-scroll bg-no-repeat bg-cover gap-10 min-h-screen relative mt-20">
        <FilterResult search={key} cardList={cards} />
      </div>
    </>
  );
}
