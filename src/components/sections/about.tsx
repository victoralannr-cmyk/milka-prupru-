import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Conheça a Especialista por Trás do Seu Sucesso
            </h2>
            <p className="mt-6 text-lg leading-8 text-foreground/80">
              Com anos de experiência e um profundo conhecimento do mercado financeiro, nossa consultora está dedicada a encontrar as melhores soluções de crédito para você. Acreditamos que um atendimento humanizado faz toda a diferença para transformar seus sonhos em realidade.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative h-64 w-64 md:h-80 md:w-80">
              <Image
                src="https://i.postimg.cc/x8DfXgHb/Captura-de-tela-2025-11-15-232759-removebg-preview.png"
                alt="Foto de Micaele Prudencio"
                width={320}
                height={320}
                className="rounded-full object-cover shadow-2xl ring-4 ring-offset-4 ring-offset-background ring-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
