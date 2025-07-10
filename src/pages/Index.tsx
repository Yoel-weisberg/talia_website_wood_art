
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProductGallery from '@/components/ProductGallery';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SocialMenu from '@/components/SocialMenu';

const Index = () => {
  return (
    <div className="min-h-screen" dir="rtl">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProductGallery />
      <ContactSection />
      <Footer />
      <SocialMenu />
    </div>
  );
};

export default Index;
