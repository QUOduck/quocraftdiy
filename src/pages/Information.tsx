import { Instagram, Youtube, MessageCircle, Shield, Heart, Scissors, FileText } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
const socialLinks = [{
  name: 'Instagram',
  handle: '@thequoduckcode',
  url: 'https://instagram.com/thequoduckcode',
  icon: Instagram,
  gradient: 'bg-gradient-to-r from-pink-500 to-purple-500'
}, {
  name: 'YouTube',
  handle: 'TheQuoDuck',
  url: 'https://youtube.com/@quoduckcode?si=v-nDeobi6dpITy0E',
  icon: Youtube,
  gradient: 'bg-gradient-to-r from-red-500 to-red-600'
}, {
  name: 'Discord',
  handle: 'TheQuoDuckGames',
  url: 'https://discord.gg/TtuzkGhM',
  icon: MessageCircle,
  gradient: 'bg-gradient-to-r from-blue-500 to-indigo-600'
}];
export default function Information() {
  return <div className="min-h-screen bg-secondary-dark text-secondary-foreground relative">
      {/* Header */}
      <section className="py-12 px-4 pt-24">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 hover:scale-105 transition-transform duration-300" style={{
          color: 'hsl(var(--primary))'
        }}>
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
          <h2 className="text-2xl font-bold text-center mb-8 hover:scale-105 transition-transform duration-300" style={{
          color: 'hsl(var(--primary))'
        }}>
            Connect With Us!
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {socialLinks.map(social => {
            const Icon = social.icon;
            return <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="btn-social text-center py-4 px-3 group">
                    <Icon className="h-6 w-6 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-base font-bold mb-1">{social.name}</h3>
                    <p className="text-xs opacity-90">{social.handle}</p>
                  </div>
                </a>;
          })}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm opacity-80 mb-4">
              Join our community and share your amazing creations!
            </p>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="gap-2 text-gray-950">
                  <FileText className="h-4 w-4" />
                  See Full Information
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] p-0 flex flex-col">
                <DialogHeader className="px-6 py-4 border-b flex-shrink-0">
                  <DialogTitle className="text-lg font-bold">QuoCraft - Complete Information</DialogTitle>
                </DialogHeader>
                <ScrollArea className="flex-1 px-6 py-4 max-h-[60vh]">
                  <div className="space-y-6 text-sm leading-relaxed">
                    
                    <section>
                      <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
                        ✨ About QuoCraft
                      </h2>
                      <p>
                        Welcome to QuoCraft, a creative space designed to spark imagination and hands-on fun for kids, teachers, and families. This platform brings together three wonderful types of resources — printable paper models, colouring pages, and hand-picked craft videos — all in one easy-to-use place.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
                        🎨 Printable Paper Models
                      </h2>
                      <p>
                        At QuoCraft, you'll find a growing gallery of ready-to-print paper models. Simply download the PDF, print it on your home printer, and start cutting, folding, and pasting. Each model comes with clear labels and fold lines to make assembly easier, even for beginners. Whether it's for a classroom project, a weekend activity, or just to relax and create something by hand, these models bring paper to life in fun and imaginative ways.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
                        🖍️ Colouring Pages
                      </h2>
                      <p>
                        Our colouring pages are perfect for kids who love to explore colours, practice hand control, or just enjoy relaxing with crayons, markers, or pencils. They are designed to be printable at home, making it quick and easy to get started. Great for personal fun, classroom use, or even group workshops, colouring pages are a wonderful way to explore creativity.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
                        🎥 External Craft Videos
                      </h2>
                      <p>
                        In addition to printable resources, QuoCraft offers a curated selection of YouTube craft videos. Each video is carefully handpicked to inspire creativity and teach new craft skills in a fun and engaging way. These videos are safe, family-friendly, and suitable for learners of different ages, providing step-by-step instructions that complement the paper models and colouring activities available here.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
                        🧒 Kid-Friendly and Easy to Navigate
                      </h2>
                      <p className="mb-3">
                        QuoCraft is designed with kids in mind. The homepage is bright, friendly, and easy to understand. A sidebar menu with a simple hamburger toggle button allows users to quickly jump between the main sections:
                      </p>
                      <ul className="space-y-1 ml-4">
                        <li>🏠 Home</li>
                        <li>📄 Paper Models Gallery</li>
                        <li>🎬 Craft Videos</li>
                        <li>🎨 Colouring Pages</li>
                      </ul>
                      <p className="mt-3">
                        This structure makes it effortless for children (and adults) to find what they need.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
                        🏫 Perfect for Workshops, Schools, and Home Fun
                      </h2>
                      <p>
                        The printable models, colouring sheets, and craft ideas can be used in workshops, school activities, family craft sessions, or personal projects. They're a great way to combine fun and learning, encourage creativity, and bring people together through art and craft.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
                        ⚠️ Safety Disclaimer
                      </h2>
                      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                        <p className="mb-2">
                          While QuoCraft provides fun resources for everyone, adult or teacher supervision is strongly recommended when children use scissors, cutters, or any other sharp tools. Safety should always come first.
                        </p>
                        <p className="mb-2">
                          I, the creator of QuoCraft, am not responsible for any injury, damage, or loss resulting from the use of these resources.
                        </p>
                        <p className="font-semibold">
                          Please ensure proper care is taken, especially when younger children are involved.
                        </p>
                      </div>
                    </section>

                    <section>
                      <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
                        👨‍💻 About the Creator
                      </h2>
                      <p>
                        QuoCraft was created by Kartik Pawar, an indie developer who loves blending creativity with technology. The platform is proudly built with the help of Lovable, a no-code tool that makes building apps and websites easier.
                      </p>
                    </section>

                    <section>
                      <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
                        🌐 Stay Connected
                      </h2>
                      <p className="mb-3">
                        Want to follow along or share your creations? You can connect with me on:
                      </p>
                      <ul className="space-y-1 ml-4 mb-3">
                        <li>📸 Instagram: @thequoduckcode</li>
                        <li>▶️ YouTube: TheQuoDuck</li>
                        <li>🎮 Discord: TheQuoDuckGames</li>
                      </ul>
                      <p>
                        Sharing QuoCraft with attribution on social media is always appreciated 💛. It helps this community grow and lets more people discover the joy of crafting, colouring, and creating together.
                      </p>
                    </section>

                    <section>
                      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-4">
                        <p className="text-center font-medium">
                          ✨ QuoCraft is all about sparking imagination, learning through play, and creating lasting memories with simple yet meaningful projects. Print, colour, craft, and share — the possibilities are endless!
                        </p>
                      </div>
                    </section>
                    
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>
    </div>;
}