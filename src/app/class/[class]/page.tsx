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

  return paths;
}

function getBackgroundClass(classId: string): string {
  switch (classId) {
    case 'Mage':
      return ' bg-bgImgMage';
    case 'Hunter':
      return 'bg-bgImgHunters';
    case 'Druid':
      return 'bg-bgImgDruid';
    case 'Priest':
      return 'bg-bgImgPriest';
    case 'Rogue':
      return 'bg-bgImgRouge';
    case 'Paladin':
      return 'bg-bgImgPaladin';
    case 'Shaman':
      return 'bg-bgImgShaman';
    case 'DemonHunter':
      return 'bg-bgImgDemon';
    case 'Warlock':
      return 'bg-bgImgWarlock';
    case 'Warrior':
      return 'bg-bgImgWarrior';
    default:
      return '';
  }
}

export default async function Page({ params }: { params: { class: string } }) {
  const { class: cardClass } = params;
  let cards = null;
  if (cardClass == 'Demon') {
    cards = await getCards('Demon Hunter');
  } else {
    cards = await getCards(cardClass);
  }

  return (
    <main
      className={`${getBackgroundClass(
        cardClass
      )} bg-no-repeat bg-fixed bg-cover bg-center`}
    >
      <Classes className={cardClass} cards={cards ? cards : []} />
    </main>
  );
}
