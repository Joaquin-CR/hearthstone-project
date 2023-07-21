import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import ArrowDown from '../../../../public/images/KeyboardArrowDown.svg';
import ArrowUp from '../../../../public/images/KeyboardArrowUp.svg';
import Emblema from '../../../../public/images/druidEmblem.png';

export interface IDropDown {
  sortBy: any[];
  label: string;
  images: StaticImageData[] | null;
  onOptionClick: (option: any) => void;
}

const DropDownBTN: React.FC<IDropDown> = ({
  sortBy,
  label,
  images,
  onOptionClick,
}) => {
  const sortby = [
    {
      name: 'Mana: Low to high',
      value: 'low to high',
    },
    {
      name: 'Mana: High to low',
      value: 'high to low',
    },
  ];

  const [activeDropdown, setActiveDropdown] = useState(false);
  const [valueSelected, setValueSelected] = useState(label);
  const [includeImages, setIncludesImages] = useState(images != null);

  const selectValue = (opcion: any) => {
    setValueSelected(opcion);
  };

  const openDropdown = () => {
    setActiveDropdown(!activeDropdown);
  };

  const content = (
    <>
      <div>
        <button
          className="bg-gradient-to-b from-gold via-gold_2 to-gold_3 rounded-full p-2"
          onClick={openDropdown}
        >
          <div
            className={`${!activeDropdown && 'bg-bgColor-Filters text-white'} ${
              activeDropdown && 'bg-ColorGold text-black'
            } flex text-center py-4 px-6  font-AclonicaR items-center bg-opacity-80 rounded-full`}
          >
            <p className={`${activeDropdown && ' text-black'} pl-2 mr-2`}>
              {valueSelected}
            </p>
            <Image src={activeDropdown ? ArrowUp : ArrowDown} alt={'Arrow'} />
          </div>
        </button>
        {activeDropdown && (
          <div className="absolute bg-gradient-to-b from-gold via-gold_2 to-gold_3 rounded-2xl p-1 mt-2">
            <div className="bg-bgColor-CardDescroption rounded-2xl py-3 text-white">
              <p className="font-AclonicaR hover:text-gold">
                <button
                  className={`${
                    includeImages && 'flex'
                  } items-center justify-center`}
                  onClick={() => {
                    selectValue('Opcion 1');
                    setActiveDropdown(false);
                    onOptionClick('Option 1');
                  }}
                >
                  {includeImages && (
                    <Image src={Emblema} alt="" className="w-1/5 mr-3"></Image>
                  )}
                  Opcion 1
                </button>
              </p>
              <p className="font-AclonicaR hover:text-gold">
                <button
                  className="items-center justify-center"
                  onClick={() => {
                    selectValue('Opcion 2');
                    setActiveDropdown(false);
                  }}
                >
                  Opcion 2
                </button>
              </p>
              {/* {sortBy.map((options: any) => {
                <p>{options.name}</p>;
              })} */}
            </div>
          </div>
        )}
      </div>
    </>
  );
  return content;
};

export default DropDownBTN;
