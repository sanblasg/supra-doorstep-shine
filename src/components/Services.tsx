import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const services = [
  {
    vehicleType: "Auto",
    basic: {
      price: "$15.000",
      features: [
        "Lavado exterior completo",
        "Limpieza de llantas",
        "Secado y terminación",
        "Productos rinseless premium"
      ]
    },
    premium: {
      price: "$25.000",
      features: [
        "Todo lo del básico",
        "Limpieza interior profunda",
        "Aspirado completo",
        "Limpieza de vidrios",
        "Aromatización"
      ]
    }
  },
  {
    vehicleType: "SUV",
    basic: {
      price: "$18.000",
      features: [
        "Lavado exterior completo",
        "Limpieza de llantas",
        "Secado y terminación",
        "Productos rinseless premium"
      ]
    },
    premium: {
      price: "$30.000",
      features: [
        "Todo lo del básico",
        "Limpieza interior profunda",
        "Aspirado completo",
        "Limpieza de vidrios",
        "Aromatización"
      ]
    }
  },
  {
    vehicleType: "Camioneta",
    basic: {
      price: "$20.000",
      features: [
        "Lavado exterior completo",
        "Limpieza de llantas",
        "Secado y terminación",
        "Productos rinseless premium"
      ]
    },
    premium: {
      price: "$32.000",
      features: [
        "Todo lo del básico",
        "Limpieza interior profunda",
        "Aspirado completo",
        "Limpieza de vidrios",
        "Aromatización"
      ]
    }
  },
  {
    vehicleType: "Camioneta Grande",
    basic: {
      price: "$23.000",
      features: [
        "Lavado exterior completo",
        "Limpieza de llantas",
        "Secado y terminación",
        "Productos rinseless premium"
      ]
    },
    premium: {
      price: "$35.000",
      features: [
        "Todo lo del básico",
        "Limpieza interior profunda",
        "Aspirado completo",
        "Limpieza de vidrios",
        "Aromatización"
      ]
    }
  }
];

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            Nuestros <span className="text-primary">Servicios</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Elegí el plan perfecto para tu vehículo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-2xl font-bold text-center text-foreground mb-4">
                {service.vehicleType}
              </h3>
              
              {/* Basic */}
              <Card className="p-6 border-2 border-border hover:shadow-card transition-smooth bg-card">
                <Badge className="mb-3 bg-secondary text-secondary-foreground">
                  Básico
                </Badge>
                <div className="mb-4">
                  <span className="text-3xl font-extrabold text-primary">
                    {service.basic.price}
                  </span>
                </div>
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
                <div className="mb-4">
                  <span className="text-3xl font-extrabold text-primary">
                    {service.premium.price}
                  </span>
                </div>
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
