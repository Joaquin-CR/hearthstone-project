'use client';
import Image from 'next/image';
import FavoriteIcon from '../../../../public/images/Favorite.svg';
import FavoriteBorderIcon from '../../../../public/images/FavoriteBorder.svg';

export interface ICardInfo {
  name: string;
  img: string;
  cardSet: string;
  type: string;
  rarity: string;
  favorite: boolean;
}

const Card: React.FC<ICardInfo> = ({
  name,
  img,
  cardSet,
  type,
  rarity,
  favorite,
}) => {
  const content = (
    <>
      <div className="mx-3 flex flex-col items-center ">
        <img className="w-1/2" src={img} alt="card" />
        <div>
          <div>
            <Image src={favorite ? FavoriteIcon : FavoriteBorderIcon} alt="" />
          </div>
        </div>
        <div className="bg-ColorBorder-Card hover:bg-gradient-to-b hover:from-gold hover:via-gold_2 hover:to-gold_3 rounded-2xl p-1 w-full">
          <div className="bg-bgColor-Card hover:bg-bgColor-CardDescroption rounded-2xl py-3 text-black hover:text-ColorGold">
            <p className="font-AclonicaR  ">{name}</p>
            <p className="font-MonserratM mt-2">{type}</p>
            <p className="font-MonserratM mt-1">{rarity}</p>
            <p className="font-MonserratM mt-1">{cardSet}</p>
          </div>
        </div>
      </div>
    </>
  );
  return content;
};

export default Card;
