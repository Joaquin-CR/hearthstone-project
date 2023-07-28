import { getAllCards } from '@/lib/getClassCard';
import Favorites from '../components/Favorites/Favorites';

export default async function Page() {
  const cards = await getAllCards();
  return (
    <main className="w-full h-full max-h-screen text-center">
      <Favorites cards={cards ? cards : []} />
    </main>
  );
}
