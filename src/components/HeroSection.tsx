import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-taj-mahal.jpg";

const HeroSection = () => {
  const { t } = useLanguage();
  
  const scrollToHeritage = () => {
    const element = document.getElementById("heritage");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-block">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-inter font-medium">
              Celebrating 5000+ Years of Heritage
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-poppins leading-tight">
            {t('hero.title')}
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 font-inter max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
          
          <p className="text-lg text-foreground/70 font-inter max-w-3xl mx-auto">
            {t('hero.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              onClick={scrollToHeritage}
              className="group"
            >
              {t('hero.exploreBtn')}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              <Sparkles className="mr-2" />
              {t('hero.learnBtn')}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            <div className="space-y-2">
              <div className="text-4xl font-bold font-poppins text-primary">38</div>
              <div className="text-sm font-inter text-foreground/70">UNESCO World Heritage Sites</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold font-poppins text-primary">5000+</div>
              <div className="text-sm font-inter text-foreground/70">Years of Civilization</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold font-poppins text-primary">14</div>
              <div className="text-sm font-inter text-foreground/70">UNESCO Intangible Heritage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
