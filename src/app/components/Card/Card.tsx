'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import FavoriteIcon from '../../../../public/images/Favorite.svg';
import FavoriteBorderIcon from '../../../../public/images/FavoriteBorder.svg';
import book from '../../../../public/images/book/Book.webp';

export interface ICardInfo {
  id: any;
  pic: any;
  name: string;
  type: string;
  rarity: string;
  text: string;
  race: string;
  playerClass: string;
  attack: string;
  health: string;
  mechcanics: any;
  cardSet: string;
}

export default function Card({
  id,
  pic,
  name,
  type,
  rarity,
  text,
  race,
  playerClass,
  attack,
  health,
  mechcanics,
  cardSet,
}: ICardInfo) {
  const [favorites, setFavorites] = useState(false);

  const checkFavorite = async () => {
    const crd = await fetch('http://localhost:3000/api/getCard', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cardid: id,
      }),
    }).then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        return [{ cardid: '' }];
      }
    });
    if (crd[0].cardid !== '' || undefined) {
      setFavorites(true);
    }
  };

  useEffect(() => {
    checkFavorite();
  });

  const handleFavorite = () => {
    if (!favorites) {
      fetch('http://localhost:3000/api/postData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cardid: id,
          cardname: name,
          cardset: cardSet!,
          type: type,
          rarity: rarity!,
          attack: attack!,
          health: health!,
          text: text!,
          race: race!,
          playerclass: playerClass!,
          img: pic!,
          fav: 'true',
          mechanics: [mechcanics?.toString()],
        }),
      });
      setFavorites(true);
    } else {
      fetch('http://localhost:3000/api/deleteData', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cardid: id,
        }),
      });
      setFavorites(false);
    }
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
      <div className="right-2 flex flex-col items-center mt-12 ">
        <Image
          className="relative right-2"
          src={pic ? pic : book}
          width={120}
          height={150}
          alt="card"
        ></Image>
        <div className="flex flex-row items-start">
          <div className="bg-ColorBorder-Card p-1 rounded-lg">
            <div className="bg-bgColor-Card w-60 md:w-32 lg:w-40 md:h-40 lg:h-32 flex flex-col justify-center rounded-lg">
              <h1 className="text-black text-center text-sm font-AclonicaR">
                {name}
              </h1>
              <div className="text-black font-serif text-xs  text-center">
                <p className="font-MonserratM mt-2">{type}</p>
                <p className="font-MonserratM mt-1">{rarity}</p>
                <p className="font-MonserratM mt-1">{text}</p>
              </div>
            </div>
          </div>
          <div className="bg-ColorBorder-Card relative bottom-2 right-3 rounded-full p-0.5">
            <div className="bg-bgColor-Card flex h-6 w-6 rounded-full">
              <button className="p-0.5" onClick={handleFavorite}>
                <Image
                  src={favorites ? FavoriteIcon : FavoriteBorderIcon}
                  width={25}
                  height={25}
                  alt=""
                ></Image>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  return content;
}
