"use client";

import Image from "next/image";
import Link from "next/link";

export type ServiceCardData = {
  title: string;
  photo: string;
  href: string;
};

export default function ServiceCards({ cards }: { cards: ServiceCardData[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card, i) => (
        <Link
          key={card.title}
          href={card.href}
          className="group relative block aspect-[16/9] overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5 sm:aspect-[3/4] lg:aspect-[4/5]"
        >
          <Image
            src={card.photo}
            alt={card.title}
            fill
            priority={i === 0}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/0 transition-opacity duration-300 group-hover:from-black/90"
            aria-hidden
          />
          <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
            <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md sm:h-10 sm:w-10">
              <Image
                src="/images/logo-mark.png"
                alt=""
                width={40}
                height={40}
                className="h-5 w-5 object-contain sm:h-6 sm:w-6"
                aria-hidden
              />
            </span>
            <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl">
              {card.title}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
