import cn from 'classnames';
import {
  Image,
  CaseStudyTag,
  CaseStudyBlockHeader,
  CaseStudyWrapper,
  UnderstandSection,
  DefineSection,
  DesignSection,
  TestingSection,
  LinkButton,
} from 'components';

import ComeInAnimation from 'animation/comeIn';
import { CaseStudyProvider } from 'context/caseStudyContext';

// Styles
import layoutStyles from 'styles/modules/layout.module.scss';
import caseStudy from 'styles/modules/caseStudy.module.scss';

// Images
import HeroImage from 'public/images/bicibavarese/hero.jpg';
import ResearchRampUpImage from 'public/images/bicibavarese/research-ramp-up.png';
import PersonaImage from 'public/images/bicibavarese/persona.png';
import SitemapImage from 'public/images/bicibavarese/sitemap.png';
import UserFlowsImage from 'public/images/bicibavarese/user-flows.png';
import WireframesImage from 'public/images/bicibavarese/wireframes.png';
import MoodBoardImage from 'public/images/bicibavarese/mood-board.jpg';
import StyleTileImage from 'public/images/bicibavarese/style-tile.jpg';
import HomepageImage from 'public/images/bicibavarese/homepage.jpg';
import GiroBavareseImage from 'public/images/bicibavarese/giro-bavarese.jpg';
import OurBikeImage from 'public/images/bicibavarese/our-bike.jpg';

const BiciBavarese = () => {
  return (
    <CaseStudyWrapper title="Bici Bavarese | Bike Shop">
      <section className={layoutStyles.section}>
        <header className={caseStudy.hero}>
          <ComeInAnimation>
            <Image
              src={HeroImage}
              alt="Bici Bavarese Website Mockups"
              width={1280}
              height={720}
              priority={true}
              quality={90}
            />
          </ComeInAnimation>
        </header>

        <div className={cn(caseStudy.introWrapper)}>
          <div
            className={cn(
              'flexGrid',
              caseStudy.titleWrapper,
              layoutStyles.contentWrapper,
            )}
          >
            <div className={cn('col--md-1')}></div>
            <div className={cn('col--md-11', caseStudy.title)}>
              <h1>Bici Bavarese</h1>
              <small>Website Redesign - May 2021</small>
            </div>
          </div>
          <div className={cn(caseStudy.introContentWrapper)}>
            <div className={caseStudy.tagsLayer}></div>
            <div
              className={cn(
                'flexGrid',
                caseStudy.introContent,
                layoutStyles.contentWrapper,
              )}
            >
              <div className={cn('col--md-1')}></div>
              <div className={cn('col--md-5')}>
                <p>
                  For my first project at Designlab's UX Academy, I worked on
                  the <strong>redesign of a local bike shop</strong> based in
                  Munich. This gave me a chance to learn a lot about the local
                  bike scene. I conducted research and user interviews to
                  understand customer needs and placed a strong emphasis on
                  understanding the existing product. My primary focus was on
                  wireframing and UI design, creating a design that visually
                  captured the shop's spirit.
                </p>
                <p>
                  (Disclaimer: I used their existing logo, text, and some images
                  from their website, Instagram, and Flickr profiles.)
                </p>
              </div>
              <div className={cn('col--md-2')}></div>
              <div className={cn(caseStudy.tagsWrapper, 'col--md-4')}>
                <CaseStudyTag label="Role" text="UX / UI Designer" />
                <CaseStudyTag
                  label="Skills"
                  text="Research, Information Architecture, Interaction & UI Design, Prototyping, Testing"
                />
                <CaseStudyTag label="Tools" text="Figma, Whimsical" />
                <CaseStudyTag label="Duration" text="1 Month" />
              </div>
            </div>
          </div>
        </div>
        <div className={caseStudy.goalsWrapper}>
          <div className={cn('flexGrid', layoutStyles.contentWrapper)}>
            <div className={cn('col--md-1')}></div>
            <div className={cn('col--md-8')}>
              <h2>Goals</h2>
              <p>
                My goal was to research the local market, focusing on the bike
                industry and Bici Bavarese's dual focus on bike sales and
                repairs. The shop is also known for its annual old-timer racing
                bike event, which gathers enthusiasts to enjoy the beautiful
                surrounding nature.
              </p>
              <p>
                The objective was to redesign their website while preserving
                their brand essence, color palette, and key assets. I aimed to
                create an eye-catching design that communicates a sense of
                community. Given the time constraints (one month), the focus was
                on key pages.
              </p>
            </div>
            <div className={cn('col--md-3')}></div>
          </div>
        </div>
      </section>

      {/* Understand */}
      <UnderstandSection>
        <CaseStudyBlockHeader title="Understand">
          <div className={caseStudy.indexGroup}>
            <h3>Secondary research</h3>
            <ul>
              <li>Bike shops</li>
              <li>Current local scene</li>
              <li>Competitor analysis</li>
            </ul>
          </div>
          <div className={caseStudy.indexGroup}>
            <h3>Primary research</h3>
            <ul>
              <li>User interviews</li>
            </ul>
          </div>
        </CaseStudyBlockHeader>

        {/* Research */}
        <div className={caseStudy.segment}>
          <h3 className={caseStudy.segmentTitle}>Research</h3>
          <div
            className={cn(
              'flexGrid',
              layoutStyles.contentWrapper,
              caseStudy.segmentIntro,
            )}
          >
            <div className={cn('col--md-2')}></div>
            <div className={cn('col--md-8')}>
              <p>
                I started by conducting secondary <strong>research</strong> to
                understand the general scope of <strong>bike shops</strong> and
                the current local market, followed by a{' '}
                <strong>competitor analysis</strong> to further contextualize
                the project.
              </p>
            </div>
            <div className={cn('col--md-2')}></div>
          </div>
          <div
            className={cn(caseStudy.segmentImage, layoutStyles.contentWrapper)}
          >
            <Image
              src={ResearchRampUpImage}
              url="/bicibavarese/research-ramp-up.png"
              alt="Bici Bavarese Research Ramp-up"
              width={1283}
              height={726}
              link={+true}
            />
          </div>
        </div>

        {/* User Interviews */}
        <div className={caseStudy.segment}>
          <h3 className={caseStudy.segmentTitle}>User Interviews</h3>
          <div
            className={cn(
              'flexGrid',
              layoutStyles.contentWrapper,
              caseStudy.segmentIntro,
            )}
          >
            <div className={cn('col--md-2')}></div>
            <div className={cn('col--md-8')}>
              <p>
                I <strong>interviewed three users</strong> to gather insights
                into their experiences with bike shops, both physical and
                online, and their relationship with their bikes. Below are the
                key findings:
              </p>
              <ul>
                <li>Clear pricing information is essential.</li>
                <li>Physically inspecting the bike is crucial.</li>
                <li>
                  Online appointment scheduling is a nice-to-have feature.
                </li>
                <li>
                  The ability to connect with other riders is a welcome idea.
                </li>
                <li>
                  Straightforward navigation and well-organized filters on
                  catalog pages are vital.
                </li>
                <li>An outdated design creates distrust.</li>
              </ul>
            </div>
            <div className={cn('col--md-2')}></div>
          </div>
        </div>
      </UnderstandSection>

      {/* Define */}
      <DefineSection>
        <CaseStudyBlockHeader title="Define">
          <div className={caseStudy.indexGroup}>
            <h3 className={caseStudy.titleAlone}>Persona</h3>
          </div>
          <div className={caseStudy.indexGroup}>
            <h3>Information Architecture</h3>
            <ul>
              <li>Sitemap</li>
            </ul>
          </div>
          <div className={caseStudy.indexGroup}>
            <h3>Interaction Design</h3>
            <ul>
              <li>Key User Flows</li>
              <li>Wireframes</li>
            </ul>
          </div>
        </CaseStudyBlockHeader>

        {/* Persona */}
        <div className={caseStudy.segment}>
          <h3 className={caseStudy.segmentTitle}>Persona</h3>
          <div
            className={cn(
              'flexGrid',
              layoutStyles.contentWrapper,
              caseStudy.segmentIntro,
            )}
          >
            <div className={cn('col--md-2')}></div>
            <div className={cn('col--md-8')}>
              <p>
                Using insights from the user interviews, I created a{' '}
                <strong>Persona</strong> to capture the main user needs,
                frustrations, and motivations. This was a crucial element in the
                design process.
              </p>
            </div>
            <div className={cn('col--md-2')}></div>
          </div>
          <div
            className={cn(caseStudy.segmentImage, layoutStyles.contentWrapper)}
          >
            <Image
              src={PersonaImage}
              url="/bicibavarese/persona.png"
              alt="Bici Bavarese Persona"
              width={1283}
              height={841}
              link={+true}
            />
          </div>
        </div>

        {/* Sitemap */}
        <div className={caseStudy.segment}>
          <h3 className={caseStudy.segmentTitle}>Sitemap</h3>
          <div
            className={cn(
              'flexGrid',
              layoutStyles.contentWrapper,
              caseStudy.segmentIntro,
            )}
          >
            <div className={cn('col--md-2')}></div>
            <div className={cn('col--md-8')}>
              <p>
                The <strong>Sitemap</strong> helped me visualize the core
                structure of the website, considering the{' '}
                <a
                  target="_blank"
                  href="https://bicibavarese.de/"
                  rel="noreferrer"
                >
                  current website
                </a>
                .
              </p>
            </div>
            <div className={cn('col--md-2')}></div>
          </div>
          <div className={cn('flexGrid', layoutStyles.contentWrapper)}>
            <div className={cn('col--md-1')}></div>
            <div className={cn('col--md-10')}>
              <div
                className={cn(
                  caseStudy.segmentImage,
                  layoutStyles.contentWrapper,
                )}
              >
                <Image
                  src={SitemapImage}
                  url="/bicibavarese/sitemap.png"
                  alt="Bici Bavarese Sitemap"
                  width={1065}
                  height={1285}
                  link={+true}
                />
              </div>
            </div>
            <div className={cn('col--md-1')}></div>
          </div>
        </div>

        {/* User Flow */}
        <div className={caseStudy.segment}>
          <h3 className={caseStudy.segmentTitle}>User Flows</h3>
          <div
            className={cn(
              'flexGrid',
              layoutStyles.contentWrapper,
              caseStudy.segmentIntro,
            )}
          >
            <div className={cn('col--md-2')}></div>
            <div className={cn('col--md-8')}>
              <p>
                These <strong>key user flows</strong> illustrate the connection
                between the online experience and the physical bike shop.
              </p>
            </div>
            <div className={cn('col--md-2')}></div>
          </div>
          <div
            className={cn(caseStudy.segmentImage, layoutStyles.contentWrapper)}
          >
            <Image
              src={UserFlowsImage}
              url="/bicibavarese/user-flows.png"
              alt="Bici Bavarese Key User Flows"
              width={1283}
              height={722}
              link={+true}
            />
          </div>
        </div>

        {/* Wireframes */}
        <div className={caseStudy.segment}>
          <h3 className={caseStudy.segmentTitle}>Wireframes</h3>
          <div
            className={cn(
              'flexGrid',
              layoutStyles.contentWrapper,
              caseStudy.segmentIntro,
            )}
          >
            <div className={cn('col--md-2')}></div>
            <div className={cn('col--md-8')}>
              <p>
                I created wireframes for the key pages of the website: the{' '}
                <strong>Homepage</strong>, the <strong>Event Page</strong> for
                the yearly Giro Bavarese event, and the{' '}
                <strong>Our Bike</strong> page showcasing their custom-built
                bikes. The wireframes follow a minimalist, modern design with
                classic touches.
              </p>
            </div>
            <div className={cn('col--md-2')}></div>
          </div>
          <div className={caseStudy.highlightBackground}>
            <div className={layoutStyles.contentWrapper}>
              <Image
                src={WireframesImage}
                url="/bicibavarese/wireframes.png"
                alt="Bici Bavarese Wireframes"
                width={1283}
                height={920}
                link={+true}
              />
            </div>
          </div>
        </div>
      </DefineSection>

      {/* Design */}
      <DesignSection>
        <CaseStudyBlockHeader title="Design">
          <h3>Brand</h3>
          <ul>
            <li>Mood Board</li>
            <li>Style Tile</li>
          </ul>
          <h3>User Interface</h3>
        </CaseStudyBlockHeader>

        {/* Mood Board & Style Tile */}
        <div className={caseStudy.segment}>
          <h3 className={caseStudy.segmentTitle}>Brand</h3>
          <div
            className={cn(
              'flexGrid',
              layoutStyles.contentWrapper,
              caseStudy.segmentIntro,
            )}
          >
            <div className={cn('col--md-2')}></div>
            <div className={cn('col--md-8')}>
              <p>
                I developed the brand concept by creating a{' '}
                <strong>mood board</strong> and a <strong>style tile</strong>,
                laying the groundwork for the visual design.
              </p>
            </div>
            <div className={cn('col--md-2')}></div>
          </div>
          <div
            className={cn(caseStudy.segmentImage, layoutStyles.contentWrapper)}
          >
            <Image
              src={MoodBoardImage}
              url="/bicibavarese/mood-board.jpg"
              alt="Bici Bavarese Mood Board"
              width={1283}
              height={856}
              link={+true}
            />
          </div>
          <div
            className={cn(caseStudy.segmentImage, layoutStyles.contentWrapper)}
          >
            <Image
              src={StyleTileImage}
              url="/bicibavarese/style-tile.jpg"
              alt="Bici Bavarese Style Tile"
              width={1283}
              height={856}
              link={+true}
            />
          </div>
        </div>

        {/* UI Design */}
        <div className={caseStudy.segment}>
          <h3 className={caseStudy.segmentTitle}>UI Design</h3>
          <div
            className={cn(
              'flexGrid',
              layoutStyles.contentWrapper,
              caseStudy.segmentIntro,
            )}
          >
            <div className={cn('col--md-2')}></div>
            <div className={cn('col--md-8')}>
              <p>
                With all elements in place, I created the following{' '}
                <strong>hi-fi designs</strong>, refining them based on feedback
                from user interviews.
              </p>
            </div>
            <div className={cn('col--md-2')}></div>
          </div>
          <div
            className={cn(
              caseStudy.highlightBackground,
              caseStudy.highlightBackgroundBlue,
            )}
          >
            <div className={cn('flexGrid', layoutStyles.contentWrapper)}>
              <div className={cn('col--md-1')}></div>
              <div className={cn('col--md-10')}>
                <div className={caseStudy.imageExplanation}>
                  <p>
                    On the <strong>Homepage</strong>, I prioritized showcasing
                    the shop's community spirit. It was important to highlight
                    the various services Bici Bavarese offers, from bike sales
                    and repairs to events and customer satisfaction.
                  </p>
                </div>
                <Image
                  src={HomepageImage}
                  url="/bicibavarese/homepage.jpg"
                  alt="Bici Bavarese Homepage"
                  width={1065}
                  height={2454}
                  shadow={+true}
                  link={+true}
                />
              </div>
              <div className={cn('col--md-1')}></div>
            </div>
          </div>
          <div
            className={cn(
              caseStudy.highlightBackground,
              caseStudy.highlightBackgroundPink,
            )}
          >
            <div className={cn('flexGrid', layoutStyles.contentWrapper)}>
              <div className={cn('col--md-1')}></div>
              <div className={cn('col--md-10')}>
                <div className={caseStudy.imageExplanation}>
                  <p>
                    On the <strong>Giro Bavarese</strong> page, I focused on
                    organizing information clearly with dropdown menus and using
                    video to immerse users in the event experience.
                  </p>
                </div>
                <Image
                  src={GiroBavareseImage}
                  url="/bicibavarese/giro-bavarese.jpg"
                  alt="Giro Bavarese Page"
                  width={1065}
                  height={2275}
                  shadow={+true}
                  link={+true}
                />
              </div>
              <div className={cn('col--md-1')}></div>
            </div>
          </div>
          <div
            className={cn(
              caseStudy.highlightBackground,
              caseStudy.highlightBackgroundBlue,
            )}
          >
            <div className={cn('flexGrid', layoutStyles.contentWrapper)}>
              <div className={cn('col--md-1')}></div>
              <div className={cn('col--md-10')}>
                <div className={caseStudy.imageExplanation}>
                  <p>
                    The <strong>Our Bike</strong> page focuses on showcasing the
                    custom bike and its various parts and configurations.
                  </p>
                </div>
                <Image
                  src={OurBikeImage}
                  url="/bicibavarese/our-bike.jpg"
                  alt="Our Bike Page"
                  width={1065}
                  height={2904}
                  shadow={+true}
                  link={+true}
                />
              </div>
              <div className={cn('col--md-1')}></div>
            </div>
          </div>
        </div>
      </DesignSection>

      {/* Testing */}
      <TestingSection>
        <CaseStudyBlockHeader title="Testing">
          <h3>User Testing</h3>
        </CaseStudyBlockHeader>

        {/* Testing */}
        <div className={caseStudy.segment}>
          <h3 className={caseStudy.segmentTitle}>User Testing</h3>
          <div
            className={cn(
              'flexGrid',
              layoutStyles.contentWrapper,
              caseStudy.segmentIntro,
            )}
          >
            <div className={cn('col--md-2')}></div>
            <div className={cn('col--md-8')}>
              <p>
                I conducted user tests with three participants to understand how
                they interacted with the interface, what they took away from
                different sections, and their overall impressions.
              </p>
              <p>
                These tests were crucial for iterating on the design, leading to
                changes such as introducing a "customizable bike" feature and
                making the homepage more engaging.
              </p>
              <p>
                The prototype is only semi-functional, allowing navigation
                between the Homepage, Our Bike page (Unser Rad), and the Event
                page (Giro Bavarese). This represents the first version of the
                UI design.
              </p>
              <LinkButton
                target="_blank"
                text="See prototype"
                href="https://www.figma.com/proto/U83UJEyIWUzXmUddA2h0Nl/Bici-Bavarese-Prototype?page-id=0%3A1&node-id=1%3A191&viewport=948%2C419%2C0.1494501531124115&scaling=scale-down-width"
              />
            </div>
            <div className={cn('col--md-2')}></div>
          </div>
        </div>
      </TestingSection>

      {/* Wrap up */}
      <section className={cn(layoutStyles.section, layoutStyles.noPadding)}>
        <div className={caseStudy.wrappingUp}>
          <div className={layoutStyles.contentWrapper}>
            <div className={cn('flexGrid', layoutStyles.contentWrapper)}>
              <div className={cn('col--md-2')}></div>
              <div className={cn('col--md-8')}>
                <h3>Takeaways</h3>
                <p>
                  In this project, I had the opportunity to refresh and redesign
                  an existing website, maintaining key elements while adding a
                  unique look and feel to enhance the brand's presence.
                </p>
                <p>
                  Once again, I was reminded of how essential User Testing is
                  for uncovering key improvements and updates.
                </p>
                <p>
                  Although I wasn't able to work directly with the shop owners
                  or interview their real customers, the project was a rewarding
                  experience overall.
                </p>
                <p>Thanks for reading!</p>
              </div>
              <div className={cn('col--md-2')}></div>
            </div>
          </div>
        </div>
      </section>
    </CaseStudyWrapper>
  );
};

BiciBavarese.provider = CaseStudyProvider;

export default BiciBavarese;
