import React, { useState } from 'react';
import Slider from 'react-slick';
import productsData from '@/lib/products.json';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductCarousel = ({ category }: { category: keyof typeof productsData }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const products = productsData[category] || [];
  const isSingle = products.length <= 1;

  const settings = {
    dots: false,
    infinite: !isSingle,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: true,
    arrows: false,
    autoplay: true,
    afterChange: (index: number) => setLightboxIndex(index),
  };

  const lightboxSettings = {
    dots: true,
    infinite: !isSingle,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: true,
    arrows: true,
    initialSlide: lightboxIndex,
  };

  return (
    <div>
      <Slider {...settings}>
        {products.map((product, idx) => (
          <div key={product.id} onClick={() => { setLightboxOpen(true); setLightboxIndex(idx); }} className="cursor-pointer">
            <img src={product.image} alt={product.title} className="mx-auto rounded-lg shadow-lg max-h-[400px] object-contain" />
            <div className="text-center mt-4">
              <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
              <p className="text-muted-foreground">{product.description}</p>
            </div>
          </div>
        ))}
      </Slider>
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setLightboxOpen(false)}>
          <div className="w-full max-w-2xl" onClick={e => e.stopPropagation()}>
            <Slider {...lightboxSettings} initialSlide={lightboxIndex}>
              {products.map((product) => (
                <div key={product.id}>
                  <img src={product.image} alt={product.title} className="mx-auto my-auto rounded-lg shadow-lg max-h-[80vh] object-contain" />
                  <div className="text-center mt-4 text-white">
                    <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                    <p className="text-lg">{product.description}</p>
                  </div>
                </div>
              ))}
            </Slider>
            <button className="absolute top-4 right-4 text-white text-3xl" onClick={() => setLightboxOpen(false)}>&times;</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCarousel;
