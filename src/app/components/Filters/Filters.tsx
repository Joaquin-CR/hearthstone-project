'use client';
import FilterIcon from '../../../../public/images/filter.svg';
import FilterBlackIcon from '../../../../public/images/filterBlack.svg';

import Image from 'next/image';
import { useState } from 'react';
import DropDownBTN from '../DropDownBTN/DropDownBTN';

type FilteProps = {
  manaLabel: string;
  atkLabel: string;
  healthLabel: string;
  cardTypeLabel: string;
  minionTypeLabel: string;
  rarityLabel: string;
  keywordsLabel: string;
  activeFiltersBTN: (active: boolean) => void;
};

const manaSort = ['Mana: low to high', 'Mana: high to low'];
const atk = [
  'Any Attack',
  'Attack: 0',
  'Attack: 1',
  'Attack: 2',
  'Attack: 3',
  'Attack: 4',
  'Attack: 5',
  'Attack: 6',
  'Attack: 7',
  'Attack: 8',
  'Attack: 9',
  'Attack: 10+',
];
const health = [
  'Any Health',
  'Health: 0',
  'Health: 1',
  'Health: 2',
  'Health: 3',
  'Health: 4',
  'Health: 5',
  'Health: 6',
  'Health: 7',
  'Health: 8',
  'Health: 9',
  'Health: 10+',
];
const cardType = ['Any Type', 'Hero', 'Minion', 'Spell', 'Weapon', 'Location'];
const minionType = [
  'Any Type',
  'All',
  'Beast',
  'Demon',
  'Dragon',
  'Elemental',
  'Mech',
  'Murloc',
  'Naga',
  'Pirate',
  'Quilboar',
  'Totem',
  'Undead',
];
const rarity = ['Any Rarity', 'Common', 'Free', 'Rare', 'Epic', 'Legendary'];
const keywords = [
  'Any Keyword',
  'Adapt',
  'Battlecry',
  'Charge',
  'Colosal +X',
  'Combo',
  'Corpse',
  'Corrupt',
  'Counter',
  'Deathrattle',
];

const mana = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'];

export default function Filters({
  manaLabel,
  atkLabel,
  healthLabel,
  cardTypeLabel,
  minionTypeLabel,
  rarityLabel,
  keywordsLabel,
  activeFiltersBTN,
}: FilteProps) {
  const [activeFilters, setActiveFilters] = useState(false);
  const [filtersActive, setFilterActive] = useState(false);
  const openFilters = () => {
    setActiveFilters(!activeFilters);
    activeFiltersBTN(!activeFilters);
  };
  const showFilters = () => {
    setFilterActive(!filtersActive);
  };
  const content = (
    <>
      <button
        className="md:hidden bg-gradient-to-b from-gold via-gold_2 to-gold_3 rounded-full p-2 items-center mt-7"
        onClick={openFilters}
      >
        <div
          className={`${!activeFilters && 'bg-bgColor-Filters text-white'} ${
            activeFilters && 'bg-ColorGold text-black'
          } flex text-center py-4 px-6 font-AclonicaR items-center bg-opacity-80 rounded-full`}
        >
          <p className={`${activeFilters && ' text-black'} pl-2 mr-2`}>
            Manage filters
          </p>
        </div>
      </button>
      <div className="hidden md:block">
        <div className="mt-20 flex items-center justify-center" id="filtros">
          <div className="flex items-center">
            <p className="font-AclonicaR text-colorText-Sadows mr-5 text-xl">
              Mana
            </p>
            <div className="bg-gradient-to-b from-gold via-gold_2 to-gold_3 rounded-full p-2">
              <div className="bg-bgColor-Filters bg-opacity-80 px-6 py-4 font-AclonicaR text-white rounded-full">
                {/* hover:bg-ColorGold hover:text-black */}
                <button className="mr-1 w-12 text-xl drop-shadow-lg">0</button>
                <button className="my-1 w-12 text-xl drop-shadow-lg">1</button>
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
              images={false}
              sortBy={manaSort}
              label={manaLabel}
              onOptionClick={(option: any) => {
                // setManaLabel(option);
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
      </div>
      {filtersActive && (
        <div className="hidden md:flex mt-8" id="filtros">
          <div className="mx-5">
            <DropDownBTN
              images={false}
              sortBy={atk}
              label={atkLabel}
              onOptionClick={(option: any) => {
                // setatkLabel(option);
                console.log('Opcion seleccionada: ', option);
              }}
            />
          </div>
          <div className="mx-5">
            <DropDownBTN
              images={false}
              sortBy={health}
              label={healthLabel}
              onOptionClick={(option: any) => {
                // sethealthLabel(option);
                console.log('Opcion seleccionada: ', option);
              }}
            />
          </div>
          <div className="mx-5">
            <DropDownBTN
              images={false}
              sortBy={cardType}
              label={cardTypeLabel}
              onOptionClick={(option: any) => {
                // setcardTypeLabel(option);
                console.log('Opcion seleccionada: ', option);
              }}
            />
          </div>
          <div className="mx-5">
            <DropDownBTN
              images={false}
              sortBy={minionType}
              label={minionTypeLabel}
              onOptionClick={(option: any) => {
                // setminionTypeLabel(option);
                console.log('Opcion seleccionada: ', option);
              }}
            />
          </div>
          <div className="mx-5">
            <DropDownBTN
              images={false}
              sortBy={rarity}
              label={rarityLabel}
              onOptionClick={(option: any) => {
                // setrarityLabel(option);
                console.log('Opcion seleccionada: ', option);
              }}
            />
          </div>
          <div className="mx-5">
            <DropDownBTN
              images={false}
              sortBy={keywords}
              label={keywordsLabel}
              onOptionClick={(option: any) => {
                // setkeywordsLabel(option);
                console.log('Opcion seleccionada: ', option);
              }}
            />
          </div>
        </div>
      )}
      <div
        className={`${
          !activeFilters && 'hidden'
        } absolute top-68 bg-Color-FilterMobile w-full flex-col justify-center origin-top z-40`}
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
          <div className="items-center">
            <p className="font-AclonicaR text-colorText-Sadows mr-5 text-xl">
              Mana
            </p>
            <DropDownBTN
              images={false}
              sortBy={mana}
              label={mana[0]}
              onOptionClick={(option: any) => {
                console.log('Opcion seleccionada: ', option);
              }}
            />
          </div>
          <div className="items-center px-11">
            <p className="text-white font-AclonicaR pr-4 text-xl">Sort By:</p>
            <DropDownBTN
              images={false}
              sortBy={manaSort}
              label={manaSort[0]}
              onOptionClick={(option: any) => {
                console.log('Opcion seleccionada: ', option);
              }}
            />
          </div>
          <button
            className="bg-gradient-to-b from-gold via-gold_2 to-gold_3 rounded-full p-2 mt-4"
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
          {filtersActive && (
            <div className="mt-8" id="filtros">
              <div className="mx-5">
                <DropDownBTN
                  images={false}
                  sortBy={atk}
                  label={atk[0]}
                  onOptionClick={(option: any) => {
                    console.log('Opcion seleccionada: ', option);
                    // toggleAttack;
                  }}
                />
              </div>
              <div className="my-3">
                <DropDownBTN
                  images={false}
                  sortBy={health}
                  label={health[0]}
                  onOptionClick={(option: any) => {
                    console.log('Opcion seleccionada: ', option);
                  }}
                />
              </div>
              <div className="my-3">
                <DropDownBTN
                  images={false}
                  sortBy={cardType}
                  label={cardType[0]}
                  onOptionClick={(option: any) => {
                    console.log('Opcion seleccionada: ', option);
                  }}
                />
              </div>
              <div className="my-3">
                <DropDownBTN
                  images={false}
                  sortBy={minionType}
                  label={minionType[0]}
                  onOptionClick={(option: any) => {
                    console.log('Opcion seleccionada: ', option);
                  }}
                />
              </div>
              <div className="my-3">
                <DropDownBTN
                  images={false}
                  sortBy={rarity}
                  label={rarity[0]}
                  onOptionClick={(option: any) => {
                    console.log('Opcion seleccionada: ', option);
                  }}
                />
              </div>
              <div className="my-3">
                <DropDownBTN
                  images={false}
                  sortBy={keywords}
                  label={keywords[0]}
                  onOptionClick={(option: any) => {
                    console.log('Opcion seleccionada: ', option);
                  }}
                />
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
  return content;
}
