import Image, { StaticImageData } from 'next/image';
import { useRef } from 'react';
import useDraggableScroll from 'use-draggable-scroll';
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

type HearthScrollProps = {
  list: Array<string>;
  funct?: (item: any) => void;
  images?: boolean;
};

export default function HearthScroll({
  list,
  funct,
  images,
}: HearthScrollProps) {
  const ref = useRef(null);

  const { onMouseDown } = useDraggableScroll(ref);

  const emblem = (type: string): StaticImageData => {
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

  return (
    <div className="absolute mt-2 bg-gradient-to-b from-gold via-gold_2 via-80% to-gold_3 h-auto z-10 max-sm:hidden rounded-xl flex flex-col items-center p-1">
      <div
        className="flex flex-col overflow-y-scroll bg-bgColor-CardDescroption max-h-72 text-shadow-lg shadow-black no-scrollbar rounded-xl py-3 mx-4 text-white w-full"
        ref={ref}
        onMouseDown={onMouseDown}
      >
        {list.map((item, index) => {
          return (
            <button
              key={item}
              className="hover:text-gold text-white text-left px-2 py-1 font-AclonicaR "
              onClick={funct}
            >
              <p className="flex items-center">
                {images && (
                  <Image
                    className="mx-3 pointer-events-none"
                    src={emblem(item)}
                    alt={item}
                    height={50}
                  />
                )}
                {item}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
