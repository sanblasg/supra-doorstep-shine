import washSuv from "@/assets/wash-suv.jpg";
import washDetail from "@/assets/wash-detail.jpg";
import washResult from "@/assets/wash-result.jpg";

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
            Nuestro <span className="text-primary">Trabajo</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Resultados que hablan por sí solos
          </p>
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
