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

export default function Favorites({ cards }: FavoritesProps) {
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

  useEffect(() => {
    setManaLabel(manaLabel);
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
              atkLabel={'Attack'}
              healthLabel={'Health'}
              cardTypeLabel={'Card Type'}
              minionTypeLabel={'Minion Type'}
              rarityLabel={'Rarity'}
              keywordsLabel={'Keyword'}
              activeFiltersBTN={function (active: boolean): void {
                console.log(active);
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
