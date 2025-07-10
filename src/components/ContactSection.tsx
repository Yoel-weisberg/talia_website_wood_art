import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('הודעתך נשלחה בהצלחה! אצור איתך קשר בהקדם.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-accent">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-black font-serif font-bold  mb-6">
            צור קשר
          </h2>
          <p className="text-xl font-bold text-black mb-8">
            יש לך שאלות או רוצה להזמין יצירה מותאמת אישית? אשמח לשמוע ממך
          </p>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <Card className="p-8 hover-lift font-serif">
            <CardContent className="p-0">
              <h3 className="text-2xl font-serif font-bold text-black mb-6">
                פרטי התקשרות
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <p className="font-medium text-black">טלפון</p>
                    <p className="text-black">054-428-6884</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <p className="font text-black">דואר אלקטרוני</p>
                    <p className="text-black">tiltul5761@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <p className="font-medium text-black">מיקום</p>
                    <p className="text-black">עפרה</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <p className="font-medium text-black">שעות פעילות</p>
                    <p className="text-black">ראשון-חמישי: 9:00-17:00</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Google Maps Iframe */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-serif font-bold text-black mb-6">
              מיקום על המפה
            </h3>
            <div className="rounded-lg overflow-hidden w-full h-72 shadow-lg flex-1">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6770.558689208135!2d35.25694024345503!3d31.953317549299683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151cd42b602dc9d7%3A0xa405b1ca4798bda6!2sOfra!5e0!3m2!1sen!2sil!4v1752152684584!5m2!1sen!2sil"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
