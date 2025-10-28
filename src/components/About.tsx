import { Droplets, Leaf, Clock, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Droplets,
    title: "Rinseless Wash",
    description: "Tecnología avanzada que ahorra agua y protege el medio ambiente"
  },
  {
    icon: MapPin,
    title: "A Domicilio",
    description: "Nos trasladamos a tu barrio privado sin que tengas que moverte"
  },
  {
    icon: Clock,
    title: "Ahorrá Tiempo",
    description: "Coordiná tu turno y seguí con tu día mientras cuidamos tu auto"
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Productos biodegradables sin residuos químicos dañinos"
  }
];

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            ¿Por qué elegir <span className="text-primary">Supra Car Wash</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Revolucionamos el cuidado de tu auto con el método Rinseless Wash, 
            la técnica premium utilizada por profesionales en Estados Unidos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover:shadow-premium transition-smooth hover:-translate-y-2 bg-gradient-card border-border"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-card-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
