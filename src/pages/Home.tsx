import { useNavigate } from 'react-router-dom';
import { Download, Printer, Scissors, Share } from 'lucide-react';
import heroImage from '@/assets/hero-papercraft.jpg';

const steps = [
  {
    icon: Download,
    emoji: '🖥️',
    title: 'Download',
    description: 'Choose your favorite model'
  },
  {
    icon: Printer,
    emoji: '🖨️',
    title: 'Print',
    description: 'Print on regular paper'
  },
  {
    icon: Scissors,
    emoji: '✂️',
    title: 'Cut & Paste',
    description: 'Follow the folding lines'
  },
  {
    icon: Share,
    emoji: '🎉',
    title: 'Share',
    description: 'Show off your creation!'
  }
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-playful py-20 px-4">
        <div className="container mx-auto text-center">
          {/* Hero Title */}
          <h1 className="title-hero mb-8 animate-pulse-glow">
            QuoCraft
          </h1>
          
          {/* Hero Description */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed">
              Turn 3D models into real papercraft! Download from QuoCraft, 
              print at home, cut/paste, and share your creations with friends!
            </p>
            
            {/* Hero Image */}
            <div className="relative mb-8 rounded-3xl overflow-hidden shadow-glow">
              <img 
                src={heroImage} 
                alt="Colorful papercraft models on a craft table with scissors and glue"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
            
            {/* CTA Button */}
            <button
              onClick={() => navigate('/gallery')}
              className="btn-hero text-xl px-12 py-6"
            >
              Explore Models 🚀
            </button>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="title-playful text-center mb-16">
            How It Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="card-model mb-6 group-hover:shadow-glow transition-all duration-500">
                    <div className="text-6xl mb-4">{step.emoji}</div>
                    <Icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-secondary-dark">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-secondary-foreground mb-6">
            Ready to Start Crafting?
          </h2>
          <p className="text-xl text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
            Browse our collection of amazing papercraft models and start your DIY adventure today!
          </p>
          <button
            onClick={() => navigate('/gallery')}
            className="btn-playful bg-primary text-primary-foreground text-lg"
          >
            Browse Gallery 📚
          </button>
        </div>
      </section>
    </div>
  );
}