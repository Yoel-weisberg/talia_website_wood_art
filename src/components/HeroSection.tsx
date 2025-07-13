import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import bowlsData from '@/lib/products.json';
const HeroSection = () => {
  // Example usage: you can use bowlsData.bowls in your component or pass it to children
  // For the HeroSection, you may not need product data directly, but this is how you import it.
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-secondary"
    >

      {/* Main content: side-by-side layout */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-16 px-4 max-w-6xl mx-auto w-full">


        {/* Text */}
        <div className="text-center flex flex-col md:items-start items-center w-full">
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-7xl font-serif font-semibold  text-black mb-8 animate-fade-in leading-tight">
            אמנות על עץ
          </h1>
          <p className="text-right text-lg sm:text-xl md:text-2xl lg:text-3xl text-black mb-10 leading-relaxed  animate-slide-up max-w-xl">
            יוצרת יצירות אמנות ייחודיות מעץ טבעי
            <br />
            כל יצירה מספרת סיפור משלה
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up">
            <Button
              variant='outline'
              size="lg"
              className="px-10 py-4 text-xl bg-accent text-black font-bold border-primary border-2 "
              onClick={() =>
                document.getElementById('gallery')?.scrollIntoView({
                  behavior: 'smooth',
                })
              }
            >
              צפייה בעבודות
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-10 py-4 text-xl bg-accent text-black font-bold border-primary border-2 "
              onClick={() =>
                document.getElementById('about')?.scrollIntoView({
                  behavior: 'smooth',
                })
              }
            >
              קראי עליי
            </Button>
          </div>
        </div>
                {/* Photo */}
        <div className="flex-shrink-0 flex justify-center items-center">
          <img
            src="https://static.yoelweisberg.com/tehilawebsite/products/wood_bride_bless/DSCN7240.JPG"
            alt="אמנות על עץ"
            className="w-64 h-72 md:w-[500px] md:h-[600px] rounded-lg object-cover shadow-2xl border-0 border-accent"
            loading="lazy"
          />
        </div>
      </div>

      {/* Down arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer" onClick={() => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      }}>
        <ChevronDown className="h-10 w-10 text-primary animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;