import cn from 'classnames';
import { NextPage } from 'next';
import NextImage from 'next/image';

import { BasePage } from 'components';
import TimelineItem from 'components/timelineItem/timelineItem';
import ComeInAnimation from 'animation/comeIn';
import type { RoleType } from 'components/timelineItem/timelineItem';

import layoutStyles from 'styles/modules/layout.module.scss';
import styles from 'styles/modules/story.module.scss';

// ─── Data ────────────────────────────────────────────────────────────────────

interface Role {
  title: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  type: RoleType;
  isActive?: boolean;
}

const ROLES: Role[] = [
  {
    title: 'Frontend Developer',
    company: 'Travian Games',
    period: 'Jan 2026 – Present',
    location: 'Munich (hybrid)',
    bullets: [
      'Contributing to Travian: Legends in a large-scale codebase using React and TypeScript.',
    ],
    type: 'fe',
    isActive: true,
  },
  {
    title: 'Product Designer',
    company: 'Zooplus',
    period: 'Mar 2022 – Dec 2025',
    location: 'Munich (hybrid)',
    bullets: [
      'Led UX research and end-to-end design for a new e-commerce experience. Identified usability gaps, validated improvements, and aligned stakeholders around user-focused solutions.',
      'Improved the Savings Plan UX, leading to a 10% boost in purchases and stronger retention.',
    ],
    type: 'design',
  },
  {
    title: 'Frontend Developer',
    company: 'Zooplus',
    period: 'May 2020 – Feb 2022',
    location: 'Munich (remote)',
    bullets: [
      'Enhanced the front-end of the Checkout Funnel, aligning design and implementation through close collaboration.',
      'Leveraged A/B testing via Adobe Target to increase conversion and usability.',
    ],
    type: 'fe',
  },
  {
    title: 'UI Designer & Frontend Developer',
    company: 'Flyla',
    period: 'Nov 2019 – May 2020',
    location: 'Munich',
    bullets: [
      'Redesigned and implemented UI improvements for the web app, improving performance and UX.',
      'Won 1st prize at the IATA AIR Hackathon (Seattle, 2020).',
    ],
    type: 'hybrid',
  },
  {
    title: 'Frontend Developer',
    company: 'Pantaflix & Twago',
    period: 'Oct 2014 – Sep 2018',
    location: 'Berlin',
    bullets: [
      'Led front-end development for a CMS improving the experience for filmmakers.',
      'Built a white-label CMS connecting companies with freelancers in a cross-functional team of 12.',
    ],
    type: 'fe',
  },
  {
    title: 'UI Designer & Full Stack Developer',
    company: 'Dreamsite & Uniagro',
    period: 'Jul 2009 – Sep 2014',
    location: 'Madrid & Málaga',
    bullets: [
      'Designed and built 20+ corporate websites, leading the shift to Responsive Design and SASS.',
    ],
    type: 'hybrid',
  },
];

interface EducationItem {
  course: string;
  institution: string;
  duration: string;
  year: string;
  category: 'education' | 'course';
}

const EDUCATION: EducationItem[] = [
  {
    course: 'UX Academy',
    institution: 'Designlab',
    duration: '8 months',
    year: '2020–2021',
    category: 'education',
  },
  {
    course: 'Software Development',
    institution: 'IES Pedro Espinosa',
    duration: '2 years',
    year: '2007–2009',
    category: 'education',
  },
  {
    course: 'AI for UX Design',
    institution: 'Designlab',
    duration: '4 weeks',
    year: '2025',
    category: 'course',
  },
  {
    course: 'Data-Driven Design',
    institution: 'Designlab',
    duration: '6 weeks',
    year: '2024',
    category: 'course',
  },
  {
    course: 'Design Systems',
    institution: 'NNGroup',
    duration: '7 hours',
    year: '2022',
    category: 'course',
  },
  {
    course: 'Concept Art Fundamentals',
    institution: 'VHS',
    duration: '6 weeks',
    year: '2025',
    category: 'course',
  },
];

interface SkillCategory {
  category: string;
  items: string[];
}

const SKILLS: SkillCategory[] = [
  {
    category: 'Tech',
    items: [
      'HTML',
      'CSS / SASS',
      'JavaScript',
      'React',
      'Next.js',
      'Webpack',
      'Git',
    ],
  },
  {
    category: 'Tools',
    items: [
      'VS Code',
      'Figma',
      'Git',
      'ChatGPT',
      'Claude',
      'Perplexity',
      'Maze',
    ],
  },
  {
    category: 'Design',
    items: [
      'UI Design',
      'Interaction Design',
      'Wireframing',
      'Prototyping',
      'User Flows',
      'Sitemaps',
    ],
  },
  {
    category: 'Research',
    items: ['Usability Testing', 'Journey Mapping', 'Benchmarking'],
  },
];

interface Language {
  name: string;
  level: string;
}

const LANGUAGES: Language[] = [
  { name: 'Spanish', level: 'Native' },
  { name: 'English', level: 'C1' },
  { name: 'German', level: 'B2' },
];

const INTERESTS = [
  'Travel',
  'Reading',
  'Biking',
  'Hiking',
  'Exploring',
  'Photography',
];

// ─── Derived ─────────────────────────────────────────────────────────────────

const educationItems = EDUCATION.filter((e) => e.category === 'education');
const courseItems = EDUCATION.filter((e) => e.category === 'course');

// ─── Page ─────────────────────────────────────────────────────────────────────

const Story: NextPage & { theme?: string } = () => {
  return (
    <BasePage title="Story">
      <section className={layoutStyles.section} style={{ paddingTop: 0 }}>
        {/* Intro */}
        <div className={styles.introBg}>
          <div className={layoutStyles.contentWrapper}>
            <h2 className={layoutStyles.sectionTitle}>
              My <strong>story</strong>
            </h2>
            <div className={cn('flexGrid', styles.introGrid)}>
              <div className={cn(styles.introImageCol, 'col--md-4')}>
                <div className={styles.introImageWrapper}>
                  <NextImage
                    src="/images/jose-martos.jpeg"
                    alt="Jose Martos"
                    width={411}
                    height={411}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                    priority
                  />
                </div>
              </div>
              <div className="col--md-1" />
              <div className={cn(styles.introText, 'col--md-7')}>
                <p>
                  15+ years building for the web — with a deliberate detour
                  through Product Design in the middle. I crossed over to
                  research and UX, then came back to frontend. That shift
                  changed how I think about code: I care as much about the why
                  as the how.
                </p>
                <p>
                  From early agency work in Málaga and Madrid to product teams
                  in Berlin and Munich — every role shaped how I build.
                  Functional and meaningful aren't a tradeoff. They're the
                  brief.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={layoutStyles.contentWrapper}>
          <div className={styles.narrowContent}>
            {/* Experience */}
            <div className={styles.sectionBlock}>
              <h3 className={styles.storySectionTitle}>Experience</h3>
              <div className={styles.timeline}>
                {ROLES.map((role, i) => (
                  <TimelineItem key={i} {...role} />
                ))}
              </div>
            </div>

            {/* Education */}
            <div className={styles.sectionBlock}>
              <h3 className={styles.storySectionTitle}>Learning</h3>
              <div className={styles.educationGroup}>
                  <h4 className={styles.educationGroupTitle}>Education</h4>
                  <ul className={styles.educationList}>
                    {educationItems.map((item, i) => (
                      <li key={i} className={styles.educationItem}>
                        <ComeInAnimation>
                          <>
                            <span className={styles.educationCourse}>
                              {item.course} @ {item.institution}
                            </span>
                            <span className={styles.educationMeta}>
                              {item.duration} · {item.year}
                            </span>
                          </>
                        </ComeInAnimation>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.educationGroup}>
                  <h4 className={styles.educationGroupTitle}>Courses</h4>
                  <ul className={styles.educationList}>
                    {courseItems.map((item, i) => (
                      <li key={i} className={styles.educationItem}>
                        <ComeInAnimation>
                          <>
                            <span className={styles.educationCourse}>
                              {item.course} @ {item.institution}
                            </span>
                            <span className={styles.educationMeta}>
                              {item.duration} · {item.year}
                            </span>
                          </>
                        </ComeInAnimation>
                      </li>
                    ))}
                  </ul>
                </div>
            </div>
            {/* Skills */}
            <div className={styles.sectionBlock}>
              <h3 className={styles.storySectionTitle}>Skills</h3>
              <div className={styles.skillsList}>
                {SKILLS.map((skill) => (
                  <ComeInAnimation key={skill.category}>
                    <div>
                      <p className={styles.skillCategory}>{skill.category}</p>
                      <div className={styles.skillPills}>
                        {skill.items.map((item) => (
                          <span key={item} className={styles.skillPill}>{item}</span>
                        ))}
                      </div>
                    </div>
                  </ComeInAnimation>
                ))}
              </div>
            </div>

            {/* Languages & Interests */}
            <div className={styles.sectionBlock}>
              <h3 className={styles.storySectionTitle}>Personal</h3>
              <div className={styles.langInterests}>
                <div className={styles.langBlock}>
                  <h4 className={styles.educationGroupTitle}>Languages</h4>
                  <ul className={styles.langList}>
                    {LANGUAGES.map((lang) => (
                      <li key={lang.name} className={styles.langItem}>
                        <span className={styles.langName}>{lang.name}</span>
                        <span className={styles.langLevel}>{lang.level}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.interestsBlock}>
                  <h4 className={styles.educationGroupTitle}>Interests</h4>
                  <div className={styles.skillPills}>
                    {INTERESTS.map((interest) => (
                      <span key={interest} className={styles.skillPill}>
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /narrowContent */}

          {/* CV Download */}
          <div className={styles.cvDownload}>
            <a
              href="/CV_JoseMartos.pdf"
              target="_blank"
              rel="noreferrer"
              className={styles.cvLink}
            >
              Download CV (PDF)
            </a>
          </div>
        </div>
      </section>
    </BasePage>
  );
};

Story.theme = 'white';

export default Story;
