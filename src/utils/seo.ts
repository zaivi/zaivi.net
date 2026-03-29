interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  author?: string;
}

export function generateMetaTags({
  title,
  description,
  image = '/og-image.png',
  url,
  type = 'website'
}: SEOProps) {
  const siteUrl = 'https://zaivi.net';
  const fullUrl = url ? new URL(url, siteUrl).href : siteUrl;
  const ogImage = new URL(image, siteUrl).href;

  return {
    title,
    description,
    canonicalURL: fullUrl,
    ogImage,
    ogType: type
  };
}

export function generateJSONLD(seo: SEOProps) {
  return {
    '@context': 'https://schema.org',
    '@type': seo.type === 'article' ? 'Article' : 'WebSite',
    name: seo.title,
    description: seo.description,
    url: seo.url,
    ...(seo.type === 'article' && {
      author: {
        '@type': 'Person',
        name: seo.author || 'Zai'
      },
      datePublished: seo.publishedTime
    })
  };
}
