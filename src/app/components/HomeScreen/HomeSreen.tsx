'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Search from '../../../../public/images/Search.svg';
import DemonHunter from '../../../../public/images/demonHunterEmblem.png';
import Druid from '../../../../public/images/druidEmblem.png';
import LogoHome from '../../../../public/images/homepage_logo 1.png';
import Hunter from '../../../../public/images/hunterEmblem.png';
import Mage from '../../../../public/images/mageEmblem.png';
import Paladin from '../../../../public/images/paladinEmblem.png';
import Priest from '../../../../public/images/priestEmblem.png';
import Rouge from '../../../../public/images/rougeEmblem.png';
import Shaman from '../../../../public/images/shamanEmblem.png';
import Warlock from '../../../../public/images/warlockEmblem.png';
import Warrior from '../../../../public/images/warriorEmblem.png';

export default function HomeSreen() {
  const [search, setSearch] = useState<string>('');
  const [disable, setDisable] = useState(true);

  const handlerSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setDisable(e.target.value == '');
  };

  const searchingData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Entrando a buscar', search);
  };

  useEffect(() => {
    setSearch('');
    setDisable(true);
  }, []);

  const content = (
    <div className="w-full h-full flex flex-col items-center bg-bgImgHome bg-no-repeat bg-fixed bg-cover">
      <div className="flex-col justify-center items-center">
        <Image src={LogoHome} alt={''} />
      </div>
      <form action="" className="md:w-5/12" onSubmit={searchingData}>
        <div className="flex bg-bgColor-Blue h-16 align-middle items-center justify-between rounded-full px-4 py-2">
          <Image src={Search} alt={''} />
          <input
            type="text"
            name="search"
            onChange={handlerSearch}
            value={search}
            placeholder="Search cards"
            className="font-AclonicaR w-full h-full mx-6 bg-transparent text-white pl-1"
          />
          <button
            type="submit"
            className={`font-AclonicaR text-Color-MenuHover mr-2 ${
              disable && 'opacity-60'
            }`}
            disabled={disable}
          >
            Search
          </button>
        </div>
      </form>

      <div className="flex justify-center mb-12">
        <div className="grid grid-cols-3 md:grid-cols-5 md:w-4/5 mt-7">
          <div className="mx-20 md:my-12 text-Color-MenuHover text-2xl hover:text-white font-AclonicaR hover:drop-shadow-blue flex flex-col items-center justify-center">
            <Link
              href={{
                pathname: '/class/Mage',
                query: {
                  class: 'Mage',
                  text: 'My magic will tear you apart!',
                  text2:
                    'No other hero wields the arcane with as much skill and raw power as a Mage. Using their unrivaled array of spells, Mages can wipe entire boards of minions, deal devastating amounts of damage directly to their enemy, or summon creatures of pure energy to do their bidding.',
                },
              }}
            >
              <Image className="hover:drop-shadow-blue" src={Mage} alt={''} />
              <p>Mage</p>
            </Link>
          </div>
          <div className="mx-14 md:mx-20 my-7 md:my-12 text-Color-MenuHover text-2xl hover:text-white font-AclonicaR hover:drop-shadow-blue flex flex-col items-center justify-center">
            <Link
              href={{
                pathname: '/class/Druid',
                query: {
                  class: 'Druid',
                  text: 'Nature will rise against you!',
                  text2:
                    'Preserve the balance by taking on the many forms of the wild and unleashing nature’s wrath upon your enemies. Druids are flexible combatants with nearly limitless choice in how to handle their opponents. Employ buffs, compel beasts, harness healing powers, or sling damaging spells against anything that threatens the natural order.',
                },
              }}
            >
              <Image className="hover:drop-shadow-blue" src={Druid} alt={''} />
              <p>Druid</p>
            </Link>
          </div>
          <div className="mx-14 md:mx-20 my-7 md:my-12 text-Color-MenuHover text-2xl hover:text-white font-AclonicaR hover:drop-shadow-blue flex flex-col items-center justify-center">
            <Link
              href={{
                pathname: '/class/Hunter',
                query: {
                  class: 'Hunter',
                  text: 'Let the hunt begin!',
                  text2:
                    'According to Hunters, a ruthless offense of tooth and claw is better than any defense. These lone survivalists tap into their feral nature to take down their prey with hidden traps, tamed beasts, and volleys of baleful arrows.',
                },
              }}
            >
              <Image className="hover:drop-shadow-blue" src={Hunter} alt={''} />
              <p>Hunter</p>
            </Link>
          </div>
          <div className="mx-14 md:mx-20 my-7 md:my-12 text-Color-MenuHover text-2xl hover:text-white font-AclonicaR hover:drop-shadow-blue flex flex-col items-center justify-center">
            <Link
              href={{
                pathname: '/class/Priest',
                query: {
                  class: 'Priest',
                  text: 'Light smiles upon the just!',
                  text2:
                    'The Light calls, but shadows whisper. Heroes of righteousness, Priests have unmatched healing potential and can bestow powerful holy enchantments on their minions. However, there is no light without dark. Priests can also tap into the shadows to manipulate the minds of their enemies and deal mortifying psychic damage.',
                },
              }}
            >
              <Image className="hover:drop-shadow-blue" src={Priest} alt={''} />
              <p>Priest</p>
            </Link>
          </div>
          <div className="mx-14 md:mx-20 my-7 md:my-12 text-Color-MenuHover text-2xl hover:text-white font-AclonicaR hover:drop-shadow-blue flex flex-col items-center justify-center">
            <Link
              href={{
                pathname: '/class/Rouge',
                query: {
                  class: 'Rouge',
                  text: 'Watch your back!',
                  text2:
                    'Using unseen blade, blinding speed, and subtle poison, Rouges can dispatch their enemies before escaping without a trace. Unleash a devastating chain of minions, spells, and attacks all within a single turn.',
                },
              }}
            >
              <Image className="hover:drop-shadow-blue" src={Rouge} alt={''} />
              <p>Rouge</p>
            </Link>
          </div>
          <div className="mx-14 md:mx-20 my-7 md:my-12 text-Color-MenuHover text-2xl hover:text-white font-AclonicaR hover:drop-shadow-blue flex flex-col items-center justify-center">
            <Link
              href={{
                pathname: '/class/Paladin',
                query: {
                  class: 'Paladin',
                  text: 'The Light protects those who wield it.',
                  text2:
                    'Fearsome holy knights, Paladins make use of emboldened minions, healing spells, and Divine Shields to stand stalwart against their enemies and hold out for victory.',
                },
              }}
            >
              <Image
                className="hover:drop-shadow-blue"
                src={Paladin}
                alt={''}
              />
              <p>Paladin</p>
            </Link>
          </div>
          <div className="mx-14 md:mx-20 my-7 md:my-12 text-Color-MenuHover text-2xl hover:text-white font-AclonicaR hover:drop-shadow-blue flex flex-col items-center justify-center">
            <Link
              href={{
                pathname: '/class/Shaman',
                query: {
                  class: 'Shaman',
                  text: 'Storm, earth and fire, heed my call!',
                  text2:
                    'Masters of the primal elements, Shaman manipulate nature’s forces to call up healing rains, unleash torrents of lava, or conjure spiritual allies to aid them in battle. A Shaman’s arsenal reflects the balance of the natural forces they wield: versatile and powerful minions, spells, buffs and damage.',
                },
              }}
            >
              <Image className="hover:drop-shadow-blue" src={Shaman} alt={''} />
              <p>Shaman</p>
            </Link>
          </div>
          <div className="mx-14 md:mx-20 my-7 md:my-12 text-Color-MenuHover text-2xl hover:text-white font-AclonicaR hover:drop-shadow-blue flex flex-col items-center justify-center">
            <Link
              href={{
                pathname: '/class/Demon',
                query: {
                  class: 'Demon Hunter',
                  text: 'You are not prepared!',
                  text2:
                    'Turn the destructive forces of chaos against your enemies as the Demon Hunter. Using quick and devastating attacks, enormous demonic allies, and chaotic fel magics, show your enemies the hatred of 10,000 years!',
                },
              }}
            >
              <Image
                className="hover:drop-shadow-blue"
                src={DemonHunter}
                alt={''}
              />
              <p>Demon Hunter</p>
            </Link>
          </div>
          <div className="mx-14 md:mx-20 my-7 md:my-12 text-Color-MenuHover text-2xl hover:text-white font-AclonicaR hover:drop-shadow-blue flex flex-col items-center justify-center">
            <Link
              href={{
                pathname: '/class/Warlock',
                query: {
                  class: 'Warlock',
                  text: 'I am your nightmare!',
                  text2:
                    'Power-hungry practitioners of the fel arts, Warlocks have no qualms unleashing debilitating curses, reckless demons, or violent waves of hellfire. They’ll sacrifice anything to take down those who stand in their way, including their own vitality.',
                },
              }}
            >
              <Image
                className="hover:drop-shadow-blue"
                src={Warlock}
                alt={''}
              />
              <p>Warlock</p>
            </Link>
          </div>
          <div className="mx-14 md:mx-20 my-7 md:my-12 text-Color-MenuHover text-2xl hover:text-white font-AclonicaR hover:drop-shadow-blue flex flex-col items-center justify-center">
            <Link
              href={{
                pathname: '/class/Warrior',
                query: {
                  class: 'Warrior',
                  text: 'Victory or death!',
                  text2:
                    'Seasoned fighters of unparalleled prowess, Warriors have mastery over an arsenal of weaponry and armor, allowing them to be both deadly combatants and formidable defenders. Taking damage only serves to enrage the Warrior and his Minions, triggering powerful effects that further enhance their fearsome abilities.',
                },
              }}
            >
              <Image
                className="hover:drop-shadow-blue"
                src={Warrior}
                alt={''}
              />
              <p>Warrior</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
  return content;
}
