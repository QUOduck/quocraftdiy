import { useNavigate } from 'react-router-dom';
import { Download, Printer, Scissors, Share } from 'lucide-react';
const steps = [{
  icon: Download,
  title: 'Download',
  description: 'Choose your favorite model'
}, {
  icon: Printer,
  title: 'Print',
  description: 'Print on regular paper'
}, {
  icon: Scissors,
  title: 'Cut & Paste',
  description: 'Follow the folding lines'
}, {
  icon: Share,
  title: 'Share',
  description: 'Show off your creation!'
}];
export default function Home() {
  const navigate = useNavigate();
  return <div className="min-h-screen relative">      
      {/* Hero Section */}
      <section className="relative bg-playful py-20 px-4">
        <div className="container mx-auto text-center">
          {/* Hero Title */}
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 animate-pulse-glow">
            <span style={{
            color: 'hsl(var(--light-lime))'
          }}>Quo</span>
            <span style={{
            color: 'hsl(var(--pastel-violet))'
          }}>Craft</span>
          </h1>
          
          {/* Hero Description */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="md:text-2xl text-foreground mb-8 leading-relaxed hover:scale-105 transition-transform duration-300 text-xs">
              Welcome to QuoCraft, the ultimate resource for hands-on creativity! Our website is dedicated to inspiring makers of all ages with a comprehensive library of printable papercraft models, from simple projects to intricate designs. You can also explore our video gallery for step-by-step craft tutorials and download a wide variety of printable colouring pages to spark your imagination.
            </p>
            
            {/* CTA Button */}
            <button onClick={() => navigate('/gallery')} className="btn-solid-yellow text-xl px-12 py-6">
              Explore Models
            </button>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-4 bg-soft-gradient pt-24 pb-24">
        <div className="container mx-auto">
          <h2 className="title-playful text-center mb-16 hover:scale-105 transition-transform duration-300">
            How It Works
          </h2>
          
          <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
            {steps.map((step, index) => {
            const Icon = step.icon;
            return <div key={index} className="text-center group">
                  <div className="card-model p-4 group-hover:shadow-glow transition-all duration-500">
                    <Icon className="h-10 w-10 mx-auto mb-3" style={{
                  color: 'hsl(var(--lime))'
                }} />
                    <h3 className="text-lg font-bold mb-2" style={{
                  color: 'hsl(var(--lime))'
                }}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-purple-900">
                      {step.description}
                    </p>
                  </div>
                </div>;
          })}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-secondary-dark">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-secondary-foreground mb-6 hover:scale-105 transition-transform duration-300">
            Ready to Start Crafting?
          </h2>
          <p className="text-xl text-secondary-foreground/80 mb-8 max-w-2xl mx-auto hover:text-secondary-foreground transition-colors duration-300">
            Browse our collection of amazing papercraft models and start your DIY adventure today!
          </p>
          <button onClick={() => navigate('/gallery')} className="btn-solid-lime text-lg">
            Browse Gallery
          </button>
        </div>
      </section>
    </div>;
}