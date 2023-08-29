import { readRecords } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  const queryText = `SELECT * FROM cards;`;

  const data = await readRecords(queryText);
  return NextResponse.json({ data });
}
