import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi' | 'ta' | 'te' | 'bn';

interface Translations {
  [key: string]: {
    [lang in Language]: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.home': { en: 'Home', hi: 'होम', ta: 'முகப்பு', te: 'హోమ్', bn: 'হোম' },
  'nav.heritage': { en: 'Heritage', hi: 'धरोहर', ta: 'பாரம்பரியம்', te: 'వారసత్వం', bn: 'ঐতিহ্য' },
  'nav.calendar': { en: 'Calendar', hi: 'कैलेंडर', ta: 'நாட்காட்டி', te: 'క్యాలెండర్', bn: 'ক্যালেন্ডার' },
  'nav.archive': { en: 'Archive', hi: 'संग्रह', ta: 'காப்பகம்', te: 'ఆర్కైవ్', bn: 'সংরক্ষণাগার' },
  'nav.audioGuide': { en: 'Audio Guide', hi: 'ऑडियो गाइड', ta: 'ஆடியோ வழிகாட்டி', te: 'ఆడియో గైడ్', bn: 'অডিও গাইড' },
  
  // Hero Section
  'hero.title': { en: 'The Eternal Bharat', hi: 'शाश्वत भारत', ta: 'நித்திய பாரதம்', te: 'శాశ్వత భారతం', bn: 'শাশ্বত ভারত' },
  'hero.subtitle': { en: "Discover India's Rich Cultural Heritage", hi: 'भारत की समृद्ध सांस्कृतिक विरासत की खोज करें', ta: 'இந்தியாவின் வளமான கலாச்சார பாரம்பரியத்தை கண்டுபிடியுங்கள்', te: 'భారతదేశం యొక్క గొప్ప సాంస్కృతిక వారసత్వాన్ని కనుగొనండి', bn: 'ভারতের সমৃদ্ধ সাংস্কৃতিক ঐতিহ্য আবিষ্কার করুন' },
  'hero.description': { en: 'Journey through thousands of years of heritage, traditions, and timeless wisdom that make India truly eternal', hi: 'हजारों वर्षों की विरासत, परंपराओं और कालातीत ज्ञान के माध्यम से यात्रा करें जो भारत को वास्तव में शाश्वत बनाती है', ta: 'இந்தியாவை உண்மையிலேயே நித்தியமாக்கும் ஆயிரக்கணக்கான ஆண்டுகால பாரம்பரியம், பாரம்பரியங்கள் மற்றும் காலமற்ற ஞானத்தின் மூலம் பயணியுங்கள்', te: 'భారతదేశాన్ని నిజంగా శాశ్వతంగా చేసే వేల సంవత్సరాల వారసత్వం, సంప్రదాయాలు మరియు శాశ్వత జ్ఞానం ద్వారా ప్రయాణించండి', bn: 'হাজার হাজার বছরের ঐতিহ্য, ঐতিহ্য এবং নিরবধি জ্ঞানের মধ্য দিয়ে যাত্রা করুন যা ভারতকে সত্যিই শাশ্বত করে তোলে' },
  'hero.exploreBtn': { en: 'Explore Heritage', hi: 'धरोहर देखें', ta: 'பாரம்பரியத்தை ஆராயுங்கள்', te: 'వారసత్వాన్ని అన్వేషించండి', bn: 'ঐতিহ্য অন্বেষণ করুন' },
  'hero.learnBtn': { en: 'Learn More', hi: 'और जानें', ta: 'மேலும் அறிக', te: 'మరింత తెలుసుకోండి', bn: 'আরও জানুন' },
  
  // Heritage Section
  'heritage.title': { en: 'Cultural Heritage of India', hi: 'भारत की सांस्कृतिक विरासत', ta: 'இந்தியாவின் கலாச்சார பாரம்பரியம்', te: 'భారతదేశం యొక్క సాంస్కృతిక వారసత్వం', bn: 'ভারতের সাংস্কৃতিক ঐতিহ্য' },
  'heritage.description': { en: "Explore the timeless traditions and treasures that make India's cultural heritage truly eternal", hi: 'कालातीत परंपराओं और खजानों का अन्वेषण करें जो भारत की सांस्कृतिक विरासत को वास्तव में शाश्वत बनाती हैं', ta: 'இந்தியாவின் கலாச்சார பாரம்பரியத்தை உண்மையிலேயே நித்தியமாக்கும் காலமற்ற பாரம்பரியங்கள் மற்றும் பொக்கிஷங்களை ஆராயுங்கள்', te: 'భారతదేశం యొక్క సాంస్కృతిక వారసత్వాన్ని నిజంగా శాశ్వతంగా చేసే శాశ్వత సంప్రదాయాలు మరియు సంపదలను అన్వేషించండి', bn: 'ভারতের সাংস্কৃতিক ঐতিহ্যকে সত্যিই শাশ্বত করে তোলে এমন কালজয়ী ঐতিহ্য এবং ভাণ্ডার অন্বেষণ করুন' },
  
  // Footer
  'footer.tagline': { en: "Preserving and celebrating India's timeless cultural heritage", hi: 'भारत की कालातीत सांस्कृतिक विरासत का संरक্षण और उत्सव', ta: 'இந்தியாவின் காலமற்ற கலாச்சார பாரம்பரியத்தைப் பாதுகாத்தல் மற்றும் கொண்டாடுதல்', te: 'భారతదేశం యొక్క శాశ్వత సాంస్కృతిక వారసత్వాన్ని సంరక్షించడం మరియు జరుపుకోవడం', bn: 'ভারতের নিরবধি সাংস্কৃতিক ঐতিহ্য সংরক্ষণ এবং উদযাপন' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
