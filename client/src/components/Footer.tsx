/*
  Design: Modernismo Corporativo Brasileiro
  - Footer em azul marinho escuro com texto claro
  - Layout em 3 colunas responsivo
  - Tipografia Inter para legibilidade
*/

import { Mail, Phone, Linkedin, Instagram, Facebook } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for newsletter functionality
    alert("Obrigado por se inscrever! Em breve você receberá nossas novidades.");
  };

  return (
    <footer className="bg-navy text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Column 1: Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'Montserrat' }}>
              CONTATO
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:comercial@athenaoffice.com.br"
                className="flex items-center gap-2 text-sm hover:text-green transition-smooth"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>comercial@athenaoffice.com.br</span>
              </a>
              <a
                href="tel:08000800003"
                className="flex items-center gap-2 text-sm hover:text-green transition-smooth"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>0800 0800 003</span>
              </a>
              <div className="flex gap-3 mt-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-green transition-smooth"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-green transition-smooth"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-green transition-smooth"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Institutional */}
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'Montserrat' }}>
              INSTITUCIONAL
            </h3>
            <div className="flex flex-col gap-3">
              <Link href="/acao-social">
                <a className="text-sm hover:text-green transition-smooth">
                  Ação Social
                </a>
              </Link>
              <a
                href="#portal-conteudo"
                className="text-sm hover:text-green transition-smooth"
              >
                Portal de Conteúdo
              </a>
              <a
                href="#politica-privacidade"
                className="text-sm hover:text-green transition-smooth"
              >
                Política de Privacidade
              </a>
            </div>
          </div>

          {/* Column 3: Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ fontFamily: 'Montserrat' }}>
              RECEBA NOVIDADES POR E-MAIL
            </h3>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-3">
              <Input
                type="email"
                placeholder="Email"
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Enviar
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <p>
              Athena Consultoria Negócios e Serviços LTDA | CNPJ: 08.875.164/0001-74
            </p>
            <p>© 2024. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
