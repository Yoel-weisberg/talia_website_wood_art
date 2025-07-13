import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// --- Mock Data Structure ---
// This has been updated with your data.
const portfolioData = {
  "ברכות כלה על עץ": [
    {
      id: "wood-bless-1",
      title: "אביב ומרים",
      description: "ברכת כלה על משטח עץ טבעי עם עיטורים.",
      images: [
        "https://static.yoelweisberg.com/tehilawebsite/products/wood_bride_bless/20250316_132548-01.jpeg",
        "https://static.yoelweisberg.com/tehilawebsite/products/wood_bride_bless/20250316_132635-01.jpeg",
      ]
    },
    {
      id: "wood-bless-2",
      title: "בתאל ומשה",
      description: "מבחר עיצובים של ברכת כלה על עץ.",
      images: [
        "https://static.yoelweisberg.com/tehilawebsite/products/wood_bride_bless/IMG-20250618-WA0001-01.jpeg",
        "https://static.yoelweisberg.com/tehilawebsite/products/wood_bride_bless/IMG-20250618-WA0002-01.jpeg",
        "https://static.yoelweisberg.com/tehilawebsite/products/wood_bride_bless/Screenshot_20250604-170303 (1).png",
      ]
    },
    {
      id: "wood-bless-3",
      title: "הלל ויהודה",
      description: "עבודות מיוחדות של ברכת כלה על עץ.",
      images: [
        "https://static.yoelweisberg.com/tehilawebsite/products/wood_bride_bless/IMG-20241224-WA0015-01.jpeg"
      ]
    },
    {
      id: "wood-bless-4",
      title: "יהודה ואביגיל",
      description: "התאמה אישית של ברכת הכלה.",
      images: [
        "https://static.yoelweisberg.com/tehilawebsite/products/wood_bride_bless/DSCN7149-01.jpeg",
        "https://static.yoelweisberg.com/tehilawebsite/products/wood_bride_bless/DSCN7185-01.jpeg",
        "https://static.yoelweisberg.com/tehilawebsite/products/wood_bride_bless/DSCN7190-01.jpeg",
        "https://static.yoelweisberg.com/tehilawebsite/products/wood_bride_bless/IMG-20250623-WA0040-01.jpeg"
      ]
    },
    {
      id: "wood-bless-5",
      title: "יוסף ושמחה",
      description: "סגנונות שונים של ברכות.",
      images: [
        "https://static.yoelweisberg.com/tehilawebsite/products/wood_bride_bless/DSCN7233.JPG",
        "https://static.yoelweisberg.com/tehilawebsite/products/wood_bride_bless/DSCN7234.JPG",
        "https://static.yoelweisberg.com/tehilawebsite/products/wood_bride_bless/DSCN7239.JPG",
        "https://static.yoelweisberg.com/tehilawebsite/products/wood_bride_bless/DSCN7240.JPG",
        "https://static.yoelweisberg.com/tehilawebsite/products/wood_bride_bless/DSCN7245.JPG",
        "https://static.yoelweisberg.com/tehilawebsite/products/wood_bride_bless/DSCN7246 (1).JPG"
      ]
    },
    {
      id: "wood-bless-6",
      title: "עז ושרה",
      description: "סגנונות שונים של ברכות.",
      images: [
        "https://static.yoelweisberg.com/tehilawebsite/products/wood_bride_bless/IMG-20231205-WA0081-01.jpeg",
      ]
    },    {
      id: "wood-bless-7",
      title: "צור ותומר",
      description: "סגנונות שונים של ברכות.",
      images: [
        "https://static.yoelweisberg.com/tehilawebsite/products/wood_bride_bless/IMG-20230830-WA0037-01.jpeg",
        "https://static.yoelweisberg.com/tehilawebsite/products/wood_bride_bless/IMG-20230830-WA0038-01.jpeg"
      ]
    },

  ],
  "ברכות כלה על תוף": [
    {
      id: "drum-bless-1",
      title: "רוני ויצחק",
      description: "עיצוב ייחודי של ברכת כלה על תוף מרים.",
      images: [
        "https://static.yoelweisberg.com/tehilawebsite/products/drum_bride_bless/IMG-20250424-WA0027-01.jpeg",
        "https://static.yoelweisberg.com/tehilawebsite/products/drum_bride_bless/IMG-20250424-WA0028-01.jpeg",
        "https://static.yoelweisberg.com/tehilawebsite/products/drum_bride_bless/IMG-20250424-WA0030-01.jpeg",
        "https://static.yoelweisberg.com/tehilawebsite/products/drum_bride_bless/IMG-20250706-WA0068.jpg",
        "https://static.yoelweisberg.com/tehilawebsite/products/drum_bride_bless/IMG-20250706-WA0069.jpg",
        "https://static.yoelweisberg.com/tehilawebsite/products/drum_bride_bless/IMG-20250706-WA0070.jpg",
      ]
    }
  ],
  "הדלקת נרות שבת": [
    {
      id: "shabbat-candles-1",
      title: "ברכת הדלקת נרות",
      description: "ברכת הדלקת נרות שבת על עץ.",
      images: [
        "https://static.yoelweisberg.com/tehilawebsite/products/light_candle/IMG-20250323-WA0008-02.jpeg"
      ]
    }
  ],
  "ציורים בהזמנה אישית": [
    {
      id: "custom-drawing-1",
      title: "ציור מותאם אישית",
      description: "ציור על עץ לפי בקשת הלקוח.",
      images: [
        "https://static.yoelweisberg.com/tehilawebsite/products/drawing_custom/DSCN7335-02.jpeg"
      ]
    }
  ],
  "משפטים בהזמנה אישית": [
    {
      id: "custom-sentence-1",
      title: "משפט השראה",
      description: "כתיבת משפטי השראה על עץ.",
      images: [
        "https://static.yoelweisberg.com/tehilawebsite/products/sentence_custom/IMG-20250310-WA0031-01.jpeg"
      ]
    }
  ]
};


// --- Lightbox Component ---
const Lightbox = ({ project, activeIndex, onClose, onPrev, onNext }) => {
  // Effect for keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors z-50"
          aria-label="Close image viewer"
        >
          <X size={24} />
        </button>

        {/* Previous Button */}
        <button
          onClick={onPrev}
          className="absolute left-4 md:left-8 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-75 transition-colors z-50"
          aria-label="Previous image"
        >
          <ChevronLeft size={32} />
        </button>

        {/* Image Display */}
        <div className="relative max-w-4xl max-h-[90vh] flex flex-col items-center justify-center">
          <img
            src={project.images[activeIndex]}
            alt={`${project.title} - image ${activeIndex + 1}`}
            className="max-h-[80vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
            loading='lazy'
          />
          <div className="text-white text-center mt-4 p-2 bg-black bg-opacity-50 rounded-md">
            <p className="font-bold font-serif text-lg">{project.title}</p>
            <p className="text-sm font-serif text-gray-300">{`תמונה ${activeIndex + 1} מ ${project.images.length}`}</p>
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="absolute right-4 md:right-8 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-75 transition-colors z-50"
          aria-label="Next image"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
};

// --- Main Portfolio Component ---
export default function ProductGallery() {
  const categories = Object.keys(portfolioData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate image loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [activeCategory]);
  
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const handleCloseLightbox = () => {
    setSelectedProject(null);
  };

  const handleNextImage = useCallback(() => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedProject.images.length);
    }
  }, [selectedProject]);

  const handlePrevImage = useCallback(() => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  }, [selectedProject]);
  
  const handleCategoryChange = (category) => {
      setIsLoading(true);
      setActiveCategory(category);
  }

  return (
    <div id='gallery' className="bg-[#fbf8f5] min-h-screen font-sans text-[#4a4a4a]" dir="rtl">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#8c7a6b] mb-2">גלריית עבודות</h1>
        </header>

        {/* Category Navigation */}
        <nav className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 text-sm md:text-base font-semibold font-serif rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 ${
                activeCategory === category
                  ? 'bg-[#e3eedc] text-[#8c7a6b] shadow-md'
                  : 'bg-white text-[#8c7a6b] hover:bg-[#e6d8c9]'
              }`}
            >
              {category}
            </button>
          ))}
        </nav>

        {/* Project Grid */}
        <main>
          {isLoading ? (
             <div className="text-center p-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8c7a6b] mx-auto"></div>
                <p className="mt-4 text-gray-600">טוען פרויקטים...</p>
             </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
              {portfolioData[activeCategory].map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer transform hover:-translate-y-2 transition-transform duration-300"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      loading='lazy'
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/800x600/fbf8f5/8c7a6b?text=Image+Not+Found'; }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                       <p className="text-white text-lg font-serif font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">צפה בפרויקט</p>
                    </div>
                  </div>
                  <div className="p-6 text-right">
                    <h3 className="text-xl font-bold text-[#8c7a6b] mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
        
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        project={selectedProject}
        activeIndex={currentImageIndex}
        onClose={handleCloseLightbox}
        onNext={handleNextImage}
        onPrev={handlePrevImage}
      />
    </div>
  );
}
