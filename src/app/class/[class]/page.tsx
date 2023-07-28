'use client';
import Classes from '@/app/components/ClassesView/Classes';
import { getCards } from '@/lib/getClassCard';

export async function generateStaticParams(): Promise<any[]> {
  const response = await fetch(
    'https://omgvamp-hearthstone-v1.p.rapidapi.com/info',
    {
      headers: {
        'X-RapidAPI-Key': '8039f3c44bmsh6f79d6ce1753b85p17a019jsn4772e6c06597',
        'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
      },
    }
  );
  const data = await response.json();
  const classes = data.classes;

  // Generate dynamic paths for each card class
  const paths = classes.map((cardClass: string) => ({
    params: { class: cardClass },
  }));
  console.log(paths);

  return paths;
}

export default async function Page({ params }: { params: { class: string } }) {
  // const searchParams = useSearchParams();
  const { class: cardClass } = params;
  let cards = null;
  if (cardClass == 'Demon') {
    cards = await getCards('Demon Hunter');
  } else {
    cards = await getCards(cardClass);
  }

  return (
    <main className="w-full h-full max-h-screen text-center">
      <Classes className={cardClass} cards={cards ? cards : []} />
    </main>
  );
}
