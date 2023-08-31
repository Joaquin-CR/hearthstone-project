import Image from 'next/image';
import { useState } from 'react';
import ArrowDown from '../../../../public/images/KeyboardArrowDown.svg';
import ArrowUp from '../../../../public/images/KeyboardArrowUp.svg';
import HearthScroll from '../scrollOptions/scrollOptions';

export interface IDropDown {
  open: boolean;
  sortBy: any[];
  label: string;
  images: boolean;
  onOptionClick: (option: any) => void;
  onDropdownClick: () => void;
}

const DropDownBTN: React.FC<IDropDown> = ({
  open,
  sortBy,
  label,
  images,
  onOptionClick,
  onDropdownClick,
}) => {
  const [activeDropdown, setActiveDropdown] = useState(open);
  const [valueSelected, setValueSelected] = useState(label);

  const selectValue = (opcion: any) => {
    setValueSelected(opcion);
  };

  const openDropdown = () => {
    setActiveDropdown(!activeDropdown);
    onDropdownClick();
  };

  const content = (
    <>
      <div className="w-auto">
        <button
          className="bg-gradient-to-b from-gold via-gold_2 to-gold_3 rounded-full p-2"
          onClick={openDropdown}
        >
          <div
            className={`${!activeDropdown && 'bg-bgColor-Filters text-white'} ${
              activeDropdown && 'bg-ColorGold text-black'
            } flex text-center py-4 px-6 font-AclonicaR items-center bg-opacity-80 rounded-full`}
          >
            <p className={`${activeDropdown && ' text-black'} pl-2 mr-2`}>
              {valueSelected}
            </p>
            <Image src={activeDropdown ? ArrowUp : ArrowDown} alt={'Arrow'} />
          </div>
        </button>
        {activeDropdown && (
          <HearthScroll
            images={images}
            list={sortBy}
            funct={(item) => {
              selectValue;
              onOptionClick(item.target.innerText);
            }}
          ></HearthScroll>
        )}
      </div>
    </>
  );
  return content;
};

export default DropDownBTN;
