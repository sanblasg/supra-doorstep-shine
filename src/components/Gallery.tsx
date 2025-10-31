import washSuv from "@/assets/details/Rinseless-Wash.webp";
import washDetail from "@/assets/hero-carwash.jpg";
import washResult from "@/assets/wash-result.jpg";
import { Check } from "lucide-react";

const images = [
  {
    src: washSuv,
    alt: "Lavado profesional de SUV con productos rinseless"
  },
  {
    src: washDetail,
    alt: "Detallado premium con técnica waterless wash"
  },
  {
    src: washResult,
    alt: "Resultado final de lavado premium"
  }
];

const Gallery = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
          Ahorrá tiempo con  <span className="text-primary">nuestro servicio </span>de lavado y detallado de autos
          </h2>
          <br/>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          <li className="flex items-start gap-2">
          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />Aprovechá tu tiempo en lo que realmente importa, dejá el lavado en nuestras manos.<br />
          </li></p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          <li className="flex items-start gap-2">
          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />Vamos hasta donde estés y dejamos tu auto impecable, 100% satisfacción o te devolvemos tu dinero.
          </li></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-premium transition-smooth aspect-[4/3]"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-smooth"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
