"use client";

import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const Wheelchair = (props: React.SVGProps<SVGSVGElement>) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    height="24px" 
    viewBox="0 -960 960 960" 
    width="24px" 
    fill="currentColor"
    {...props}
  >
    <path d="M482.08-734q-30.08 0-51.58-21.42t-21.5-51.5q0-30.08 21.42-51.58t51.5-21.5q30.08 0 51.58 21.42t21.5 51.5q0 30.08-21.42 51.58t-51.5 21.5ZM696-80v-209H482q-29.7 0-50.85-21.15Q410-331.3 410-361v-247q0-29.7 21-50.85Q452-680 482.49-680q22.17 0 38.34 9T559-636q42 49 92 82t109 35v60q-51 0-105-25t-104-67v183h133q29.7 0 50.85 21.15Q756-325.7 756-296v216h-60Zm-300 0q-83 0-139.5-56.5T200-276q0-68 49.5-125.5T380-468v61q-54 5-86.5 44.5T261-276q0 58 38.5 97t96.5 39q47 0 87-32.5t44-86.5h61q-8 80-66 129.5T396-80Z"></path>
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
        <div ref={sectionRef} className="flex flex-col items-start gap-4">
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
