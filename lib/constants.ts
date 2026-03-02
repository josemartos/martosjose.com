export interface TestimonialItem {
  name: string;
  title: string;
  company: string;
  avatar: string;
  text: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: 'Patricia Marí',
    title: 'Product Manager',
    company: 'zooplus',
    avatar: '/images/patricia.jpeg',
    text: `Special thanks for the great job you've done. Not only the work itself, but the attitude, the teamwork, honesty and support. It means a lot having someone like you by my side — the way you behave builds trust.`,
  },
  {
    name: 'José Acedo',
    title: 'Senior Product Designer',
    company: 'zooplus',
    avatar: '/images/jose.jpeg',
    text: `José always goes the extra mile — avoiding design in silos, keeping the team updated, and checking integration across the board. Always available, collaborative, and genuinely supportive.`,
  },
  {
    name: 'Matthieu Cneude',
    title: 'Software Engineer',
    company: 'Pantaflix',
    avatar: '/images/matthieu.jpeg',
    text: `José is one of the best frontend developers I've had the pleasure to work with — both for his soft and technical skills, a combination too rare. He communicates easily, makes good decisions quickly, and always strives for a deep understanding of the technology he uses.`,
  },
];

interface SiteConfig {
  title: string;
  description: string;
  url: string;
  email: string;
  social: Record<string, string>;
  meta: {
    title: string;
    description: string;
    keywords: string;
    author: string;
    ogImage: string;
    ogImageWidth: string;
    ogImageHeight: string;
    ogLocale: string;
    ogSiteName: string;
  };
}

export const SITE_CONFIG: SiteConfig = {
  title: 'Jose Martos',
  description:
    'Frontend Developer who crossed over to Product Design for 3 years — and brought it back.',
  url: 'https://www.martosjose.com',
  email: 'martosjosele@gmail.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/martosjose/',
    github: 'https://github.com/josemartos',
    '500px': 'https://500px.com/p/martosjosele',
  },
  meta: {
    title: 'Jose Martos — Frontend Developer',
    description:
      'Frontend Developer based in Munich with 14+ years of experience, including 3 years as a Product Designer. I build interfaces that work and feel right.',
    keywords:
      'frontend developer, react, next.js, product design, ui design, munich',
    author: 'Jose Martos',
    ogImage: 'https://www.martosjose.com/images/social.jpg',
    ogImageWidth: '1200',
    ogImageHeight: '627',
    ogLocale: 'en_US',
    ogSiteName: 'Jose Martos',
  },
};
