import React from 'react';
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

const SocialMenu = () => {
  const socialLinks = [
    {
      icon: FaWhatsapp,
      href: "https://wa.me/972544286884",
      label: "WhatsApp",
      color: "hover:bg-secondary"
    },
    {
      icon: FaEnvelope,
      href: "mailto:tiltul5761@gmail.com",
      label: "Email",
      color: "hover:bg-primary"
    },
    {
      icon: FaPhone,
      href: "tel:+972123456789",
      label: "Phone",
      color: "hover:bg-accent"
    }
  ];

  return (
    <div className="fixed right-4 bottom-0 -translate-y-1/2 z-40">
      <div className="flex flex-col gap-3 bg-background/20 backdrop-blur-sm border border-border rounded-lg p-2 shadow-lg">
        {socialLinks.map((link) => {
          const IconComponent = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-lg transition-all duration-300 ${link.color} text-foreground hover:scale-110 hover:shadow-md`}
              aria-label={link.label}
            >
              <IconComponent className="w-5 h-5" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialMenu;