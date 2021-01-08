const title = 'Alihan Yılmaz';
const description = 'Student, Front-end developer, JavaScript enthusiast.';
const featuredImage = {
  url: `https://og-image.alihany.vercel.app/${title}`,
  alt: title
};

const SEO = {
  title,
  description,
  canonical: 'https://alihanyilmaz.com',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://alihanyilmaz.com',
    title,
    description,
    images: [featuredImage]
  },
  twitter: {
    handle: '@_alihanyilmaz',
    site: '@_alihanyilmaz',
    cardType: 'summary_large_image'
  }
};

export default SEO;
