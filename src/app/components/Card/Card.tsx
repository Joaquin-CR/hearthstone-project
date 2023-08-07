'use client';
import Image from 'next/image';
import { useState } from 'react';
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
  fav: boolean;
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
  fav,
}: ICardInfo) {
  const [favorites, setFavorites] = useState(fav);

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

  checkFavorite();

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
          fav: true,
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
            <div className="absolute -top-6 -right-3" onClick={handleFavorite}>
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
          </div>
        </div>
      </div>
    </>
  );
  return content;
}
