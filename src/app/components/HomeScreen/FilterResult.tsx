'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import CancelBTN from '../../../../public/images/cancelBtn.png';
import DontFound from '../../../../public/images/no_cards_found/noCardsFound.webp';
import { CardClass } from '../../../../types';
import Filter3 from '../Filters/Filter3';

const mana = ['Mana: low to high', 'Mana: high to low'];

type SearchProps = {
  search: string;
  cardList: CardClass[] | any[];
};
export default function FilterResult({ search, cardList }: SearchProps) {
  let cards: CardClass[] | any[] = cardList;
  const [cardsFilter, setCardFilter] = useState(cards);
  const [filtersActive, setFilterActive] = useState(false);
  const [results, setResults] = useState(cards.length != 0 ? true : false);

  const [manaLabel, setManaLabel] = useState(mana[0]);

  useEffect(() => {
    setManaLabel(manaLabel);
  }, []);

  const content = (
    <>
      <div className="md:hidden flex w-full ml-9 mt-14">
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
          <p className="text-base">CANCEL SEARCH</p>
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
          <Filter3 cards={cards} />
        </>
      ) : (
        <>
          <div className="flex flex-col justify-center items-center mt-10 pb-6">
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
            <p className="text-white font-AclonicaR text-3xl mt-11 text-center">
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
