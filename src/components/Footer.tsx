import supraLogo from "@/assets/supra-logo.jpeg";
import { Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <img 
              src={supraLogo} 
              alt="Supra Car Wash" 
              className="w-24 h-24 mx-auto md:mx-0 mb-4"
            />
            <p className="text-secondary-foreground/80 text-sm">
              Servicio premium de lavado a domicilio en barrios privados con tecnología rinseless wash
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#servicios" className="text-secondary-foreground/80 hover:text-primary transition-smooth">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-secondary-foreground/80 hover:text-primary transition-smooth">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <div className="space-y-2 text-sm text-secondary-foreground/80">
              <div className="flex items-center justify-center md:justify-end gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+5491138184058" className="hover:text-primary transition-smooth">
                  +54 9 11 3818-4058
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@supracarwash.com" className="hover:text-primary transition-smooth">
                  info@supracarwash.com
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <Instagram className="h-4 w-4" />
                <a 
                  href="https://instagram.com/supracarwashok" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-smooth"
                >
                  @supracarwashok
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Supra Car Wash. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
