"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Briefcase, Home, Mail } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';

const navItems = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'Trabalhos', href: '#trabalhos', icon: Briefcase },
  { label: 'Contato', href: '#contato', icon: Mail },
];

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <nav className="hidden md:flex items-center gap-6">
          {navItems.slice(0, 2).map((item) => (
            <Link key={item.label} href={item.href} className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="absolute left-1/2 top-2 -translate-x-1/2 z-10">
          <Link href="#home">
            <Image
              src="https://i.postimg.cc/8zD2ncLG/Gemini-Generated-Image-7n27217n27217n27-removebg-preview.png"
              alt="CrediSoluções Logo"
              width={210}
              height={109.38}
              priority
              style={{ filter: 'drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1))' }}
            />
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <nav className="hidden md:flex items-center gap-6 mr-4">
            {navItems.slice(2).map((item) => (
              <Link key={item.label} href={item.href} className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </nav>
           <Button asChild className="hidden md:flex bg-accent text-accent-foreground hover:bg-accent/90">
             <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">Entre em Contato</a>
           </Button>
           <Sheet open={isMenuOpen} onOpenChange={setMenuOpen}>
             <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
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
                        <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">Entre em Contato</a>
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
