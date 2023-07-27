import GoogleMaps from '../components/GoogleMaps/GoogleMaps';
import ScrollMaps from '../components/scrollOptions/scrollMaps';

function page() {
  return (
    <>
      <div className="w-full overflow-y-hidden flex flex-col">
        <h1 className="text-5xl mt-6 flex left-1/4 md:block absolute font-AclonicaR z-10 md:top-32 md:left-16 md:text-7xl text-white drop-shadow-lg">
          SHOPS
        </h1>
        <GoogleMaps></GoogleMaps>
        {/* hidden */}
        <div className="">
          <ScrollMaps />
        </div>
      </div>
    </>
  );
}

export default page;
