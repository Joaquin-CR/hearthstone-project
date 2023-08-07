import { SearchCards } from '@/lib/getClassCard';
import Link from 'next/link';
import FilterResult from '../components/HomeScreen/FilterResult';

export default async function Page({ params }: { params: { class: string } }) {
  const { class: cardClass } = params;
  let cards = await SearchCards('Alleria Windrunner');
  console.log(cards);

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-bgImgHome bg-no-repeat bg-fixed bg-cover">
      <Link
        href={{
          pathname: '/',
        }}
      >
        <button
          className="hidden md:flex fixed text-gold font-AclonicaR text-xl top-5 z-50 right-11"
          //   onClick={cancelSearch}
        >
          CANCEL SEARCH
        </button>
      </Link>

      <FilterResult
        search={''}
        cancelBtn={() => {
          //   setSearch('');
          //   setSearching(false);
        }}
      />
    </div>
  );
}
