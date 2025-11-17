import { Instagram, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="footer-contato" className="py-12 bg-white text-foreground">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-headline font-semibold text-center text-primary mb-6">Nossa Localização</h3>
          <div className="aspect-video w-full overflow-hidden rounded-lg border mb-8 shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.248351508434!2d-40.67953232589334!3d-5.184022952402972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7940170a41f6f19%3A0x6c6e737038e21703!2sR.%20Dr.%20J%C3%BAlio%20Lima%2C%20936%20-%20Fatima%20II%2C%20Crate%C3%BAs%20-%20CE%2C%2063700-133!5e0!3m2!1spt-BR!2sbr!4v1717178051646!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de localização da CrediSoluções"
            ></iframe>
          </div>

          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl font-headline font-semibold text-primary mb-4">Informações de Contato</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+5588994532323" className="hover:text-primary transition-colors"> (88) 99453-2323</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:contato@credisolucoes.com" className="hover:text-primary transition-colors">contato@credisolucoes.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="h-5 w-5 text-primary" />
                <Link href="https://www.instagram.com/micaele.prudencio" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  @micaele.prudencio
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container text-center mt-12 pt-8 border-t border-border">
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} CrediSoluções. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
