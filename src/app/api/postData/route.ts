import { createRecord } from '@/lib/db';
import { NextResponse } from 'next/server';
import { CardClass } from '../../../../types';

export async function POST(request: Request) {
  const card: CardClass = await request.json();
  const queryText =
    'INSERT INTO cards (cardid, cardname, cardset, type, rarity, attack, health, text, race, playerclass, img, fav, mechanics) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *';

  const result = await createRecord(queryText, [
    card.cardid,
    card.cardname,
    card.cardset,
    card.type,
    card.rarity,
    card.attack,
    card.health,
    card.text,
    card.race,
    card.playerclass,
    card.img,
    card.fav,
    card.mechanics,
  ]);
  const crd: CardClass = await result.rows[0];
  return NextResponse.json(crd, { status: 201 });
}
