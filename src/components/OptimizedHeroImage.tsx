import { useState, useEffect } from 'react';

interface OptimizedHeroImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  width?: number;
  height?: number;
}

const OptimizedHeroImage = ({
  src,
  alt,
  className = '',
  priority = false,
  sizes = '100vw',
  width = 1920,
  height = 650
}: OptimizedHeroImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Extrair nome base da imagem
  const baseName = src.replace(/\.[^/.]+$/, '').replace('slides/', '');
  const optimizedPath = `slides/optimized/${baseName}`;

  // Gerar srcset para diferentes tamanhos
  const generateSrcSet = (format: 'webp' | 'avif') => {
    const sizes = [
      { width: 480, suffix: '-mobile' },
      { width: 768, suffix: '-tablet' },
      { width: 1024, suffix: '-desktop' },
      { width: 1440, suffix: '-large' },
      { width: 1920, suffix: '-xl' }
    ];

    return sizes
      .map(size => `${optimizedPath}${size.suffix}.${format} ${size.width}w`)
      .join(', ');
  };

  // Preload da imagem crítica
  useEffect(() => {
    if (priority) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = `${optimizedPath}-desktop.webp`;
      link.type = 'image/webp';
      document.head.appendChild(link);

      return () => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      };
    }
  }, [optimizedPath, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    console.warn(`Falha ao carregar imagem otimizada: ${src}`);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder com blur enquanto carrega */}
      {!isLoaded && !hasError && (
        <div 
          className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"
          style={{
            backgroundImage: `linear-gradient(45deg, 
              rgba(0,0,0,0.1) 25%, transparent 25%, transparent 75%, 
              rgba(0,0,0,0.1) 75%, rgba(0,0,0,0.1)),
              linear-gradient(45deg, rgba(0,0,0,0.1) 25%, 
              transparent 25%, transparent 75%, rgba(0,0,0,0.1) 75%, rgba(0,0,0,0.1))`,
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 10px 10px'
          }}
        />
      )}

      {/* Imagem otimizada com fallback */}
      {!hasError ? (
        <picture>
          {/* AVIF para navegadores modernos */}
          <source
            srcSet={generateSrcSet('avif')}
            sizes={sizes}
            type="image/avif"
          />
          
          {/* WebP como fallback */}
          <source
            srcSet={generateSrcSet('webp')}
            sizes={sizes}
            type="image/webp"
          />
          
          {/* Fallback para navegadores antigos */}
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleLoad}
            onError={handleError}
            loading={priority ? 'eager' : 'lazy'}
            decoding={priority ? 'sync' : 'async'}
            fetchPriority={priority ? 'high' : 'auto'}
          />
        </picture>
      ) : (
        // Fallback em caso de erro
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-full object-cover"
          onLoad={handleLoad}
          loading={priority ? 'eager' : 'lazy'}
        />
      )}

      {/* Indicador de carregamento */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export default OptimizedHeroImage;