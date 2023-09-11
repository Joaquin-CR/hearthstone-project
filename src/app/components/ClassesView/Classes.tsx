'use client';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import DemonEmblem from '../../../../public/images/demonHunterEmblem.webp';
import DruidEmblem from '../../../../public/images/druidEmblem.webp';
import HunterEmblem from '../../../../public/images/hunterEmblem.webp';
import MageEmblem from '../../../../public/images/mageEmblem.webp';
import PaladinEmblem from '../../../../public/images/paladinEmblem.webp';
import PriestEmblem from '../../../../public/images/priestEmblem.webp';
import RougeEmblem from '../../../../public/images/rougeEmblem.webp';
import ShamanEmblem from '../../../../public/images/shamanEmblem.webp';
import WarlockEmblem from '../../../../public/images/warlockEmblem.webp';
import WarriorEmblem from '../../../../public/images/warriorEmblem.webp';
import { CardClass } from '../../../../types';
import DropDownBTN from '../DropDownBTN/DropDownBTN';
import Filter3 from '../Filters/Filter3';
import HearthScroll from '../scrollOptions/scrollOptions';

export interface IClasses {
  cards: CardClass[];
  className: any;
}

const classes = [
  'Mage',
  'Druid',
  'Hunter',
  'Priest',
  'Rogue',
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
    case 'Rogue':
      params = {
        pathname: '/class/Rogue',
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
    case 'Rogue':
      return {
        name: 'Rogue',
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
  const [activeDropdown, setactiveDropdown] = useState(false);

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
      case 'Rogue':
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

  const content = (
    <div
      className={`flex flex-col items-center min-h-screen overflow-x-hidden`}
    >
      <div className="h-screen">
        <div
          className={`w-11/12 flex flex-col items-center md:flex-row md:justify-between`}
        >
          <div className="flex items-center md:ml-12 mt-24">
            <Image className="" src={emblem()} alt={'Emblem'} />
            <p className="text-white font-AclonicaR text-4xl md:text-7xl mx-8">
              {getTitlDescription(className).name}
            </p>
          </div>
          <div className="md:flex items-center justify-center">
            <div>
              <DropDownBTN
                images={true}
                label={'Classes'}
                onOptionClick={(option: any) => {
                  console.log('Option clicked');
                }}
                onDropdownClick={function (): void {
                  setactiveDropdown(!activeDropdown);
                }}
              />
              {activeDropdown && (
                <HearthScroll
                  list={classes}
                  images={true}
                  funct={(item) => {
                    let option = item.target.innerText;
                    if (option != className) {
                      if (option == 'Demon Hunter') {
                        option = 'Demon';
                      }
                      changeClass(option);
                    }
                  }}
                ></HearthScroll>
              )}
            </div>
          </div>
        </div>
        <div className="w-full items-center">
          <div
            className={`flex flex-col mt-8 md:mt-44 items-center justify-center text-center lg:px-72`}
          >
            <div className="text-gold font-AclonicaR text-5xl">
              {getTitlDescription(className).title}
            </div>
            <div className="text-white font-MonserratM text-xl my-6">
              {getTitlDescription(className).description}
            </div>
          </div>
        </div>
      </div>
      <Filter3 cards={cards} />
    </div>
  );
  return content;
}
