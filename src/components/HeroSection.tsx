import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-taj-mahal.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Taj Mahal at sunset" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Discover India's{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Sacred Heritage
          </span>
        </h1>
        
        <p className="text-lg md:text-xl font-inter max-w-3xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          Immerse yourself in the spiritual journey through millennia of cultural traditions, 
          ancient wisdom, and timeless heritage that defines Bharat
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <Button size="lg" className="font-inter text-lg px-8">
            Start Journey
          </Button>
          <Button size="lg" variant="secondary" className="font-inter text-lg px-8">
            Explore Map
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold font-poppins text-primary mb-2">5000+</div>
            <div className="text-sm md:text-base font-inter opacity-90">Years of History</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold font-poppins text-primary mb-2">40+</div>
            <div className="text-sm md:text-base font-inter opacity-90">UNESCO Sites</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold font-poppins text-primary mb-2">22</div>
            <div className="text-sm md:text-base font-inter opacity-90">Languages</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-background rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-background rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
