import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { HandCoins, Car, Banknote, Home, ArrowRightLeft } from 'lucide-react';

const services = [
  {
    icon: HandCoins,
    title: 'Crédito Consignado',
    description: 'Acesso a taxas de juros reduzidas e parcelas que cabem no seu orçamento. Ideal para aposentados, pensionistas e servidores públicos.',
  },
  {
    icon: Car,
    title: 'Financiamento de Veículos',
    description: 'Transforme o carro dos seus sonhos em realidade. Processo rápido e transparente para você sair dirigindo sem complicação.',
  },
  {
    icon: Banknote,
    title: 'Empréstimo Pessoal',
    description: 'Liberdade para usar o dinheiro como quiser. Sem burocracia e com condições flexíveis para cobrir imprevistos ou realizar planos.',
  },
  {
    icon: Home,
    title: 'Refinanciamento de Imóvel',
    description: 'Utilize seu patrimônio para conseguir crédito com os melhores prazos e taxas do mercado, alavancando grandes projetos.',
  },
  {
    icon: ArrowRightLeft,
    title: 'Portabilidade de Crédito',
    description: 'Traga suas dívidas para a nossa consultoria e garanta parcelas mais baixas, economizando significativamente no final do contrato.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Nossos Serviços
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-foreground/80">
            Oferecemos uma gama completa de soluções de crédito para atender às suas necessidades.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center flex flex-col bg-blue-800 text-white shadow-lg">
              <CardHeader className="flex-grow">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/20 mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="font-headline text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
