'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import CancelBTN from '../../../../public/images/cancelBtn.png';
import DontFound from '../../../../public/images/no_cards_found/noCardsFound.webp';
import { CardClass } from '../../../../types';
import GridContainer from '../Carousel/GridContainer';
import MobileCorusel from '../Carousel/MobileCorusel';
import Filters from '../Filters/Filters';

const mana = ['Mana: low to high', 'Mana: high to low'];

type SearchProps = {
  search: string;
  cardList: CardClass[] | any[];
};
export default function FilterResult({ search, cardList }: SearchProps) {
  let cards: CardClass[] | any[] = cardList;
  const [cardsFilter, setCardFilter] = useState(cards);
  const [filtersActive, setFilterActive] = useState(false);
  const [results, setResults] = useState(cards);

  const [manaLabel, setManaLabel] = useState(mana[0]);

  useEffect(() => {
    setManaLabel(manaLabel);
  }, []);

  const content = (
    <>
      {results && (
        <>
          <div className="hidden md:block">
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
                    let f = filtro.label;
                    if (cardsFilter != null) {
                      cardsFilter.find((card: any) => {
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
                            console.log('La carta', card);
                          } else if (
                            filterValue == '10+' &&
                            parseInt(valueAttack) > 10
                          ) {
                            console.log('La carta en +10', card);
                          } else if (filterValue == 'Any') {
                            console.log('La carta en any', card);
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
                            console.log('La carta', card);
                          } else if (
                            filterValue == '10+' &&
                            valueHealth >= 10
                          ) {
                            console.log('La carta en +10', card);
                          } else if (filterValue == 'Any') {
                            console.log('La carta en any', card);
                          }
                        }
                        if (f.includes('Type')) {
                          if (card.type == filtro.value) {
                            console.log('La carta', card);
                          } else if (filtro.value == 'Any') {
                            console.log('Todos');
                          }
                        }
                        if (f.includes('Minion')) {
                          if (card.race == filtro.value) {
                            console.log('La carta', card);
                          } else if (filtro.value == 'Any') {
                            console.log('Todos');
                          }
                        }
                        if (f.includes('Rarity')) {
                          if (card.rarity == filtro.value) {
                            console.log('La carta', card);
                          } else if (filtro.value == 'Any') {
                            console.log('Todos');
                          }
                        }
                      });
                    }
                  });
                } else {
                  setFilterActive(false);
                  setCardFilter(cards);
                }
              }}
            ></Filters>
          </div>
        </>
      )}
      <div className="md:hidden flex w-full ml-9">
        <button
          className="text-gold font-AclonicaR text-xl flex"
          onClick={() => {
            let params = {
              pathname: '/',
            };

            // Build the complete URL with the base path, class name, and query parameters
            const url = `${params.pathname}`;

            // Redirect to the new URL
            window.location.href = url;
          }}
        >
          <Image className="mx-6" src={CancelBTN} alt={''} />
        </button>
      </div>
      <div className="mt-5 md:mt-12 flex items-center w-full md:mb-12">
        <p className="font-AclonicaR text-white text-2xl ml-6 md:text-5xl md:ml-32">
          {!results && '0'} Results for: &quot;{search}&quot;
        </p>
        <Image
          className="hidden mx-6 md:flex"
          src={CancelBTN}
          alt={''}
          onClick={() => {
            let params = {
              pathname: '/',
            };

            // Build the complete URL with the base path, class name, and query parameters
            const url = `${params.pathname}`;

            // Redirect to the new URL
            window.location.href = url;
          }}
        />
      </div>
      {results ? (
        <>
          <div className="hidden md:block w-full px-8 overflow-x-hidden">
            <GridContainer
              cards={filtersActive ? cardsFilter : cards}
            ></GridContainer>
          </div>
          <div className="md:hidden w-full px-8 overflow-x-hidden items-center h-full">
            <MobileCorusel cardList={filtersActive ? cardsFilter : cards} />
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col justify-center items-center mt-10">
            <Image
              className=""
              src={DontFound}
              alt={''}
              onClick={() => {
                let params = {
                  pathname: '/',
                };

                // Build the complete URL with the base path, class name, and query parameters
                const url = `${params.pathname}`;

                // Redirect to the new URL
                window.location.href = url;
              }}
            />
            <p className="text-white font-AclonicaR text-3xl mt-11">
              Blasphemy! No cards found.
            </p>
            <p
              className="font-AclonicaR text-gold underline cursor-pointer"
              onClick={() => {
                let params = {
                  pathname: '/',
                };

                // Build the complete URL with the base path, class name, and query parameters
                const url = `${params.pathname}`;

                // Redirect to the new URL
                window.location.href = url;
              }}
            >
              Your quest isn’t over! Try a new search.
            </p>
          </div>
        </>
      )}
    </>
  );
  return content;
}
