'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Logo from '../../../../public/images/homepage_logoNavbar.png';

export default function Navbar() {
  const [effect, setEffect] = useState(false);
  const [show, setShow] = useState(false);
  const [center, setCenter] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCenter({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);
  console.log('center', center);
  const content = (
    <>
      <header className="bg-bgColor-Blue text-white sticky top-0 z-50 w-full h-20 shadow-lg drop-shadow-lg">
        <section className="mx-auto px-6 pb-1 flex justify-between items-center">
          <Link href={'/'}>
            <Image src={Logo} alt={'Logo'} />
          </Link>
          <button
            id="hamburger-button"
            className={`${
              effect && 'toggle-btn'
            } text-3xl md:hidden cursor-pointer relative w-8 h-8 unselectable`}
            onClick={() => {
              setEffect(effect ? false : true);
              setShow(show ? false : true);
            }}
          >
            <div className="bg-Color-MenuHover w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 before:contect-[''] before:bg-Color-MenuHover before:w-8 before:h-1 before:rounded before:absolute before:-translate-x-4 before:-translate-y-3 before:transition-all before:duration-500 after:contect-[''] after:bg-Color-MenuHover after:w-8 after:h-1 after:rounded after:absolute after:-translate-x-4 after:translate-y-3 after:transition-all after:duration-500"></div>
          </button>
          <nav className="hidden md:block md:mx-6 space-x-8 text-xl text-center items-center w-full">
            <div className="flex justify-center md:mt-5">
              <Link href={'/'} className="mx-36">
                <p className="hover:opacity-90 hover:text-Color-MenuHover font-AclonicaR">
                  HOME
                </p>
              </Link>

              <Link href={'/favorites'} className="lg:mx-36">
                <p className="hover:opacity-90 hover:text-Color-MenuHover font-AclonicaR">
                  FAVORITES
                </p>
              </Link>
              <Link
                href={{
                  pathname: `/shop/`,
                  query: { lat: center.lat, lng: center.lng },
                }}
                className="mx-36"
              >
                <p className="hover:opacity-90 hover:text-Color-MenuHover font-AclonicaR">
                  SHOPS
                </p>
              </Link>
            </div>
          </nav>
        </section>
        <div
          className={`${show && 'animate-open-menu'} ${
            !show && 'hidden'
          } absolute top-68 bg-bgColor-mobileMenu w-full text-5xl flex-col justify-center origin-top`}
        >
          <nav
            className="flex flex-col min-h-screen items-center py-8"
            aria-label="mobile"
          >
            <a
              href="/"
              className="text-3xl w-3/5 text-center py-2 my-16 border-b-4 hover:opacity-90 hover:text-Color-MenuHover hover:border-Color-MenuHover font-AclonicaR"
              onClick={() => {
                setEffect(false);
                setShow(show ? false : true);
              }}
            >
              Home
            </a>
            <a
              className="text-3xl w-3/5 text-center py-2 my-16 border-b-4 hover:opacity-90 hover:text-Color-MenuHover hover:border-Color-MenuHover font-AclonicaR"
              href="/favorites"
              onClick={() => {
                setEffect(false);
                setShow(show ? false : true);
              }}
            >
              FAVORITES
            </a>
            <Link
              href={{
                pathname: `/shop/`,
                query: { lat: center.lat, lng: center.lng },
              }}
              onClick={() => {
                setEffect(false);
                setShow(show ? false : true);
              }}
            >
              <p className="text-3xl w-3/5 text-center py-2 my-16 border-b-4 hover:opacity-90 hover:text-Color-MenuHover hover:border-Color-MenuHover font-AclonicaR">
                SHOPS
              </p>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
  return content;
}
