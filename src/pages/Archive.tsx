import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Archive as ArchiveIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

import tajMahalImg from "@/assets/hero-taj-mahal.jpg";
import ajantaCavesImg from "@/assets/ajanta-caves.jpg";
import yogaImg from "@/assets/yoga-heritage.jpg";
import kumbhMelaImg from "@/assets/kumbh-mela.jpg";
import classicalDanceImg from "@/assets/classical-dance.jpg";
import vedicChantingImg from "@/assets/vedic-chanting.jpg";
import jointFamilyImg from "@/assets/joint-family.jpg";

interface ArchiveItem {
  title: string;
  description: string;
  image: string;
  category: string;
  year: string;
}

const Archive = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  
  const archiveItems: ArchiveItem[] = [
    {
      title: "The Taj Mahal",
      description: "A UNESCO World Heritage site, this iconic white marble mausoleum in Agra is a symbol of love and a masterpiece of Mughal architecture.",
      image: tajMahalImg,
      category: "Architecture",
      year: "1653"
    },
    {
      title: "The Ajanta and Ellora Caves",
      description: "Ancient rock-cut cave complexes featuring stunning Buddhist, Hindu, and Jain art and architecture.",
      image: ajantaCavesImg,
      category: "Architecture",
      year: "200 BCE - 600 CE"
    },
    {
      title: "Yoga",
      description: "An ancient Indian practice for mind, body, and spirit, recognized as an intangible cultural heritage by UNESCO.",
      image: yogaImg,
      category: "Practice",
      year: "3000 BCE"
    },
    {
      title: "The Kumbh Mela",
      description: "One of the largest peaceful gatherings in the world, exemplifying India's rich religious traditions.",
      image: kumbhMelaImg,
      category: "Festival",
      year: "Ancient"
    },
    {
      title: "Classical Dance Forms",
      description: "India's vibrant performing arts tradition including Kathak, Kathakali, and Chhau.",
      image: classicalDanceImg,
      category: "Arts",
      year: "Ancient"
    },
    {
      title: "Vedic Chanting",
      description: "The oral tradition of reciting sacred Vedic texts with melodic structure.",
      image: vedicChantingImg,
      category: "Tradition",
      year: "1500 BCE"
    },
    {
      title: "Joint Family System",
      description: "A social structure where multiple generations live together, embodying traditions of kinship.",
      image: jointFamilyImg,
      category: "Social",
      year: "Ancient"
    }
  ];

  const filteredItems = archiveItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <ArchiveIcon className="w-12 h-12 text-primary mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold font-poppins">
                Digital <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Archive</span>
              </h1>
            </div>
            <p className="text-lg font-inter text-foreground/70 max-w-2xl mx-auto mb-8">
              Explore our comprehensive collection of India's cultural heritage
            </p>
            
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search heritage items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 font-inter"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-elegant transition-all group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="font-poppins">{item.title}</CardTitle>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="secondary">{item.category}</Badge>
                    <Badge variant="outline">{item.year}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-inter">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground font-inter">No items found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gradient-hero rounded-md flex items-center justify-center">
              <span className="text-background font-bold font-poppins text-lg">भ</span>
            </div>
            <h3 className="text-2xl font-bold font-poppins">{t('hero.title')}</h3>
          </div>
          <p className="font-inter text-background/80 mb-6">
            {t('footer.tagline')}
          </p>
          <div className="text-sm font-inter text-background/60">
            © 2025 The Eternal Bharat. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Archive;
