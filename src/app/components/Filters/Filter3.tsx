'use client';
import Image from 'next/image';
import { useState } from 'react';
import { CardClass } from '../../../../types';
import GridContainer from '../Carousel/GridContainer';
import MobileCorusel from '../Carousel/MobileCorusel';
import HearthButton from '../DropDownBTN/DropdownBTN2';
import HearthScroll2 from '../scrollOptions/HearthScroll';
import down from '/public/images/KeyboardArrowDown.svg';
import filter from '/public/images/filter.svg';

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

function getBackgroundClass(classId: string): string {
  switch (classId) {
    case 'Mage':
      return ' bg-bgImgMage';
    case 'Hunter':
      return 'bg-bgImgHunters';
    case 'Druid':
      return 'bg-bgImgDruid';
    case 'Priest':
      return 'bg-bgImgPriest';
    case 'Rogue':
      return 'bg-bgImgRouge';
    case 'Paladin':
      return 'bg-bgImgPaladin';
    case 'Shaman':
      return 'bg-bgImgShaman';
    case 'DemonHunter':
      return 'bg-bgImgDemon';
    case 'Warlock':
      return 'bg-bgImgWarlock';
    case 'Warrior':
      return 'bg-bgImgWarrior';
    default:
      return '';
  }
}

type FilterProps = {
  cards: CardClass[];
};

export default function Filter3({ cards }: FilterProps) {
  const [filteredCards, userFilteredCards] = useState(cards);
  const [filterToggle, userFilterToggle] = useState(false);
  const [manaToggle, userManaToggle] = useState(false);
  const [attackToggle, userAttackToggle] = useState(false);
  const [healthToggle, userHealthToggle] = useState(false);
  const [cardTypeToggle, userCardTypeToggle] = useState(false);
  const [minionTypeToggle, userMinionTypeToggle] = useState(false);
  const [rarityToggle, userRarityToggle] = useState(false);
  const [keywordsToggle, userKeywordsToggle] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [manafilter, userManafilter] = useState(mana[0]);
  const [toggleButton, setButton] = useState(false);
  const [filterMsg, SetFilter] = useState('');
  const [windowSize, setWindowSize] = useState<{
    width?: number;
    height?: number;
  }>({});

  // useEffect(() => {
  //   // only execute all the code below in client side
  //   function handleResize() {
  //     setWindowSize({
  //       width: window.innerWidth,
  //       height: window.innerHeight,
  //     });
  //   }

  //   window.addEventListener('resize', handleResize);
  //   handleResize();

  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  //Toggle functions
  function handleToggle() {
    toggle ? setToggle(false) : setToggle(true);
  }
  function toggleFilter() {
    filterToggle ? userFilterToggle(false) : userFilterToggle(true);
  }
  function toggleMana() {
    userManaToggle(manaToggle ? false : true);
    userAttackToggle(attackToggle ? false : false);
    userHealthToggle(healthToggle ? false : false);
    userCardTypeToggle(cardTypeToggle ? false : false);
    userMinionTypeToggle(minionTypeToggle ? false : false);
    userRarityToggle(rarityToggle ? false : false);
    userKeywordsToggle(keywordsToggle ? false : false);
  }
  function toggleAttack() {
    userManaToggle(manaToggle ? false : false);
    userAttackToggle(attackToggle ? false : true);
    userHealthToggle(healthToggle ? false : false);
    userCardTypeToggle(cardTypeToggle ? false : false);
    userMinionTypeToggle(minionTypeToggle ? false : false);
    userRarityToggle(rarityToggle ? false : false);
    userKeywordsToggle(keywordsToggle ? false : false);
  }

  function toggleHealth() {
    userManaToggle(manaToggle ? false : false);
    userAttackToggle(attackToggle ? false : false);
    userHealthToggle(healthToggle ? false : true);
    userCardTypeToggle(cardTypeToggle ? false : false);
    userMinionTypeToggle(minionTypeToggle ? false : false);
    userRarityToggle(rarityToggle ? false : false);
    userKeywordsToggle(keywordsToggle ? false : false);
  }

  function toggleCardType() {
    userManaToggle(manaToggle ? false : false);
    userAttackToggle(attackToggle ? false : false);
    userHealthToggle(healthToggle ? false : false);
    userCardTypeToggle(cardTypeToggle ? false : true);
    userMinionTypeToggle(minionTypeToggle ? false : false);
    userRarityToggle(rarityToggle ? false : false);
    userKeywordsToggle(keywordsToggle ? false : false);
  }

  function toggleMinionType() {
    userManaToggle(manaToggle ? false : false);
    userAttackToggle(attackToggle ? false : false);
    userHealthToggle(healthToggle ? false : false);
    userCardTypeToggle(cardTypeToggle ? false : false);
    userMinionTypeToggle(minionTypeToggle ? false : true);
    userRarityToggle(rarityToggle ? false : false);
    userKeywordsToggle(keywordsToggle ? false : false);
  }

  function toggleRarity() {
    userManaToggle(manaToggle ? false : false);
    userAttackToggle(attackToggle ? false : false);
    userHealthToggle(healthToggle ? false : false);
    userCardTypeToggle(cardTypeToggle ? false : false);
    userMinionTypeToggle(minionTypeToggle ? false : false);
    userRarityToggle(rarityToggle ? false : true);
    userKeywordsToggle(keywordsToggle ? false : false);
  }

  function toggleKeywords() {
    userManaToggle(manaToggle ? false : false);
    userAttackToggle(attackToggle ? false : false);
    userHealthToggle(healthToggle ? false : false);
    userCardTypeToggle(cardTypeToggle ? false : false);
    userMinionTypeToggle(minionTypeToggle ? false : false);
    userRarityToggle(rarityToggle ? false : false);
    userKeywordsToggle(keywordsToggle ? false : true);
  }

  //Filter functions
  function userManaFilter() {
    if (manafilter === mana[0]) {
      toggleMana();
      userManafilter(mana[1]);
      toggleMana();
    } else if (manafilter === mana[1]) {
      userManafilter(mana[0]);
    }
  }

  function userAttackFilter(atk: string) {
    if (atk === 'Any Attack') {
      userFilteredCards(cards);
      setButton(false);
    } else if (atk === 'Attack: 0') {
      userFilteredCards(
        cards.filter((card) => card.attack === 0 || card.attack === '0')
      );
      setButton(true);
      SetFilter('ATK:0');
    } else if (atk === 'Attack: 1') {
      userFilteredCards(
        cards.filter((card) => card.attack === 1 || card.attack === '1')
      );
      setButton(true);
      SetFilter('ATK:1');
    } else if (atk === 'Attack: 2') {
      userFilteredCards(
        cards.filter((card) => card.attack === 2 || card.attack === '2')
      );
      setButton(true);
      SetFilter('ATK:2');
    } else if (atk === 'Attack: 3') {
      userFilteredCards(
        cards.filter((card) => card.attack === 3 || card.attack === '3')
      );
      setButton(true);
      SetFilter('ATK:3');
    } else if (atk === 'Attack: 4') {
      userFilteredCards(
        cards.filter((card) => card.attack === 4 || card.attack === '4')
      );
      setButton(true);
      SetFilter('ATK:4');
    } else if (atk === 'Attack: 5') {
      userFilteredCards(
        cards.filter((card) => card.attack === 5 || card.attack === '5')
      );
      setButton(true);
      SetFilter('ATK:5');
    } else if (atk === 'Attack: 6') {
      userFilteredCards(
        cards.filter((card) => card.attack === 6 || card.attack === '6')
      );
      setButton(true);
      SetFilter('ATK:6');
    } else if (atk === 'Attack: 7') {
      userFilteredCards(
        cards.filter((card) => card.attack === 7 || card.attack === '7')
      );
    } else if (atk === 'Attack: 8') {
      userFilteredCards(
        cards.filter((card) => card.attack === 8 || card.attack === '8')
      );
      setButton(true);
      SetFilter('ATK:8');
    } else if (atk === 'Attack: 9') {
      userFilteredCards(
        cards.filter((card) => card.attack === 9 || card.attack === '9')
      );
      setButton(true);
      SetFilter('ATK:9');
    } else if (atk === 'Attack: 10+') {
      userFilteredCards(
        cards.filter((card) => card.attack >= 10 || card.attack === '10')
      );
      setButton(true);
      SetFilter('ATK:10+');
    }
    toggleAttack();
  }

  function userHealthFilter(hlth: string) {
    if (hlth === 'Any Health') {
      userFilteredCards(cards);
      setButton(false);
    } else if (hlth === 'Health: 0') {
      userFilteredCards(
        cards.filter((card) => card.health === 0 || card.health === '0')
      );
      setButton(true);
      SetFilter('HLT:0');
    } else if (hlth === 'Health: 1') {
      userFilteredCards(
        cards.filter((card) => card.health === 1 || card.health === '1')
      );
      setButton(true);
      SetFilter('HLT:1');
    } else if (hlth === 'Health: 2') {
      userFilteredCards(
        cards.filter((card) => card.health === 2 || card.health === '2')
      );
      setButton(true);
      SetFilter('HLT:2');
    } else if (hlth === 'Health: 3') {
      userFilteredCards(
        cards.filter((card) => card.health === 3 || card.health === '3')
      );
      setButton(true);
      SetFilter('HLT:3');
    } else if (hlth === 'Health: 4') {
      userFilteredCards(
        cards.filter((card) => card.health === 4 || card.health === '4')
      );
      setButton(true);
      SetFilter('HLT:4');
    } else if (hlth === 'Health: 5') {
      userFilteredCards(
        cards.filter((card) => card.health === 5 || card.health === '5')
      );
      setButton(true);
      SetFilter('HLT:5');
    } else if (hlth === 'Health: 6') {
      userFilteredCards(
        cards.filter((card) => card.health === 6 || card.health === '6')
      );
      setButton(true);
      SetFilter('HLT:6');
    } else if (hlth === 'Health: 7') {
      userFilteredCards(
        cards.filter((card) => card.health === 7 || card.health === '7')
      );
      setButton(true);
      SetFilter('HLT:7');
    } else if (hlth === 'Health: 8') {
      userFilteredCards(
        cards.filter((card) => card.health === 8 || card.health === '8')
      );
      setButton(true);
      SetFilter('HLT:8');
    } else if (hlth === 'Health: 9') {
      userFilteredCards(
        cards.filter((card) => card.health === 9 || card.health === '9')
      );
      setButton(true);
      SetFilter('HLT:9');
    } else if (hlth === 'Health: 10+') {
      userFilteredCards(
        cards.filter((card) => card.health >= 10 || card.health === '10')
      );
      setButton(true);
      SetFilter('HLT:10+');
    }
    toggleHealth();
  }

  function userTypeFilter(type: string) {
    if (type === 'Any Type') {
      userFilteredCards(cards);
      setButton(false);
    } else if (type === 'Hero') {
      userFilteredCards(filteredCards.filter((card) => card.type === 'Hero'));
      setButton(true);
      SetFilter('HRO');
    } else if (type === 'Minion') {
      userFilteredCards(filteredCards.filter((card) => card.type === 'Minion'));
      setButton(true);
      SetFilter('MIN');
    } else if (type === 'Spell') {
      userFilteredCards(filteredCards.filter((card) => card.type === 'Spell'));
      setButton(true);
      SetFilter('SPL');
    } else if (type === 'Weapon') {
      userFilteredCards(filteredCards.filter((card) => card.type === 'Weapon'));
      setButton(true);
      SetFilter('WPN');
    } else if (type === 'Location') {
      userFilteredCards(
        filteredCards.filter((card) => card.type === 'Location')
      );
      setButton(true);
      SetFilter('LOC');
    }
    toggleCardType();
  }

  function userMinionFilter(race: string) {
    if (race === 'All') {
      userFilteredCards(cards);
      setButton(false);
    } else if (race === 'Beast') {
      userFilteredCards(filteredCards.filter((card) => card.race === 'Beast'));
      setButton(true);
      SetFilter('BST');
    } else if (race === 'Demon') {
      userFilteredCards(filteredCards.filter((card) => card.race === 'Demon'));
      setButton(true);
      SetFilter('DMN');
    } else if (race === 'Dragon') {
      userFilteredCards(filteredCards.filter((card) => card.race === 'Dragon'));
      setButton(true);
      SetFilter('DRGN');
    } else if (race === 'Elemental') {
      userFilteredCards(
        filteredCards.filter((card) => card.race === 'Elemental')
      );
      setButton(true);
      SetFilter('ELMNT');
    } else if (race === 'Mech') {
      userFilteredCards(filteredCards.filter((card) => card.race === 'Mech'));
      setButton(true);
      SetFilter('MECH');
    } else if (race === 'Murloc') {
      userFilteredCards(filteredCards.filter((card) => card.race === 'Murloc'));
      setButton(true);
      SetFilter('MRLC');
    } else if (race === 'Naga') {
      userFilteredCards(filteredCards.filter((card) => card.race === 'Naga'));
      setButton(true);
      SetFilter('NAGA');
    } else if (race === 'Pirate') {
      userFilteredCards(filteredCards.filter((card) => card.race === 'Pirate'));
      setButton(true);
      SetFilter('PRT');
    } else if (race === 'Quilboar') {
      userFilteredCards(
        filteredCards.filter((card) => card.race === 'Quilboar')
      );
      setButton(true);
      SetFilter('QLBR');
    } else if (race === 'Totem') {
      userFilteredCards(filteredCards.filter((card) => card.race === 'Totem'));
      setButton(true);
      SetFilter('TTM');
    } else if (race === 'Undead') {
      userFilteredCards(filteredCards.filter((card) => card.race >= 'Undead'));
      setButton(true);
      SetFilter('UNDD');
    }
    toggleMinionType();
  }

  function useRarityFilter(rarity: string) {
    if (rarity === 'Any Rarity') {
      userFilteredCards(cards);
      setButton(false);
    } else if (rarity === 'Common') {
      userFilteredCards(
        filteredCards.filter((card) => card.rarity === 'Common')
      );
      setButton(true);
      SetFilter('COMN');
    } else if (rarity === 'Free') {
      userFilteredCards(filteredCards.filter((card) => card.rarity === 'Free'));
      setButton(true);
      SetFilter('FREE');
    } else if (rarity === 'Rare') {
      userFilteredCards(filteredCards.filter((card) => card.rarity === 'Rare'));
      setButton(true);
      SetFilter('RARE');
    } else if (rarity === 'Epic') {
      userFilteredCards(filteredCards.filter((card) => card.rarity === 'Epic'));
      setButton(true);
      SetFilter('EPIC');
    } else if (rarity === 'Legendary') {
      userFilteredCards(
        filteredCards.filter((card) => card.rarity === 'Legendary')
      );
      setButton(true);
      SetFilter('LGND');
    }
    toggleRarity();
  }

  function useKewordFilter(mechanics: string) {
    if (mechanics === 'Any Keyword') {
      userFilteredCards(cards);
      setButton(false);
    } else if (mechanics === 'Adapt') {
      userFilteredCards(
        filteredCards.filter((card: any) => {
          if (card.mechanics) {
            card.mechanics[0].name === 'Adapt';
          }
        })
      );
      setButton(true);
      SetFilter('ADPT');
    } else if (mechanics === 'Battlecry') {
      userFilteredCards(
        filteredCards.filter((card: any) => {
          if (card.mechanics) {
            card.mechanics[0].name === 'Battlecry';
          }
        })
      );
      setButton(true);
      SetFilter('BTLC');
    } else if (mechanics === 'Charge') {
      userFilteredCards(
        filteredCards.filter((card: any) => {
          if (card.mechanics) {
            card.mechanics[0].name === 'Charge';
          }
        })
      );
      setButton(true);
      SetFilter('CHRG');
    } else if (mechanics === 'Colosal +X') {
      userFilteredCards(
        filteredCards.filter((card: any) => {
          if (card.mechanics) {
            card.mechanics[0].name === 'Colosal +X';
          }
        })
      );
      setButton(true);
      SetFilter('COLS');
    } else if (mechanics === 'Combo') {
      userFilteredCards(
        filteredCards.filter((card: any) => {
          if (card.mechanics) {
            card.mechanics[0].name === 'Combo';
          }
        })
      );
      setButton(true);
      SetFilter('CMBO');
    } else if (mechanics === 'Corpse') {
      userFilteredCards(
        filteredCards.filter((card: any) => {
          if (card.mechanics) {
            card.mechanics[0].name === 'Corpse';
          }
        })
      );
      setButton(true);
      SetFilter('CRPS');
    } else if (mechanics === 'Corrupt') {
      userFilteredCards(
        filteredCards.filter((card: any) => {
          if (card.mechanics) {
            card.mechanics[0].name === 'Corrupt';
          }
        })
      );
      setButton(true);
      SetFilter('CRPT');
    } else if (mechanics === 'Counter') {
      userFilteredCards(
        filteredCards.filter((card: any) => {
          if (card.mechanics) {
            card.mechanics[0].name === 'Counter';
          }
        })
      );
      setButton(true);
      SetFilter('CNTR');
    } else if (mechanics === 'Deathrattle') {
      userFilteredCards(
        filteredCards.filter((card: any) => {
          if (card.mechanics) {
            card.mechanics[0].name === 'Deathrattle';
          }
        })
      );
      setButton(true);
      SetFilter('DTRT');
    }
    toggleKeywords();
  }

  return (
    <div
      className={`sm:bg-cover bg-center-custom bg-zoomed-in flex flex-col pt-5`}
    >
      {/* MOBILE */}
      <button
        onClick={handleToggle}
        className="py-1 mt-5 self-center bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 bordergold rounded-full h-16 w-64 flex flex-col justify-center items-center justify-self-end md:hidden"
      >
        <p className="bg-bgColor-Blue w-[250px] h-[58px] text-white text-md text-center p-3 rounded-full flex flex-row justify-center items-center ">
          Manage Filters <Image src={down} alt="" className=""></Image>
        </p>
      </button>
      {toggle && (
        <div className="md:hidden animate-open-menu fixed bg-bgOptions bg-opacity-80 w-full h-full text-4xl flex flex-col left-0 z-40 top-20">
          <button
            className="place-self-end p-4 text-white"
            onClick={handleToggle}
          >
            &#10005;
          </button>
          <div className="flex flex-col items-start pl-10 text-sm gap-y-4">
            <p className="font-serif font-thin text-white text-xl">Sort by:</p>
            <div className="pb-2">
              <HearthButton
                text={manafilter}
                width={'80'}
                innerwidth={'250'}
                color={'bgOptions'}
                image2={down}
                funct={toggleMana}
              ></HearthButton>
              {manaToggle && (
                <HearthScroll2
                  list={mana}
                  funct={userManaFilter}
                ></HearthScroll2>
              )}
            </div>
            <HearthButton
              text={'Filter'}
              width={'52'}
              innerwidth={'200'}
              color="bgOptions"
              image={filter}
              funct={toggleFilter}
            ></HearthButton>
            {filterToggle && (
              <div className="flex flex-col md:grid md:gap-10 max-sm:gap-3 md:p-0 lg:grid-cols-6 md:grid-cols-3">
                <div className="">
                  <HearthButton
                    text={'Attack'}
                    width={'52'}
                    innerwidth={'200'}
                    color={'brown'}
                    image2={down}
                    funct={toggleAttack}
                  ></HearthButton>
                  {attackToggle && (
                    <HearthScroll2
                      list={atk}
                      funct={userAttackFilter}
                    ></HearthScroll2>
                  )}
                </div>
                <div className="my-2">
                  <HearthButton
                    text={'Health'}
                    width={'52'}
                    innerwidth={'200'}
                    color={'brown'}
                    image2={down}
                    funct={toggleHealth}
                  ></HearthButton>
                  {healthToggle && (
                    <HearthScroll2
                      list={health}
                      funct={userHealthFilter}
                    ></HearthScroll2>
                  )}
                </div>
                <div className="">
                  <HearthButton
                    text={'Card Type'}
                    width={'52'}
                    innerwidth={'200'}
                    color={'brown'}
                    image2={down}
                    funct={toggleCardType}
                  ></HearthButton>
                  {cardTypeToggle && (
                    <HearthScroll2
                      list={cardType}
                      funct={userTypeFilter}
                    ></HearthScroll2>
                  )}
                </div>
                <div className="my-2">
                  <HearthButton
                    text={'Minion Type'}
                    width={'52'}
                    innerwidth={'200'}
                    color={'brown'}
                    image2={down}
                    funct={toggleMinionType}
                  ></HearthButton>
                  {minionTypeToggle && (
                    <HearthScroll2
                      list={minionType}
                      funct={userMinionFilter}
                    ></HearthScroll2>
                  )}
                </div>
                <div className="">
                  <HearthButton
                    text={'Rarity'}
                    width={'52'}
                    innerwidth={'200'}
                    color={'brown'}
                    image2={down}
                    funct={toggleRarity}
                  ></HearthButton>
                  {rarityToggle && (
                    <HearthScroll2
                      list={rarity}
                      funct={useRarityFilter}
                    ></HearthScroll2>
                  )}
                </div>
                <div className="mt-2">
                  <HearthButton
                    text={'Keywords'}
                    width={'52'}
                    innerwidth={'200'}
                    color={'brown'}
                    image2={down}
                    funct={toggleKeywords}
                  ></HearthButton>
                  {keywordsToggle && (
                    <HearthScroll2
                      list={keywords}
                      funct={useKewordFilter}
                    ></HearthScroll2>
                  )}
                </div>
              </div>
            )}
            {toggleButton && (
              <div className=" pt-4">
                <button
                  onClick={() => {
                    setButton(false), userFilteredCards(cards);
                  }}
                  className=" bg-[#ffe792] px-2 py-1 rounded-full text-bgOptions"
                >
                  {filterMsg} X
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      {/* DESKTOP */}
      {/* Filter Row */}
      <div className="hidden lg:flex flex-row w-full justify-around items-start max-lg:flex-col max-lg:gap-5">
        {/* Mana bar */}
        <div className="flex flex-row items-center gap-2 pb-10">
          <p className="text-cyan-400 text-2xl font-outline-1">Mana</p>
          <div className="flex flex-row justify-center items-center bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 rounded-full px-1 text-white py-0.5">
            <div className=" flex flex-row justify-between bg-button_bg rounded-full  py-0.5">
              <button
                className=" font-outline-1 mr-1 px-3 text-xl drop-shadow-lg "
                onClick={() => {
                  // userFilteredCards(
                  //   filteredCards.filter(
                  //     (card: any) => card.mana! === 0 || card.mana! === '0'
                  //   )
                  // );
                }}
              >
                0
              </button>
              <button
                className="font-outline-1 mr-1 px-3 text-xl drop-shadow-lg"
                onClick={() => {
                  // userFilteredCards(
                  //   filteredCards.filter(
                  //     (card: any) => card.mana! === 1 || card.mana! === '1'
                  //   )
                  // );
                }}
              >
                1
              </button>
              <button
                className="font-outline-1 mr-1 px-3 text-xl drop-shadow-lg"
                onClick={() => {
                  // userFilteredCards(
                  //   filteredCards.filter(
                  //     (card: any) => card.mana! === 2 || card.mana! === '2'
                  //   )
                  // );
                }}
              >
                2
              </button>
              <button
                className="font-outline-1 mr-1 px-3 text-xl drop-shadow-lg"
                onClick={() => {
                  // userFilteredCards(
                  //   filteredCards.filter(
                  //     (card: any) => card.mana! === 3 || card.mana! === '3'
                  //   )
                  // );
                }}
              >
                3
              </button>
              <button
                className="font-outline-1 mr-1 px-3 text-xl drop-shadow-lg"
                onClick={() => {
                  // userFilteredCards(
                  //   filteredCards.filter(
                  //     (card: any) => card.mana! === 4 || card.mana! === '4'
                  //   )
                  // );
                }}
              >
                4
              </button>
              <button
                className="font-outline-1 mr-1 px-3 text-xl drop-shadow-lg"
                onClick={() => {
                  // userFilteredCards(
                  //   filteredCards.filter(
                  //     (card: any) => card.mana! === 5 || card.mana! === '5'
                  //   )
                  // );
                }}
              >
                5
              </button>
              <button
                className="font-outline-1 mr-1 px-3 text-xl drop-shadow-lg"
                onClick={() => {
                  // userFilteredCards(
                  //   filteredCards.filter(
                  //     (card: any) => card.mana! === 6 || card.mana! === '6'
                  //   )
                  // );
                }}
              >
                6
              </button>
              <button
                className="font-outline-1 mr-1 px-3 text-xl drop-shadow-lg"
                onClick={() => {
                  // userFilteredCards(
                  //   filteredCards.filter(
                  //     (card: any) => card.mana! === 7 || card.mana! === '7'
                  //   )
                  // );
                }}
              >
                7
              </button>
              <button
                className="font-outline-1 mr-1 px-3 text-xl drop-shadow-lg"
                onClick={() => {
                  // userFilteredCards(
                  //   filteredCards.filter(
                  //     (card: any) => card.mana! === 8 || card.mana! === '8'
                  //   )
                  // );
                }}
              >
                8
              </button>
              <button
                className="font-outline-1 mr-1 px-3 text-xl drop-shadow-lg"
                onClick={() => {
                  // userFilteredCards(
                  //   filteredCards.filter(
                  //     (card: any) => card.mana! === 9 || card.mana! === '9'
                  //   )
                  // );
                }}
              >
                9
              </button>
              <button
                className="font-outline-1 mr-1 px-3 text-xl drop-shadow-lg"
                onClick={() => {
                  // userFilteredCards(
                  //   filteredCards.filter(
                  //     (card: any) => card.mana! >= 10 || card.mana! === '10'
                  //   )
                  // );
                }}
              >
                10+
              </button>
            </div>
          </div>
        </div>
        {/*Sortby Row */}
        <div className="hidden lg:flex flex-row gap-5 items-start">
          <p className=" font-serif font-thin text-white text-xl">sort by:</p>
          <div className=" flex flex-col items-center gap-4 max-xl:text-xs">
            <HearthButton
              text={manafilter}
              width={'64'}
              innerwidth={'250'}
              color={'button_bg'}
              image2={down}
              funct={toggleMana}
            ></HearthButton>
            {manaToggle && <HearthScroll2 list={mana} funct={userManaFilter} />}
          </div>
          <HearthButton
            text={'Filter'}
            width={'52'}
            innerwidth={'200'}
            color="button_bg"
            image={filter}
            funct={toggleFilter}
          ></HearthButton>
        </div>
      </div>
      {/* Filters row */}
      {filterToggle && (
        <div className="flex flex-col">
          <div className="lg:flex justify-center gap-x-10 2xl:gap-x-20 max-lg:grid grid-cols-3 hidden">
            <div className="">
              <HearthButton
                text={'Attack'}
                width={'52'}
                innerwidth={'200'}
                color={'button_bg'}
                image2={down}
                funct={toggleAttack}
              ></HearthButton>
              {attackToggle && (
                <HearthScroll2 list={atk} funct={userAttackFilter} />
              )}
            </div>
            <div className="">
              <HearthButton
                text={'Health'}
                width={'52'}
                innerwidth={'200'}
                color={'button_bg'}
                image2={down}
                funct={toggleHealth}
              ></HearthButton>
              {healthToggle && (
                <HearthScroll2 list={health} funct={userHealthFilter} />
              )}
            </div>
            <div className="">
              <HearthButton
                text={'Card Type'}
                width={'52'}
                innerwidth={'200'}
                color={'button_bg'}
                image2={down}
                funct={toggleCardType}
              ></HearthButton>
              {cardTypeToggle && (
                <HearthScroll2 list={cardType} funct={userTypeFilter} />
              )}
            </div>
            <div className="">
              <HearthButton
                text={'Minion Type'}
                width={'52'}
                innerwidth={'200'}
                color={'button_bg'}
                image2={down}
                funct={toggleMinionType}
              ></HearthButton>
              {minionTypeToggle && (
                <HearthScroll2 list={minionType} funct={userMinionFilter} />
              )}
            </div>
            <div className="">
              <HearthButton
                text={'Rarity'}
                width={'52'}
                innerwidth={'200'}
                color={'button_bg'}
                image2={down}
                funct={toggleRarity}
              ></HearthButton>
              {rarityToggle && (
                <HearthScroll2 list={rarity} funct={useRarityFilter} />
              )}
            </div>
            <div className="">
              <HearthButton
                text={'Keywords'}
                width={'52'}
                innerwidth={'200'}
                color={'button_bg'}
                image2={down}
                funct={toggleKeywords}
              ></HearthButton>
              {keywordsToggle && (
                <HearthScroll2 list={keywords} funct={useKewordFilter} />
              )}
            </div>
          </div>
          {toggleButton && (
            <div className="lg:pl pt-4 max-sm:hidden">
              <button
                onClick={() => {
                  setButton(false), userFilteredCards(cards);
                }}
                className=" bg-[#ffe792] relative left-[10%] px-2 py-1 rounded-full text-bgOptions font-AclonicaR"
              >
                {filterMsg} X
              </button>
            </div>
          )}
        </div>
      )}
      <div className="hidden md:block overflow-x-hidden mt-4">
        <GridContainer cards={filteredCards}></GridContainer>
      </div>
      <div className="md:hidden px-8 overflow-x-hidden items-center h-full">
        <MobileCorusel cardList={filteredCards} />
      </div>
    </div>
  );
}
