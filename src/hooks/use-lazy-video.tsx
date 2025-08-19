import { useEffect, useRef, useState } from 'react';

interface UseLazyVideoOptions {
  rootMargin?: string;
  threshold?: number;
}

export const useLazyVideo = (options: UseLazyVideoOptions = {}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsIntersecting(true);
          setHasLoaded(true);
          
          // Start loading video metadata
          video.preload = 'metadata';
          
          // Disconnect observer after first load
          observer.disconnect();
        }
      },
      {
        rootMargin: options.rootMargin || '50px',
        threshold: options.threshold || 0.1,
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [hasLoaded, options.rootMargin, options.threshold]);

  return {
    videoRef,
    isIntersecting,
    hasLoaded,
  };
};