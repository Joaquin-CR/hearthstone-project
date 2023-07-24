'use client';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import ArrowDown from '../../../../public/images/KeyboardArrowDown.svg';
import ArrowUp from '../../../../public/images/KeyboardArrowUp.svg';
import DemonEmblem from '../../../../public/images/demonHunterEmblem.png';
import DruidEmblem from '../../../../public/images/druidEmblem.png';
import FilterIcon from '../../../../public/images/filter.svg';
import FilterBlackIcon from '../../../../public/images/filterBlack.svg';
import HunterEmblem from '../../../../public/images/hunterEmblem.png';
import MageEmblem from '../../../../public/images/mageEmblem.png';
import PaladinEmblem from '../../../../public/images/paladinEmblem.png';
import PriestEmblem from '../../../../public/images/priestEmblem.png';
import RougeEmblem from '../../../../public/images/rougeEmblem.png';
import ShamanEmblem from '../../../../public/images/shamanEmblem.png';
import WarlockEmblem from '../../../../public/images/warlockEmblem.png';
import WarriorEmblem from '../../../../public/images/warriorEmblem.png';
import DropDownBTN from '../DropDownBTN/DropDownBTN';

export interface IClasses {
  type: string;
}

const Classes: React.FC<IClasses> = ({ type }) => {
  const [filtersActive, setFilterActive] = useState(false);
  const showFilters = () => {
    setFilterActive(!filtersActive);
  };

  const list = [
    {
      cardId: 'KAR_009',
      dbfId: 39169,
      name: 'Babbling Book',
      cardSet: 'One Night in Karazhan',
      type: 'Minion',
      rarity: 'Rare',
      cost: 1,
      attack: 1,
      health: 2,
      text: '<b>Battlecry:</b> Add a random Mage spell to your hand.',
      flavor:
        "His idol is the Green Hills of Stranglethorn, and he won't shut up about it.",
      artist: 'A. J. Nazzaro',
      collectible: true,
      playerClass: 'Mage',
      howToGet: 'Unlocked in the Menagerie, in One Night in Karazhan.',
      howToGetGold:
        'Crafting unlocked in the Menagerie, in One Night in Karazhan.',
      img: 'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/f37d46c1a0e83c19ddc271750d8c00ea08d8789ebed082206d92ac82735d5239.png',
      locale: 'enUS',
      mechanics: [
        {
          name: 'Battlecry',
        },
      ],
    },
    {
      cardId: 'KAR_009',
      dbfId: 39169,
      name: 'Babbling Book',
      cardSet: 'One Night in Karazhan',
      type: 'Minion',
      rarity: 'Rare',
      cost: 1,
      attack: 1,
      health: 2,
      text: '<b>Battlecry:</b> Add a random Mage spell to your hand.',
      flavor:
        "His idol is the Green Hills of Stranglethorn, and he won't shut up about it.",
      artist: 'A. J. Nazzaro',
      collectible: true,
      playerClass: 'Mage',
      howToGet: 'Unlocked in the Menagerie, in One Night in Karazhan.',
      howToGetGold:
        'Crafting unlocked in the Menagerie, in One Night in Karazhan.',
      img: 'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/f37d46c1a0e83c19ddc271750d8c00ea08d8789ebed082206d92ac82735d5239.png',
      locale: 'enUS',
      mechanics: [
        {
          name: 'Battlecry',
        },
      ],
    },
    {
      cardId: 'KAR_009',
      dbfId: 39169,
      name: 'Babbling Book',
      cardSet: 'One Night in Karazhan',
      type: 'Minion',
      rarity: 'Rare',
      cost: 1,
      attack: 1,
      health: 2,
      text: '<b>Battlecry:</b> Add a random Mage spell to your hand.',
      flavor:
        "His idol is the Green Hills of Stranglethorn, and he won't shut up about it.",
      artist: 'A. J. Nazzaro',
      collectible: true,
      playerClass: 'Mage',
      howToGet: 'Unlocked in the Menagerie, in One Night in Karazhan.',
      howToGetGold:
        'Crafting unlocked in the Menagerie, in One Night in Karazhan.',
      img: 'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/f37d46c1a0e83c19ddc271750d8c00ea08d8789ebed082206d92ac82735d5239.png',
      locale: 'enUS',
      mechanics: [
        {
          name: 'Battlecry',
        },
      ],
    },
    {
      cardId: 'CORE_KAR_009',
      dbfId: 69700,
      name: 'Babbling Book',
      cardSet: 'Core',
      type: 'Minion',
      rarity: 'Rare',
      cost: 1,
      attack: 1,
      health: 2,
      text: '<b>Battlecry:</b> Add a random Mage spell to your hand.',
      flavor:
        "His idol is the Green Hills of Stranglethorn, and he won't shut up about it.",
      artist: 'A. J. Nazzaro',
      collectible: true,
      playerClass: 'Mage',
      howToGet: 'Unlocked at level 7.',
      howToGetGold: 'Unlocked after winning 100 games as Mage.',
      img: 'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/4483f615ae9168b316a9756ef1af1c9ab2f5c62cfbfda86e96b740d70ab7bf95.png',
      locale: 'enUS',
      mechanics: [
        {
          name: 'Battlecry',
        },
      ],
    },
    {
      cardId: 'LT24_812H',
      dbfId: 89886,
      name: 'Babbling Book',
      cardSet: 'Mercenaries',
      type: 'Minion',
      rarity: 'Legendary',
      cost: 1,
      attack: 1,
      health: 1,
      text: 'All Mercs in play start as Casters.',
      elite: true,
      locale: 'enUS',
      img: 'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/f37d46c1a0e83c19ddc271750d8c00ea08d8789ebed082206d92ac82735d5239.png',
      mechanics: [
        {
          name: 'Aura',
        },
      ],
    },
  ];

  const sortBy = [
    {
      name: 'Mana: Low to high',
      value: 'low to high',
    },
    {
      name: 'Mana: High to low',
      value: 'high to low',
    },
  ];

  const listClases = [
    {
      name: 'Mage',
      imgUrl: '../../../../public/images/mageEmblem.png',
    },
    {
      name: 'Demon',
      imgUrl: '../../../../public/images/demonHunterEmblem.png',
    },
  ];

  const emblems = [
    MageEmblem,
    PriestEmblem,
    WarriorEmblem,
    PaladinEmblem,
    WarlockEmblem,
    ShamanEmblem,
    RougeEmblem,
  ];
  const backgroundClass = `bg-bgImg${type}`;
  // console.log(type);

  const emblem = (): StaticImageData => {
    switch (type) {
      case 'Mage':
        return MageEmblem;
      case 'Hunter':
        return HunterEmblem;
      case 'Druid':
        return DruidEmblem;
      case 'Priest':
        return PriestEmblem;
      case 'Rouge':
        return RougeEmblem;
      case 'Paladin':
        return PaladinEmblem;
      case 'Shaman':
        return ShamanEmblem;
      case 'Demon':
        return DemonEmblem;
      case 'Warlock':
        return WarlockEmblem;
      case 'Warrior':
        return WarriorEmblem;
      default:
        return DemonEmblem;
    }
  };

  const [activeFilters, setActiveFilters] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);

  const openDropdown = () => {
    setActiveDropdown(!activeDropdown);
  };

  const openFilters = () => {
    setActiveFilters(!activeFilters);
  };

  const content = (
    //   <div className="w-full flex flex-col items-center bg-bgImgHome bg-scroll"></div>
    <div
      className={`${backgroundClass} bg-bgImgDemon w-full flex flex-col items-center bg-fix bg-no-repeat bg-cover bg-center min-h-screen`}
    >
      <div
        className={`${
          activeFilters && 'hidden'
        } w-11/12 flex flex-col items-center md:flex-row md:justify-between`}
      >
        <div className="flex items-center md:ml-12 mt-24">
          <Image className="w-64" src={emblem()} alt={'Emblem'} />
          <p className="text-white font-AclonicaR text-4xl md:text-7xl mx-8">
            {type}
          </p>
        </div>
        <button
          className="md:hidden bg-gradient-to-b from-gold via-gold_2 to-gold_3 rounded-full p-2 w-3/5 items-center mt-7"
          onClick={openDropdown}
        >
          <div
            className={`${!activeDropdown && 'bg-bgColor-Filters text-white'} ${
              activeDropdown && 'bg-ColorGold text-black'
            } flex justify-between text-center py-4 px-6 font-AclonicaR items-center bg-opacity-80 rounded-full`}
          >
            <p
              className={`${
                activeDropdown && ' text-black'
              } items-center pl-2 mr-2`}
            >
              Classes
            </p>
            <Image src={activeDropdown ? ArrowUp : ArrowDown} alt={'Arrow'} />
          </div>
        </button>
        <div className="hidden md:flex items-center justify-center">
          <DropDownBTN
            images={emblems}
            sortBy={listClases}
            label={'Classes'}
            onOptionClick={(option: any) => {
              console.log('Opcion seleccionada: ', option);
            }}
          />
        </div>
      </div>
      <div
        className={`${
          activeFilters && ' hidden'
        } mt-60 items-center justify-center text-center w-3/4`}
      >
        <div className="text-gold font-AclonicaR text-5xl">
          Nature will rise against you!
        </div>
        <div className="text-white font-MonserratM text-xl my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          recusandae quidem harum, sint in perspiciatis illo optio dignissimos
          nulla, ad officia fugit magni tempore, ipsam incidunt iure adipisci
          repellat et.
        </div>
      </div>
      <button
        className="md:hidden bg-gradient-to-b from-gold via-gold_2 to-gold_3 rounded-full p-2 items-center mt-7"
        onClick={openFilters}
      >
        <div
          className={`${!activeFilters && 'bg-bgColor-Filters text-white'} ${
            activeFilters && 'bg-ColorGold text-black'
          } flex text-center py-4 px-6  font-AclonicaR items-center bg-opacity-80 rounded-full`}
        >
          <p className={`${activeFilters && ' text-black'} pl-2 mr-2`}>
            Manage filters
          </p>
        </div>
      </button>
      <div
        className={`${
          !activeFilters && 'hidden'
        } absolute top-68 bg-Color-FilterMobile w-full flex-col justify-center origin-top`}
      >
        <button
          className="absolute top-0 right-0 mt-4 mr-4 text-white font-AclonicaR text-4xl"
          onClick={openFilters}
        >
          X
        </button>
        <nav
          className="flex flex-col min-h-screen items-center mt-12 py-8"
          aria-label="mobile"
        >
          <div className="flex items-center">
            <p className="font-AclonicaR text-colorText-Sadows mr-5 text-xl">
              Mana
            </p>
          </div>
          <div className="flex items-center px-11">
            <p className="text-white font-AclonicaR pr-4 text-xl">Sort By:</p>
            {/* <DropDownBTN
              images={null}
              sortBy={sortBy}
              label={sortBy[0].name}
              onOptionClick={(option: any) => {
                console.log('Opcion seleccionada: ', option);
              }}
            /> */}
          </div>
          <button
            className="bg-gradient-to-b from-gold via-gold_2 to-gold_3 rounded-full p-2"
            onClick={showFilters}
          >
            <div
              className={`${
                !filtersActive && 'bg-bgColor-Filters text-white'
              } ${
                filtersActive && 'bg-ColorGold text-black'
              } flex text-center py-4 px-6  font-AclonicaR items-center bg-opacity-80 rounded-full`}
            >
              <Image
                src={filtersActive ? FilterBlackIcon : FilterIcon}
                alt={''}
              />{' '}
              <p className={`${filtersActive && ' text-black'} pl-2`}>
                Filters
              </p>
            </div>
          </button>
        </nav>
      </div>
      <div className="hidden md:block mt-28">
        <div className="mt-20 flex items-center justify-center" id="filtros">
          <div className="flex items-center">
            <p className="font-AclonicaR text-colorText-Sadows mr-5 text-xl">
              Mana
            </p>
            <div className="bg-gradient-to-b from-gold via-gold_2 to-gold_3 rounded-full p-2">
              <div className="bg-bgColor-Filters bg-opacity-80 px-6 py-4 font-AclonicaR text-white rounded-full">
                {/* hover:bg-ColorGold hover:text-black */}
                <button className="mr-1 w-12 text-xl drop-shadow-lg">0</button>
                <button className="mx-1 w-12 text-xl drop-shadow-lg">1</button>
                <button className="mx-1 w-12 text-xl drop-shadow-lg">2</button>
                <button className="mx-1 w-12 text-xl drop-shadow-lg">3</button>
                <button className="mx-1 w-12 text-xl drop-shadow-lg">4</button>
                <button className="mx-1 w-12 text-xl drop-shadow-lg">5</button>
                <button className="mx-1 w-12 text-xl drop-shadow-lg">6</button>
                <button className="mx-1 w-12 text-xl drop-shadow-lg">7</button>
                <button className="mx-1 w-12 text-xl drop-shadow-lg">8</button>
                <button className="mx-1 w-12 text-xl drop-shadow-lg">9</button>
                <button className="mx-1 w-12 text-xl drop-shadow-lg">
                  10+
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center px-11">
            <p className="text-white font-AclonicaR pr-4 text-xl">Sort By:</p>
            <DropDownBTN
              images={null}
              sortBy={sortBy}
              label={sortBy[0].name}
              onOptionClick={(option: any) => {
                console.log('Opcion seleccionada: ', option);
              }}
            />
          </div>
          <div className="">
            <button
              className="bg-gradient-to-b from-gold via-gold_2 to-gold_3 rounded-full p-2"
              onClick={showFilters}
            >
              <div
                className={`${
                  !filtersActive && 'bg-bgColor-Filters text-white'
                } ${
                  filtersActive && 'bg-ColorGold text-black'
                } flex text-center py-4 px-6  font-AclonicaR items-center bg-opacity-80 rounded-full`}
              >
                <Image
                  src={filtersActive ? FilterBlackIcon : FilterIcon}
                  alt={''}
                />{' '}
                <p className={`${filtersActive && ' text-black'} pl-2`}>
                  Filters
                </p>
              </div>
            </button>
          </div>
        </div>
        {filtersActive && (
          <div className="flex mt-8" id="filtros">
            <div className="mx-5">
              <DropDownBTN
                images={null}
                sortBy={sortBy}
                label={sortBy[0].name}
                onOptionClick={(option: any) => {
                  console.log('Opcion seleccionada: ', option);
                }}
              />
            </div>
            <div className="mx-5">
              <DropDownBTN
                images={null}
                sortBy={sortBy}
                label={sortBy[0].name}
                onOptionClick={(option: any) => {
                  console.log('Opcion seleccionada: ', option);
                }}
              />
            </div>
            <div className="mx-5">
              <DropDownBTN
                images={null}
                sortBy={sortBy}
                label={sortBy[0].name}
                onOptionClick={(option: any) => {
                  console.log('Opcion seleccionada: ', option);
                }}
              />
            </div>
            <div className="mx-5">
              <DropDownBTN
                images={null}
                sortBy={sortBy}
                label={sortBy[0].name}
                onOptionClick={(option: any) => {
                  console.log('Opcion seleccionada: ', option);
                }}
              />
            </div>
            <div className="mx-5">
              <DropDownBTN
                images={null}
                sortBy={sortBy}
                label={sortBy[0].name}
                onOptionClick={(option: any) => {
                  console.log('Opcion seleccionada: ', option);
                }}
              />
            </div>
            <div className="mx-5">
              <DropDownBTN
                images={null}
                sortBy={sortBy}
                label={sortBy[0].name}
                onOptionClick={(option: any) => {
                  console.log('Opcion seleccionada: ', option);
                }}
              />
            </div>
          </div>
        )}
        <div className="mt-14 flex">
          {list.map((card: any) => (
            <>
              {/* <Card
                name={card.name}
                img={card.img}
                cardSet={card.cardSet}
                type={card.type}
                rarity={card.rarity}
                favorite={true}
              ></Card> */}
            </>
          ))}
        </div>
      </div>
    </div>
  );
  return content;
};

export default Classes;
