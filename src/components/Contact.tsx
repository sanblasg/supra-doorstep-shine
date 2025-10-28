import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    neighborhood: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `Hola! Me gustaría coordinar un turno.%0A%0ANombre: ${formData.name}%0ATeléfono: ${formData.phone}%0ABarrio: ${formData.neighborhood}%0AMensaje: ${formData.message}`;
    
    window.open(`https://wa.me/5491112345678?text=${whatsappMessage}`, '_blank');
    
    toast({
      title: "¡Mensaje enviado!",
      description: "Te redirigimos a WhatsApp para coordinar tu turno",
    });
    
    setFormData({ name: "", phone: "", neighborhood: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            Reservá tu <span className="text-primary">Turno</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Completá el formulario y te contactamos para coordinar
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 shadow-card bg-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-card-foreground">
                  Nombre completo
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Juan Pérez"
                  required
                  className="bg-background border-input"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2 text-card-foreground">
                  Teléfono
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="11 1234-5678"
                  required
                  className="bg-background border-input"
                />
              </div>

              <div>
                <label htmlFor="neighborhood" className="block text-sm font-medium mb-2 text-card-foreground">
                  Barrio privado
                </label>
                <Input
                  id="neighborhood"
                  name="neighborhood"
                  value={formData.neighborhood}
                  onChange={handleChange}
                  placeholder="Ej: Nordelta, San Sebastián"
                  required
                  className="bg-background border-input"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-card-foreground">
                  Mensaje (opcional)
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tipo de vehículo, servicio deseado, fecha preferida..."
                  rows={4}
                  className="bg-background border-input"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 rounded-xl shadow-premium transition-smooth hover:scale-105"
              >
                Enviar por WhatsApp
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 flex items-start gap-4 hover:shadow-card transition-smooth bg-card">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-card-foreground">Teléfono</h3>
                <a href="tel:+5491112345678" className="text-muted-foreground hover:text-primary transition-smooth">
                  +54 9 11 1234-5678
                </a>
              </div>
            </Card>

            <Card className="p-6 flex items-start gap-4 hover:shadow-card transition-smooth bg-card">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-card-foreground">Email</h3>
                <a href="mailto:info@supracarwash.com" className="text-muted-foreground hover:text-primary transition-smooth">
                  info@supracarwash.com
                </a>
              </div>
            </Card>

            <Card className="p-6 flex items-start gap-4 hover:shadow-card transition-smooth bg-card">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-card-foreground">Zona de Cobertura</h3>
                <p className="text-muted-foreground">
                  Barrios privados de Zona Norte
                </p>
              </div>
            </Card>

            <Card className="p-6 flex items-start gap-4 hover:shadow-card transition-smooth bg-card">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Instagram className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-card-foreground">Instagram</h3>
                <a 
                  href="https://instagram.com/supracarwash" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-smooth"
                >
                  @supracarwash
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
