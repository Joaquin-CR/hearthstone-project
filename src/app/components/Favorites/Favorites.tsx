'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import arcane from '../../../../public/images/arcane/Mask group.webp';
import book from '../../../../public/images/book/Book.webp';
import crow from '../../../../public/images/crow/Mask group.webp';
import FilterIcon from '../../../../public/images/filter.svg';
import FilterBlackIcon from '../../../../public/images/filterBlack.svg';
import GridContainer from '../Carousel/GridContainer';
import DropDownBTN from '../DropDownBTN/DropDownBTN';

export default function Favorites() {
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
  const cardType = [
    'Any Type',
    'Hero',
    'Minion',
    'Spell',
    'Weapon',
    'Location',
  ];
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
  const card = {
    cardId: 'EX1_271',
    cardName: 'Arcane Missiles',
    cardSet: 'Classic',
    type: 'Spell',
    rarity: 'Common',
    attack: 0,
    health: 0,
    text: 'Deal $3 damage randomly split among all enemies.',
    race: 'Undead',
    playerClass: 'Mage',
    img: arcane,
  };
  const card2 = {
    cardId: 'EX1_272',
    cardName: 'Arcane Missiles',
    cardSet: 'Classic',
    type: 'Spell',
    rarity: 'Common',
    attack: 0,
    health: 0,
    text: 'Deal $3 damage randomly split among all enemies.',
    race: 'Undead',
    playerClass: 'Mage',
    img: arcane,
  };
  const card3 = {
    cardId: 'EX1_273',
    cardName: 'Arcane Missiles',
    cardSet: 'Classic',
    type: 'Spell',
    rarity: 'Common',
    attack: 0,
    health: 0,
    text: 'Deal $3 damage randomly split among all enemies.',
    race: 'Undead',
    playerClass: 'Mage',
    img: arcane,
  };
  const card4 = {
    cardId: 'EX1_274',
    cardName: 'Arcane Missiles',
    cardSet: 'Classic',
    type: 'Spell',
    rarity: 'Common',
    attack: 0,
    health: 0,
    text: 'Deal $3 damage randomly split among all enemies.',
    race: 'Undead',
    playerClass: 'Mage',
    img: crow,
  };
  const card5 = {
    cardId: 'EX1_275',
    cardName: 'Arcane Missiles',
    cardSet: 'Classic',
    type: 'Spell',
    rarity: 'Common',
    attack: 0,
    health: 0,
    text: 'Deal $3 damage randomly split among all enemies.',
    race: 'Undead',
    playerClass: 'Mage',
    img: arcane,
  };
  const card6 = {
    cardId: 'EX1_276',
    cardName: 'Arcane Missiles',
    cardSet: 'Classic',
    type: 'Spell',
    rarity: 'Common',
    attack: 0,
    health: 0,
    text: 'Deal $3 damage randomly split among all enemies.',
    race: 'Undead',
    playerClass: 'Mage',
    img: crow,
  };
  const card7 = {
    cardId: 'EX1_277',
    cardName: 'Arcane Missiles',
    cardSet: 'Classic',
    type: 'Spell',
    rarity: 'Common',
    attack: 0,
    health: 0,
    text: 'Deal $3 damage randomly split among all enemies.',
    race: 'Undead',
    playerClass: 'Mage',
    img: arcane,
  };
  const card8 = {
    cardId: 'EX1_278',
    cardName: 'Arcane Missiles',
    cardSet: 'Classic',
    type: 'Spell',
    rarity: 'Common',
    attack: 0,
    health: 0,
    text: 'Deal $3 damage randomly split among all enemies.',
    race: 'Undead',
    playerClass: 'Mage',
    img: crow,
  };
  const card9 = {
    cardId: 'EX1_279',
    cardName: 'Arcane Missiles',
    cardSet: 'Classic',
    type: 'Spell',
    rarity: 'Common',
    attack: 0,
    health: 0,
    text: 'Deal $3 damage randomly split among all enemies.',
    race: 'Undead',
    playerClass: 'Mage',
    img: arcane,
  };
  const card10 = {
    cardId: 'EX1_280',
    cardName: 'Arcane Missiles',
    cardSet: 'Classic',
    type: 'Spell',
    rarity: 'Common',
    attack: 0,
    health: 0,
    text: 'Deal $3 damage randomly split among all enemies.',
    race: 'Undead',
    playerClass: 'Mage',
    img: arcane,
  };
  const card11 = {
    cardId: 'EX1_281',
    cardName: 'Arcane Missiles',
    cardSet: 'Classic',
    type: 'Spell',
    rarity: 'Common',
    attack: 0,
    health: 0,
    text: 'Deal $3 damage randomly split among all enemies.',
    race: 'Undead',
    playerClass: 'Mage',
    img: book,
  };
  const card12 = {
    cardId: 'EX1_282',
    cardName: 'Arcane Missiles',
    cardSet: 'Classic',
    type: 'Spell',
    rarity: 'Common',
    attack: 0,
    health: 0,
    text: 'Deal $3 damage randomly split among all enemies.',
    race: 'Undead',
    playerClass: 'Mage',
    img: crow,
  };
  const card13 = {
    cardId: 'EX1_283',
    cardName: 'Arcane Missiles',
    cardSet: 'Classic',
    type: 'Spell',
    rarity: 'Common',
    attack: 0,
    health: 0,
    text: 'Deal $3 damage randomly split among all enemies.',
    race: 'Undead',
    playerClass: 'Mage',
    img: book,
  };
  const card14 = {
    cardId: 'EX1_284',
    cardName: 'Arcane Missiles',
    cardSet: 'Classic',
    type: 'Spell',
    rarity: 'Common',
    attack: 0,
    health: 0,
    text: 'Deal $3 damage randomly split among all enemies.',
    race: 'Undead',
    playerClass: 'Mage',
    img: book,
  };
  const card15 = {
    cardId: 'EX1_285',
    cardName: 'Arcane Missiles',
    cardSet: 'Classic',
    type: 'Spell',
    rarity: 'Common',
    attack: 0,
    health: 0,
    text: 'Deal $3 damage randomly split among all enemies.',
    race: 'Undead',
    playerClass: 'Mage',
    img: crow,
  };
  const card16 = {
    cardId: 'EX1_286',
    cardName: 'Arcane Missiles',
    cardSet: 'Classic',
    type: 'Spell',
    rarity: 'Common',
    attack: 0,
    health: 0,
    text: 'Deal $3 damage randomly split among all enemies.',
    race: 'Undead',
    playerClass: 'Mage',
    img: book,
  };
  const card17 = {
    cardId: 'EX1_287',
    cardName: 'Arcane Missiles',
    cardSet: 'Classic',
    type: 'Spell',
    rarity: 'Common',
    attack: 0,
    health: 0,
    text: 'Deal $3 damage randomly split among all enemies.',
    race: 'Undead',
    playerClass: 'Mage',
    img: book,
  };
  const card18 = {
    cardId: 'EX1_288',
    cardName: 'Arcane Missiles',
    cardSet: 'Classic',
    type: 'Spell',
    rarity: 'Common',
    attack: 0,
    health: 0,
    text: 'Deal $3 damage randomly split among all enemies.',
    race: 'Undead',
    playerClass: 'Mage',
    img: book,
  };
  const card19 = {
    cardId: 'EX1_289',
    cardName: 'Arcane Missiles',
    cardSet: 'Classic',
    type: 'Spell',
    rarity: 'Common',
    attack: 0,
    health: 0,
    text: 'Deal $3 damage randomly split among all enemies.',
    race: 'Undead',
    playerClass: 'Mage',
    img: crow,
  };
  const card20 = {
    cardId: 'EX1_290',
    cardName: 'Arcane Missiles',
    cardSet: 'Classic',
    type: 'Spell',
    rarity: 'Common',
    attack: 0,
    health: 0,
    text: 'Deal $3 damage randomly split among all enemies.',
    race: 'Undead',
    playerClass: 'Mage',
    img: book,
  };

  const cards = [
    card,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card10,
    card11,
    card12,
    card13,
    card14,
    card15,
    card16,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card10,
    card11,
    card12,
    card13,
    card14,
    card15,
    card16,
    card17,
    card18,
    card19,
    card20,
    card,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card10,
    card11,
    card12,
    card13,
    card14,
    card15,
    card16,
    card17,
    card18,
    card19,
    card20,
    card,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card10,
    card11,
    card12,
    card13,
    card14,
    card15,
    card16,
    card17,
    card18,
    card19,
    card20,
    card,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card10,
    card10,
    card11,
    card12,
    card13,
    card14,
    card15,
    card16,
    card12,
    card13,
    card14,
    card15,
    card16,
    card17,
    card18,
    card19,
    card20,
    card11,
    card12,
    card13,
    card14,
    card15,
    card17,
    card18,
    card19,
    card20,
    card,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card10,
    card11,
    card12,
    card13,
    card14,
    card15,
    card7,
    card8,
    card9,
    card10,
    card11,
    card12,
    card11,
    card12,
    card13,
    card14,
    card15,
    card16,
    card17,
    card18,
    card19,
    card20,
    card,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card10,
    card11,
    card12,
    card13,
    card14,
    card15,
    card16,
    card17,
    card18,
    card19,
    card20,
    card,
    card2,
    card3,
    card4,
    card5,
    card6,
    card13,
    card14,
    card15,
    card16,
    card17,
    card18,
    card19,
    card20,
    card,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card16,
    card17,
    card18,
    card19,
    card20,
    card,
    card16,
    card17,
    card18,
    card19,
    card20,
    card,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card10,
    card11,
    card12,
    card13,
    card14,
    card15,
    card16,
    card17,
    card18,
    card19,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card10,
    card16,
    card17,
    card18,
    card19,
    card20,
    card,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card10,
    card11,
    card,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card10,
    card11,
    card12,
    card13,
    card14,
    card15,

    card20,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card10,
    card11,
    card12,
    card13,
    card14,
    card15,
    card16,
    card17,
    card18,
    card19,
    card20,
    card,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card10,
    card11,
    card12,
    card13,
    card14,
    card15,
    card16,
    card17,
    card18,
    card19,
    card20,
    card,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card10,
    card11,
    card12,
    card13,
    card14,
    card15,
    card16,
    card17,
    card18,
    card19,
    card20,
    card,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card10,
    card10,
    card11,
    card12,
    card13,
    card14,
    card15,
    card16,
    card12,
    card13,
    card14,
    card15,
    card16,
    card17,
    card18,
    card19,
    card20,
    card11,
    card12,
    card13,
    card14,
    card15,
    card17,
    card18,
    card19,
    card20,
    card,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card10,
    card11,
    card12,
    card13,
    card14,
    card15,
    card7,
    card8,
    card9,
    card10,
    card11,
    card12,
    card11,
    card12,
    card13,
    card14,
    card15,
    card16,
    card17,
    card18,
    card19,
    card20,
    card,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card10,
    card11,
    card12,
    card13,
    card14,
    card15,
    card16,
    card17,
    card18,
    card19,
    card20,
    card,
    card2,
    card3,
    card4,
    card5,
    card6,
    card13,
    card14,
    card15,
    card16,
    card17,
    card18,
    card19,
    card20,
    card,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card16,
    card17,
    card18,
    card19,
    card20,
    card,
    card16,
    card17,
    card18,
    card19,
    card20,
    card,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card10,
    card11,
    card12,
    card13,
    card14,
    card15,
    card16,
    card17,
    card18,
    card19,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card10,
    card16,
    card17,
    card18,
    card19,
    card20,
    card,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card10,
    card11,
    card,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card10,
    card11,
    card12,
    card13,
    card14,
    card15,

    card20,
    card17,
    card18,
    card19,
    card20,
    card,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card10,
    card11,
    card12,
    card13,
    card14,
    card15,
    card16,
    card17,
    card18,
    card19,
    card20,
    card,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card10,
    card11,
    card12,
    card13,
    card14,
    card15,
    card16,
    card17,
    card18,
    card19,
    card20,
    card,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card10,
    card10,
    card11,
    card12,
    card13,
    card14,
    card15,
    card16,
    card12,
    card13,
    card14,
    card15,
    card16,
    card17,
    card18,
    card19,
    card20,
    card11,
    card12,
    card13,
    card14,
    card15,
    card17,
    card18,
    card19,
    card20,
    card,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card10,
    card11,
    card12,
    card13,
    card14,
    card15,
    card7,
    card8,
    card9,
    card10,
    card11,
    card12,
    card11,
    card12,
    card13,
    card14,
    card15,
    card16,
    card17,
    card18,
    card19,
    card20,
    card,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card10,
    card11,
    card12,
    card13,
    card14,
    card15,
    card16,
    card17,
    card18,
    card19,
    card20,
    card,
    card2,
    card3,
    card4,
    card5,
    card6,
    card13,
    card14,
    card15,
    card16,
    card17,
    card18,
    card19,
    card20,
    card,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card16,
    card17,
    card18,
    card19,
    card20,
    card,
    card16,
    card17,
    card18,
    card19,
    card20,
    card,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card10,
    card11,
    card12,
    card13,
    card14,
    card15,
    card16,
    card17,
    card18,
    card19,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card10,
    card16,
    card17,
    card18,
    card19,
    card20,
    card,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card10,
    card11,
    card,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card10,
    card11,
    card12,
    card13,
    card14,
    card15,
    card20,
  ];
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
  }, []);

  const content = (
    <>
      <div className="w-full flex flex-col items-center bg-bgImgHome bg-scroll bg-no-repeat bg-cover gap-10 min-h-screen relative">
        <div className="mt-20">
          <p className="font-AclonicaR font-bold text-5xl md:text-7xl text-white">
            FAVORITES
          </p>
          <button
            className="md:hidden bg-gradient-to-b from-gold via-gold_2 to-gold_3 rounded-full p-2 items-center mt-7"
            onClick={openFilters}
          >
            <div
              className={`${
                !activeFilters && 'bg-bgColor-Filters text-white'
              } ${
                activeFilters && 'bg-ColorGold text-black'
              } flex text-center py-4 px-6 font-AclonicaR items-center bg-opacity-80 rounded-full`}
            >
              <p className={`${activeFilters && ' text-black'} pl-2 mr-2`}>
                Manage filters
              </p>
            </div>
          </button>
          <div className="hidden md:block mt-28">
            <div
              className="mt-20 flex items-center justify-center"
              id="filtros"
            >
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
                <p className="text-white font-AclonicaR pr-4 text-xl">
                  Sort By:
                </p>
                <DropDownBTN
                  images={false}
                  sortBy={mana}
                  label={manaLabel}
                  onOptionClick={(option: any) => {
                    setManaLabel(option);
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
                    setatkLabel(option);
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
                    sethealthLabel(option);
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
                    setcardTypeLabel(option);
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
                    setminionTypeLabel(option);
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
                    setrarityLabel(option);
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
                    setkeywordsLabel(option);
                    console.log('Opcion seleccionada: ', option);
                  }}
                />
              </div>
            </div>
          )}
        </div>
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
              <DropDownBTN
                images={false}
                sortBy={mana}
                label={mana[0]}
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
          </nav>
        </div>
        <div className="w-full px-8 overflow-x-hidden">
          <GridContainer cards={cards}></GridContainer>
        </div>
      </div>
    </>
  );
  return content;
}
