import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Martín González",
    neighborhood: "Nordelta",
    rating: 5,
    text: "Excelente servicio! El auto quedó impecable y no tuve que moverme de casa. El método rinseless es increíble, no deja marcas."
  },
  {
    name: "Carolina Fernández",
    neighborhood: "San Sebastián",
    rating: 5,
    text: "Súper profesionales. Llegaron puntuales y el trabajo fue perfecto. Me encanta que sea ecológico y que cuiden el medio ambiente."
  },
  {
    name: "Roberto Díaz",
    neighborhood: "Los Sauces",
    rating: 5,
    text: "La mejor opción para mantener mi camioneta siempre limpia. El servicio premium es muy completo y los precios son justos."
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            Lo que dicen nuestros <span className="text-primary">Clientes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Confianza y satisfacción garantizada
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-premium transition-smooth bg-gradient-card border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-card-foreground mb-4 italic">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-border pt-4">
                <p className="font-bold text-card-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.neighborhood}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
