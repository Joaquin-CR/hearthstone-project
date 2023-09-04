import Image from 'next/image';
import NotFound from '../../../public/images/no_cards_found/noCardsFound.webp';
import Filter3 from '../components/Filters/Filter3';

export default async function Page() {
  const cards = await fetch('http://localhost:3000/api/getData', {
    next: { revalidate: 1 },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
  });

  return (
    <>
      <div className="flex flex-col items-center bg-bgImgHome bg-scroll bg-no-repeat bg-cover gap-10 min-h-screen relative">
        <h1 className="text-center text-white font-AclonicaR font-bold text-5xl md:text-7xl text-shadow shadow-black mt-20">
          Favorites
        </h1>
        {cards.data.length == 0 ? (
          <>
            <h1 className="font-AclonicaR text-white mt-9 text-3xl">
              No favorites yet
            </h1>
            <Image src={NotFound} alt={'Not found'}></Image>
          </>
        ) : (
          <>
            <Filter3 cardClass=" " cards={cards.data} />
          </>
        )}
      </div>
    </>
  );
}
