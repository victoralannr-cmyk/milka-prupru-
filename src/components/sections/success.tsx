import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function SuccessSection() {
  const carImage = PlaceHolderImages.find(img => img.id === 'car-success');
  const loanImage = PlaceHolderImages.find(img => img.id === 'loan-success');

  return (
    <section id="success" className="py-24 sm:py-32 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Sua Conquista é o Nosso Foco
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-foreground/80">
            Ajudamos nossos clientes a alcançarem seus objetivos, seja comprando um carro novo ou organizando suas finanças.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="overflow-hidden group bg-card">
            <CardContent className="p-0">
              {carImage && (
                <div className="overflow-hidden rounded-t-lg">
                <Image
                  src={carImage.imageUrl}
                  alt={carImage.description}
                  data-ai-hint={carImage.imageHint}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                </div>
              )}
              <div className="p-6">
                <h3 className="font-headline text-xl font-semibold text-primary">Sonho do Carro Novo</h3>
                <p className="mt-2 text-muted-foreground">Facilitamos o financiamento para que você possa dirigir o carro que sempre quis.</p>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden group bg-card">
            <CardContent className="p-0">
              {loanImage && (
                <div className="overflow-hidden rounded-t-lg">
                <Image
                  src={loanImage.imageUrl}
                  alt={loanImage.description}
                  data-ai-hint={loanImage.imageHint}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                </div>
              )}
              <div className="p-6">
                <h3 className="font-headline text-xl font-semibold text-primary">Crédito com Confiança</h3>
                <p className="mt-2 text-muted-foreground">Construímos uma relação de confiança para oferecer o empréstimo que você precisa.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
