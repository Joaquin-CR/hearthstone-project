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
  const [cardsFilter, setCardFilter] = useState(cards);
  const [filtersActive, setFilterActive] = useState(false);

  const [manaLabel, setManaLabel] = useState(mana[0]);

  useEffect(() => {
    setManaLabel(manaLabel);
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
              activeFiltersBTN={function (
                active: boolean,
                filters: any[]
              ): void {
                if (filters.length > 0) {
                  setFilterActive(active);
                  filters.map((filtro: any) => {
                    let cardsWithFilter: any[] = [];
                    let f = filtro.label;
                    cards.find((card: any) => {
                      if (f.includes('Atk')) {
                        let valueAttack = card.attack;
                        let filterValue = filtro.value;
                        if (filterValue != 'Any' && filterValue != '10+') {
                          filterValue = parseInt(filterValue);
                        }
                        if (typeof valueAttack == 'string') {
                          valueAttack = parseInt(valueAttack);
                        }
                        if (valueAttack == filterValue) {
                          cardsWithFilter.push(card);
                        } else if (
                          filterValue == '10+' &&
                          parseInt(valueAttack) > 10
                        ) {
                          cardsWithFilter.push(card);
                        } else if (filterValue == 'Any') {
                          cardsWithFilter.push(card);
                        }
                      }
                      if (f.includes('Hlth')) {
                        let valueHealth = card.health;
                        let filterValue = filtro.value;
                        if (filterValue != 'Any' && filterValue != '10+') {
                          filterValue = parseInt(filterValue);
                        }
                        if (typeof valueHealth == 'string') {
                          valueHealth = parseInt(valueHealth);
                        }
                        if (valueHealth == filterValue) {
                          cardsWithFilter.push(card);
                        } else if (filterValue == '10+' && valueHealth >= 10) {
                          cardsWithFilter.push(card);
                        } else if (filterValue == 'Any') {
                          cardsWithFilter.push(card);
                        }
                      }
                      if (f.includes('Type')) {
                        if (card.type == filtro.value) {
                          cardsWithFilter.push(card);
                        } else if (filtro.value == 'Any') {
                          cardsWithFilter.push(card);
                        }
                      }
                      if (f.includes('Minion')) {
                        if (card.race == filtro.value) {
                          cardsWithFilter.push(card);
                        } else if (filtro.value == 'Any') {
                          cardsWithFilter.push(card);
                        }
                      }
                      if (f.includes('Rarity')) {
                        if (card.rarity == filtro.value) {
                          cardsWithFilter.push(card);
                        } else if (filtro.value == 'Any') {
                          cardsWithFilter.push(card);
                        }
                      }
                    });
                    setCardFilter(cardsWithFilter);
                  });
                } else {
                  setCardFilter(cards);
                  setFilterActive(false);
                }
              }}
            ></Filters>
            <div className="hidden md:block w-full px-8 overflow-x-hidden">
              <GridContainer
                cards={filtersActive ? cardsFilter : cards}
              ></GridContainer>
            </div>
            <div className="md:hidden w-full px-8 overflow-x-hidden items-center h-full">
              <MobileCorusel cardList={filtersActive ? cardsFilter : cards} />
            </div>
          </>
        )}
      </div>
    </>
  );
  return content;
}
