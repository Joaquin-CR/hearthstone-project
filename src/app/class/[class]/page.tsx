'use client';
import Classes from '@/app/components/ClassesView/Classes';
import { useSearchParams } from 'next/navigation';

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

export default function Page({ params }: { params: { class: string } }) {
  const searchParams = useSearchParams();
  const search = searchParams.get('text');
  const search2 = searchParams.get('text2');
  const title = searchParams.get('class');
  const { class: cardClass } = params;

  return (
    <main className="w-full h-full max-h-screen text-center">
      <Classes
        type={cardClass}
        className={title}
        title={search}
        description={search2}
      />
    </main>
  );
}
