import { Pool, QueryResult } from 'pg';
import { CardClass } from '../../types';

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
});

// Export a function to query the database

// FUNCTION TO EXECUTE A QUERY AND RETURN THE RESULTS
const executeQuery = async (
  text: string,
  params?: any[]
): Promise<QueryResult<any>> => {
  const result = await pool.query(text, params);
  return result;
};
export const createRecord = async (
  text: string,
  params?: any[]
): Promise<QueryResult<any>> => {
  return await executeQuery(text, params);
};
export const readRecords = async (
  text: string,
  params?: any[]
): Promise<any> => {
  const result = await executeQuery(text, params);
  return result.rows;
};
export const deleteRecord = async (
  text: string,
  params?: any[]
): Promise<QueryResult<any>> => {
  return await executeQuery(text, params);
};

// FUNCTION TO CREATE A NEW Hearthstone card
export const createCard = async (card: CardClass): Promise<CardClass> => {
  const queryText =
    'INSERT INTO cards (cardid, cardname, cardset, typecard, rarity, attack, health, text, race, playerclass, img, mechanics) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *';
  const values = [
    card.cardId,
    card.cardName,
    card.cardSet,
    card.type,
    card.rarity,
    card.attack,
    card.health,
    card.text,
    card.race,
    card.playerClass,
    card.img,
    card.mechanics,
  ];
  const result = await createRecord(queryText, values);
  return result.rows[0];
};

// FUNCTION TO RETIREVE ALL Hearthstone cards
export const getAllCards = async (): Promise<CardClass[]> => {
  const queryText = 'SELECT * FROM cards';
  return await readRecords(queryText);
};

// FUNCTION TO RETIREVE A SPECIFIC Hearthstone card by id
export const getCardById = async (id: string): Promise<CardClass | null> => {
  const queryText = 'SELECT * FROM cards WHERE cardid = $1';
  const values = [id];
  const result = await readRecords(queryText, values);
  return result[0] || null;
};

// FUNCTION TO DELETE A Hearthstone card BY id
export const deleteCardById = async (id: string): Promise<void> => {
  const queryText = 'DELETE FROM cards WHERE id = $1';
  const values = [id];
  await deleteRecord(queryText, values);
};
