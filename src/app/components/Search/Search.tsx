import { useEffect, useState } from 'react';
import { CardClass } from '../../../../types';
import GridContainer from '../Carousel/GridContainer';
import MobileCorusel from '../Carousel/MobileCorusel';
import Filters from '../Filters/Filters';

const mana = ['Mana: low to high', 'Mana: high to low'];

type SearchProps = {
  search: string[];
};

export default function Search({ search }: SearchProps) {
  console.log(search);
  let cards: CardClass[] = [];

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

  const [manaLabel, setManaLabel] = useState(mana[0]);

  useEffect(() => {
    setManaLabel(manaLabel);
  }, []);

  const content = (
    <>
      <div className="w-full flex flex-col items-center bg-bgImgHome bg-scroll bg-no-repeat bg-cover gap-10 min-h-screen relative">
        <Filters
          manaLabel={manaLabel}
          atkLabel={'Attack'}
          healthLabel={'Health'}
          cardTypeLabel={'Card Type'}
          minionTypeLabel={'Minion Type'}
          rarityLabel={'Rarity'}
          keywordsLabel={'Keyword'}
          activeFiltersBTN={function (active: boolean): void {
            console.log(active);
          }}
        ></Filters>
        <div className="hidden md:block w-full px-8 overflow-x-hidden">
          <GridContainer cards={cards ? cards : []}></GridContainer>
        </div>
        <div className="md:hidden w-full px-8 overflow-x-hidden items-center h-full">
          <MobileCorusel cardList={cards} />
        </div>
      </div>
    </>
  );
  return content;
}
