'use client';

import {
  Card,
  CardContent,
  CardDescription,
} from '@/components/ui/card';
import { portfolio } from '@/data/portfolio';
import Link from 'next/link';
import { ArrowRight } from "lucide-react";

export default function Portfolio() {
  const cardWidth = (index: number) => {
    return index === 0 || index === 3 ? 'w-full md:w-[59%]' : 'w-full md:w-[39%]';
  };

  return (
    <section className="container min-w-full border p-8 mt-8 md:p-12 lg:py-20" id="portfolio">
      <h1 className="text-2xl font-bold md:text-[2rem]">Our Work</h1>

      <div className="mt-6">
        <div className="flex flex-wrap gap-x-[2%] gap-y-4">
          {portfolio.map((portfolio, index) => (
            <Card key={portfolio.id} className={`border border-black rounded-none ${cardWidth(index)}`}>
              <CardContent className="p-0 m-0">
                <img src={portfolio.image} alt={portfolio.title} className="w-full h-56 overflow-clip object-cover" />
                <CardDescription className="text-xl text-right text-md m-2">
                  <Link href={portfolio.link}>
                    {portfolio.title} <ArrowRight size={16} className="inline"/>
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
