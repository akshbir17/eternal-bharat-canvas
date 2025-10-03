import { Card } from "@/components/ui/card";

interface HeritageCardProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

const HeritageCard = ({ title, description, image, reverse = false }: HeritageCardProps) => {
  return (
    <div className={`grid md:grid-cols-2 gap-8 items-center ${reverse ? 'md:grid-flow-dense' : ''}`}>
      <div className={`${reverse ? 'md:col-start-2' : ''}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-[400px] object-cover rounded-2xl shadow-elegant hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      
      <Card className="p-8 bg-card border-border hover:shadow-elegant transition-all duration-300">
        <h3 className="text-3xl font-bold font-poppins mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-lg font-inter leading-relaxed text-foreground/80">
          {description}
        </p>
      </Card>
    </div>
  );
};

export default HeritageCard;
