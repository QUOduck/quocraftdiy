import { useState, useMemo } from 'react';
import { Search, Download, ExternalLink } from 'lucide-react';
import { Input } from '@/components/ui/input';

// Mock data structure for Google Sheets integration
const mockModels = [
  {
    id: 1,
    title: 'Cute Penguin',
    description: 'Adorable low-poly penguin perfect for beginners',
    thumbnailUrl: 'https://images.unsplash.com/photo-1551986782-d0169b3f8fa7?w=400&h=300&fit=crop&crop=faces',
    downloadLink: '#download-penguin',
    difficulty: 'Easy'
  },
  {
    id: 2,
    title: 'Dragon Castle',
    description: 'Majestic castle with towers and dragons',
    thumbnailUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
    downloadLink: '#download-castle',
    difficulty: 'Hard'
  },
  {
    id: 3,
    title: 'Space Rocket',
    description: 'Blast off to space with this awesome rocket',
    thumbnailUrl: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=300&fit=crop',
    downloadLink: '#download-rocket',
    difficulty: 'Medium'
  },
  {
    id: 4,
    title: 'Flower Garden',
    description: 'Beautiful papercraft flowers to decorate your room',
    thumbnailUrl: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=300&fit=crop',
    downloadLink: '#download-flowers',
    difficulty: 'Easy'
  },
  {
    id: 5,
    title: 'Robot Buddy',
    description: 'Friendly robot companion for endless adventures',
    thumbnailUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
    downloadLink: '#download-robot',
    difficulty: 'Medium'
  },
  {
    id: 6,
    title: 'Pirate Ship',
    description: 'Sail the seven seas with this detailed ship',
    thumbnailUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop',
    downloadLink: '#download-ship',
    difficulty: 'Hard'
  }
];

const difficultyColors = {
  'Easy': 'bg-lime text-white',
  'Medium': 'bg-blue text-white', 
  'Hard': 'bg-pink text-white'
};

export default function Gallery() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredModels = useMemo(() => {
    return mockModels.filter(model =>
      model.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      model.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleDownload = (model: typeof mockModels[0]) => {
    // In a real implementation, this would trigger the actual download
    alert(`Downloading ${model.title}! 🎉\n\nIn the real app, this would download the PDF from: ${model.downloadLink}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-playful py-12 px-4">
        <div className="container mx-auto">
          <h1 className="title-playful text-center mb-8">
            Paper Models Gallery
          </h1>
          <p className="text-lg text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover amazing papercraft models! Search, download, and start creating.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search models..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 rounded-xl border-2 border-primary/20 focus:border-primary transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Models Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          {filteredModels.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-2xl text-muted-foreground mb-4">
                No models found 😢
              </p>
              <p className="text-muted-foreground">
                Try searching for something else!
              </p>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">
                  {filteredModels.length} Model{filteredModels.length !== 1 ? 's' : ''} Found
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredModels.map((model) => (
                  <div
                    key={model.id}
                    className="card-model group"
                  >
                    {/* Model Image */}
                    <div className="relative mb-4 rounded-xl overflow-hidden">
                      <img
                        src={model.thumbnailUrl}
                        alt={model.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute top-3 right-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${difficultyColors[model.difficulty as keyof typeof difficultyColors]}`}>
                          {model.difficulty}
                        </span>
                      </div>
                    </div>

                    {/* Model Info */}
                    <h3 className="text-xl font-bold mb-2">{model.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      {model.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleDownload(model)}
                        className="flex-1 btn-playful bg-gradient-violet-lime text-white flex items-center justify-center gap-2"
                      >
                        <Download className="h-4 w-4" />
                        Download PDF
                      </button>
                      <button
                        onClick={() => window.open(model.downloadLink, '_blank')}
                        className="p-3 rounded-xl border-2 border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                        title="View details"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}