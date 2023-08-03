import Favorites from '../components/Favorites/Favorites';

export default async function Page() {
  // const cards = await getCards('Druid');
  const cards = await fetch('/api/getData').then((res) => {
    console.log('Es 200?', res.status);
    if (res.status == 200) {
      return res.json();
    }
  });
  console.log('Cartas', cards);
  return (
    <main className="w-full h-full max-h-screen text-center">
      <Favorites cards={cards ? cards : []} />
    </main>
  );
}
