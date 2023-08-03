import { CardClass } from '../../../../types';
import Card from '../Card/Card';

type CarouselProps = {
  cardList: CardClass[];
};

export default function Carousel({ cardList }: CarouselProps) {
  const saveCardLike = async (card: CardClass, save: boolean) => {
    console.log('Card', card);
    console.log('save', save);
    if (save) {
      await fetch('/api/getData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(card),
      }).then((res) => console.log('respuesta', res));
    } else {
      console.log('Se eliminan del registro');
    }
  };

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
            like={function (like: boolean): void {
              saveCardLike(card, like);
            }}
          />
        </div>
      ))}
    </div>
  );
}
