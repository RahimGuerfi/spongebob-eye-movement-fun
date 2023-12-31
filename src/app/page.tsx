'use client';

import DynamicImage from '@/components/DynamicImage';

const items = [
  {
    src: '/assets/images/nine-directions-eyes.jpg',
    alt: 'image 1'
  },
  {
    src: '/assets/images/nine-directions-eyes.jpg',
    alt: 'image 2'
  },
  {
    src: '/assets/images/nine-directions-eyes.jpg',
    alt: 'image 3'
  },
  {
    src: '/assets/images/nine-directions-eyes.jpg',
    alt: 'image 4'
  },
  {
    src: '/assets/images/nine-directions-eyes.jpg',
    alt: 'image 5'
  },
  {
    src: '/assets/images/nine-directions-eyes.jpg',
    alt: 'image 6'
  }
];

export default function Home() {
  return (
    <main className="flex flex-col gap-6 p-6 min-h-screen">
      <div>
        <p className="text-xl font-bold">Follow the mouse app</p>
        <p className="text-sm text-muted-foreground">
          Move the mouse around and see the magic ✨
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
