"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Briefcase, Home, Mail } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';

const WhatsAppIcon = () => (
  <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
  </svg>
);

const navItems = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'Trabalhos', href: '#trabalhos', icon: Briefcase },
  { label: 'Contato', href: '#contato', icon: Mail },
];

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-white/20">
      <div className="container flex h-20 items-center justify-between">
        <nav className="hidden md:flex items-center gap-6">
          {navItems.slice(0, 2).map((item) => (
            <Link key={item.label} href={item.href} className="text-sm font-medium text-white/80 transition-colors hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="absolute left-1/2 top-2 -translate-x-1/2 z-10 flex justify-center items-center">
          <div className="bg-background/80 backdrop-blur-sm rounded-full p-2" style={{ width: '150px', height: '150px' }}>
            <Link href="#home">
              <Image
                src="https://i.postimg.cc/8zD2ncLG/Gemini-Generated-Image-7n27217n27217n27-removebg-preview.png"
                alt="CrediSoluções Logo"
                width={250}
                height={130}
                priority
                style={{ filter: 'drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1))', marginTop: '5px' }}
              />
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <nav className="hidden md:flex items-center gap-6 mr-4">
            {navItems.slice(2).map((item) => (
              <Link key={item.label} href={item.href} className="text-sm font-medium text-white/80 transition-colors hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
           <Button asChild className="hidden md:flex bg-accent text-accent-foreground hover:bg-accent/90">
             <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              Vamos lá!
            </a>
           </Button>
           <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
             <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden bg-transparent text-white hover:bg-white/10 hover:text-white">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
             </SheetTrigger>
             <SheetContent side="right">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b">
                    <Link href="#home" onClick={() => setMenuOpen(false)}>
                      <span className="text-xl font-bold font-headline text-primary">CrediSoluções</span>
                    </Link>
                    <Button variant="ghost" size="icon" onClick={() => setMenuOpen(false)}>
                      <X className="h-5 w-5" />
                      <span className="sr-only">Fechar menu</span>
                    </Button>
                  </div>
                  <nav className="flex-grow flex flex-col gap-4 p-4">
                    {navItems.map((item) => (
                      <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
                        <item.icon className="h-4 w-4" />
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="p-4 mt-auto border-t">
                     <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                        <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                          <WhatsAppIcon />
                          Vamos lá!
                        </a>
                     </Button>
                  </div>
                </div>
             </SheetContent>
           </Sheet>
        </div>
      </div>
    </header>
  );
}
