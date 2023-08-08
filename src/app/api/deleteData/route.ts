import { deleteRecord } from '@/lib/db';
import { NextResponse } from 'next/server';
import { CardClass } from '../../../../types';

export async function DELETE(request: Request) {
  const card: CardClass = await request.json();
  const queryText = 'DELETE FROM cards WHERE cardid = $1 RETURNING *';
  const crd = await deleteRecord(queryText, [card.cardid]);
  return NextResponse.json(crd, { status: 200 });
}