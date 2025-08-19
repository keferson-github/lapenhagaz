import { useEffect, useRef, useState } from 'react';

interface UseLazyImageOptions {
  rootMargin?: string;
  threshold?: number;
}

export const useLazyImage = (src: string, options: UseLazyImageOptions = {}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsIntersecting(true);
          setHasLoaded(true);
          setImageSrc(src);
          
          // Disconnect observer after first load
          observer.disconnect();
        }
      },
      {
        rootMargin: options.rootMargin || '50px',
        threshold: options.threshold || 0.1,
      }
    );

    observer.observe(img);

    return () => {
      observer.disconnect();
    };
  }, [src, hasLoaded, options.rootMargin, options.threshold]);

  return {
    imgRef,
    imageSrc,
    isIntersecting,
    hasLoaded,
  };
};