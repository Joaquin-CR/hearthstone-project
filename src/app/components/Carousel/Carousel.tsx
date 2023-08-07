import { CardClass } from '../../../../types';
import Card from '../Card/Card';

type CarouselProps = {
  cardList: CardClass[];
};

export default function Carousel({ cardList }: CarouselProps) {
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
          />
        </div>
      ))}
    </div>
  );
}
