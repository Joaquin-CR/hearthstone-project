'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Search from '../../../../public/images/Search.svg';
import DemonHunter from '../../../../public/images/demonHunterEmblem.png';
import Druid from '../../../../public/images/druidEmblem.png';
import LogoHome from '../../../../public/images/homepage_logo 1.png';
import Hunter from '../../../../public/images/hunterEmblem.png';
import Mage from '../../../../public/images/mageEmblem.png';
import Paladin from '../../../../public/images/paladinEmblem.png';
import Priest from '../../../../public/images/priestEmblem.png';
import Rouge from '../../../../public/images/rougeEmblem.png';
import Shaman from '../../../../public/images/shamanEmblem.png';
import Warlock from '../../../../public/images/warlockEmblem.png';
import Warrior from '../../../../public/images/warriorEmblem.png';

export default function HomeSreen() {
  const [search, setSearch] = useState<string>('');
  const [disable, setDisable] = useState(true);

  const handlerSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setDisable(e.target.value == '');
  };

  const searchingData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Entrando a buscar', search);
  };

  useEffect(() => {
    setSearch('');
    setDisable(true);
  }, []);

  const content = (
    <div className="w-full h-full flex flex-col items-center bg-bgImgHome bg-no-repeat bg-fixed bg-cover">
      <div className="flex-col justify-center items-center">
        <Image src={LogoHome} alt={''} />
      </div>
      <form action="" className="w-5/12" onSubmit={searchingData}>
        <div className="flex bg-bgColor-Blue h-16 align-middle items-center justify-between rounded-full px-4 py-2">
          <Image src={Search} alt={''} />
          <input
            type="text"
            name="search"
            onChange={handlerSearch}
            value={search}
            placeholder="Search cards"
            className="font-AclonicaR w-full h-full mx-6 bg-transparent text-white pl-1"
          />
          <button
            type="submit"
            className={`font-AclonicaR text-Color-MenuHover mr-2 ${
              disable && 'opacity-60'
            }`}
            disabled={disable}
          >
            Search
          </button>
        </div>
      </form>

      <div className="grid grid-cols-2 md:grid-cols-5 w-4/5 mt-7">
        <div className="mx-20 my-12 text-Color-MenuHover text-2xl hover:text-white font-AclonicaR hover:drop-shadow-blue flex flex-col items-center justify-center">
          <Link href={'/class/Mage'}>
            <Image className="hover:drop-shadow-blue" src={Mage} alt={''} />
            <p>Mage</p>
          </Link>
        </div>
        <div className="mx-20 my-12 text-Color-MenuHover text-2xl hover:text-white font-AclonicaR hover:drop-shadow-blue flex flex-col items-center justify-center">
          <Link href={'/class/Druid'}>
            <Image className="hover:drop-shadow-blue" src={Druid} alt={''} />
            <p>Druid</p>
          </Link>
        </div>
        <div className="mx-20 my-12 text-Color-MenuHover text-2xl hover:text-white font-AclonicaR hover:drop-shadow-blue flex flex-col items-center justify-center">
          <Link href={'/class/Hunter'}>
            <Image className="hover:drop-shadow-blue" src={Hunter} alt={''} />
            <p>Hunter</p>
          </Link>
        </div>

        <div className="mx-20 my-12 text-Color-MenuHover text-2xl hover:text-white font-AclonicaR hover:drop-shadow-blue flex flex-col items-center justify-center">
          <Link href={'/class/Priest'}>
            <Image className="hover:drop-shadow-blue" src={Priest} alt={''} />
            <p>Priest</p>
          </Link>
        </div>

        <div className="mx-20 my-12 text-Color-MenuHover text-2xl hover:text-white font-AclonicaR hover:drop-shadow-blue flex flex-col items-center justify-center">
          <Link href={'/class/Rouge'}>
            <Image className="hover:drop-shadow-blue" src={Rouge} alt={''} />
            <p>Rouge</p>
          </Link>
        </div>

        <div className="mx-20 my-12 text-Color-MenuHover text-2xl hover:text-white font-AclonicaR hover:drop-shadow-blue flex flex-col items-center justify-center">
          <Link href={'/class/Paladin'}>
            <Image className="hover:drop-shadow-blue" src={Paladin} alt={''} />
            <p>Paladin</p>
          </Link>
        </div>

        <div className="mx-20 my-12 text-Color-MenuHover text-2xl hover:text-white font-AclonicaR hover:drop-shadow-blue flex flex-col items-center justify-center">
          <Link href={'/class/Shaman'}>
            <Image className="hover:drop-shadow-blue" src={Shaman} alt={''} />
            <p>Shaman</p>
          </Link>
        </div>

        <div className="mx-20 my-12 text-Color-MenuHover text-2xl hover:text-white font-AclonicaR hover:drop-shadow-blue flex flex-col items-center justify-center">
          <Link href={'/class/Demon'}>
            <Image
              className="hover:drop-shadow-blue"
              src={DemonHunter}
              alt={''}
            />
            <p>Demon Hunter</p>
          </Link>
        </div>

        <div className="mx-20 my-12 text-Color-MenuHover text-2xl hover:text-white font-AclonicaR hover:drop-shadow-blue flex flex-col items-center justify-center">
          <Link href={'/class/Warlock'}>
            <Image className="hover:drop-shadow-blue" src={Warlock} alt={''} />
            <p>Warlock</p>
          </Link>
        </div>

        <div className="mx-20 my-12 text-Color-MenuHover text-2xl hover:text-white font-AclonicaR hover:drop-shadow-blue flex flex-col items-center justify-center">
          <Link href={'/class/Warrior'}>
            <Image className="hover:drop-shadow-blue" src={Warrior} alt={''} />
            <p>Warrior</p>
          </Link>
        </div>
      </div>
    </div>
  );
  return content;
}
