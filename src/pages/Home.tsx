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
      <section className="relative bg-playful py-20 px-4 bg-yellow-100">
        <div className="container mx-auto text-center">
          {/* Hero Title */}
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 animate-pulse-glow">
            <span style={{
            color: 'hsl(var(--light-lime))'
          }} className="font-extrabold text-yellow-500">Quo</span>
            <span style={{
            color: 'hsl(var(--pastel-violet))'
          }} className="text-8xl text-purple-900">Craft</span>
          </h1>
          
          {/* Hero Description */}
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl md:text-2xl mb-8 leading-relaxed hover:scale-105 transition-transform duration-300 text-gray-800">
              Turn 3D models into real papercraft! Download from QuoCraft, 
              print at home, cut/paste, and share your creations with friends!
            </p>
            
            {/* CTA Button */}
            <button onClick={() => navigate('/gallery')} className="btn-solid-yellow text-xl px-12 py-6">
              Explore Models
            </button>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-4 bg-soft-gradient pt-24 pb-24 bg-yellow-100">
        <div className="container mx-auto rounded-md bg-yellow-100">
          <h2 className="title-playful text-center mb-16 hover:scale-105 transition-transform duration-300 font-semibold text-4xl text-[#40ff00]">
            How It Works
          </h2>
          
          <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
            {steps.map((step, index) => {
            const Icon = step.icon;
            return <div key={index} className="text-center group">
                  <div className="card-model p-4 group-hover:shadow-glow transition-all duration-500 bg-amber-300">
                    <Icon style={{
                  color: 'hsl(var(--lime))'
                }} className="h-10 w-10 mx-auto mb-3 bg-transparent" />
                    <h3 style={{
                  color: 'hsl(var(--lime))'
                }} className="font-bold mb-2 text-xl text-slate-50">
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