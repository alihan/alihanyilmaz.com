const title = 'Alihan Yılmaz';
const description = 'Student, Front-end developer, JavaScript enthusiast.';

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
    images: [
      {
        url: 'https://alihanyilmaz.com/static/images/placeholder.jpg',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
  twitter: {
    handle: '@_alihanyilmaz',
    site: '@_alihanyilmaz',
    cardType: 'summary_large_image'
  }
};

export default SEO;
