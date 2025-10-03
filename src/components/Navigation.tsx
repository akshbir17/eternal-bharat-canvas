import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: 'en' as const, name: 'English' },
    { code: 'hi' as const, name: 'हिंदी' },
    { code: 'ta' as const, name: 'தமிழ்' },
    { code: 'te' as const, name: 'తెలుగు' },
    { code: 'bn' as const, name: 'বাংলা' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-hero rounded-md flex items-center justify-center">
              <span className="text-background font-bold font-poppins text-lg">भ</span>
            </div>
            <span className="text-xl font-bold font-poppins">{t('hero.title')}</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => window.location.href = "/"}
              className="text-foreground hover:text-primary transition-colors font-inter font-medium"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => window.location.href = "/calendar"}
              className="text-foreground hover:text-primary transition-colors font-inter font-medium"
            >
              {t('nav.calendar')}
            </button>
            <button
              onClick={() => window.location.href = "/archive"}
              className="text-foreground hover:text-primary transition-colors font-inter font-medium"
            >
              {t('nav.archive')}
            </button>
            <button
              onClick={() => window.location.href = "/audio-guide"}
              className="text-foreground hover:text-primary transition-colors font-inter font-medium"
            >
              {t('nav.audioGuide')}
            </button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Globe className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={language === lang.code ? 'bg-accent' : ''}
                  >
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button
              onClick={() => { window.location.href = "/"; setIsOpen(false); }}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-inter font-medium"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => { window.location.href = "/calendar"; setIsOpen(false); }}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-inter font-medium"
            >
              {t('nav.calendar')}
            </button>
            <button
              onClick={() => { window.location.href = "/archive"; setIsOpen(false); }}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-inter font-medium"
            >
              {t('nav.archive')}
            </button>
            <button
              onClick={() => { window.location.href = "/audio-guide"; setIsOpen(false); }}
              className="block w-full text-left text-foreground hover:text-primary transition-colors font-inter font-medium"
            >
              {t('nav.audioGuide')}
            </button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full">
                  <Globe className="h-4 w-4 mr-2" />
                  Language
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={language === lang.code ? 'bg-accent' : ''}
                  >
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
