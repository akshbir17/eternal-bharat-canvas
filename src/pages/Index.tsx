import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import HeritageCard from "@/components/HeritageCard";
import { useLanguage } from "@/contexts/LanguageContext";

import tajMahalImg from "@/assets/hero-taj-mahal.jpg";
import ajantaCavesImg from "@/assets/ajanta-caves.jpg";
import yogaImg from "@/assets/yoga-heritage.jpg";
import kumbhMelaImg from "@/assets/kumbh-mela.jpg";
import classicalDanceImg from "@/assets/classical-dance.jpg";
import vedicChantingImg from "@/assets/vedic-chanting.jpg";
import jointFamilyImg from "@/assets/joint-family.jpg";

const Index = () => {
  const { t } = useLanguage();
  const heritageItems = [
    {
      title: "The Taj Mahal",
      description: "A UNESCO World Heritage site, this iconic white marble mausoleum in Agra is a symbol of love and a masterpiece of Mughal architecture, representing India's historical grandeur.",
      image: tajMahalImg,
    },
    {
      title: "The Ajanta and Ellora Caves",
      description: "These ancient rock-cut cave complexes in Maharashtra feature stunning Buddhist, Hindu, and Jain art and architecture, highlighting religious diversity and artistic skill.",
      image: ajantaCavesImg,
    },
    {
      title: "Yoga",
      description: "An ancient Indian practice for mind, body, and spirit, yoga has become a worldwide phenomenon and is recognized as an intangible cultural heritage by UNESCO.",
      image: yogaImg,
    },
    {
      title: "The Kumbh Mela",
      description: "A mass Hindu pilgrimage and festival that is one of the largest peaceful gatherings in the world, it exemplifies India's rich religious traditions and is also recognized on the UNESCO list.",
      image: kumbhMelaImg,
    },
    {
      title: "Diverse Dance Forms",
      description: "India boasts a vibrant performing arts tradition, with styles like Kathak (North Indian classical dance), Kathakali (a classical dance-drama from Kerala), and Chhau (a semi-classical Indian dance).",
      image: classicalDanceImg,
    },
    {
      title: "Vedic Chanting",
      description: "The oral tradition of reciting sacred Vedic texts, known for its melodic structure, is a significant intangible heritage, reflecting ancient knowledge systems.",
      image: vedicChantingImg,
    },
    {
      title: "The Joint Family System",
      description: "A social structure where multiple generations live together, this has been a prevalent aspect of Indian family life for centuries, embodying traditions of kinship and shared living.",
      image: jointFamilyImg,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      
      {/* Heritage Section */}
      <section id="heritage" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
              {t('heritage.title')}
            </h2>
            <p className="text-lg font-inter text-foreground/70 max-w-2xl mx-auto">
              {t('heritage.description')}
            </p>
          </div>

          <div className="space-y-24">
            {heritageItems.map((item, index) => (
              <HeritageCard
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
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

export default Index;
