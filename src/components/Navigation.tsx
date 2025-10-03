import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-md flex items-center justify-center">
              <span className="text-background font-bold font-poppins">भ</span>
            </div>
            <h1 className="text-xl font-bold font-poppins">The Eternal Bharat</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#heritage" className="text-foreground hover:text-primary transition-colors font-inter">
              Heritage
            </a>
            <a href="#culture" className="text-foreground hover:text-primary transition-colors font-inter">
              Culture
            </a>
            <a href="#traditions" className="text-foreground hover:text-primary transition-colors font-inter">
              Traditions
            </a>
          </div>

          <Button variant="default" className="font-inter">
            Explore
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
