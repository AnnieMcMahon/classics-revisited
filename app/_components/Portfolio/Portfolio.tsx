'use client';

import { portfolio } from '@/app/data/portfolio';
import { Card, CardContent, CardDescription } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Portfolio() {
  const cardWidth = (index: number) => {
    return index === 0 || index === 3
      ? 'w-full md:w-[59%]'
      : 'w-full md:w-[39%]';
  };

  return (
    <section className="border px-8 pt-24 pb-12" id="portfolio">
      <h1 className="text-2xl font-bold md:text-[2rem]">Our Work</h1>

      <div className="mt-6">
        <div className="flex flex-wrap gap-x-[2%] gap-y-4">
          {portfolio.map((portfolio, index) => (
            <Card
              key={portfolio.id}
              className={`rounded-none border border-black ${cardWidth(index)}`}
            >
              <CardContent className="m-0 p-0">
                <img
                  src={portfolio.image}
                  alt={portfolio.title}
                  className="h-64 md:h-72 lg:h-96 w-full overflow-clip object-cover"
                />
                <CardDescription className="text-md m-2 text-right text-xl">
                  <Link href={portfolio.link}>
                    {portfolio.title}{' '}
                    <ArrowRight size={16} className="inline" />
                  </Link>
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
