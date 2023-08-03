'use client';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import DemonEmblem from '../../../../public/images/demonHunterEmblem.png';
import DruidEmblem from '../../../../public/images/druidEmblem.png';
import HunterEmblem from '../../../../public/images/hunterEmblem.png';
import MageEmblem from '../../../../public/images/mageEmblem.png';
import PaladinEmblem from '../../../../public/images/paladinEmblem.png';
import PriestEmblem from '../../../../public/images/priestEmblem.png';
import RougeEmblem from '../../../../public/images/rougeEmblem.png';
import ShamanEmblem from '../../../../public/images/shamanEmblem.png';
import WarlockEmblem from '../../../../public/images/warlockEmblem.png';
import WarriorEmblem from '../../../../public/images/warriorEmblem.png';
import { CardClass } from '../../../../types';
import GridContainer from '../Carousel/GridContainer';
import MobileCorusel from '../Carousel/MobileCorusel';
import DropDownBTN from '../DropDownBTN/DropDownBTN';
import Filters from '../Filters/Filters';

export interface IClasses {
  cards: CardClass[];
  className: any;
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

const classes = [
  'Mage',
  'Druid',
  'Hunter',
  'Priest',
  'Rouge',
  'Paladin',
  'Shaman',
  'Demon Hunter',
  'Warlock',
  'Warrior',
];

function changeClass(option: string) {
  interface Params {
    pathname: string;
  }
  let params: Params | null = null;
  switch (option) {
    case 'Mage':
      params = {
        pathname: '/class/Mage',
      };
      break;
    case 'Hunter':
      params = {
        pathname: '/class/Hunter',
      };
      break;
    case 'Druid':
      params = {
        pathname: '/class/Druid',
      };
      break;
    case 'Priest':
      params = {
        pathname: '/class/Priest',
      };
      break;
    case 'Rouge':
      params = {
        pathname: '/class/Rouge',
      };
      break;
    case 'Paladin':
      params = {
        pathname: '/class/Paladin',
      };
      break;
    case 'Shaman':
      params = {
        pathname: '/class/Shaman',
      };
      break;
    case 'Demon':
      params = {
        pathname: '/class/Demon',
      };
      break;
    case 'Warlock':
      params = {
        pathname: '/class/Warlock',
      };
      break;
    case 'Warrior':
      params = {
        pathname: '/class/Warrior',
      };
      break;
    default:
      return {};
  }

  // Build the complete URL with the base path, class name, and query parameters
  const url = `${params.pathname}`;

  // Redirect to the new URL
  window.location.href = url;
}

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
    case 'Rouge':
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

function getTitlDescription(classId: string) {
  switch (classId) {
    case 'Mage':
      return {
        name: 'Mage',
        title: 'My magic will tear you apart!',
        description:
          'No other hero wields the arcane with as much skill and raw power as a Mage. Using their unrivaled array of spells, Mages can wipe entire boards of minions, deal devastating amounts of damage directly to their enemy, or summon creatures of pure energy to do their bidding.',
      };
    case 'Hunter':
      return {
        name: 'Hunter',
        title: 'Let the hunt begin!',
        description:
          'According to Hunters, a ruthless offense of tooth and claw is better than any defense. These lone survivalists tap into their feral nature to take down their prey with hidden traps, tamed beasts, and volleys of baleful arrows.',
      };
    case 'Druid':
      return {
        name: 'Druid',
        title: 'Nature will rise against you!',
        description:
          'Preserve the balance by taking on the many forms of the wild and unleashing nature’s wrath upon your enemies. Druids are flexible combatants with nearly limitless choice in how to handle their opponents. Employ buffs, compel beasts, harness healing powers, or sling damaging spells against anything that threatens the natural order.',
      };
    case 'Priest':
      return {
        name: 'Priest',
        title: 'Light smiles upon the just!',
        description:
          'The Light calls, but shadows whisper. Heroes of righteousness, Priests have unmatched healing potential and can bestow powerful holy enchantments on their minions. However, there is no light without dark. Priests can also tap into the shadows to manipulate the minds of their enemies and deal mortifying psychic damage.',
      };
    case 'Rouge':
      return {
        name: 'Rouge',
        title: 'Watch your back!',
        description:
          'Using unseen blade, blinding speed, and subtle poison, Rogues can dispatch their enemies before escaping without a trace. Unleash a devastating chain of minions, spells, and attacks all within a single turn.',
      };
    case 'Paladin':
      return {
        name: 'Paladin',
        title: 'The Light protects those who wield it.',
        description:
          'Fearsome holy knights, Paladins make use of emboldened minions, healing spells, and Divine Shields to stand stalwart against their enemies and hold out for victory.',
      };
    case 'Shaman':
      return {
        name: 'Shaman',
        title: 'Storm, earth and fire, heed my call!',
        description:
          'Masters of the primal elements, Shaman manipulate nature’s forces to call up healing rains, unleash torrents of lava, or conjure spiritual allies to aid them in battle. A Shaman’s arsenal reflects the balance of the natural forces they wield: versatile and powerful minions, spells, buffs and damage.',
      };
    case 'Demon':
      return {
        name: 'Demon Hunter',
        title: 'You are not prepared!',
        description:
          'Turn the destructive forces of chaos against your enemies as the Demon Hunter. Using quick and devastating attacks, enormous demonic allies, and chaotic fel magics, show your enemies the hatred of 10,000 years!',
      };
    case 'Warlock':
      return {
        name: 'Warlock',
        title: 'I am your nightmare!',
        description:
          'Power-hungry practitioners of the fel arts, Warlocks have no qualms unleashing debilitating curses, reckless demons, or violent waves of hellfire. They’ll sacrifice anything to take down those who stand in their way, including their own vitality.',
      };
    case 'Warrior':
      return {
        name: 'Warrior',
        title: 'Victory or death!',
        description:
          'Seasoned fighters of unparalleled prowess, Warriors have mastery over an arsenal of weaponry and armor, allowing them to be both deadly combatants and formidable defenders. Taking damage only serves to enrage the Warrior and his Minions, triggering powerful effects that further enhance their fearsome abilities.',
      };
    default:
      return {
        name: '',
        title: '',
        description: '',
      };
  }
}

export default function Classes({ cards, className }: IClasses) {
  const [filterToggle, userFilterToggle] = useState(false);
  const [manaToggle, userManaToggle] = useState(false);
  const [attackToggle, userAttackToggle] = useState(false);
  const [healthToggle, userHealthToggle] = useState(false);
  const [cardTypeToggle, userCardTypeToggle] = useState(false);
  const [minionTypeToggle, userMinionTypeToggle] = useState(false);
  const [rarityToggle, userRarityToggle] = useState(false);
  const [keywordsToggle, userKeywordsToggle] = useState(false);

  const [manafilter, userManafilter] = useState(mana[0]);

  //Toggle functions
  function toggleFilter() {
    filterToggle ? userFilterToggle(false) : userFilterToggle(true);
  }
  function toggleMana() {
    userManaToggle(manaToggle ? false : true);
  }
  function toggleAttack() {
    userAttackToggle(attackToggle ? false : true);
  }
  function toggleHealth() {
    userHealthToggle(healthToggle ? false : true);
  }
  function toggleCardType() {
    userCardTypeToggle(cardTypeToggle ? false : true);
  }
  function toggleMinionType() {
    userMinionTypeToggle(minionTypeToggle ? false : true);
  }
  function toggleRarity() {
    userRarityToggle(rarityToggle ? false : true);
  }
  function toggleKeywords() {
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

  const [filtersActive, setFilterActive] = useState(false);
  const showFilters = () => {
    setFilterActive(!filtersActive);
  };

  const emblem = (): StaticImageData => {
    switch (className) {
      case 'Mage':
        return MageEmblem;
      case 'Hunter':
        return HunterEmblem;
      case 'Druid':
        return DruidEmblem;
      case 'Priest':
        return PriestEmblem;
      case 'Rouge':
        return RougeEmblem;
      case 'Paladin':
        return PaladinEmblem;
      case 'Shaman':
        return ShamanEmblem;
      case 'Demon':
        return DemonEmblem;
      case 'Warlock':
        return WarlockEmblem;
      case 'Warrior':
        return WarriorEmblem;
      default:
        return DemonEmblem;
    }
  };

  const [activeFilters, setActiveFilters] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);

  const openDropdown = () => {
    setActiveDropdown(!activeDropdown);
  };

  const openFilters = () => {
    setActiveFilters(!activeFilters);
  };

  const content = (
    <div
      className={`${getBackgroundClass(
        className
      )} bg-bgImgDemon w-full flex flex-col items-center bg-fix bg-no-repeat bg-cover bg-center min-h-screen overflow-x-hidden`}
    >
      <div
        className={`${
          activeFilters && 'hidden'
        } w-11/12 flex flex-col items-center md:flex-row md:justify-between`}
      >
        <div className="flex items-center md:ml-12 mt-24">
          <Image className="w-64" src={emblem()} alt={'Emblem'} />
          <p className="text-white font-AclonicaR text-4xl md:text-7xl mx-8">
            {getTitlDescription(className).name}
          </p>
        </div>
        <div className="md:flex items-center justify-center">
          <DropDownBTN
            images={true}
            sortBy={classes}
            label={'Classes'}
            onOptionClick={(option: any) => {
              if (option != className) {
                if (option == 'Demon Hunter') {
                  option = 'Demon';
                }
                changeClass(option);
              }
            }}
          />
        </div>
      </div>
      <div
        className={`${
          activeFilters && ' hidden'
        } mt-8 md:mt-60 items-center justify-center text-center w-3/4`}
      >
        <div className="text-gold font-AclonicaR text-5xl">
          {getTitlDescription(className).title}
        </div>
        <div className="text-white font-MonserratM text-xl my-6">
          {getTitlDescription(className).description}
        </div>
      </div>
      <Filters
        manaLabel={'manaLabel'}
        atkLabel={'atkLabel'}
        healthLabel={'healthLabel'}
        cardTypeLabel={'cardTypeLabel'}
        minionTypeLabel={'minionTypeLabel'}
        rarityLabel={'rarityLabel'}
        keywordsLabel={'keywordsLabel'}
        activeFiltersBTN={function (active: boolean): void {
          throw new Error('Function not implemented.');
        }}
      ></Filters>

      <div className="md:mt-28">
        <div className="hidden md:block mt-14">
          <GridContainer cards={cards}></GridContainer>
        </div>
        <div className="md:hidden">
          <MobileCorusel cardList={cards} />
        </div>
      </div>
    </div>
  );
  return content;
}
