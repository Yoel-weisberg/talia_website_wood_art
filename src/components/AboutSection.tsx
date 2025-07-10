
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-wood-light">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-6">
            אודותי
          </h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center font-serif">
          <div className="space-y-6">
            <Card className="p-8 hover-lift">
              <CardContent className="p-0 ">
                <h3 className="text-2xl font-serif font-bold text-black mb-4">
                  הסיפור שלי
                </h3>
                <p className="text-lg leading-relaxed mb-4 text-">
                  אני אמנית עץ מישראל עם ניסיון של למעלה מ-10 שנים ביצירת פיסות אמנות ייחודיות. 
                  התחלתי את דרכי כתחביב ומאז הפכה למקצוע המעניק לי סיפוק עצום.
                </p>
                <p className="text-lg leading-relaxed ">
                  אני מתמחה ביצירת כלי בית פונקציונליים, קישוטים אמנותיים וכלי עבודה המשלבים 
                  יופי ופונקציונליות. כל יצירה נעשית בעבודת יד עם תשומת לב לכל פרט.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-8 hover-lift">
              <CardContent className="p-0">
                <h3 className="text-2xl font-serif font-bold text-black mb-4">
                  הפילוסופיה שלי
                </h3>
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                  אני מאמינה שעץ הוא חומר חי המספר סיפור. כל פיסת עץ מביאה עמה את ההיסטוריה שלה - 
                  השנים, מזג האוויר, והטבע ששיכנו אותה.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  המטרה שלי היא לשמר את היופי הטבעי של העץ תוך יצירת פריטים שימושיים 
                  שיכולים להעשיר את הבית ולהביא חמימות טבעית לחלל המגורים.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default AboutSection;
