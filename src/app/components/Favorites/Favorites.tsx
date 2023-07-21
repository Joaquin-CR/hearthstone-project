'use client';
import Image from 'next/image';
import { useState } from 'react';
import dataList from '../../../../public/cardsInfo.json';
import FilterIcon from '../../../../public/images/filter.svg';
import FilterBlackIcon from '../../../../public/images/filterBlack.svg';
import Carrusel from '../Carousel/Carousel';
import DropDownBTN from '../DropDownBTN/DropDownBTN';

export default function Favorites() {
  const [filtersActive, setFilterActive] = useState(false);
  const showFilters = () => {
    setFilterActive(!filtersActive);
  };

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

  const list = dataList;
  let formatedList: any[] = [];

  if (dataList.length > 0) {
    let model: any = {
      carrouselview: [],
    };
    for (let i = 0; i < dataList.length; i++) {
      model.carrouselview.push(list[i]);
      if (i == dataList.length - 1) {
        formatedList.push(model);
      } else if (i % 10 == 9 && i != 0) {
        formatedList.push(model);
        model = {
          carrouselview: [],
        };
      }
    }
  }
  console.log('Lista formateada', formatedList);

  const content = (
    <>
      <div className="w-full flex flex-col items-center bg-bgImgHome bg-scroll bg-no-repeat bg-cover">
        <div className="mt-20">
          <p className="font-AclonicaR font-bold text-7xl text-white">
            FAVORITES
          </p>
          <div className="mt-20 flex items-center justify-center" id="filtros">
            <div className="flex items-center">
              <p className="font-AclonicaR text-colorText-Sadows mr-5 text-xl">
                Mana
              </p>
              <div className="bg-gradient-to-b from-gold via-gold_2 to-gold_3 rounded-full p-2">
                <div className="bg-bgColor-Filters bg-opacity-80 px-6 py-4 font-AclonicaR text-white rounded-full">
                  {/* hover:bg-ColorGold hover:text-black */}
                  <button className="mr-1 w-12 text-xl drop-shadow-lg">
                    0
                  </button>
                  <button className="mx-1 w-12 text-xl drop-shadow-lg">
                    1
                  </button>
                  <button className="mx-1 w-12 text-xl drop-shadow-lg">
                    2
                  </button>
                  <button className="mx-1 w-12 text-xl drop-shadow-lg">
                    3
                  </button>
                  <button className="mx-1 w-12 text-xl drop-shadow-lg">
                    4
                  </button>
                  <button className="mx-1 w-12 text-xl drop-shadow-lg">
                    5
                  </button>
                  <button className="mx-1 w-12 text-xl drop-shadow-lg">
                    6
                  </button>
                  <button className="mx-1 w-12 text-xl drop-shadow-lg">
                    7
                  </button>
                  <button className="mx-1 w-12 text-xl drop-shadow-lg">
                    8
                  </button>
                  <button className="mx-1 w-12 text-xl drop-shadow-lg">
                    9
                  </button>
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
        </div>
        <div className="w-full px-8 mt-14 flex">
          <Carrusel items={formatedList} />
          {/* {list.map((card: any) => (
            <>
              <Card
                name={card.name}
                img={card.img}
                cardSet={card.cardSet}
                type={card.type}
                rarity={card.rarity}
                favorite={true}
              ></Card>
            </>
          ))} */}
        </div>
      </div>
    </>
  );
  return content;
}
