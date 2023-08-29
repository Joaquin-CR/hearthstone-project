import HomeSreen from './components/HomeScreen/HomeSreen';

export default async function Home() {
  const cards = await fetch('http://localhost:3000/api/createTable', {
    next: { revalidate: 1 },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
  });
  return (
    <main className="w-full h-full max-h-screen text-center">
      <HomeSreen />
    </main>
  );
}
