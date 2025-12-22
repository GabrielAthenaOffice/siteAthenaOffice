/* 
  Design: Modernismo Corporativo Brasileiro
  - Header fixo com fundo branco e sombra sutil
  - Logo à esquerda, navegação centralizada
  - Tipografia Montserrat para navegação
*/

import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, Phone, Mail } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/quem-somos", label: "Quem somos" },
    { href: "/escritorio-virtual", label: "Escritório Virtual" },
    { href: "/por-que-athena-office", label: "Por que a Athena Office" },
    { href: "/fale-conosco", label: "Fale Conosco" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <img 
                src="/images/LOGO-ATUALIZADA-SITE-ATHENA-OFFICE.png" 
                alt="Athena Office Logo" 
                className="h-12 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className="text-sm font-medium text-foreground hover:text-green transition-smooth" style={{ fontFamily: 'Montserrat' }}>
                  {link.label}
                </a>
              </Link>
            ))}
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden xl:flex items-center gap-4">
            <a
              href="tel:08000800003"
              className="flex items-center gap-2 text-sm font-medium text-navy hover:text-green transition-smooth"
            >
              <Phone className="w-4 h-4" />
              <span>0800 0800 003</span>
            </a>
            <a
              href="mailto:comercial@athenaoffice.com.br"
              className="flex items-center gap-2 text-sm font-medium text-navy hover:text-green transition-smooth"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-navy"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a
                    className="text-sm font-medium text-foreground hover:text-green transition-smooth py-2"
                    style={{ fontFamily: 'Montserrat' }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t">
                <a
                  href="tel:08000800003"
                  className="flex items-center gap-2 text-sm font-medium text-navy"
                >
                  <Phone className="w-4 h-4" />
                  <span>0800 0800 003</span>
                </a>
                <a
                  href="mailto:comercial@athenaoffice.com.br"
                  className="flex items-center gap-2 text-sm font-medium text-navy"
                >
                  <Mail className="w-4 h-4" />
                  <span>comercial@athenaoffice.com.br</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
