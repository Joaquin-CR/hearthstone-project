'use client';
import Image from 'next/image';
import { useState } from 'react';
import FavoriteIcon from '../../../../public/images/Favorite.svg';
import FavoriteBorderIcon from '../../../../public/images/FavoriteBorder.svg';
import book from '../../../../public/images/book/Book.webp';

export interface ICardInfo {
  pic: any;
  name: string;
  type: string;
  rarity: string;
  text: string;
  effect?: string;
}

export default function Card({
  pic,
  name,
  type,
  rarity,
  text,
  effect,
}: ICardInfo) {
  const [favorites, setFavorites] = useState(false);

  const likeDislike = () => {
    setFavorites(!favorites);
  };

  text = text?.replace(/<b>/g, '');
  text = text?.replace(/<\/b>/g, '');
  text = text?.replace(/<i>/g, '');
  text = text?.replace(/<\/i>/g, '');
  text = text?.replace(/<br>/g, '');
  text = text?.replace(/<br\/>/g, '');
  text = text?.replace(/<br \/>/g, '');
  text = text?.replace(/<br \/>/g, '');
  text = text?.replace('[x]', '');
  text = text?.replace('$', '');
  text = text?.replace('@', '');
  text = text?.replace('_', '');
  text = text?.replace('_and', 'and');
  text = text?.replace('({0} left!)[x]Passive.', '');
  text = text?.replace('(Complete!)', '');
  text = text?.replace(' |4(turn, turns).', '4 turns.');
  text = text?.replace('( left!)', '');

  const content = (
    <>
      <div className="mx-3 flex flex-col items-center mt-12 ">
        {pic ? (
          <img src={pic} alt="Card" className="w-3/5" />
        ) : (
          <Image
            className=""
            src={pic ? pic : book}
            width={154}
            height={216}
            alt="card"
          ></Image>
        )}
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
            <p className="font-AclonicaR ">{name}</p>
            <p className="font-MonserratM mt-2">{type}</p>
            <p className="font-MonserratM mt-1">{rarity}</p>
            <p className="font-MonserratM mt-1">{text}</p>
            <p className="font-MonserratM mt-1">{effect}</p>
          </div>
        </div>
      </div>
    </>
  );
  return content;
}
