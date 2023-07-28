import { CardClass } from '../../../../types';
import Card from '../Card/Card';

type CarouselProps = {
  cardList: CardClass[];
};

export default function Carousel({ cardList }: CarouselProps) {
  // console.log(cardList);
  return (
    <div className="grid grid-cols-5 w-screen">
      {cardList.map((card, index) => (
        <div key={index}>
          <Card
            pic={card.img}
            name={card.cardName}
            type={card.type}
            rarity={card.rarity}
            text={card.text}
          />
        </div>
      ))}
    </div>
  );
}
