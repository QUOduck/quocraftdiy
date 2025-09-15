import { Instagram, Youtube, MessageCircle, Shield, Heart, Scissors } from 'lucide-react';

const socialLinks = [
  {
    name: 'Instagram',
    handle: '@thequoduckcode',
    url: 'https://instagram.com/thequoduckcode',
    icon: Instagram,
    gradient: 'bg-gradient-to-r from-pink-500 to-purple-500'
  },
  {
    name: 'YouTube',
    handle: 'TheQuoDuck',
    url: 'https://youtube.com/@thequoduck',
    icon: Youtube,
    gradient: 'bg-gradient-to-r from-red-500 to-red-600'
  },
  {
    name: 'Discord',
    handle: 'TheQuoDuckGames',
    url: 'https://discord.com/users/thequoduckgames',
    icon: MessageCircle,
    gradient: 'bg-gradient-to-r from-blue-500 to-indigo-600'
  }
];

export default function Information() {
  return (
    <div className="min-h-screen bg-secondary-dark text-secondary-foreground relative">
      {/* Header */}
      <section className="py-12 px-4 pt-24">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 hover:scale-105 transition-transform duration-300" style={{ color: 'hsl(var(--primary))' }}>
            Information & About
          </h1>
          <p className="text-xl opacity-80 max-w-2xl mx-auto hover:opacity-100 transition-opacity duration-300">
            Learn more about QuoCraft, safety guidelines, and connect with our community!
          </p>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* About Me */}
            <div className="bg-card rounded-2xl p-6 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="h-6 w-6 text-pink" />
                <h2 className="text-xl font-bold text-card-foreground">About the Creator</h2>
              </div>
              <div className="text-card-foreground space-y-3">
                <p className="text-sm leading-relaxed">
                  Hi there! I'm the creator behind QuoCraft - a passionate DIY enthusiast who loves 
                  turning digital creativity into hands-on fun!
                </p>
                <p className="text-sm leading-relaxed">
                  I started this project because I believe in the magic of creating something 
                  tangible with your own hands.
                </p>
              </div>
            </div>

            {/* Safety */}
            <div className="bg-card rounded-2xl p-6 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <Scissors className="h-6 w-6 text-lime" />
                <h2 className="text-xl font-bold text-card-foreground">Safety First!</h2>
              </div>
              <div className="bg-lime/10 rounded-xl p-4 border border-lime/20">
                <p className="text-sm font-semibold text-lime mb-2">Important Guidelines</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-lime font-bold text-xs">•</span>
                    <span className="text-black">Always ask an adult for help with scissors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lime font-bold text-xs">•</span>
                    <span className="text-black">Work in a well-lit area</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lime font-bold text-xs">•</span>
                    <span className="text-black">Use child-safe glue</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Legal */}
            <div className="bg-card rounded-2xl p-6 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-blue" />
                <h2 className="text-xl font-bold text-card-foreground">Legal Information</h2>
              </div>
              <div className="text-card-foreground space-y-3 text-sm">
                <p><strong>Personal Use Only:</strong> All models are for personal, educational use only.</p>
                <p><strong>Attribution:</strong> Social media mentions are appreciated but not required.</p>
                <p><strong>Disclaimer:</strong> Craft responsibly and safely.</p>
              </div>
            </div>

            {/* Community */}
            <div className="bg-card rounded-2xl p-6 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle className="h-6 w-6 text-violet" />
                <h2 className="text-xl font-bold text-card-foreground">Join Our Community</h2>
              </div>
              <div className="text-card-foreground space-y-3 text-sm">
                <p>Connect with fellow crafters and share your amazing creations!</p>
                <p>Get tips, inspiration, and help from our friendly community.</p>
                <p>Perfect for workshops, schools, and craft time!</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 px-4 pb-24">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-center mb-8 hover:scale-105 transition-transform duration-300" style={{ color: 'hsl(var(--primary))' }}>
            Connect With Us!
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="btn-social text-center py-4 px-3 group">
                    <Icon className="h-6 w-6 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-base font-bold mb-1">{social.name}</h3>
                    <p className="text-xs opacity-90">{social.handle}</p>
                  </div>
                </a>
              );
            })}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm opacity-80">
              Join our community and share your amazing creations!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}