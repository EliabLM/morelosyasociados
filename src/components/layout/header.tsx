'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { mainNav, siteConfig } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60'>
      <div className='container flex h-16 items-center justify-between'>
        {/* Logo */}
        <Link href='/' className='flex items-center space-x-2'>
          <span className='text-xl font-bold text-primary'>
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center space-x-6'>
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                pathname === item.href
                  ? 'text-primary'
                  : 'text-muted-foreground'
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className='hidden md:flex items-center space-x-4'>
          <Button variant='outline' size='sm' asChild>
            <a href={`tel:${siteConfig.contact.phone}`}>
              <Phone className='mr-2 h-4 w-4' />
              Llamar
            </a>
          </Button>
          <Button size='sm' asChild>
            <Link href='/contacto'>Cotizar</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className='md:hidden'>
            <Button variant='ghost' size='icon'>
              <Menu className='h-5 w-5' />
              <span className='sr-only'>Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side='right' className='w-[300px] sm:w-[400px] p-6'>
            <SheetTitle className='sr-only'>Menú de navegación</SheetTitle>
            <nav className='flex flex-col space-y-4 mt-4'>
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'text-lg font-medium transition-colors hover:text-primary',
                    pathname === item.href
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  )}
                >
                  {item.title}
                </Link>
              ))}
              <div className='pt-4 space-y-4'>
                <Button variant='outline' className='w-full' asChild>
                  <a href={`tel:${siteConfig.contact.phone}`}>
                    <Phone className='mr-2 h-4 w-4' />
                    Llamar
                  </a>
                </Button>
                <Button className='w-full' asChild>
                  <Link href='/contacto' onClick={() => setIsOpen(false)}>
                    Cotizar
                  </Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
