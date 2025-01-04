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
import layoutStyles from 'styles/modules/layout.module.scss';
import caseStudy from 'styles/modules/caseStudy.module.scss';

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
    <CaseStudyWrapper title="Komoot | Outdoor Activities App">
      <section className={layoutStyles.section}>
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
              layoutStyles.contentWrapper,
            )}
          >
            <div className={cn('col--md-1')}></div>
            <div className={cn('col--md-11', caseStudy.title)}>
              <h1>Komoot</h1>
              <small>Social Feature - Jun 2021</small>
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
                  As an avid hiker, I chose to analyze and explore possible
                  enhancements for one of my favorite apps, Komoot. For my
                  second project at Designlab's UX Academy, I worked on{' '}
                  <strong>expanding the app's social capabilities</strong>. This
                  allowed me to explore its current functionalities, conduct
                  market research, distribute user surveys, and prototype the
                  new feature while adhering to the existing style guide and
                  components.
                </p>
              </div>
              <div className={cn('col--md-2')}></div>
              <div className={cn(caseStudy.tagsWrapper, 'col--md-4')}>
                <CaseStudyTag label="Role" text="UX / UI Designer" />
                <CaseStudyTag
                  label="Skills"
                  text="Research, Information Architecture, Interaction & UI Design, Prototyping, Testing"
                />
                <CaseStudyTag label="Tools" text="Figma, Whimsical, Maze" />
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
                Komoot is a leading outdoor activities app. The goal of this
                project was to <strong>introduce a new social feature</strong>{' '}
                while ensuring consistency with the app's existing design,
                including colors, typography, imagery, and icons.
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
              <li>User survey</li>
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
                I began by conducting secondary research to better understand
                the current landscape of competitors and Komoot itself. This
                helped me shape the survey questions for later stages of the
                project.
              </p>
            </div>
            <div className={cn('col--md-2')}></div>
          </div>
          <div
            className={cn(caseStudy.segmentImage, layoutStyles.contentWrapper)}
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
              layoutStyles.contentWrapper,
              caseStudy.segmentIntro,
            )}
          >
            <div className={cn('col--md-2')}></div>
            <div className={cn('col--md-8')}>
              <p>
                I distributed a <strong>survey</strong> to 8 participants to
                better understand how users currently use Komoot and what
                additional features they would like to see. The survey explored
                user preferences, frustrations, and whether they would be
                interested in more social interaction within the app.
              </p>
              <p>
                Although I was unable to interview actual Komoot users, the
                survey was distributed to users of similar apps, providing
                valuable feedback on desired social features.
              </p>
              <p>
                I organized the responses into three categories: needs,
                frustrations, and motivations.
              </p>
              <p className={caseStudy.listTitle}>
                <strong>Needs</strong>:
              </p>
              <ul>
                <li>
                  Staying active (hiking, running, and trail running were the
                  most popular activities).
                </li>
                <li>Clear navigation and statistics.</li>
                <li>User-uploaded photos.</li>
                <li>Trail condition and weather updates.</li>
                <li>Tracking workouts and activities.</li>
              </ul>

              <p className={caseStudy.listTitle}>
                <strong>Frustrations</strong>:
              </p>
              <ul>
                <li>Limited socializing options.</li>
                <li>Difficulty following alternate routes.</li>
              </ul>

              <p className={caseStudy.listTitle}>
                <strong>Motivations</strong>:
              </p>
              <ul>
                <li>
                  Most participants were interested in more social features,
                  such as joining or organizing meetups and challenging friends.
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
              layoutStyles.contentWrapper,
              caseStudy.segmentIntro,
            )}
          >
            <div className={cn('col--md-2')}></div>
            <div className={cn('col--md-8')}>
              <p>
                Using the data gathered from the user survey, I created a{' '}
                <strong>Persona</strong>: Lukas Berger, a newcomer to Innsbruck
                who enjoys socializing through outdoor activities like hiking.
                Lukas represented the typical user who is willing to engage
                socially while exploring the outdoors.
              </p>
            </div>
            <div className={cn('col--md-2')}></div>
          </div>
          <div
            className={cn(caseStudy.segmentImage, layoutStyles.contentWrapper)}
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
              layoutStyles.contentWrapper,
              caseStudy.segmentIntro,
            )}
          >
            <div className={cn('col--md-2')}></div>
            <div className={cn('col--md-8')}>
              <p>
                The <strong>Sitemap</strong> allowed me to organize the app's
                existing screens and plan the addition of new ones (highlighted
                in green) needed for the social feature.
              </p>
            </div>
            <div className={cn('col--md-2')}></div>
          </div>
          <div
            className={cn(caseStudy.segmentImage, layoutStyles.contentWrapper)}
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
              layoutStyles.contentWrapper,
              caseStudy.segmentIntro,
            )}
          >
            <div className={cn('col--md-2')}></div>
            <div className={cn('col--md-8')}>
              <p>
                These <strong>key user flows</strong> outline the processes for
                joining and organizing an event, as well as a messaging feature.
                The flows highlighted the need for a welcome page (added in the
                prototype) and a sharing function after event creation.
              </p>
            </div>
            <div className={cn('col--md-2')}></div>
          </div>
          <div
            className={cn(caseStudy.segmentImage, layoutStyles.contentWrapper)}
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
              layoutStyles.contentWrapper,
              caseStudy.segmentIntro,
            )}
          >
            <div className={cn('col--md-2')}></div>
            <div className={cn('col--md-8')}>
              <p>
                These wireframes illustrate the screens for the{' '}
                <strong>join and create an event</strong> feature. I focused on
                achieving a seamless integration by using Komoot's{' '}
                <a
                  href="https://newsroom.komoot.com/media_kits/"
                  title="Komoot Media Kits"
                  target="_blank"
                  rel="noreferrer"
                >
                  existing design elements and guidelines
                </a>
                .
              </p>
            </div>
            <div className={cn('col--md-2')}></div>
          </div>
          <div className={caseStudy.highlightBackground}>
            <div className={layoutStyles.contentWrapper}>
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
              layoutStyles.contentWrapper,
              caseStudy.segmentIntro,
            )}
          >
            <div className={cn('col--md-2')}></div>
            <div className={cn('col--md-8')}>
              <p>
                Based on the wireframes, I created high-fidelity screens. The
                following are the final versions, after user testing via Maze.
                All colors and design elements are consistent with Komoot's
                existing design language.
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
            <div className={cn(layoutStyles.contentWrapper)}>
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
                Nine participants completed a Maze User Tests with two primary
                tasks: joining and creating an event. The responses were mostly
                positive, with a high success rate and minor usability issues,
                such as adjusting the size of the CTA button.
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
      <section className={cn(layoutStyles.section, layoutStyles.noPadding)}>
        <div className={caseStudy.wrappingUp}>
          <div className={layoutStyles.contentWrapper}>
            <div className={cn('flexGrid', layoutStyles.contentWrapper)}>
              <div className={cn('col--md-2')}></div>
              <div className={cn('col--md-8')}>
                <h3>Takeaways</h3>
                <p>
                  If I had access to Komoot's user base, I would have conducted
                  more in-depth interviews and usability tests.
                </p>
                <p>
                  I also realized that more detailed questions in the Usability
                  Test could have led to richer insights.
                </p>
                <p>
                  Designing within an established style guide was a valuable
                  experience, teaching me how to adapt to existing constraints
                  while maintaining creativity.
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
