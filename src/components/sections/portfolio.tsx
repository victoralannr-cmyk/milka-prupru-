"use client";

import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const Wheelchair = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="4" r="1" />
    <path d="M12 18a4 4 0 0 0-4-4h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2" />
    <path d="M12 14v4" />
    <path d="M19 14h.5a2.5 2.5 0 0 1 0 5H19" />
    <path d="M16 19h-2.5" />
    <path d="M14 8v2a2 2 0 0 1-2 2h-2" />
  </svg>
);


const portfolioItems = [
  { title: 'Crédito Consignado para aposentados e Pensionista' },
  { title: 'BPC / LOAS', icon: Wheelchair },
  { title: 'Antecipação do FGTS' },
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
                'bg-secondary text-secondary-foreground transform transition-all duration-1000 ease-out w-[250px] h-auto',
                isVisible ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 -translate-x-full -rotate-12'
              )}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardContent className="flex h-full items-center justify-center p-6 gap-2">
                <span className="text-lg font-semibold text-center">{item.title}</span>
                {item.icon && <item.icon className="h-5 w-5" />}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
