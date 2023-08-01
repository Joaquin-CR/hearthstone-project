import { deserialize } from 'ts-jackson';
import { CardClass } from '../../types';
export async function getCards(className: string) {
  try {
    const response = await fetch(
      `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/${className}`,
      {
        headers: {
          'X-RapidAPI-Key': process.env.HEARTHSTONE_API_KEY as string,
          'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
        },
      }
    );

    const data = await response.json();
    let cards: CardClass[] = await data.map((card: any) => {
      return deserialize(card, CardClass);
    });
    return cards;
  } catch (error) {
    console.error(error);
  }
}

export async function getAllCards() {
  try {
    const response = await fetch(
      `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards`,
      {
        headers: {
          'X-RapidAPI-Key': process.env.HEARTHSTONE_API_KEY as string,
          'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
        },
      }
    );

    const data = await response.json();
    let cards: CardClass[] = await data.map((card: any) => {
      return deserialize(card, CardClass);
    });
    return cards;
  } catch (error) {
    console.error(error);
  }
}
