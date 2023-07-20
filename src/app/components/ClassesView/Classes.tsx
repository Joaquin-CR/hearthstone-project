'use client';
import Image, { StaticImageData } from 'next/image';
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
import DropDownBTN from '../DropDownBTN/DropDownBTN';

export interface IClasses {
  type: string;
}

const Classes: React.FC<IClasses> = ({ type }) => {
  const listClases = [
    {
      nameClass: 'Mage',
      imgUrl: '../../../../public/images/mageEmblem.png',
    },
    {
      nameClass: 'Demon',
      imgUrl: '../../../../public/images/demonHunterEmblem.png',
    },
  ];
  const backgroundClass = `bg-bgImg${type}`;
  console.log(type);

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

  const content = (
    <div
      className={`${backgroundClass} bg-bgImgDemon w-full flex items-center bg-scroll bg-no-repeat bg-cover`}
    >
      <div className="justify-between">
        <div className="flex items-center ml-12 mt-24">
          <Image className="w-64" src={emblem()} alt={'Emblem'} />
          <p className="text-white font-AclonicaR text-7xl mx-8">{type}</p>
        </div>
        <div className="flex">
          <DropDownBTN
            sortBy={listClases}
            label={'Classes'}
            onOptionClick={(option: any) => {
              console.log('Opcion seleccionada: ', option);
            }}
          />
        </div>
      </div>
      <div>Contenido</div>
    </div>
  );
  return content;
};

export default Classes;
