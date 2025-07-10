
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary  text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">אמנות על עץ</h3>
            <p className="text-primary-foreground/80 leading-relaxed font-serif">
              יוצרת יצירות אמנות ייחודיות מעץ טבעי. 
              כל יצירה מספרת סיפור משלה ומביאה חמימות טבעית לבית.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">קישורים מהירים</h4>
            <ul className="space-y-2 font-serif">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  בית
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  אודותי
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  קטלוג מוצרים
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  צור קשר
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">פרטי קשר</h4>
            <div className="space-y-2 text-primary-foreground/80 font-serif">
              <p>טלפון: 054-428-6884</p>
              <p>מייל: tiltul5761@gmail.com</p>
              <p>מיקום: מרכז הארץ, ישראל</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80 flex items-center justify-center gap-2">
            © 2024 אמנות על עץ. כל הזכויות שמורות. נוצר עם 
            <Heart className="h-4 w-4 fill-current" />
            בישראל
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
