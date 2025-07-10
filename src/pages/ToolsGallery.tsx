
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ToolsGallery = () => {
  const navigate = useNavigate();

  const toolsImages = [
    {
      id: 1,
      title: 'כף עץ בעבודת יד',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop',
      description: 'כף עץ מעוצבת לשימוש יומיומי במטבח'
    },
    {
      id: 2,
      title: 'סט כלי הגשה',
      image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=600&h=400&fit=crop',
      description: 'סט כלי הגשה מעץ לסלטים ומנות עיקריות'
    },
    {
      id: 3,
      title: 'מטחנת פלפל עץ',
      image: 'https://images.unsplash.com/photo-1594736797933-d0f7a9806d5b?w=600&h=400&fit=crop',
      description: 'מטחנת פלפל מעץ אלון עם מנגנון פנימי'
    },
    {
      id: 4,
      title: 'כלי הקצפה מעץ',
      image: 'https://images.unsplash.com/photo-1571175351323-21fed1146d04?w=600&h=400&fit=crop',
      description: 'כלי הקצפה מסורתי מעץ זית'
    }
  ];

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
              גלריית כלי עבודה
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              כלי מטבח וכלי עבודה איכותיים מעץ
            </p>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolsImages.map((tool, index) => (
            <div 
              key={tool.id}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={tool.image}
                  alt={tool.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-bold mb-1">{tool.title}</h3>
                  <p className="text-sm">{tool.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolsGallery;
