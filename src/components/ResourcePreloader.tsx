import { useEffect } from 'react';

interface ResourcePreloaderProps {
  criticalImages?: string[];
  criticalFonts?: string[];
  criticalCSS?: string[];
}

const ResourcePreloader = ({ 
  criticalImages = [],
  criticalFonts = [],
  criticalCSS = []
}: ResourcePreloaderProps) => {
  useEffect(() => {
    // Preload critical images
    criticalImages.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      link.fetchPriority = 'high';
      document.head.appendChild(link);
    });

    // Preload critical fonts
    criticalFonts.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.type = 'font/woff2';
      link.href = src;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // Preload critical CSS
    criticalCSS.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = src;
      document.head.appendChild(link);
    });

    // DNS prefetch para domínios externos
    const externalDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
    ];

    externalDomains.forEach((domain) => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });

    // Preconnect para recursos críticos
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
    ];

    preconnectDomains.forEach((domain) => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

  }, [criticalImages, criticalFonts, criticalCSS]);

  return null;
};

export default ResourcePreloader;