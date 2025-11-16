import { Instagram, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="footer-contato" className="py-12 section-bg text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-headline font-semibold text-center text-white mb-6">Nossa Localização</h3>
          <div className="aspect-video w-full overflow-hidden rounded-lg border mb-8 shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.189499839423!2d-46.65882298502263!3d-23.56138998468263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1678886543210!5m2!1spt-BR!2sbr"
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
            <h3 className="text-2xl font-headline font-semibold text-white mb-4">Informações de Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+5511999999999" className="hover:text-primary transition-colors"> (11) 99999-9999</a>
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
      <div className="container text-center mt-12 pt-8 border-t border-white/20">
        <p className="text-sm text-white/80">&copy; {new Date().getFullYear()} CrediSoluções. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
