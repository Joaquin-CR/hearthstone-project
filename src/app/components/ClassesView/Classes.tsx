'use client';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import ArrowDown from '../../../../public/images/KeyboardArrowDown.svg';
import ArrowUp from '../../../../public/images/KeyboardArrowUp.svg';
import arcane from '../../../../public/images/arcane/Mask group.webp';
import book from '../../../../public/images/book/Book.webp';
import crow from '../../../../public/images/crow/Mask group.webp';
import DemonEmblem from '../../../../public/images/demonHunterEmblem.png';
import DruidEmblem from '../../../../public/images/druidEmblem.png';
import FilterIcon from '../../../../public/images/filter.svg';
import FilterBlackIcon from '../../../../public/images/filterBlack.svg';
import HunterEmblem from '../../../../public/images/hunterEmblem.png';
import MageEmblem from '../../../../public/images/mageEmblem.png';
import PaladinEmblem from '../../../../public/images/paladinEmblem.png';
import PriestEmblem from '../../../../public/images/priestEmblem.png';
import RougeEmblem from '../../../../public/images/rougeEmblem.png';
import ShamanEmblem from '../../../../public/images/shamanEmblem.png';
import WarlockEmblem from '../../../../public/images/warlockEmblem.png';
import WarriorEmblem from '../../../../public/images/warriorEmblem.png';
import GridContainer from '../Carousel/GridContainer';
import DropDownBTN from '../DropDownBTN/DropDownBTN';

export interface IClasses {
  type: string;
  className: any;
  title: any;
  description: any;
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

function changeClass(option: string) {
  console.log('Cambiando de clase', option);
  interface Params {
    pathname: string;
    query: {
      class: string;
      text: string;
      text2: string;
    };
  }
  let params: Params | null = null;
  switch (option) {
    case 'Mage':
      params = {
        pathname: '/class/Mage',
        query: {
          class: 'Mage',
          text: 'My magic will tear you apart!',
          text2:
            'No other hero wields the arcane with as much skill and raw power as a Mage. Using their unrivaled array of spells, Mages can wipe entire boards of minions, deal devastating amounts of damage directly to their enemy, or summon creatures of pure energy to do their bidding.',
        },
      };
      break;
    case 'Hunter':
      params = {
        pathname: '/class/Hunter',
        query: {
          class: 'Hunter',
          text: 'Let the hunt begin!',
          text2:
            'According to Hunters, a ruthless offense of tooth and claw is better than any defense. These lone survivalists tap into their feral nature to take down their prey with hidden traps, tamed beasts, and volleys of baleful arrows.',
        },
      };
      break;
    case 'Druid':
      params = {
        pathname: '/class/Druid',
        query: {
          class: 'Druid',
          text: 'Nature will rise against you!',
          text2:
            'Preserve the balance by taking on the many forms of the wild and unleashing nature’s wrath upon your enemies. Druids are flexible combatants with nearly limitless choice in how to handle their opponents. Employ buffs, compel beasts, harness healing powers, or sling damaging spells against anything that threatens the natural order.',
        },
      };
      break;
    case 'Priest':
      params = {
        pathname: '/class/Priest',
        query: {
          class: 'Priest',
          text: 'Light smiles upon the just!',
          text2:
            'The Light calls, but shadows whisper. Heroes of righteousness, Priests have unmatched healing potential and can bestow powerful holy enchantments on their minions. However, there is no light without dark. Priests can also tap into the shadows to manipulate the minds of their enemies and deal mortifying psychic damage.',
        },
      };
      break;
    case 'Rouge':
      params = {
        pathname: '/class/Rouge',
        query: {
          class: 'Rouge',
          text: 'Watch your back!',
          text2:
            'Using unseen blade, blinding speed, and subtle poison, Rouges can dispatch their enemies before escaping without a trace. Unleash a devastating chain of minions, spells, and attacks all within a single turn.',
        },
      };
      break;
    case 'Paladin':
      params = {
        pathname: '/class/Paladin',
        query: {
          class: 'Paladin',
          text: 'The Light protects those who wield it.',
          text2:
            'Fearsome holy knights, Paladins make use of emboldened minions, healing spells, and Divine Shields to stand stalwart against their enemies and hold out for victory.',
        },
      };
      break;
    case 'Shaman':
      params = {
        pathname: '/class/Shaman',
        query: {
          class: 'Shaman',
          text: 'Storm, earth and fire, heed my call!',
          text2:
            'Masters of the primal elements, Shaman manipulate nature’s forces to call up healing rains, unleash torrents of lava, or conjure spiritual allies to aid them in battle. A Shaman’s arsenal reflects the balance of the natural forces they wield: versatile and powerful minions, spells, buffs and damage.',
        },
      };
      break;
    case 'Demon':
      params = {
        pathname: '/class/Demon',
        query: {
          class: 'Demon Hunter',
          text: 'You are not prepared!',
          text2:
            'Turn the destructive forces of chaos against your enemies as the Demon Hunter. Using quick and devastating attacks, enormous demonic allies, and chaotic fel magics, show your enemies the hatred of 10,000 years!',
        },
      };
      break;
    case 'Warlock':
      params = {
        pathname: '/class/Warlock',
        query: {
          class: 'Warlock',
          text: 'I am your nightmare!',
          text2:
            'Power-hungry practitioners of the fel arts, Warlocks have no qualms unleashing debilitating curses, reckless demons, or violent waves of hellfire. They’ll sacrifice anything to take down those who stand in their way, including their own vitality.',
        },
      };
      break;
    case 'Warrior':
      params = {
        pathname: '/class/Warrior',
        query: {
          class: 'Warrior',
          text: 'Victory or death!',
          text2:
            'Seasoned fighters of unparalleled prowess, Warriors have mastery over an arsenal of weaponry and armor, allowing them to be both deadly combatants and formidable defenders. Taking damage only serves to enrage the Warrior and his Minions, triggering powerful effects that further enhance their fearsome abilities.',
        },
      };
      break;
    default:
      return {};
  }
  const searchParams = new URLSearchParams(params.query);

  // Build the complete URL with the base path, class name, and query parameters
  const url = `${params.pathname}?${searchParams.toString()}`;

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

const Classes: React.FC<IClasses> = ({
  type,
  className,
  title,
  description,
}) => {
  const [filtersActive, setFilterActive] = useState(false);
  const showFilters = () => {
    setFilterActive(!filtersActive);
  };

  const emblem = (): StaticImageData => {
    switch (type) {
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
    //   <div className="w-full flex flex-col items-center bg-bgImgHome bg-scroll"></div>
    <div
      className={`${getBackgroundClass(
        type
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
            {className}
          </p>
        </div>
        <button
          className="md:hidden bg-gradient-to-b from-gold via-gold_2 to-gold_3 rounded-full p-2 w-3/5 items-center mt-7"
          onClick={openDropdown}
        >
          <div
            className={`${!activeDropdown && 'bg-bgColor-Filters text-white'} ${
              activeDropdown && 'bg-ColorGold text-black'
            } flex justify-between text-center py-4 px-6 font-AclonicaR items-center bg-opacity-80 rounded-full`}
          >
            <p
              className={`${
                activeDropdown && ' text-black'
              } items-center pl-2 mr-2`}
            >
              Classes
            </p>
            <Image src={activeDropdown ? ArrowUp : ArrowDown} alt={'Arrow'} />
          </div>
        </button>
        <div className="hidden md:flex items-center justify-center">
          <DropDownBTN
            images={true}
            sortBy={classes}
            label={'Classes'}
            onOptionClick={(option: any) => {
              if (option != type) {
                changeClass(option);
              }
            }}
          />
        </div>
      </div>
      <div
        className={`${
          activeFilters && ' hidden'
        } mt-60 items-center justify-center text-center w-3/4`}
      >
        <div className="text-gold font-AclonicaR text-5xl">{title}</div>
        <div className="text-white font-MonserratM text-xl my-6">
          {description}
        </div>
      </div>
      <button
        className="md:hidden bg-gradient-to-b from-gold via-gold_2 to-gold_3 rounded-full p-2 items-center mt-7"
        onClick={openFilters}
      >
        <div
          className={`${!activeFilters && 'bg-bgColor-Filters text-white'} ${
            activeFilters && 'bg-ColorGold text-black'
          } flex text-center py-4 px-6  font-AclonicaR items-center bg-opacity-80 rounded-full`}
        >
          <p className={`${activeFilters && ' text-black'} pl-2 mr-2`}>
            Manage filters
          </p>
        </div>
      </button>
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
        </nav>
      </div>
      <div className="hidden md:block mt-28">
        <div className="mt-20 flex items-center justify-center" id="filtros">
          <div className="flex items-center">
            <p className="font-AclonicaR text-colorText-Sadows mr-5 text-xl">
              Mana
            </p>
            <div className="bg-gradient-to-b from-gold via-gold_2 to-gold_3 rounded-full p-2">
              <div className="bg-bgColor-Filters bg-opacity-80 px-6 py-4 font-AclonicaR text-white rounded-full">
                {/* hover:bg-ColorGold hover:text-black */}
                <button className="mr-1 w-12 text-xl drop-shadow-lg">0</button>
                <button className="mx-1 w-12 text-xl drop-shadow-lg">1</button>
                <button className="mx-1 w-12 text-xl drop-shadow-lg">2</button>
                <button className="mx-1 w-12 text-xl drop-shadow-lg">3</button>
                <button className="mx-1 w-12 text-xl drop-shadow-lg">4</button>
                <button className="mx-1 w-12 text-xl drop-shadow-lg">5</button>
                <button className="mx-1 w-12 text-xl drop-shadow-lg">6</button>
                <button className="mx-1 w-12 text-xl drop-shadow-lg">7</button>
                <button className="mx-1 w-12 text-xl drop-shadow-lg">8</button>
                <button className="mx-1 w-12 text-xl drop-shadow-lg">9</button>
                <button className="mx-1 w-12 text-xl drop-shadow-lg">
                  10+
                </button>
              </div>
            </div>
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
                images={false}
                sortBy={atk}
                label={atk[0]}
                onOptionClick={(option: any) => {
                  console.log('Opcion seleccionada: ', option);
                }}
              />
            </div>
            <div className="mx-5">
              <DropDownBTN
                images={false}
                sortBy={health}
                label={health[0]}
                onOptionClick={(option: any) => {
                  console.log('Opcion seleccionada: ', option);
                }}
              />
            </div>
            <div className="mx-5">
              <DropDownBTN
                images={false}
                sortBy={cardType}
                label={cardType[0]}
                onOptionClick={(option: any) => {
                  console.log('Opcion seleccionada: ', option);
                }}
              />
            </div>
            <div className="mx-5">
              <DropDownBTN
                images={false}
                sortBy={minionType}
                label={minionType[0]}
                onOptionClick={(option: any) => {
                  console.log('Opcion seleccionada: ', option);
                }}
              />
            </div>
            <div className="mx-5">
              <DropDownBTN
                images={false}
                sortBy={rarity}
                label={rarity[0]}
                onOptionClick={(option: any) => {
                  console.log('Opcion seleccionada: ', option);
                }}
              />
            </div>
            <div className="mx-5">
              <DropDownBTN
                images={false}
                sortBy={keywords}
                label={keywords[0]}
                onOptionClick={(option: any) => {
                  console.log('Opcion seleccionada: ', option);
                }}
              />
            </div>
          </div>
        )}
        <div className="mt-14">
          <GridContainer cards={cards}></GridContainer>
        </div>
      </div>
    </div>
  );
  return content;
};

export default Classes;
