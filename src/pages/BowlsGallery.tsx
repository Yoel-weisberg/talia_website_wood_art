
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const BowlsGallery = () => {
  const navigate = useNavigate();

  const bowlsImages = [
    {
      id: 1,
      title: 'קערת אלון גדולה',
      image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=600&h=400&fit=crop',
      description: 'קערה מרשימה מעץ אלון מלא עם גימור טבעי'
    },
    {
      id: 2,
      title: 'קערת זית עמוקה',
      image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=600&h=400&fit=crop',
      description: 'קערה עמוקה מעץ זית לסלטים ופירות'
    },
    {
      id: 3,
      title: 'סט קערות מייפל',
      image: 'https://images.unsplash.com/photo-1594736797933-d0f7a9806d5b?w=600&h=400&fit=crop',
      description: 'סט של 3 קערות מעץ מייפל בגדלים שונים'
    },
    {
      id: 4,
      title: 'קערת הגשה אלגנטית',
      image: 'https://images.unsplash.com/photo-1571175351323-21fed1146d04?w=600&h=400&fit=crop',
      description: 'קערת הגשה מעוצבת לאירועים מיוחדים'
    },
    {
      id: 5,
      title: 'קערת אגוז מעוגלת',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
      description: 'קערה קטנה ומעוגלת מעץ אגוז'
    },
    {
      id: 6,
      title: 'קערת פירות גדולה',
      image: 'https://images.unsplash.com/photo-1489440543286-a69330151c0b?w=600&h=400&fit=crop',
      description: 'קערה גדולה מושלמת להגשת פירות'
    }
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="mb-12">
          <Button 
            variant="outline" 
            onClick={() => navigate('/#gallery')}
            className="mb-6"
          >
            <ArrowRight className="w-4 h-4 mr-2" />
            חזרה לעמוד הראשי
          </Button>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              גלריית קערות עץ
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              קולקציה מיוחדת של קערות מעץ מלא בעבודת יד
            </p>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bowlsImages.map((bowl, index) => (
            <div 
              key={bowl.id}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={bowl.image}
                  alt={bowl.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-bold mb-1">{bowl.title}</h3>
                  <p className="text-sm">{bowl.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BowlsGallery;
