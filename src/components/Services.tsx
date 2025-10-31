import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    vehicleType: "Auto",
    basic: {
      price: "$20.000",
      features: [
        "Lavado exterior completo sin enjuague *",
        "Limpieza de llantas, cubiertas y guardabarros",
        "Limpieza de vidrios, espejos y faros",
        "Limpieza de marcos y bordes de puertas",
        "Secado manual con microfibras premium"
      ]
    },
    premium: {
      price: "$45.000",
      features: [
        "Todo lo del básico",
        "Limpieza interior profunda",
        "Aspirado completo",
        "Limpieza de vidrios",
        "Regalo sorpresa"
      ]
    }
  },
  {
    vehicleType: "SUV",
    basic: {
      price: "$25.000",
      features: [
        "Lavado exterior completo sin enjuague *",
        "Limpieza de llantas, cubiertas y guardabarros",
        "Limpieza de vidrios, espejos y faros",
        "Limpieza de marcos y bordes de puertas",
        "Secado manual con microfibras premium"
      ]
    },
    premium: {
      price: "$55.000",
      features: [
        "Todo lo del básico",
        "Limpieza interior profunda",
        "Aspirado completo",
        "Limpieza de vidrios",
        "Regalo sorpresa"
      ]
    }
  },
  {
    vehicleType: "Camioneta",
    basic: {
      price: "$30.000",
      features: [
        "Lavado exterior completo sin enjuague *",
        "Limpieza de llantas, cubiertas y guardabarros",
        "Limpieza de vidrios, espejos y faros",
        "Limpieza de marcos y bordes de puertas",
        "Secado manual con microfibras premium"
      ]
    },
    premium: {
      price: "$65.000",
      features: [
        "Todo lo del básico",
        "Limpieza interior profunda",
        "Aspirado completo",
        "Limpieza de vidrios",
        "Regalo sorpresa"
      ]
    }
  },
  {
    vehicleType: "Camioneta Grande",
    basic: {
      price: "$33.000",
      features: [
        "Lavado exterior completo sin enjuague *",
        "Limpieza de llantas, cubiertas y guardabarros",
        "Limpieza de vidrios, espejos y faros",
        "Limpieza de marcos y bordes de puertas",
        "Secado manual con microfibras premium"
      ]
    },
    premium: {
      price: "$71.000",
      features: [
        "Todo lo del básico",
        "Limpieza interior profunda",
        "Aspirado completo",
        "Limpieza de vidrios",
        "Regalo sorpresa"
      ]
    }
  }
];

const Services = () => {
  const scrollToContact = (vehicleType: string) => {
    document.getElementById('message').textContent= 'Hola! Quiero reservar turno para mi ' + vehicleType;
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            Nuestros <span className="text-primary">Servicios</span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-1xl mx-auto">
            Elegí el plan perfecto para tu vehículo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="space-y-4">
             
              <h3 className="text-2xl font-bold text-center text-foreground mb-4">
                <Button 
                size="lg"
                onClick={() => scrollToContact(service.vehicleType)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-white px-8 py-6 rounded-full shadow-premium transition-smooth hover:scale-105 animate-fade-in-up"
              >
               {service.vehicleType}
 
              </Button>
              </h3>
              
              {/* Basic */}
              <Card className="p-6 border-2 border-border hover:shadow-card transition-smooth bg-card">
                <Badge className="mb-3 bg-secondary text-secondary-foreground">
                  Exterior
                </Badge>
                
                <ul className="space-y-2">
                  {service.basic.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Premium */}
              <Card className="p-6 border-2 border-primary hover:shadow-premium transition-smooth bg-gradient-card relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                  POPULAR
                </div>
                <Badge className="mb-3 bg-primary text-primary-foreground">
                  Premium
                </Badge>
                <ul className="space-y-2">
                  {service.premium.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
              </Card>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
