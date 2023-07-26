import GoogleMaps from '../components/GoogleMaps/GoogleMaps';

function page() {
  return (
    <>
      <div className="w-full gap-10 overflow-y-none min-h-screen">
        <h1 className="hidden md:block absolute font-AclonicaR z-10 top-32 left-16 text-7xl text-white drop-shadow-lg">
          SHOPS
        </h1>
        <GoogleMaps></GoogleMaps>
      </div>
    </>
  );
}

export default page;
