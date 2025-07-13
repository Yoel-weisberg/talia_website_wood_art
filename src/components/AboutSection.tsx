import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="flex-col justify-center align-middle py-20 bg-wood-light font-serif">
      <div
        dir="rtl" // Sets the text direction to right-to-left for Hebrew
        className=" w-11/12 mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl"
      >
        <div className="flex flex-col md:flex-row items-center">
          {/* Image Section: Appears on the left for medium screens and up */}
          {/* Text Section: Stacks on mobile, on the right for medium screens and up */}
          <div className="p-8 sm:p-12 md:w-1/2 flex flex-col justify-center">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4 text-center sm:text-right">
              היי, אני תהלה קפלן :)
            </h1>

            {/* Decorative Divider */}
            <hr className="w-24 h-1 bg-teal-500 border-0 rounded-full my-6 mx-auto sm:mx-0" />

            {/* Content Paragraphs */}
            <div className="space-y-5 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                מאז שאני זוכרת את עצמי אני מחוברת לעולם היצירה והאמנות. התחלתי את הדרך שלי במתנות מקוריות לחברות, ומאז התחביב הפך לעסק שלי :)
              </p>
              <p>
                עם השנים, גיליתי את הקסם והיופי הטמונים בעבודה על עץ. לכל פיסת עץ יש את הייחודיות והטבעיות שלה - הצורה, הצבע, המרקם... ועל גבי זה אני משלבת את הנגיעה האישית שלי, המעניקה חיים וצבעוניות חדשה ליצירה.
              </p>
              <p className="font-semibold text-teal-600 dark:text-teal-400">
                אז אני כאן כדי להגשים את הרצונות שלכם! ליצור עבורכם מתנה ייחודית ומרגשת שתלווה אתכם באירועים הגדולים, והקטנים :)
              </p>
            </div>
          </div>

          <div className="md:w-1/2">
            <img
              className="h-64 w-full object-cover md:h-full"
              src="https://static.yoelweisberg.com/tehilawebsite/products/drum_bride_bless/IMG-20250706-WA0069.jpg"
              alt="An artistic workshop with wood and tools"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x800/e0e0e0/333333?text=Image+Not+Found'; }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
