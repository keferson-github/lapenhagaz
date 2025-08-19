import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
  keywords?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  structuredData?: object;
}

const ensureTag = (selector: string, create: () => HTMLElement) => {
  let el = document.querySelector(selector) as HTMLElement | null;
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  return el;
};

const ensureMetaProperty = (property: string, content: string) => {
  const selector = `meta[property="${property}"]`;
  const el = ensureTag(selector, () => {
    const m = document.createElement('meta');
    m.setAttribute('property', property);
    return m;
  });
  el.setAttribute('content', content);
};

const ensureMetaName = (name: string, content: string) => {
  const selector = `meta[name="${name}"]`;
  const el = ensureTag(selector, () => {
    const m = document.createElement('meta');
    m.setAttribute('name', name);
    return m;
  });
  el.setAttribute('content', content);
};

const Seo = ({ 
  title, 
  description, 
  canonical, 
  image = '/images/Lapenhagaz_logo-transparent.png',
  type = 'website',
  keywords,
  author = 'Lapenhagáz',
  publishedTime,
  modifiedTime,
  structuredData
}: SeoProps) => {
  useEffect(() => {
    // Título da página
    document.title = title;

    // Meta description
    ensureMetaName('description', description);

    // Keywords (se fornecidas)
    if (keywords) {
      ensureMetaName('keywords', keywords);
    }

    // Author
    ensureMetaName('author', author);

    // Robots
    ensureMetaName('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // Open Graph tags
    ensureMetaProperty('og:title', title);
    ensureMetaProperty('og:description', description);
    ensureMetaProperty('og:type', type);
    ensureMetaProperty('og:image', image.startsWith('http') ? image : `${window.location.origin}${image}`);
    ensureMetaProperty('og:url', window.location.href);
    ensureMetaProperty('og:site_name', 'Lapenhagáz');
    ensureMetaProperty('og:locale', 'pt_BR');

    // Twitter Cards
    ensureMetaName('twitter:card', 'summary_large_image');
    ensureMetaName('twitter:title', title);
    ensureMetaName('twitter:description', description);
    ensureMetaName('twitter:image', image.startsWith('http') ? image : `${window.location.origin}${image}`);

    // Article specific tags
    if (type === 'article') {
      if (publishedTime) {
        ensureMetaProperty('article:published_time', publishedTime);
      }
      if (modifiedTime) {
        ensureMetaProperty('article:modified_time', modifiedTime);
      }
      ensureMetaProperty('article:author', author);
    }

    // Canonical URL
    if (canonical) {
      const linkCanonical = ensureTag('link[rel="canonical"]', () => {
        const l = document.createElement('link');
        l.setAttribute('rel', 'canonical');
        return l;
      });
      linkCanonical.setAttribute('href', canonical.startsWith('http') ? canonical : `${window.location.origin}${canonical}`);
    }

    // Dados estruturados JSON-LD
    if (structuredData) {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.remove();
      }
      
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

  }, [title, description, canonical, image, type, keywords, author, publishedTime, modifiedTime, structuredData]);

  return null;
};

export default Seo;
