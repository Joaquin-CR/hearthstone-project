import Favorites from '../components/Favorites/Favorites';

export default async function Page() {
  const cards = await fetch('http://localhost:3000/api/getdata', {
    next: { revalidate: 1 },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
  });
  return (
    <main className="w-full h-full max-h-screen text-center">
      <Favorites cards={cards ? cards.data : []} />
    </main>
  );
}
