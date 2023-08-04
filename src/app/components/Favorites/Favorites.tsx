'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import NotFound from '../../../../public/images/no_cards_found/noCardsFound.webp';
import { CardClass } from '../../../../types';
import GridContainer from '../Carousel/GridContainer';
import MobileCorusel from '../Carousel/MobileCorusel';
import Filters from '../Filters/Filters';

export interface FavoritesProps {
  cards: CardClass[];
}

const mana = ['Mana: low to high', 'Mana: high to low'];
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

export default function Favorites({ cards }: FavoritesProps) {
  console.log('Dentro del componente', cards);
  const [cardNumber, setCardNumber] = useState(0);
  const [filtersActive, setFilterActive] = useState(false);
  const showFilters = () => {
    setFilterActive(!filtersActive);
  };

  const [activeFilters, setActiveFilters] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);

  const openDropdown = () => {
    setActiveDropdown(!activeDropdown);
  };

  const openFilters = () => {
    setActiveFilters(!activeFilters);
  };

  const [manaLabel, setManaLabel] = useState(mana[0]);
  const [atkLabel, setatkLabel] = useState(atk[0]);
  const [healthLabel, sethealthLabel] = useState(health[0]);
  const [cardTypeLabel, setcardTypeLabel] = useState(cardType[0]);
  const [minionTypeLabel, setminionTypeLabel] = useState(minionType[0]);
  const [rarityLabel, setrarityLabel] = useState(rarity[0]);
  const [keywordsLabel, setkeywordsLabel] = useState(keywords[0]);

  useEffect(() => {
    setManaLabel(manaLabel);
    setatkLabel(atkLabel);
    sethealthLabel(healthLabel);
    setcardTypeLabel(cardTypeLabel);
    setminionTypeLabel(minionTypeLabel);
    setrarityLabel(rarityLabel);
    setkeywordsLabel(keywordsLabel);
    setCardNumber(cardNumber);
  }, []);

  const content = (
    <>
      <div className="w-full flex flex-col items-center bg-bgImgHome bg-scroll bg-no-repeat bg-cover gap-10 min-h-screen relative">
        <div className="mt-20">
          <p className="font-AclonicaR font-bold text-5xl md:text-7xl text-white">
            FAVORITES
          </p>
        </div>
        {cards.length == 0 ? (
          <>
            <h1 className="font-AclonicaR text-white mt-9 text-3xl">
              No favorites yet
            </h1>
            <Image src={NotFound} alt={'Not found'}></Image>
          </>
        ) : (
          <>
            <Filters
              manaLabel={manaLabel}
              atkLabel={atkLabel}
              healthLabel={healthLabel}
              cardTypeLabel={cardTypeLabel}
              minionTypeLabel={minionTypeLabel}
              rarityLabel={rarityLabel}
              keywordsLabel={keywordsLabel}
              activeFiltersBTN={function (active: boolean): void {
                throw new Error('Function not implemented.');
              }}
            ></Filters>
            <div className="hidden md:block w-full px-8 overflow-x-hidden">
              <GridContainer cards={cards ? cards : []}></GridContainer>
            </div>
            <div className="md:hidden w-full px-8 overflow-x-hidden items-center h-full">
              <MobileCorusel cardList={cards} />
            </div>
          </>
        )}
      </div>
    </>
  );
  return content;
}
