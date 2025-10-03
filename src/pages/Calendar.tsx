import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Festival {
  name: string;
  date: string;
  month: string;
  description: string;
  region: string;
  type: string;
}

const Calendar = () => {
  const { t } = useLanguage();
  const [festivals] = useState<Festival[]>([
    {
      name: "Pongal",
      date: "14-17 January",
      month: "January",
      description: "Tamil harvest festival celebrating the Sun God",
      region: "Tamil Nadu",
      type: "Harvest"
    },
    {
      name: "Holi",
      date: "March",
      month: "March",
      description: "Festival of colors celebrating spring and good over evil",
      region: "Pan-India",
      type: "Religious"
    },
    {
      name: "Baisakhi",
      date: "13-14 April",
      month: "April",
      description: "Sikh New Year and harvest festival",
      region: "Punjab",
      type: "Harvest"
    },
    {
      name: "Diwali",
      date: "October/November",
      month: "October",
      description: "Festival of lights celebrating victory of light over darkness",
      region: "Pan-India",
      type: "Religious"
    },
    {
      name: "Durga Puja",
      date: "September/October",
      month: "September",
      description: "Celebration of Goddess Durga's victory over evil",
      region: "West Bengal",
      type: "Religious"
    },
    {
      name: "Onam",
      date: "August/September",
      month: "August",
      description: "Harvest festival of Kerala celebrating King Mahabali",
      region: "Kerala",
      type: "Harvest"
    },
    {
      name: "Eid ul-Fitr",
      date: "Varies (Lunar)",
      month: "Varies",
      description: "Islamic festival marking end of Ramadan",
      region: "Pan-India",
      type: "Religious"
    },
    {
      name: "Ganesh Chaturthi",
      date: "August/September",
      month: "August",
      description: "Birth celebration of Lord Ganesha",
      region: "Maharashtra",
      type: "Religious"
    }
  ]);

  const groupByMonth = (festivals: Festival[]) => {
    return festivals.reduce((acc, festival) => {
      if (!acc[festival.month]) {
        acc[festival.month] = [];
      }
      acc[festival.month].push(festival);
      return acc;
    }, {} as Record<string, Festival[]>);
  };

  const groupedFestivals = groupByMonth(festivals);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <CalendarIcon className="w-12 h-12 text-primary mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold font-poppins">
                Cultural <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Calendar</span>
              </h1>
            </div>
            <p className="text-lg font-inter text-foreground/70 max-w-2xl mx-auto">
              Discover India's vibrant festivals and celebrations throughout the year
            </p>
          </div>

          <div className="space-y-12">
            {Object.entries(groupedFestivals).map(([month, festivals]) => (
              <div key={month}>
                <h2 className="text-2xl font-bold font-poppins mb-6 text-primary">{month}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {festivals.map((festival, index) => (
                    <Card key={index} className="hover:shadow-elegant transition-shadow">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="font-poppins">{festival.name}</CardTitle>
                          <Badge variant="secondary">{festival.type}</Badge>
                        </div>
                        <CardDescription className="font-inter">{festival.date}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/80 font-inter mb-3">{festival.description}</p>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{festival.region}</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
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

export default Calendar;
