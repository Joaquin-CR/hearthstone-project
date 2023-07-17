import Image from 'next/image';
import Logo from '../../../../public/images/homepage_logoNavbar.png';

export default function Navbar() {
  const content = (
    <>
      <header className="bg-bgColor-Navbar text-white sticky top-0 z-10 w-full h-20">
        <section className="mx-auto px-6 pb-1 flex justify-center items-center">
          <Image className="justify-start" src={Logo} alt={'Logo'} />
          <div>
            <button
              id="hamburger-button"
              className={`${
                true && 'toggle-btn'
              } text-3xl md:hidden cursor-pointer relative w-8 h-8`}
              //   onClick={() => {
              //     setEffect(effect ? false : true);
              //     setShow(show ? false : true);
              //   }}
            >
              <div className="bg-white w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 before:contect-[''] before:bg-white before:w-8 before:h-1 before:rounded before:absolute before:-translate-x-4 before:-translate-y-3 before:transition-all before:duration-500 after:contect-[''] after:bg-white after:w-8 after:h-1 after:rounded after:absolute after:-translate-x-4 after:translate-y-3 after:transition-all after:duration-500"></div>
            </button>
          </div>
          <nav className="hidden md:block space-x-8 text-xl text-center justify-center">
            <a className="hover:opacity-90">HOME</a>
            <a className="hover:opacity-90">FAVORITES</a>
            <a className="hover:opacity-90">SHOPS</a>
          </nav>
        </section>

        {/* <div
          className={`${true && 'animate-open-menu'} ${
            !true && 'hidden'
          } absolute top-68 bg-bgColor-mobileMenu w-full text-5xl flex-col justify-center origin-top`}
        >
          <nav
            className="flex flex-col min-h-screen items-center py-8"
            aria-label="mobile"
          >
            <a
              className="w-full text-center py-6 hover:opacity-90"
              //   href="#hero"
              //   onClick={() => {
              //     setEffect(false);
              //     setShow(show ? false : true);
              //   }}
            >
              Home
            </a>
            <a
              className="w-full text-center py-6 hover:opacity-90"
              //   href="#rockets"
              //   onClick={() => {
              //     setEffect(false);
              //     setShow(show ? false : true);
              //   }}
            >
              Our Rockets
            </a>
            <a
              className="w-full text-center py-6 hover:opacity-90"
              //   href="#testimonials"
              //   onClick={() => {
              //     setEffect(false);
              //     setShow(show ? false : true);
              //   }}
            >
              Testimonials
            </a>
            <a
              className="w-full text-center py-6 hover:opacity-90"
              //   href="#contact"
              //   onClick={() => {
              //     setEffect(false);
              //     setShow(show ? false : true);
              //   }}
            >
              Contact Us
            </a>
            <a
              className="w-full text-center py-6 hover:opacity-90"
              //   href="#footer"
              //   onClick={() => {
              //     setEffect(false);
              //     setShow(show ? false : true);
              //   }}
            >
              Legal
            </a>
          </nav>
        </div> */}
      </header>
    </>
  );
  return content;
}
