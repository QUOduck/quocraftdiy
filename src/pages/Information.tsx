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
    <div className="min-h-screen bg-secondary-dark text-secondary-foreground">
      {/* Header */}
      <section className="py-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6" style={{ color: 'hsl(var(--primary))' }}>
            Information & About
          </h1>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            Learn more about QuoCraft, safety guidelines, and connect with our community!
          </p>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card rounded-3xl p-8 mb-12 shadow-card">
            <div className="flex items-center gap-4 mb-6">
              <Heart className="h-8 w-8 text-pink" />
              <h2 className="text-3xl font-bold text-card-foreground">About the Creator</h2>
            </div>
            <div className="text-card-foreground space-y-4">
              <p className="text-lg leading-relaxed">
                Hi there! I'm the creator behind QuoCraft - a passionate DIY enthusiast who loves 
                turning digital creativity into hands-on fun! 🎨
              </p>
              <p className="text-lg leading-relaxed">
                I started this project because I believe in the magic of creating something 
                tangible with your own hands. There's nothing quite like seeing a flat piece 
                of paper transform into a 3D masterpiece!
              </p>
              <p className="text-lg leading-relaxed">
                Whether you're a parent looking for a fun activity with your kids, a teacher 
                seeking creative classroom projects, or just someone who loves crafting - 
                QuoCraft is here to spark joy and creativity! ✨
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card rounded-3xl p-8 mb-12 shadow-card">
            <div className="flex items-center gap-4 mb-6">
              <Scissors className="h-8 w-8 text-lime" />
              <h2 className="text-3xl font-bold text-card-foreground">Safety First!</h2>
            </div>
            <div className="bg-lime/10 rounded-2xl p-6 border-2 border-lime/20">
              <div className="text-card-foreground space-y-4">
                <p className="text-lg font-semibold text-lime">
                  ⚠️ Important Safety Guidelines
                </p>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-lime font-bold">•</span>
                    <span><strong>Always ask an adult for help</strong> when using scissors or craft knives</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lime font-bold">•</span>
                    <span><strong>Work in a well-lit area</strong> to see cut lines clearly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lime font-bold">•</span>
                    <span><strong>Use child-safe glue</strong> and avoid getting it on your skin</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-lime font-bold">•</span>
                    <span><strong>Perfect for workshops, schools,</strong> and supervised craft time!</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card rounded-3xl p-8 mb-12 shadow-card">
            <div className="flex items-center gap-4 mb-6">
              <Shield className="h-8 w-8 text-blue" />
              <h2 className="text-3xl font-bold text-card-foreground">Legal Information</h2>
            </div>
            <div className="text-card-foreground space-y-4">
              <p className="text-lg leading-relaxed">
                <strong>Personal Use Only:</strong> All models provided on QuoCraft are intended 
                for personal, educational, and non-commercial use only.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>Attribution:</strong> If you share your creations on social media, 
                we'd love a mention @QuoCraft - but it's not required!
              </p>
              <p className="text-lg leading-relaxed">
                <strong>Disclaimer:</strong> QuoCraft provides templates "as is" and is not 
                responsible for any injuries that may occur during crafting. Please craft responsibly!
              </p>
              <p className="text-base text-muted-foreground">
                For questions about licensing or commercial use, please reach out via our social channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: 'hsl(var(--primary))' }}>
            Connect With Us! 🌟
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  <div className="btn-social text-center py-6 px-4 group">
                    <Icon className="h-8 w-8 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-bold mb-2">{social.name}</h3>
                    <p className="text-sm opacity-90">{social.handle}</p>
                  </div>
                </a>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg opacity-80">
              Join our community and share your amazing creations! 🎉
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}