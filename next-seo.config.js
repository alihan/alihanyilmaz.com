const title = 'Alihan Yılmaz';
const description =
  'Student, Front-end developer, JavaScript enthusiast.';

const SEO = {
  title,
  description,
  canonical: 'https://alihan.io',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://alihan.io',
    title,
    description,
    images: [
      {
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  }
};

export default SEO;
