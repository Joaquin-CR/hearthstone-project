import { CardClass } from '../../../../types';
import Card from '../Card/Card';

type CarouselProps = {
  cardList: CardClass[];
};

export default function Carousel({ cardList }: CarouselProps) {
  const saveCardLike = async (card: CardClass, save: boolean) => {
    console.log('Card to save', card);
    console.log('save', save);
    if (save) {
      const response = await fetch('http://localhost:3000/api/postData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cardid: card.cardid,
          cardname: card.cardname,
          cardset: card.cardset ? card.cardset : null,
          type: card.type ? card.type : null,
          rarity: card.rarity ? card.rarity : null,
          attack: card.attack ? card.attack.toString() : null,
          health: card.health ? card.health.toString() : null,
          text: card.text ? card.text : null,
          race: card.race ? card.race : null,
          playerclass: card.playerclass ? card.playerclass : null,
          img: card.img ? card.img : null,
          fav: card.fav,
          mechanics: card.mechanics ? [card.mechanics.toString] : null,
        }),
      });
      console.log(response);
    } else {
      const response = await fetch('http://localhost:3000/api/deleteData', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cardId: card.cardid,
          cardName: card.cardname,
          cardSet: card.cardset ? card.cardset : null,
          type: card.type ? card.type : null,
          rarity: card.rarity ? card.rarity : null,
          attack: card.attack ? card.attack.toString() : null,
          health: card.health ? card.health.toString() : null,
          text: card.text ? card.text : null,
          race: card.race ? card.race : null,
          playerClass: card.playerclass ? card.playerclass : null,
          img: card.img ? card.img : null,
          fav: card.fav,
          mechanics: card.mechanics ? [card.mechanics.toString] : null,
        }),
      });
      console.log(response.status == 500);
    }
  };

  return (
    <div className="grid grid-cols-5 w-screen">
      {cardList.map((card, index) => (
        <div key={index}>
          <Card
            id={card.cardid}
            pic={card.img}
            name={card.cardname}
            type={card.type}
            rarity={card.rarity}
            text={card.text}
            race={card.race}
            playerClass={card.playerclass}
            attack={card.attack}
            health={card.health}
            mechcanics={card.mechanics}
            cardSet={card.cardset}
            fav={card.fav ? card.fav : false}
            like={function (like: boolean): void {
              saveCardLike(card, like);
            }}
          />
        </div>
      ))}
    </div>
  );
}
