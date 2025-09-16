import { useState, useEffect, useMemo } from 'react';
import { Search, Play } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface Video {
  id: string;
  youtubeLink: string;
  title: string;
  thumbnail: string;
}

export default function CraftVideos() {
  const [searchTerm, setSearchTerm] = useState('');
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchVideosFromGoogleSheets = async () => {
    try {
      const response = await fetch(
        'https://docs.google.com/spreadsheets/d/1-FIF1X4TQ08LdlTjQHwGvyUHCTpHGx7ietDi5XHYs8s/export?format=csv&gid=0'
      );
      const csvText = await response.text();
      
      const lines = csvText.split('\n').slice(1); // Skip header row
      const videosData: Video[] = [];
      
      lines.forEach((line, index) => {
        if (line.trim()) {
          const columns = line.split(',');
          const youtubeLink = columns[0]?.replace(/"/g, '').trim() || '';
          const title = columns[1]?.replace(/"/g, '').trim() || '';
          const thumbnail = columns[2]?.replace(/"/g, '').trim() || '';
          
          if (youtubeLink) {
            videosData.push({
              id: `video-${index}`,
              youtubeLink,
              title: title || youtubeLink,
              thumbnail
            });
          }
        }
      });
      
      setVideos(videosData);
    } catch (error) {
      console.error('Error fetching videos:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideosFromGoogleSheets();
  }, []);

  const filteredVideos = useMemo(() => {
    return videos.filter(video =>
      video.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [videos, searchTerm]);

  const handleWatch = (youtubeLink: string) => {
    window.open(youtubeLink, '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-soft p-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading craft videos...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-soft">
      <main className="max-w-7xl mx-auto p-6 lg:pl-96">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="title-hero text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Craft Videos
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Watch amazing papercraft tutorials and get inspired for your next creation!
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search videos..."
              className="pl-10 bg-background/80 backdrop-blur border-primary/20"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Videos Grid */}
        {filteredVideos.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">
              {searchTerm ? 'No videos found matching your search.' : 'No craft videos available yet.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                className="card-model-gallery group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-glow"
              >
                {/* Thumbnail or Play Icon */}
                <div 
                  className="relative aspect-square mb-4 rounded-lg overflow-hidden bg-secondary/20 flex items-center justify-center"
                  onClick={() => handleWatch(video.youtubeLink)}
                >
                  {video.thumbnail ? (
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const playIcon = target.nextElementSibling as HTMLElement;
                        if (playIcon) playIcon.style.display = 'flex';
                      }}
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full">
                      <div className="transform rotate-12 bg-red-400 text-white p-4 rounded-lg shadow-lg">
                        <Play className="h-12 w-12" fill="currentColor" />
                      </div>
                    </div>
                  )}
                  
                  {/* Play overlay for thumbnails */}
                  {video.thumbnail && (
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="transform rotate-12 bg-red-400 text-white p-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Play className="h-6 w-6" fill="currentColor" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>

                {/* Watch Button */}
                <Button
                  onClick={() => handleWatch(video.youtubeLink)}
                  className="w-full bg-red-400 hover:bg-red-500 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  Watch
                </Button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}