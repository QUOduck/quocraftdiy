import { useState, useMemo, useEffect } from 'react';
import { Search, Download, Clock, FileText, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
interface Model {
  id: number;
  image: string;
  title: string;
  description: string;
  gdrive: string;
  difficulty: string;
  pages: string;
  buildTime: string;
}
const difficultyColors = {
  'Easy': 'bg-lime text-black',
  'Medium': 'bg-blue text-white',
  'Hard': 'bg-pink text-white'
};
export default function Gallery() {
  const [searchTerm, setSearchTerm] = useState('');
  const [models, setModels] = useState<Model[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  useEffect(() => {
    fetchModelsFromGoogleSheets();
  }, []);
  const fetchModelsFromGoogleSheets = async () => {
    try {
      const response = await fetch('https://docs.google.com/spreadsheets/d/1dkJztNJ4AeISoU5UQaF0lRfvaaWkMPITHESDhww3aIM/export?format=csv&gid=0');
      const csvText = await response.text();

      // Parse CSV (skip header row)
      const rows = csvText.split('\n').slice(1);
      const parsedModels: Model[] = rows.filter(row => row.trim()) // Remove empty rows
      .map((row, index) => {
        const columns = row.split(',');
        return {
          id: index + 1,
          image: columns[0]?.trim() || '',
          title: columns[1]?.trim() || '',
          description: columns[2]?.trim() || '',
          gdrive: columns[3]?.trim() || '',
          difficulty: columns[4]?.trim() || 'Medium',
          pages: columns[5]?.trim() || '',
          buildTime: columns[6]?.trim() || ''
        };
      });
      setModels(parsedModels);
    } catch (error) {
      console.error('Error fetching models:', error);
    } finally {
      setLoading(false);
    }
  };
  const filteredModels = useMemo(() => {
    return models.filter(model => model.title.toLowerCase().includes(searchTerm.toLowerCase()) || model.description.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [models, searchTerm]);
  const handleDownload = (model: Model) => {
    if (model.gdrive) {
      window.open(model.gdrive, '_blank');
    }
  };
  return <div className="min-h-screen bg-soft-gradient relative">
      {/* Header Section */}
      <section className="bg-playful py-12 px-4 bg-amber-300">
        <div className="container mx-auto bg-transparent">
          <h1 className="title-playful text-center mb-8 hover:scale-105 transition-transform duration-300 text-purple-950">
            Paper Models Gallery
          </h1>
          <p className="text-lg text-center mb-8 max-w-2xl mx-auto hover:scale-105 transition-transform duration-300 text-emerald-900">
            Discover amazing papercraft models! Search, download, and start creating.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input type="text" placeholder="Search models..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="pl-10 py-3 rounded-xl border-2 border-primary/20 focus:border-primary transition-colors" />
          </div>
        </div>
      </section>

      {/* Models Grid */}
      <section className="py-12 px-4 pt-24 pb-24 bg-[#57d126]/[0.37]">
        <div className="container mx-auto">
          {loading ? <div className="text-center py-20">
              <p className="text-2xl text-muted-foreground mb-4">Loading models...</p>
            </div> : filteredModels.length === 0 ? <div className="text-center py-20">
              <p className="text-2xl text-muted-foreground mb-4">
                No models found
              </p>
              <p className="text-muted-foreground">
                Try searching for something else!
              </p>
            </div> : <>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-500">
                  {filteredModels.length} Model{filteredModels.length !== 1 ? 's' : ''} Found
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredModels.map(model => <div key={model.id} className="card-model-gallery">
                    {/* Model Image */}
                    <div className="relative">
                      <img src={model.image} alt={model.title} className="w-full aspect-square object-cover cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => setSelectedImage(model.image)} />
                      {/* Title Overlay */}
                      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/60 to-transparent p-4">
                        <h3 className="text-white font-bold text-lg leading-tight hover:scale-105 transition-transform duration-300">
                          {model.title}
                        </h3>
                      </div>
                      {/* Difficulty Badge */}
                      <div className="absolute top-3 right-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[model.difficulty as keyof typeof difficultyColors]}`}>
                          {model.difficulty}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-4">
                      {/* Meta Info */}
                      <div className="flex items-center gap-4 mb-3 text-white/80 text-xs">
                        <div className="flex items-center gap-1">
                          <FileText className="h-3 w-3" />
                          <span>{model.pages} pages</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{model.buildTime}</span>
                        </div>
                      </div>

                      {/* Download Button */}
                      <button onClick={() => handleDownload(model)} className="w-full btn-solid-lime flex items-center justify-center gap-2 text-sm py-2">
                        <Download className="h-4 w-4" />
                        Download PDF
                      </button>
                    </div>
                  </div>)}
              </div>
            </>}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-4xl p-4">
            <button onClick={() => setSelectedImage(null)} className="absolute top-2 right-2 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors z-10">
              <X className="h-6 w-6 text-black" />
            </button>
            <img src={selectedImage} alt="Full size model" className="max-w-full max-h-full object-contain rounded-lg" onClick={e => e.stopPropagation()} />
          </div>
        </div>}
    </div>;
}