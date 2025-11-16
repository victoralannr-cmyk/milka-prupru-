import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-primary/5 py-24 sm:py-32 md:py-40">
      <div className="container text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
          Seu Sonho Não Espera.
          <br />
          Seu Crédito Está Aqui!
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-foreground/80">
          Você não é apenas um cliente. Você é especial, e seu objetivo é a nossa prioridade. Conte com um atendimento personalizado e acolhedor.
        </p>
        <div className="mt-10">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20 transition-all duration-300 transform hover:scale-105">
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
              Fale Conosco Agora!
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
