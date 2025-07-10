import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import productsData from '@/lib/products.json';

const CuttingBoardsGallery = () => {
  const navigate = useNavigate();
  const cuttingBoardsImages = productsData["ברכת הבית"];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="mb-12">
          <Button 
            variant="outline" 
            onClick={() => navigate('/')}
            className="mb-6"
          >
            <ArrowRight className="w-4 h-4 mr-2" />
            חזרה לעמוד הראשי
          </Button>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              גלריית קרשי חיתוך
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              קרשי חיתוך איכותיים מעצים שונים
            </p>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cuttingBoardsImages.map((board, index) => (
            <div 
              key={board.id}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={board.image}
                  alt={board.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-bold mb-1">{board.title}</h3>
                  <p className="text-sm">{board.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CuttingBoardsGallery;
