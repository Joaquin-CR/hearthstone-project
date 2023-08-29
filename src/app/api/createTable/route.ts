import { NextResponse } from 'next/server';
import { readRecords } from '../../../lib/db';

export async function GET(request: Request) {
  const createTableQuery = `CREATE TABLE IF NOT EXISTS cards(
        cardId VARCHAR(255) NOT NULL,
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
        fav VARCHAR(255),
        mechanics VARCHAR(255)[]
    )`;
  const data = await readRecords(createTableQuery);
  return NextResponse.json({ data });
}
