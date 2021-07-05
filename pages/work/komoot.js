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
  Carousel,
  LinkButton,
} from 'components';
import { SwiperSlide } from 'swiper/react';

import ComeInAnimation from 'animation/comeIn';
import { CaseStudyProvider } from 'context/caseStudyContext';

// Styles
import commonStyles from 'styles/common.module.scss';
import pageStyles from 'styles/page.module.scss';
import caseStudy from 'styles/components/caseStudy.module.scss';

// Images
import HeroImage from 'public/images/komoot/hero.jpg';
import ResearchRampUpImage from 'public/images/komoot/research-ramp-up.png';
import PersonaImage from 'public/images/komoot/persona.png';
import SitemapImage from 'public/images/komoot/sitemap.png';
import UserFlowsImage from 'public/images/komoot/user-flows.png';
import WireframesImage from 'public/images/komoot/wireframes.png';
import UIDesign1Image from 'public/images/komoot/ui-design1.png';
import UIDesign2Image from 'public/images/komoot/ui-design2.png';
import UIDesign3Image from 'public/images/komoot/ui-design3.png';
import UIDesign4Image from 'public/images/komoot/ui-design4.png';
import UIDesign5Image from 'public/images/komoot/ui-design5.png';
import UIDesign6Image from 'public/images/komoot/ui-design6.png';
import UIDesign7Image from 'public/images/komoot/ui-design7.png';
import UIDesign8Image from 'public/images/komoot/ui-design8.png';
import UIDesign9Image from 'public/images/komoot/ui-design9.png';
import UIDesign10Image from 'public/images/komoot/ui-design10.png';

const Komoot = () => {
  return (
    <CaseStudyWrapper title="Komoot | Outdoor activities App">
      <section className={pageStyles.section}>
        <header className={caseStudy.hero}>
          <ComeInAnimation>
            <Image
              src={HeroImage}
              alt="Komoot App Mockups"
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
              commonStyles.contentWrapper
            )}
          >
            <div className={cn('col--md-1')}></div>
            <div className={cn('col--md-11', caseStudy.title)}>
              <h1>Komoot</h1>
              <small>Capstone - Social feature - Jun 2021</small>
            </div>
          </div>
          <div className={cn(caseStudy.introContentWrapper)}>
            <div className={caseStudy.tagsLayer}></div>
            <div
              className={cn(
                'flexGrid',
                caseStudy.introContent,
                commonStyles.contentWrapper
              )}
            >
              <div className={cn('col--md-1')}></div>
              <div className={cn('col--md-5')}>
                <p>
                  Being an avid hiker myself, I decided to design for one of the
                  apps I currently use: Komoot. Hence, for the second capstone
                  project at Designlab’s UX Academy, I worked on{' '}
                  <strong>expanding its social capabilities</strong>. I could
                  explore the app and its current functionalities. I did market
                  research, sent out some surveys to know more from the users,
                  as well as tested and prototyped the idea, always respecting
                  the current style guide and general guidelines.
                </p>
              </div>
              <div className={cn('col--md-2')}></div>
              <div className={cn(caseStudy.tagsWrapper, 'col--md-4')}>
                <CaseStudyTag label="Role" text="UX / UI Designer" />
                <CaseStudyTag
                  label="Skills"
                  text="Research, Information Architecture, Interaction & UI Design, Prototype, Testing"
                />
                <CaseStudyTag label="Tools" text="Figma, Whimsical, Maze" />
                <CaseStudyTag label="Duration" text="1 Month" />
              </div>
            </div>
          </div>
        </div>
        <div className={caseStudy.goalsWrapper}>
          <div className={cn('flexGrid', commonStyles.contentWrapper)}>
            <div className={cn('col--md-1')}></div>
            <div className={cn('col--md-8')}>
              <h2>Goals</h2>
              <p>
                Komoot is a well-known outdoor activities app, and the goal of
                this project was to <strong>add a new feature</strong>, being
                consistent with the current implementation: from colours and
                typography, to imagery, icons, etc.
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
              <li>Competitor analysis</li>
            </ul>
          </div>
          <div className={caseStudy.indexGroup}>
            <h3>Primary research</h3>
            <ul>
              <li>User Survey</li>
            </ul>
          </div>
        </CaseStudyBlockHeader>

        {/* Research */}
        <div className={caseStudy.segment}>
          <h3 className={caseStudy.segmentTitle}>Research</h3>
          <div
            className={cn(
              'flexGrid',
              commonStyles.contentWrapper,
              caseStudy.segmentIntro
            )}
          >
            <div className={cn('col--md-2')}></div>
            <div className={cn('col--md-8')}>
              <p>
                First of all, I wanted to know more about the current
                competitors, the app itself, so I did some secondary research to
                gather insights and make my mind what to ask later in the
                survey.
              </p>
            </div>
            <div className={cn('col--md-2')}></div>
          </div>
          <div
            className={cn(caseStudy.segmentImage, commonStyles.contentWrapper)}
          >
            <Image
              src={ResearchRampUpImage}
              url="/komoot/research-ramp-up.png"
              alt="Komoot Research Ramp-up"
              width={1283}
              height={762}
              link={+true}
            />
          </div>
        </div>

        {/* User Survey */}
        <div className={caseStudy.segment}>
          <h3 className={caseStudy.segmentTitle}>User Survey</h3>
          <div
            className={cn(
              'flexGrid',
              commonStyles.contentWrapper,
              caseStudy.segmentIntro
            )}
          >
            <div className={cn('col--md-2')}></div>
            <div className={cn('col--md-8')}>
              <p>
                I sent out a <strong>Survey</strong> that was answered by 8
                participants, in order to understand how users make use of the
                app and if they’re missing some capabilities and features, what
                they love and what they would change, as well as if they would
                be interested in socialising more within the app.
              </p>
              <p>
                I tried to reach the company to have the chance to talk with
                some users, but had no luck, so the Survey targeted apps of the
                like, which gave a broader spectrum of responses, with the same
                questions in mind.
              </p>
              <p>I separated in three: needs, frustrations and motivations.</p>
              <p className={caseStudy.listTitle}>
                <strong>Needs</strong>:
              </p>
              <ul>
                <li>
                  Stay active (Hiking, running, and trail running being the most
                  practised).
                </li>
                <li>Clear navigation and stats</li>
                <li>User-uploaded photos</li>
                <li>Trail condition and weather updates</li>
                <li>Track workouts and activities</li>
              </ul>

              <p className={caseStudy.listTitle}>
                <strong>Frustrations</strong>:
              </p>
              <ul>
                <li>Limited options to socialize</li>
                <li>Difficult to follow alternate paths</li>
              </ul>

              <p className={caseStudy.listTitle}>
                <strong>Motivations</strong>:
              </p>
              <ul>
                <li>
                  Most of the participants would be willing to socialize more
                  (e.g. join / organise meetups, challenge friends)
                </li>
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
            <h3>Information architecture</h3>
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
              commonStyles.contentWrapper,
              caseStudy.segmentIntro
            )}
          >
            <div className={cn('col--md-2')}></div>
            <div className={cn('col--md-8')}>
              <p>
                Using the information gathered during the User Survey, I created
                a <strong>Persona</strong> to summarize the findings. Lukas
                Berger, a newcomer to the city of Innsbruck was the perfect
                example to someone who's willing to socialize by doing what he
                enjoys the most: being outside in the nature.
              </p>
            </div>
            <div className={cn('col--md-2')}></div>
          </div>
          <div
            className={cn(caseStudy.segmentImage, commonStyles.contentWrapper)}
          >
            <Image
              src={PersonaImage}
              url="/komoot/persona.png"
              alt="Komoot Persona"
              width={1283}
              height={855}
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
              commonStyles.contentWrapper,
              caseStudy.segmentIntro
            )}
          >
            <div className={cn('col--md-2')}></div>
            <div className={cn('col--md-8')}>
              <p>
                The <strong>Sitemap</strong> helped me to organise the current
                set of screens, as well as new ones that need to be designed to
                implement the new feature (represented in green).
              </p>
            </div>
            <div className={cn('col--md-2')}></div>
          </div>
          <div
            className={cn(caseStudy.segmentImage, commonStyles.contentWrapper)}
          >
            <Image
              src={SitemapImage}
              url="/komoot/sitemap.png"
              alt="Komoot Sitemap"
              width={1283}
              height={1353}
              link={+true}
            />
          </div>
        </div>

        {/* User Flow */}
        <div className={caseStudy.segment}>
          <h3 className={caseStudy.segmentTitle}>User Flows</h3>

          <div
            className={cn(
              'flexGrid',
              commonStyles.contentWrapper,
              caseStudy.segmentIntro
            )}
          >
            <div className={cn('col--md-2')}></div>
            <div className={cn('col--md-8')}>
              <p>
                These <strong>key user flows</strong> show the two main paths:
                join and organise an event, combined with a third one messaging
                feature. Helped me to visualise and notice that I would need a
                welcome page (added on the prototype), as well as a sharing
                functionality after the event creation.
              </p>
            </div>
            <div className={cn('col--md-2')}></div>
          </div>
          <div
            className={cn(caseStudy.segmentImage, commonStyles.contentWrapper)}
          >
            <Image
              src={UserFlowsImage}
              url="/komoot/user-flows.png"
              alt="Komoot Key User Flows"
              width={1283}
              height={642}
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
              commonStyles.contentWrapper,
              caseStudy.segmentIntro
            )}
          >
            <div className={cn('col--md-2')}></div>
            <div className={cn('col--md-8')}>
              <p>
                The following wireframes show some of the screens for the{' '}
                <strong>join and create an event</strong> features. To achive a
                smooth integration, it makes use of the{' '}
                <a
                  href="https://newsroom.komoot.com/media_kits/"
                  title="Komoot Media Kits"
                  target="_blank"
                  rel="noreferrer"
                >
                  current design elements and general guidelines
                </a>
                .
              </p>
            </div>
            <div className={cn('col--md-2')}></div>
          </div>
          <div className={caseStudy.highlightBackground}>
            <div className={commonStyles.contentWrapper}>
              <Image
                src={WireframesImage}
                url="/komoot/wireframes.png"
                alt="Komoot Wireframes"
                width={1283}
                height={2297}
                link={+true}
              />
            </div>
          </div>
        </div>
      </DefineSection>

      {/* Design */}
      <DesignSection>
        <CaseStudyBlockHeader title="Design">
          <h3>User Interface</h3>
        </CaseStudyBlockHeader>

        {/* UI Design */}
        <div className={caseStudy.segment}>
          <h3 className={caseStudy.segmentTitle}>UI Design</h3>
          <div
            className={cn(
              'flexGrid',
              commonStyles.contentWrapper,
              caseStudy.segmentIntro
            )}
          >
            <div className={cn('col--md-2')}></div>
            <div className={cn('col--md-8')}>
              <p>
                {' '}
                Tightly based on the wireframes, I created high-fidelity
                screens. The following are the final version after the UI tests,
                taken from the polished prototype linked in the below section.
                All the colours and design elements are taken from the existing
                Komoot app.
              </p>
            </div>
            <div className={cn('col--md-2')}></div>
          </div>
          <div
            className={cn(
              caseStudy.highlightBackground,
              caseStudy.highlightBackgroundBlue
            )}
          >
            <div className={cn(commonStyles.contentWrapper)}>
              <Carousel>
                <SwiperSlide>
                  <Image
                    src={UIDesign1Image}
                    alt="Komoot UI Design Screens"
                    width={411}
                    height={840}
                    priority={true}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={UIDesign2Image}
                    alt="Komoot UI Design Screens"
                    width={411}
                    height={840}
                    priority={true}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={UIDesign3Image}
                    alt="Komoot UI Design Screens"
                    width={411}
                    height={840}
                    priority={true}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={UIDesign4Image}
                    alt="Komoot UI Design Screens"
                    width={411}
                    height={840}
                    priority={true}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={UIDesign5Image}
                    alt="Komoot UI Design Screens"
                    width={411}
                    height={840}
                    priority={true}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={UIDesign6Image}
                    alt="Komoot UI Design Screens"
                    width={411}
                    height={840}
                    priority={true}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={UIDesign7Image}
                    alt="Komoot UI Design Screens"
                    width={411}
                    height={840}
                    priority={true}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={UIDesign8Image}
                    alt="Komoot UI Design Screens"
                    width={411}
                    height={840}
                    priority={true}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={UIDesign9Image}
                    alt="Komoot UI Design Screens"
                    width={411}
                    height={840}
                    priority={true}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={UIDesign10Image}
                    alt="Komoot UI Design Screens"
                    width={411}
                    height={840}
                    priority={true}
                  />
                </SwiperSlide>
              </Carousel>
            </div>
          </div>
        </div>
      </DesignSection>

      {/* Testing */}
      <TestingSection>
        <CaseStudyBlockHeader title="Testing">
          <h3>UI tests</h3>
        </CaseStudyBlockHeader>

        {/* Testing */}
        <div className={caseStudy.segment}>
          <h3 className={caseStudy.segmentTitle}>UI Tests</h3>
          <div
            className={cn(
              'flexGrid',
              commonStyles.contentWrapper,
              caseStudy.segmentIntro
            )}
          >
            <div className={cn('col--md-2')}></div>
            <div className={cn('col--md-8')}>
              <p>
                Nine participants did a Maze UI Test with two main tasks: join
                and create an event. Overall the responses were positive
                throughout, the success rate was high, and there were only small
                usability issues to address, such as the size of the CTA button.
              </p>
              <LinkButton
                target="_blank"
                text="See prototype"
                href="https://www.figma.com/proto/lLKG54W0VMlqIZIy5TctPq/Komoot-Prototype?page-id=0%3A1&node-id=102%3A3&viewport=-1287%2C321%2C0.32177332043647766&scaling=scale-down"
              />
            </div>
            <div className={cn('col--md-2')}></div>
          </div>
        </div>
      </TestingSection>

      {/* Wrap up */}
      <section className={cn(pageStyles.section, pageStyles.noPadding)}>
        <div className={caseStudy.wrappingUp}>
          <div className={commonStyles.contentWrapper}>
            <div className={cn('flexGrid', commonStyles.contentWrapper)}>
              <div className={cn('col--md-2')}></div>
              <div className={cn('col--md-8')}>
                <h3>Takeaways</h3>
                <p>
                  If I could have had access to the userbase of the app, I would
                  have conducted better interviews / surveys and user tests.
                </p>
                <p>
                  If I could go back, I would have asked more thorough questions
                  in the Usability Test, to try and get richer insights.
                </p>
                <p>
                  To design with an already existing style guide is a nice way
                  to learn how to adapt with existing constraints and
                  guidelines.
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

Komoot.provider = CaseStudyProvider;

export default Komoot;
