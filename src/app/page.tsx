'use client';

import DynamicImage from '@/components/DynamicImage';

const items = [
  {
    src: '/assets/images/spong-bob.png',
    alt: 'spong bob 1'
  },
  {
    src: '/assets/images/spong-bob.png',
    alt: 'spong bob 2'
  },
  {
    src: '/assets/images/spong-bob.png',
    alt: 'spong bob 3'
  },
  {
    src: '/assets/images/spong-bob.png',
    alt: 'spong bob 4'
  },
  {
    src: '/assets/images/spong-bob.png',
    alt: 'spong bob 5'
  },
  {
    src: '/assets/images/spong-bob.png',
    alt: 'spong bob 6'
  }
];

export default function Home() {
  return (
    <main className="flex flex-col gap-6 p-6 min-h-screen">
      <div>
        <p className="text-xl font-bold">🌊 SPONGEBOB EYE-MOVEMENT FUN</p>
        <p className="text-sm text-muted-foreground">
          Start moving your mouse to see SpongeBob Eye-Movement Fun in action.
          ✨
        </p>
      </div>

      <section className=" grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {items.map((item) => (
          <DynamicImage key={item.alt} alt={item.alt} src={item.src} />
        ))}
      </section>

      <p className="mt-auto text-blue-500 text-xl font-medium text-center uppercase">
        Happy New Year 2024 🎉🎆
      </p>
    </main>
  );
}
