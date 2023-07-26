import Image from 'next/image';
import LeftArrow from '../../../public/images//leftArrowGold.svg';
import GoogleMaps from '../components/GoogleMaps/GoogleMaps';
import ScrollMaps from '../components/scrollOptions/scrollMaps';

function page() {
  return (
    <>
      <div className="w-full overflow-y-hidden flex flex-col">
        {/* hidden */}
        <h1 className="text-5xl mt-6 flex md:block absolute font-AclonicaR z-20 md:top-32 md:left-16 md:text-7xl text-white drop-shadow-lg">
          <div className="mx-10 md:hidden">
            <button className="">
              <Image src={LeftArrow} alt={''} />
            </button>
          </div>
          SHOPS
        </h1>
        <GoogleMaps></GoogleMaps>
        <div className="">
          <ScrollMaps />
        </div>
      </div>
    </>
  );
}

export default page;
