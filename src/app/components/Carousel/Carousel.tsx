import { CardClass } from '../../../../types';
import Card from '../Card/Card';

type CarouselProps = {
  cardList: CardClass[];
};

export default function Carousel({ cardList }: CarouselProps) {
  return (
    <div className="grid md:grid-cols-5 grid-cols-1 md:mx-10 relative lg:px-20 px-2 w-screen">
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
          />
        </div>
      ))}
    </div>
  );
}
