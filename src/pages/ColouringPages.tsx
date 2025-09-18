import { useState, useEffect, useMemo } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface ColouringPage {
  id: string;
  imageLink: string;
  title: string;
}

export default function ColouringPages() {
  const [searchTerm, setSearchTerm] = useState('');
  const [pages, setPages] = useState<ColouringPage[]>([]);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const fetchPagesFromGoogleSheets = async () => {
    try {
      const response = await fetch(
        'https://docs.google.com/spreadsheets/d/1hGo5SSqRAZ4ZmbZ6gqSr-4iBAP7BtHIHuQKBDi0jd0Y/export?format=csv&gid=0'
      );
      const csvText = await response.text();
      
      const lines = csvText.split('\n').slice(1); // Skip header row
      const pagesData: ColouringPage[] = [];
      
      lines.forEach((line, index) => {
        if (line.trim()) {
          const columns = line.split(',');
          const imageLink = columns[0]?.replace(/"/g, '').trim() || '';
          const title = columns[1]?.replace(/"/g, '').trim() || '';
          
          if (imageLink) {
            pagesData.push({
              id: `page-${index}`,
              imageLink,
              title: title || `Colouring Page ${index + 1}`
            });
          }
        }
      });
      
      setPages(pagesData);
    } catch (error) {
      console.error('Error fetching colouring pages:', error);
    }
  };

  useEffect(() => {
    fetchPagesFromGoogleSheets();
  }, []);

  const filteredPages = useMemo(() => {
    return pages.filter(page =>
      page.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [pages, searchTerm]);

  const handleColour = (imageLink: string) => {
    window.open(imageLink, '_blank');
  };

  const handleImageLoad = (imageId: string) => {
    setLoadedImages(prev => new Set(prev).add(imageId));
  };

  return (
    <div className="min-h-screen bg-gradient-soft">
      <main className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="title-hero text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Colouring Pages
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover beautiful colouring pages to unleash your creativity!
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search colouring pages..."
              className="pl-10 bg-background/80 backdrop-blur border-primary/20"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Pages Grid */}
        {filteredPages.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">
              {searchTerm ? 'No colouring pages found matching your search.' : 'No colouring pages available yet.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPages.map((page) => (
              <div
                key={page.id}
                className="card-model-gallery group cursor-pointer transform transition-all duration-300 hover:scale-105"
              >
                {/* Colouring Page Image */}
                <div className="relative">
                  <div 
                    className="relative aspect-square rounded-lg overflow-hidden bg-secondary/20 flex items-center justify-center cursor-pointer"
                    onClick={() => handleColour(page.imageLink)}
                  >
                    <img
                      src={page.imageLink}
                      alt={page.title}
                      className={`w-full h-full object-cover transition-all duration-500 ${
                        loadedImages.has(page.id) 
                          ? 'opacity-100 transform scale-100' 
                          : 'opacity-0 transform scale-95'
                      }`}
                      onLoad={() => handleImageLoad(page.id)}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder.svg';
                      }}
                    />
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/60 to-transparent p-4">
                    <h3 className="font-bold text-lg leading-tight hover:scale-105 transition-transform duration-300" style={{color: 'hsl(var(--soft-red))'}}>
                      {page.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4">
                  {/* Colour Button */}
                  <button
                    onClick={() => handleColour(page.imageLink)}
                    className="w-full btn-soft-blue flex items-center justify-center gap-2"
                  >
                    Colour Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}