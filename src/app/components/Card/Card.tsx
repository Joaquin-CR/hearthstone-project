'use client';
import Image from 'next/image';
import { useState } from 'react';
import FavoriteIcon from '../../../../public/images/Favorite.svg';
import FavoriteBorderIcon from '../../../../public/images/FavoriteBorder.svg';

export interface ICardInfo {
  name: string;
  img: string;
  cardSet: string;
  type: string;
  rarity: string;
  favorite: boolean;
  text: string;
}

export default function Card({
  name,
  img,
  cardSet,
  type,
  rarity,
  favorite,
  text,
}: ICardInfo) {
  const [favorites, setFavorites] = useState(favorite);

  const likeDislike = () => {
    setFavorites(!favorites);
  };

  const content = (
    <>
      <div className="mx-3 flex flex-col items-center ">
        <img className="w-1/2" src={img} alt="card" />
        <div className="relative bg-ColorBorder-Card hover:bg-gradient-to-b hover:from-gold hover:via-gold_2 hover:to-gold_3 rounded-2xl p-1 w-full">
          <div className="bg-bgColor-Card hover:bg-bgColor-CardDescroption rounded-2xl py-3 text-black hover:text-ColorGold">
            <div className="absolute -top-6 -right-3" onClick={likeDislike}>
              <div className=" bg-ColorBorder-Card hover:bg-gradient-to-b hover:from-gold hover:via-gold_2 hover:to-gold_3 rounded-full p-1 w-full">
                <div className="bg-bgColor-Card hover:bg-bgColor-CardDescroption rounded-full text-black hover:text-ColorGold p-1">
                  <Image
                    src={favorites ? FavoriteIcon : FavoriteBorderIcon}
                    alt=""
                  />
                </div>
              </div>
            </div>
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
}
