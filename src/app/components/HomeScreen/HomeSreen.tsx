'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Search from '../../../../public/images/Search.svg';
import DemonHunter from '../../../../public/images/demonHunterEmblem.webp';
import Druid from '../../../../public/images/druidEmblem.webp';
import LogoHome from '../../../../public/images/homepage_logo 1.png';
import Hunter from '../../../../public/images/hunterEmblem.webp';
import Mage from '../../../../public/images/mageEmblem.webp';
import Paladin from '../../../../public/images/paladinEmblem.webp';
import Priest from '../../../../public/images/priestEmblem.webp';
import Rouge from '../../../../public/images/rougeEmblem.webp';
import Shaman from '../../../../public/images/shamanEmblem.webp';
import Warlock from '../../../../public/images/warlockEmblem.webp';
import Warrior from '../../../../public/images/warriorEmblem.webp';

export default function HomeSreen() {
  const router = useRouter();
  const [search, setSearch] = useState<string>('');
  const [disable, setDisable] = useState(true);

  const handlerSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setDisable(e.target.value == '');
  };

  const searchingData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${search}?q=${search}`);
  };

  useEffect(() => {
    setSearch('');
    setDisable(true);
  }, []);

  const content = (
    <div className="w-full min-h-screen flex flex-col items-center bg-bgImgHome bg-cover">
      <div className="flex flex-col justify-center items-center mt-11">
        <Image src={LogoHome} alt={''} />
      </div>
      <form action="" className="md:w-5/12" onSubmit={searchingData}>
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

      <div className="flex justify-center mb-12">
        <div className="grid lg:grid-cols-5 grid-cols-3 lg:gap-20 gap-4 align-middle justify-items-center items-center mt-7">
          {/* MAGE EMBLEM */}
          <div
            className="max-sm:w-3/5 hover:drop-shadow-blue hover:text-white text-Color-MenuHover cursor-pointer"
            onClick={() => router.push('/class/Mage')}
          >
            <Image
              className="hover:drop-shadow-blue"
              src={Mage}
              alt={''}
              height={150}
              width={150}
            />
            <p className=" text-center sm:text-2xl font-AclonicaR">Mage</p>
          </div>
          {/* DRUID EMBLEM */}
          <div
            className="max-sm:w-3/5 hover:drop-shadow-blue hover:text-white text-Color-MenuHover cursor-pointer"
            onClick={() => router.push('/class/Druid')}
          >
            <Image
              className="hover:drop-shadow-blue"
              src={Druid}
              alt={''}
              height={150}
              width={150}
            />
            <p className="text-center sm:text-2xl font-AclonicaR">Druid</p>
          </div>
          {/* HUNTER EMBLEM */}
          <div
            className="max-sm:w-3/5 hover:drop-shadow-blue hover:text-white text-Color-MenuHover cursor-pointer"
            onClick={() => router.push('/class/Hunter')}
          >
            <Image
              className="hover:drop-shadow-blue"
              src={Hunter}
              alt={''}
              height={150}
              width={150}
            />
            <p className="text-center sm:text-2xl font-AclonicaR">Hunter</p>
          </div>
          {/* PRIEST EMBLEM */}
          <div
            className="max-sm:w-3/5 hover:drop-shadow-blue hover:text-white text-Color-MenuHover cursor-pointer"
            onClick={() => router.push('/class/Priest')}
          >
            <Image
              className="hover:drop-shadow-blue"
              src={Priest}
              alt={''}
              height={150}
              width={150}
            />
            <p className="text-center sm:text-2xl font-AclonicaR">Priest</p>
          </div>
          {/* ROGUE EMBLEM */}
          <div
            className="max-sm:w-3/5 hover:drop-shadow-blue hover:text-white text-Color-MenuHover cursor-pointer"
            onClick={() => router.push('/class/Rogue')}
          >
            <Image
              className="hover:drop-shadow-blue"
              src={Rouge}
              alt={''}
              height={150}
              width={150}
            />
            <p className="text-center sm:text-2xl font-AclonicaR">Rogue</p>
          </div>
          {/* PALADIN EMBLEM */}
          <div
            className="max-sm:w-3/5 hover:drop-shadow-blue hover:text-white text-Color-MenuHover cursor-pointer"
            onClick={() => router.push('/class/Paladin')}
          >
            <Image
              className="hover:drop-shadow-blue"
              src={Paladin}
              alt={''}
              height={150}
              width={150}
            />

            <p className="text-center sm:text-2xl font-AclonicaR">Paladin</p>
          </div>
          {/* SHAMAN EMBLEM */}
          <div
            className="max-sm:w-3/5 hover:drop-shadow-blue hover:text-white text-Color-MenuHover cursor-pointer"
            onClick={() => router.push('/class/Shaman')}
          >
            <Image
              className="hover:drop-shadow-blue"
              src={Shaman}
              alt={''}
              height={150}
              width={150}
            />
            <p className="text-center sm:text-2xl font-AclonicaR">Shaman</p>
          </div>
          {/* DEMON HUNTER EMBLEM */}
          <div
            className="max-sm:w-3/5 hover:drop-shadow-blue hover:text-white text-Color-MenuHover cursor-pointer"
            onClick={() => router.push('/class/Demon')}
          >
            <Image
              className="hover:drop-shadow-blue"
              src={DemonHunter}
              alt={''}
              height={150}
              width={150}
            />
            <p className="text-center sm:text-2xl font-AclonicaR">
              Demon Hunter
            </p>
          </div>
          {/* WARLOCK EMBLEM */}
          <div
            className="max-sm:w-3/5 hover:drop-shadow-blue hover:text-white text-Color-MenuHover cursor-pointer"
            onClick={() => router.push('/class/Warlock')}
          >
            <Image
              className="hover:drop-shadow-blue"
              src={Warlock}
              alt={''}
              height={150}
              width={150}
            />
            <p className="text-center sm:text-2xl font-AclonicaR">Warlock</p>
          </div>
          {/* WARRIOR EMBLEM */}
          <div
            className="max-sm:w-3/5 hover:drop-shadow-blue hover:text-white text-Color-MenuHover cursor-pointer"
            onClick={() => router.push('/class/Warrior')}
          >
            <Image
              className="hover:drop-shadow-blue"
              src={Warrior}
              alt={''}
              height={150}
              width={150}
            />
            <p className="text-center sm:text-2xl font-AclonicaR">Warrior</p>
          </div>
        </div>
      </div>
    </div>
  );
  return content;
}
