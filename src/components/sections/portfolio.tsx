"use client";

import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { PiggyBank, HandCoins, Car, Landmark } from 'lucide-react';

const Wheelchair = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#4169E1" {...props}><path d="M482.08-734q-30.08 0-51.58-21.42t-21.5-51.5q0-30.08 21.42-51.58t-51.5-21.5q30.08 0 51.58 21.42t21.5 51.5q0 30.08-21.42 51.58t-51.5 21.5ZM696-80v-209H482q-29.7 0-50.85-21.15Q410-331.3 410-361v-247q0-29.7 21-50.85Q452-680 482.49-680q22.17 0 38.34 9T559-636q42 49 92 82t109 35v60q-51 0-105-25t-104-67v183h133q29.7 0 50.85 21.15Q756-325.7 756-296v216h-60Zm-300 0q-83 0-139.5-56.5T200-276q0-68 49.5-125.5T380-468v61q-54 5-86.5 44.5T261-276q0 58 38.5 97t96.5 39q47 0 87-32.5t44-86.5h61q-8 80-66 129.5T396-80Z"></path></svg>
);


const portfolioItems = [
  { 
    title: 'Crédito Consignado para aposentados e Pensionista',
    icon: HandCoins,
    description: "Crédito Consignado é uma forma de empréstimo com parcelas descontadas diretamente do benefício do INSS, garantindo juros mais baixos, prazos maiores e contratação segura para aposentados e pensionistas. É uma opção prática para organizar finanças, realizar projetos ou resolver imprevistos com tranquilidade.\n\nNós realizamos todo o atendimento com o máximo de cuidado e profissionalismo, garantindo o melhor trabalho possível para que você contrate com segurança, rapidez e total transparência."
  },
  { 
    title: 'BPC / LOAS', 
    icon: Wheelchair,
    description: "BPC/LOAS é um benefício do governo que garante um salário mínimo mensal para idosos acima de 65 anos ou pessoas com deficiência que vivem em situação de vulnerabilidade e não têm condições de se manter. Não exige contribuição ao INSS e é fundamental para garantir dignidade a quem mais precisa.\n\nNós cuidamos de todo o processo com excelência, garantindo o melhor trabalho possível para que você tenha segurança, agilidade e tranquilidade na hora de solicitar o seu benefício."
  },
  { 
    title: 'Antecipação do FGTS', 
    icon: PiggyBank,
    description: "Antecipação do FGTS é uma opção que permite adiantar parte do saldo do seu FGTS, transformando esse valor em dinheiro imediato de forma segura e com taxas mais baixas. É ideal para quem precisa resolver imprevistos, quitar dívidas ou investir em algo importante sem burocracia.\n\nNós realizamos todo o processo com máxima eficiência e cuidado, garantindo o melhor trabalho possível para que você receba seu valor com segurança, rapidez e total transparência."
  },
  { 
    title: 'Proteção veicular', 
    icon: Car,
    description: "Proteção veicular é um serviço que garante cobertura contra roubo, furto, colisões, incêndio, danos a terceiros e outros imprevistos, oferecendo segurança e tranquilidade para o seu veículo com um custo mais acessível que seguros tradicionais. É a forma ideal de dirigir protegido e evitar prejuízos inesperados.\n\nNós oferecemos um atendimento completo e dedicado, garantindo o melhor trabalho possível para que você contrate sua proteção com segurança, transparência e total confiança."
  },
  { title: 'Consórcio', icon: Landmark },
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
            Nossos serviços
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-foreground/80">
            Confira alguns dos casos de sucesso que demonstram nosso compromisso e eficácia.
          </p>
        </div>
        <div ref={sectionRef} className="flex flex-col items-center sm:items-start gap-4">
          <div className="w-full max-w-md mx-auto sm:mx-0">
            {portfolioItems.map((item, index) => {
              const animationStyle = {
                transitionDelay: `${index * 200}ms`,
              };

              const animationClasses = cn(
                'transform transition-all duration-1000 ease-out',
                isVisible ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 -translate-x-full -rotate-12'
              );

              if (item.description) {
                return (
                  <div key={index} style={animationStyle} className={cn(animationClasses, 'mb-4')}>
                    <Card className="bg-accent text-accent-foreground w-full">
                       <CardContent className="flex h-full w-full items-center justify-center p-6 gap-2 flex-col">
                          {item.icon && <item.icon className="h-12 w-12 text-blue-700" />}
                          <span className="text-lg font-semibold text-center">{item.title}</span>
                       </CardContent>
                    </Card>
                    <Card className="bg-white text-foreground">
                      <CardContent className="p-6">
                        <p className="whitespace-pre-line text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                );
              }

              return (
                 <div key={index} style={animationStyle} className={cn(animationClasses, 'mb-2')}>
                    <Card className="bg-accent text-accent-foreground w-full">
                       <CardContent className={cn("flex h-full items-center justify-center p-6 gap-2", item.icon && "flex-col")}>
                          {item.icon && <item.icon className="h-12 w-12" />}
                          <span className="text-lg font-semibold text-center">{item.title}</span>
                       </CardContent>
                    </Card>
                 </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
