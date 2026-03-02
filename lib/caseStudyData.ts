import { StaticImageData } from 'next/image';

// New Bitiba images
import NewBitibaHeroImage from 'public/images/newbitiba/hero.png';
import NewBitibaCompetitorAnalysisImage from 'public/images/newbitiba/competitor-analysis.png';
import NewBitibaIdeationWorkshopImage from 'public/images/newbitiba/ideation-workshop.png';
import NewBitibaExplorationsImage from 'public/images/newbitiba/explorations.png';
import NewBitibaExplorationsScreensImage from 'public/images/newbitiba/explorations-screens.png';
import NewBitibaUIDesign1 from 'public/images/newbitiba/ui-design1.png';
import NewBitibaUIDesign2 from 'public/images/newbitiba/ui-design2.png';
import NewBitibaUIDesign3 from 'public/images/newbitiba/ui-design3.png';
import NewBitibaUIDesign4 from 'public/images/newbitiba/ui-design4.png';
import NewBitibaUIDesign5 from 'public/images/newbitiba/ui-design5.png';
import NewBitibaUIDesign6 from 'public/images/newbitiba/ui-design6.png';
import NewBitibaUIDesign7 from 'public/images/newbitiba/ui-design7.png';

// Camino images
import CaminoHeroImage from 'public/images/camino/hero.png';
import CaminoResearchRampUpImage from 'public/images/camino/research-ramp-up.png';
import CaminoPersonaImage from 'public/images/camino/persona.png';
import CaminoSitemapImage from 'public/images/camino/sitemap.png';
import CaminoWireframesImage from 'public/images/camino/wireframes.png';
import CaminoMoodBoardImage from 'public/images/camino/mood-board.jpg';
import CaminoLogoImage from 'public/images/camino/logo.jpg';
import CaminoStyleTileImage from 'public/images/camino/style-tile.jpg';
import CaminoUIDesign1 from 'public/images/camino/ui-design1.png';
import CaminoUIDesign2 from 'public/images/camino/ui-design2.png';
import CaminoUIDesign3 from 'public/images/camino/ui-design3.png';
import CaminoUIDesign4 from 'public/images/camino/ui-design4.png';
import CaminoUIDesign5 from 'public/images/camino/ui-design5.png';
import CaminoUIDesign6 from 'public/images/camino/ui-design6.png';
import CaminoUIDesign7 from 'public/images/camino/ui-design7.png';
import CaminoUIDesign8 from 'public/images/camino/ui-design8.png';
import CaminoUIDesign9 from 'public/images/camino/ui-design9.png';
import CaminoUIDesign10 from 'public/images/camino/ui-design10.png';
import CaminoUIDesign11 from 'public/images/camino/ui-design11.png';
import CaminoUIDesign12 from 'public/images/camino/ui-design12.png';
import CaminoUIDesign13 from 'public/images/camino/ui-design13.png';
import CaminoUIDesign14 from 'public/images/camino/ui-design14.png';

// Bici Bavarese images
import BiciBavareseHeroImage from 'public/images/bicibavarese/hero.jpg';
import BiciBavareseResearchRampUpImage from 'public/images/bicibavarese/research-ramp-up.png';
import BiciBavaresePersonaImage from 'public/images/bicibavarese/persona.png';
import BiciBavareseSitemapImage from 'public/images/bicibavarese/sitemap.png';
import BiciBavareseUserFlowsImage from 'public/images/bicibavarese/user-flows.png';
import BiciBavareseWireframesImage from 'public/images/bicibavarese/wireframes.png';
import BiciBavareseMoodBoardImage from 'public/images/bicibavarese/mood-board.jpg';
import BiciBavareseStyleTileImage from 'public/images/bicibavarese/style-tile.jpg';
import BiciBavareseHomepageImage from 'public/images/bicibavarese/homepage.jpg';
import BiciBavareseGiroBavareseImage from 'public/images/bicibavarese/giro-bavarese.jpg';
import BiciBavareseOurBikeImage from 'public/images/bicibavarese/our-bike.jpg';

export interface CaseStudyImageConfig {
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
  quality?: number;
  priority?: boolean;
  shadow?: boolean;
  link?: boolean;
  url?: string;
}

export interface CaseStudyCarouselImage {
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
}

export interface CaseStudyTags {
  role: string;
  skills: string;
  tools: string;
  duration: string;
}

export interface CaseStudyData {
  title: string;
  hero: CaseStudyImageConfig;
  tags: CaseStudyTags;
  prototypeLink: { href: string; text: string };
  images: Record<string, CaseStudyImageConfig>;
  carousel?: CaseStudyCarouselImage[];
}

export const newBitibaData: CaseStudyData = {
  title: 'New Bitiba | Budget-friendly e-commerce platform',
  hero: {
    src: NewBitibaHeroImage,
    alt: 'New Bitiba - Mockups',
    width: 1283,
    height: 720,
    priority: true,
    quality: 90,
  },
  tags: {
    role: 'Product Designer @ zooplus',
    skills: 'Research, Interaction & UI Design, Prototyping, Testing',
    tools: 'Figma',
    duration: '4 months',
  },
  prototypeLink: {
    href: 'https://www.figma.com/proto/F94HN0Kef8rScA1YKtDv4M/NBS-_--Q1-2025?page-id=87%3A44951&node-id=90-44952&viewport=382%2C88%2C0.23&t=n9oLsLNnaYSsfOwX-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=90%3A44952',
    text: 'See prototype',
  },
  images: {
    competitorAnalysis: {
      src: NewBitibaCompetitorAnalysisImage,
      alt: 'New Bitiba Competitor Analysis',
      width: 1283,
      height: 1004,
      link: true,
      url: '/newbitiba/competitor-analysis.png',
    },
    ideationWorkshop: {
      src: NewBitibaIdeationWorkshopImage,
      alt: 'New Bitiba Ideation Workshop',
      width: 1283,
      height: 1004,
      link: true,
      url: '/newbitiba/ideation-workshop.png',
    },
    explorations: {
      src: NewBitibaExplorationsImage,
      alt: 'New Bitiba Explorations',
      width: 1283,
      height: 1004,
      link: true,
      url: '/newbitiba/explorations.png',
    },
    explorationsScreens: {
      src: NewBitibaExplorationsScreensImage,
      alt: 'New Bitiba Explorations Screens',
      width: 1283,
      height: 2297,
      link: true,
      url: '/newbitiba/explorations-screens.png',
    },
  },
  carousel: [
    { src: NewBitibaUIDesign1, alt: 'UI Design', width: 407, height: 858 },
    { src: NewBitibaUIDesign2, alt: 'UI Design', width: 407, height: 858 },
    { src: NewBitibaUIDesign3, alt: 'UI Design', width: 407, height: 858 },
    { src: NewBitibaUIDesign4, alt: 'UI Design', width: 407, height: 858 },
    { src: NewBitibaUIDesign5, alt: 'UI Design', width: 407, height: 858 },
    { src: NewBitibaUIDesign6, alt: 'UI Design', width: 407, height: 858 },
    { src: NewBitibaUIDesign7, alt: 'UI Design', width: 407, height: 858 },
  ],
};

export const caminoData: CaseStudyData = {
  title: 'Camino | Therapist Matching App',
  hero: {
    src: CaminoHeroImage,
    alt: 'Camino App Mockups',
    width: 1283,
    height: 720,
    priority: true,
    quality: 90,
  },
  tags: {
    role: 'UX / UI Designer',
    skills:
      'Research, Information Architecture, Interaction & UI Design, Prototyping, Testing',
    tools: 'Figma, Whimsical, Maze',
    duration: '1 Month',
  },
  prototypeLink: {
    href: 'https://www.figma.com/proto/NXpbGcEyRgmLXBaPn5hP7b/MVP-App-Prototype?page-id=0%3A1&node-id=1%3A243&viewport=384%2C25%2C0.103382907807827&scaling=scale-down',
    text: 'See prototype',
  },
  images: {
    researchRampUp: {
      src: CaminoResearchRampUpImage,
      alt: 'Camino Research Ramp-up',
      width: 1283,
      height: 638,
      link: true,
      url: '/camino/research-ramp-up.png',
    },
    persona: {
      src: CaminoPersonaImage,
      alt: 'Camino Persona',
      width: 1283,
      height: 854,
      link: true,
      url: '/camino/persona.png',
    },
    sitemap: {
      src: CaminoSitemapImage,
      alt: 'Camino Sitemap',
      width: 1283,
      height: 1073,
      link: true,
      url: '/camino/sitemap.png',
    },
    wireframes: {
      src: CaminoWireframesImage,
      alt: 'Camino Wireframes',
      width: 1283,
      height: 2297,
      link: true,
      url: '/camino/wireframes.png',
    },
    moodBoard: {
      src: CaminoMoodBoardImage,
      alt: 'Camino Mood Board',
      width: 1283,
      height: 855,
      link: true,
      url: '/camino/mood-board.jpg',
    },
    logo: {
      src: CaminoLogoImage,
      alt: 'Camino Logo',
      width: 1283,
      height: 855,
      link: true,
      url: '/camino/logo.jpg',
    },
    styleTile: {
      src: CaminoStyleTileImage,
      alt: 'Camino Style Tile',
      width: 1283,
      height: 855,
      link: true,
      url: '/camino/style-tile.jpg',
    },
  },
  carousel: [
    {
      src: CaminoUIDesign1,
      alt: 'Camino UI Design Screens',
      width: 421,
      height: 858,
    },
    {
      src: CaminoUIDesign2,
      alt: 'Camino UI Design Screens',
      width: 421,
      height: 858,
    },
    {
      src: CaminoUIDesign3,
      alt: 'Camino UI Design Screens',
      width: 421,
      height: 858,
    },
    {
      src: CaminoUIDesign4,
      alt: 'Camino UI Design Screens',
      width: 421,
      height: 858,
    },
    {
      src: CaminoUIDesign5,
      alt: 'Camino UI Design Screens',
      width: 421,
      height: 858,
    },
    {
      src: CaminoUIDesign6,
      alt: 'Camino UI Design Screens',
      width: 421,
      height: 858,
    },
    {
      src: CaminoUIDesign7,
      alt: 'Camino UI Design Screens',
      width: 421,
      height: 858,
    },
    {
      src: CaminoUIDesign8,
      alt: 'Camino UI Design Screens',
      width: 421,
      height: 858,
    },
    {
      src: CaminoUIDesign9,
      alt: 'Camino UI Design Screens',
      width: 421,
      height: 858,
    },
    {
      src: CaminoUIDesign10,
      alt: 'Camino UI Design Screens',
      width: 421,
      height: 858,
    },
    {
      src: CaminoUIDesign11,
      alt: 'Camino UI Design Screens',
      width: 421,
      height: 858,
    },
    {
      src: CaminoUIDesign12,
      alt: 'Camino UI Design Screens',
      width: 421,
      height: 858,
    },
    {
      src: CaminoUIDesign13,
      alt: 'Camino UI Design Screens',
      width: 421,
      height: 858,
    },
    {
      src: CaminoUIDesign14,
      alt: 'Camino UI Design Screens',
      width: 421,
      height: 858,
    },
  ],
};

export const biciBavareseData: CaseStudyData = {
  title: 'Bici Bavarese | Bike Shop',
  hero: {
    src: BiciBavareseHeroImage,
    alt: 'Bici Bavarese Website Mockups',
    width: 1280,
    height: 720,
    priority: true,
    quality: 90,
  },
  tags: {
    role: 'UX / UI Designer',
    skills:
      'Research, Information Architecture, Interaction & UI Design, Prototyping, Testing',
    tools: 'Figma, Whimsical',
    duration: '1 Month',
  },
  prototypeLink: {
    href: 'https://www.figma.com/proto/U83UJEyIWUzXmUddA2h0Nl/Bici-Bavarese-Prototype?page-id=0%3A1&node-id=1%3A191&viewport=948%2C419%2C0.1494501531124115&scaling=scale-down-width',
    text: 'See prototype',
  },
  images: {
    researchRampUp: {
      src: BiciBavareseResearchRampUpImage,
      alt: 'Bici Bavarese Research Ramp-up',
      width: 1283,
      height: 726,
      link: true,
      url: '/bicibavarese/research-ramp-up.png',
    },
    persona: {
      src: BiciBavaresePersonaImage,
      alt: 'Bici Bavarese Persona',
      width: 1283,
      height: 841,
      link: true,
      url: '/bicibavarese/persona.png',
    },
    sitemap: {
      src: BiciBavareseSitemapImage,
      alt: 'Bici Bavarese Sitemap',
      width: 1065,
      height: 1285,
      link: true,
      url: '/bicibavarese/sitemap.png',
    },
    userFlows: {
      src: BiciBavareseUserFlowsImage,
      alt: 'Bici Bavarese Key User Flows',
      width: 1283,
      height: 722,
      link: true,
      url: '/bicibavarese/user-flows.png',
    },
    wireframes: {
      src: BiciBavareseWireframesImage,
      alt: 'Bici Bavarese Wireframes',
      width: 1283,
      height: 920,
      link: true,
      url: '/bicibavarese/wireframes.png',
    },
    moodBoard: {
      src: BiciBavareseMoodBoardImage,
      alt: 'Bici Bavarese Mood Board',
      width: 1283,
      height: 856,
      link: true,
      url: '/bicibavarese/mood-board.jpg',
    },
    styleTile: {
      src: BiciBavareseStyleTileImage,
      alt: 'Bici Bavarese Style Tile',
      width: 1283,
      height: 856,
      link: true,
      url: '/bicibavarese/style-tile.jpg',
    },
    homepage: {
      src: BiciBavareseHomepageImage,
      alt: 'Bici Bavarese Homepage',
      width: 1065,
      height: 2454,
      shadow: true,
      link: true,
      url: '/bicibavarese/homepage.jpg',
    },
    giroBavarese: {
      src: BiciBavareseGiroBavareseImage,
      alt: 'Giro Bavarese Page',
      width: 1065,
      height: 2275,
      shadow: true,
      link: true,
      url: '/bicibavarese/giro-bavarese.jpg',
    },
    ourBike: {
      src: BiciBavareseOurBikeImage,
      alt: 'Our Bike Page',
      width: 1065,
      height: 2904,
      shadow: true,
      link: true,
      url: '/bicibavarese/our-bike.jpg',
    },
  },
};
