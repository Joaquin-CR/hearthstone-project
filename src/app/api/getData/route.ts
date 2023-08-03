import { readRecords } from '@/lib/db';
import { NextResponse } from 'next/server';
import { CardClass } from '../../../../types';

export async function GET() {
  console.log('entrnado');
  const createTableQuery = `CREATE TABLE IF NOT EXISTS cards(
        cardId SERIAL PRIMARY KEY,
        cardName VARCHAR(255) NOT NULL,
        cardSet VARCHAR(200), 
        type VARCHAR(255), 
        rarity VARCHAR(255), 
        attack VARCHAR(255),
        health VARCHAR(255),
        text VARCHAR(255),
        race VARCHAR(255),
        playerClass VARCHAR(255),
        img VARCHAR(255),
        mechanics VARCHAR(255)[]
    )`;

  const queryText = `${createTableQuery}; SELECT * FROM cards`;

  const data = await readRecords(queryText);
  return NextResponse.json({ data });
}

export async function POST(card: CardClass) {
  const query = `INSERT INTO cards(cardId, cardName, cardSet, type, rarity, attack, health, text, race, playerClass, img, mechanics)
  VALUES (${card.cardId}, ${card.cardName}, ${
    card.cardSet ? card.cardSet : null
  }, ${card.type ? card.type : null}, ${card.attack ? card.attack : null}, ${
    card.health ? card.health : null
  }, ${card.text ? card.text : null}, ${card.race ? card.race : null},
    ${card.playerClass ? card.playerClass : null}, ${
      card.img ? card.img : null
    }, ${card.mechanics ? card.mechanics : null})`;
  const data = await readRecords(query);
  return NextResponse.json({ data });
}
