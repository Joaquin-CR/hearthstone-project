import GoogleMaps from '../components/GoogleMaps/GoogleMaps';
import ScrollMaps from '../components/scrollOptions/scrollMaps';

function page() {
  return (
    <>
      <div className="w-full overflow-y-hidden">
        <h1 className="hidden text-xl md:block absolute font-AclonicaR z-20 top-32 left-16 md:text-7xl text-white drop-shadow-lg">
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
