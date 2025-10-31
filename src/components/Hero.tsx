import { Button } from "@/components/ui/button";
import supraLogo from "@/assets/supra-solo-logo.png";
import heroImage from "@/assets/hero-carwash.jpg";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('message').textContent= 'Hola! Quiero reservar un turno... ';
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black/30" />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <img 
          src={supraLogo} 
          alt="Supra Car Wash Logo" 
          className="w-70 h-40  mx-auto mb-4 animate-fade-in"
        />
       
        <h2 className="text-center text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up">
        <p> Tu auto impecable <br />
        <span className="text-primary"> sin salir de casa</span> </p>
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto animate-fade-in-up">
          Servicio exclusivo en barrios privados
        </p>
        
        <p className="text-base md:text-lg text-white/80 mb-10 max-w-2xl mx-auto animate-fade-in-up">
          Utilizamos el método <strong>Rinseless Wash</strong> - La técnica más avanzada y ecológica de Estados Unidos
        </p>
        
        <Button 
          size="lg"
          onClick={scrollToContact}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-full shadow-premium transition-smooth hover:scale-105 animate-fade-in-up"
        >
          Reservá tu Turno <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </header>
  );
};

export default Hero;
