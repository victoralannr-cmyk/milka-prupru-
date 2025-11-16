"use client";

import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const portfolioItems = [
  { title: 'Trabalho 1' },
  { title: 'Trabalho 2' },
  { title: 'Trabalho 3' },
  { title: 'Trabalho 4' },
  { title: 'Trabalho 5' },
];

function useOnScreen(ref: React.RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(sectionRef);

  return (
    <section id="trabalhos" className="py-24 sm:py-32 text-foreground overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Nossos Resultados
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-foreground/80">
            Confira alguns dos casos de sucesso que demonstram nosso compromisso e eficácia.
          </p>
        </div>
        <div ref={sectionRef} className="flex flex-col items-center gap-4">
          {portfolioItems.map((item, index) => (
            <Card
              key={index}
              className={cn(
                'bg-secondary text-secondary-foreground transform transition-all duration-1000 ease-out w-[250px] h-[72px]',
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              )}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardContent className="flex h-full items-center justify-center p-6">
                <span className="text-lg font-semibold">{item.title}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
