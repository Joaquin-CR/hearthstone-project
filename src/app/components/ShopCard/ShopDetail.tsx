import Image from 'next/image';
import {
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
} from 'react';
import LeftArrow from '../../../../public/images/arrowLeftIcon.svg';
import Clock from '../../../../public/images/clockIcon.svg';
import MapPin from '../../../../public/images/mapPinIcon.svg';
import NetIcon from '../../../../public/images/netIcon.svg';
import Phone from '../../../../public/images/phoneIcon.svg';
import { PlaceClass } from '../../../../types';

type DetailShopProps = {
  place: PlaceClass;
  clickBack: () => void;
};

export default function ShopDetail({ place, clickBack }: DetailShopProps) {
  let website = '';
  if (place.website === undefined) {
    website = '';
  } else {
    website = place.website as string;
  }

  return (
    <>
      <div className="text-white font-AclonicaR">
        <div className="flex items-center">
          <Image
            className="hidden md:block"
            src={LeftArrow}
            alt={'Lef Arrow Icon'}
            onClick={clickBack}
          />
          <p className="text-2xl mx-3">{place.name}</p>
        </div>
        <div className="flex mt-14 items-center">
          <Image src={MapPin} alt={'Map Pin'} />
          <p className="mx-3">{place.vicinity}</p>
        </div>
        <div className="flex mt-5 items-center">
          <Image src={Clock} alt={'Clock Icon'} />
          <p
            className={`${
              place.opening_hours.open_now == true
                ? 'text-colorText-Sadows'
                : 'text-gold'
            } mx-3`}
          >
            {place.opening_hours.open_now == true ? 'Open' : 'Closed'}
          </p>
        </div>
        <div className="flex mt-4 w-full">
          <table className="mx-8">
            {place.opening_hours.weekday_text.map(
              (
                day:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | PromiseLikeOfReactNode
                  | null
                  | undefined,
                index: Key | null | undefined
              ) => (
                <div className="py-5" key={index}>
                  {day}
                </div>
              )
            )}
          </table>
        </div>
        <div className="flex mt-5 items-center">
          <Image src={NetIcon} alt={'Lef Arrow Icon'} />
          <p className="ml-3 text-sm md:text-base">
            {website.length > 30
              ? website.slice(0, website.length / 2) +
                '\n' +
                website.slice(website.length / 2, website.length)
              : website}
          </p>
        </div>
        <div className="flex mt-12 md:mt-8 items-center">
          <Image src={Phone} alt={'Lef Arrow Icon'} />
          <p className="mx-3">{place.phone}</p>
        </div>
      </div>
    </>
  );
}
