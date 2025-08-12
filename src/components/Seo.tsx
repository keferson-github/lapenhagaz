import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
}

const ensureTag = (selector: string, create: () => HTMLElement) => {
  let el = document.querySelector(selector) as HTMLElement | null;
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  return el;
};

const Seo = ({ title, description, canonical }: SeoProps) => {
  useEffect(() => {
    document.title = title;

    const metaDesc = ensureTag('meta[name="description"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('name', 'description');
      return m;
    });
    metaDesc.setAttribute('content', description);

    if (canonical) {
      const linkCanonical = ensureTag('link[rel="canonical"]', () => {
        const l = document.createElement('link');
        l.setAttribute('rel', 'canonical');
        return l;
      });
      linkCanonical.setAttribute('href', canonical);
    }
  }, [title, description, canonical]);

  return null;
};

export default Seo;
