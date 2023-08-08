'use client';
import Image from 'next/image';
import { useState } from 'react';
import CancelBTN from '../../../../public/images/Close.svg';
import FilterIcon from '../../../../public/images/filter.svg';
import FilterBlackIcon from '../../../../public/images/filterBlack.svg';
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
  const [filtersArr, setFilterArr] = useState<boolean>(false);
  let filters: any = [];

  function checkFilters(arr: any, nuevoCampo: any): boolean {
    const existingFilter = arr.find(
      (campo: any) => campo.value === nuevoCampo.value
    );
    return !existingFilter;
  }
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
        <div className="mt-20 flex items-center justify-center">
          <div className="flex items-center">
            <p className="font-AclonicaR text-colorText-Sadows mr-5 text-xl">
              Mana
            </p>
            <div className="bg-gradient-to-b from-gold via-gold_2 to-gold_3 rounded-full p-2">
              <div className="bg-bgColor-Filters bg-opacity-80 px-6 py-4 font-AclonicaR text-white rounded-full">
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
                />
                <p className={`${filtersActive && ' text-black'} pl-2`}>
                  Filters
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
      {filtersActive && (
        <>
          <div className="hidden md:flex mt-8" id="filtros">
            <div className="mx-5">
              <DropDownBTN
                images={false}
                sortBy={atk}
                label={atkLabel}
                onOptionClick={(option: any) => {
                  let save = false;
                  let model: any = {
                    label: '',
                    value: '',
                  };
                  switch (option) {
                    case 'Any Attack':
                      model = {
                        label: 'Atk: Any',
                        value: '10+',
                      };
                      break;
                    case 'Attack: 0':
                      model = {
                        label: 'Atk: 0',
                        value: '0',
                      };
                      break;
                    case 'Attack: 1':
                      model = {
                        label: 'Atk: 1',
                        value: '1',
                      };
                      break;
                    case 'Attack: 2':
                      model = {
                        label: 'Atk: 2',
                        value: '2',
                      };
                      break;
                    case 'Attack: 3':
                      model = {
                        label: 'Atk: 3',
                        value: '3',
                      };
                      break;
                    case 'Attack: 4':
                      model = {
                        label: 'Atk: 4',
                        value: '4',
                      };
                      break;
                    case 'Attack: 5':
                      model = {
                        label: 'Atk: 5',
                        value: '5',
                      };
                      break;
                    case 'Attack: 6':
                      model = {
                        label: 'Atk: 6',
                        value: '6',
                      };
                      break;
                    case 'Attack: 7':
                      model = {
                        label: 'Atk: 7',
                        value: '7',
                      };
                      break;
                    case 'Attack: 8':
                      model = {
                        label: 'Atk: 8',
                        value: '8',
                      };
                      break;
                    case 'Attack: 9':
                      model = {
                        label: 'Atk: 9',
                        value: '9',
                      };
                      break;
                    case 'Attack: 10+':
                      model = {
                        label: 'Atk: 10+',
                        value: '10+',
                      };
                      break;
                  }
                  save = checkFilters(filters, model);
                  if (save) {
                    filters.push(model);
                    setFilterArr(true);
                  }
                  console.log('Filtros puestos', filters);
                }}
              />
            </div>
            <div className="mx-5">
              <DropDownBTN
                images={false}
                sortBy={health}
                label={healthLabel}
                onOptionClick={(option: any) => {
                  let save = false;
                  let model: any = {
                    label: '',
                    value: '',
                  };
                  switch (option) {
                    case 'Any Health':
                      model = {
                        label: 'Hlth: Any',
                        value: '10+',
                      };
                      break;
                    case 'Health: 0':
                      model = {
                        label: 'Hlth: 0',
                        value: '0',
                      };
                      break;
                    case 'Health: 1':
                      model = {
                        label: 'Hlth: 1',
                        value: '1',
                      };
                      break;
                    case 'Health: 2':
                      model = {
                        label: 'Hlth: 2',
                        value: '2',
                      };
                      break;
                    case 'Health: 3':
                      model = {
                        label: 'Hlth: 3',
                        value: '3',
                      };
                      break;
                    case 'Health: 4':
                      model = {
                        label: 'Hlth: 4',
                        value: '4',
                      };
                      break;
                    case 'Health: 5':
                      model = {
                        label: 'Hlth: 5',
                        value: '5',
                      };
                      break;
                    case 'Health: 6':
                      model = {
                        label: 'Hlth: 6',
                        value: '6',
                      };
                      break;
                    case 'Health: 7':
                      model = {
                        label: 'Hlth: 7',
                        value: '7',
                      };
                      break;
                    case 'Health: 8':
                      model = {
                        label: 'Hlth: 8',
                        value: '8',
                      };
                      break;
                    case 'Health: 9':
                      model = {
                        label: 'Hlth: 9',
                        value: '9',
                      };
                      break;
                    case 'Health: 10+':
                      model = {
                        label: 'Hlth: 10+',
                        value: '10+',
                      };
                      break;
                  }
                  save = checkFilters(filters, model);
                  if (save) {
                    filters.push(model);
                    setFilterArr(true);
                  }
                  console.log('Filtros puestos', filters);
                }}
              />
            </div>
            <div className="mx-5">
              <DropDownBTN
                images={false}
                sortBy={cardType}
                label={cardTypeLabel}
                onOptionClick={(option: any) => {
                  let save = false;
                  let model: any = {
                    label: '',
                    value: '',
                  };
                  switch (option) {
                    case 'Any Type':
                      model = {
                        label: 'Type: Any',
                        value: '10+',
                      };
                      break;
                    case 'Hero':
                      model = {
                        label: 'Type: Hero',
                        value: 'Hero',
                      };
                      break;
                    case 'Minion':
                      model = {
                        label: 'Type: Minion',
                        value: 'Minion',
                      };
                      break;
                    case 'Spell':
                      model = {
                        label: 'Type: Spell',
                        value: 'Spell',
                      };
                      break;
                    case 'Weapon':
                      model = {
                        label: 'Type: Weapon',
                        value: 'Weapon',
                      };
                      break;
                    case 'Location':
                      model = {
                        label: 'Type: Location',
                        value: 'Location',
                      };
                      break;
                  }
                  save = checkFilters(filters, model);
                  if (save) {
                    filters.push(model);
                    setFilterArr(true);
                  }
                  console.log('Filtros puestos', filters);
                }}
              />
            </div>
            <div className="mx-5">
              <DropDownBTN
                images={false}
                sortBy={minionType}
                label={minionTypeLabel}
                onOptionClick={(option: any) => {
                  let save = false;
                  let model: any = {
                    label: '',
                    value: '',
                  };
                  switch (option) {
                    case 'Any Type':
                      model = {
                        label: 'Minion: Any',
                        value: 'Any',
                      };
                      break;
                    case 'All':
                      model = {
                        label: 'Minion: All',
                        value: 'All',
                      };
                      break;
                    case 'Beast':
                      model = {
                        label: 'Minion: Beast',
                        value: 'Beast',
                      };
                      break;
                    case 'Demon':
                      model = {
                        label: 'Minion: Demon',
                        value: 'Demon',
                      };
                      break;
                    case 'Dragon':
                      model = {
                        label: 'Minion: Dragon',
                        value: 'Dragon',
                      };
                      break;
                    case 'Elemental':
                      model = {
                        label: 'Minion: Elemental',
                        value: 'Elemental',
                      };
                      break;
                    case 'Mech':
                      model = {
                        label: 'Minion: Mech',
                        value: 'Mech',
                      };
                      break;
                    case 'Murloc':
                      model = {
                        label: 'Minion: Murloc',
                        value: 'Murloc',
                      };
                      break;
                    case 'Naga':
                      model = {
                        label: 'Minion: Naga',
                        value: 'Naga',
                      };
                      break;
                    case 'Pirate':
                      model = {
                        label: 'Minion: Pirate',
                        value: 'Pirate',
                      };
                      break;
                    case 'Quilboar':
                      model = {
                        label: 'Minion: Quilboar',
                        value: 'Quilboar',
                      };
                      break;
                    case 'Totem':
                      model = {
                        label: 'Minion: Totem',
                        value: 'Totem',
                      };
                      break;
                    case 'Undead':
                      model = {
                        label: 'Minion: Undead',
                        value: 'Undead',
                      };
                      break;
                  }
                  save = checkFilters(filters, model);
                  if (save) {
                    filters.push(model);
                    setFilterArr(true);
                  }
                  console.log('Filtros puestos', filters);
                }}
              />
            </div>
            <div className="mx-5">
              <DropDownBTN
                images={false}
                sortBy={rarity}
                label={rarityLabel}
                onOptionClick={(option: any) => {
                  let save = false;
                  let model: any = {
                    label: '',
                    value: '',
                  };
                  switch (option) {
                    case 'Any Rarity':
                      model = {
                        label: 'Rarity: Any',
                        value: '10+',
                      };
                      break;
                    case 'Common':
                      model = {
                        label: 'Rarity: Common',
                        value: 'Common',
                      };
                      break;
                    case 'Free':
                      model = {
                        label: 'Rarity: Free',
                        value: 'Free',
                      };
                      break;
                    case 'Rare':
                      model = {
                        label: 'Rarity: Rare',
                        value: 'Rare',
                      };
                      break;
                    case 'Epic':
                      model = {
                        label: 'Rarity: Epic',
                        value: 'Epic',
                      };
                      break;
                    case 'Legendary':
                      model = {
                        label: 'Rarity: Legendary',
                        value: 'Legendary',
                      };
                      break;
                  }
                  save = checkFilters(filters, model);
                  if (save) {
                    filters.push(model);
                    setFilterArr(true);
                  }
                  console.log('Filtros puestos', filters);
                }}
              />
            </div>
            <div className="mx-5">
              <DropDownBTN
                images={false}
                sortBy={keywords}
                label={keywordsLabel}
                onOptionClick={(option: any) => {
                  let save = false;
                  let model: any = {
                    label: '',
                    value: '',
                  };
                  switch (option) {
                    case 'Any Keyword':
                      model = {
                        label: 'Keyword: Any',
                        value: 'Any',
                      };
                      break;
                    case 'Adapt':
                      model = {
                        label: 'Keyword: Adapt',
                        value: 'Adapt',
                      };
                      break;
                    case 'Battlecry':
                      model = {
                        label: 'Keyword: Battlecry',
                        value: 'Battlecry',
                      };
                      break;
                    case 'Charge':
                      model = {
                        label: 'Keyword: Charge',
                        value: 'Charge',
                      };
                      break;
                    case 'Colosal +X':
                      model = {
                        label: 'Keyword: Colosal +X',
                        value: 'Colosal +X',
                      };
                      break;
                    case 'Combo':
                      model = {
                        label: 'Keyword: Combo',
                        value: 'Combo',
                      };
                      break;
                    case 'Corpse':
                      model = {
                        label: 'Keyword: Corpse',
                        value: 'Corpse',
                      };
                      break;
                    case 'Corrupt':
                      model = {
                        label: 'Keyword: Corrupt',
                        value: 'Corrupt',
                      };
                      break;
                    case 'Counter':
                      model = {
                        label: 'Keyword: Counter',
                        value: 'Counter',
                      };
                      break;
                    case 'Dethrattle':
                      model = {
                        label: 'Keyword: Dethrattle',
                        value: 'Dethrattle',
                      };
                      break;
                  }
                  save = checkFilters(filters, model);
                  if (save) {
                    filters.push(model);
                    setFilterArr(true);
                  }
                  console.log('Filtros puestos', filters);
                }}
              />
            </div>
          </div>
          {filtersArr && (
            <div className="mt-8 flex">
              {filters.map((filter: any) => (
                <div key={filter.value} className="mr-4">
                  <div className="font-AclonicaR bg-ColorGold p-2 text-lg rounded-full flex">
                    <p className="font-AclonicaR mx-2">{filter.label}</p>
                    <Image
                      className="cursor-pointer"
                      src={CancelBTN}
                      alt={''}
                      onClick={() => {
                        console.log('borrar seleccion');
                        if (filter.length == 0) {
                          setFilterArr(false);
                        }
                      }}
                    ></Image>
                  </div>
                </div>
              ))}
              <button
                className="text-white font-MonserratM font-bold underline underline-offset-1"
                onClick={() => {
                  console.log('borrar selecciones');
                  filters.splice(0, filters.length);
                  setFilterArr(false);
                }}
              >
                CLEAR ALL
              </button>
            </div>
          )}
        </>
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
              onOptionClick={(option: any) => {}}
            />
          </div>
          <div className="items-center px-11">
            <p className="text-white font-AclonicaR pr-4 text-xl">Sort By:</p>
            <DropDownBTN
              images={false}
              sortBy={manaSort}
              label={manaSort[0]}
              onOptionClick={(option: any) => {}}
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
            <div className="mt-8">
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
