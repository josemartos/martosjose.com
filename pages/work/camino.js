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
import HeroImage from 'public/images/camino/hero.png';
import ResearchRampUpImage from 'public/images/camino/research-ramp-up.png';
import PersonaImage from 'public/images/camino/persona.png';
import SitemapImage from 'public/images/camino/sitemap.png';
import WireframesImage from 'public/images/camino/wireframes.png';
import MoodBoardImage from 'public/images/camino/mood-board.jpg';
import LogoImage from 'public/images/camino/logo.jpg';
import StyleTileImage from 'public/images/camino/style-tile.jpg';
import UIDesign1Image from 'public/images/camino/ui-design1.png';
import UIDesign2Image from 'public/images/camino/ui-design2.png';
import UIDesign3Image from 'public/images/camino/ui-design3.png';
import UIDesign4Image from 'public/images/camino/ui-design4.png';
import UIDesign5Image from 'public/images/camino/ui-design5.png';
import UIDesign6Image from 'public/images/camino/ui-design6.png';
import UIDesign7Image from 'public/images/camino/ui-design7.png';
import UIDesign8Image from 'public/images/camino/ui-design8.png';
import UIDesign9Image from 'public/images/camino/ui-design9.png';
import UIDesign10Image from 'public/images/camino/ui-design10.png';
import UIDesign11Image from 'public/images/camino/ui-design11.png';
import UIDesign12Image from 'public/images/camino/ui-design12.png';
import UIDesign13Image from 'public/images/camino/ui-design13.png';
import UIDesign14Image from 'public/images/camino/ui-design14.png';

const Camino = () => {
  return (
    <CaseStudyWrapper title="Camino | Therapist Matching App">
      <section className={pageStyles.section}>
        <header className={caseStudy.hero}>
          <ComeInAnimation>
            <Image
              src={HeroImage}
              alt="Camino App Mockups"
              width={1283}
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
              <h1>Camino</h1>
              <small>Capstone - MVP App - Jul 2021</small>
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
                  In this project, I delved into the topic of mental health.
                  Conducting user and expert interviews was particularly
                  insightful, reaffirming that the process of finding therapy in
                  Germany is outdated and ripe for new, innovative solutions.
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
          <div className={cn('flexGrid', commonStyles.contentWrapper)}>
            <div className={cn('col--md-1')}></div>
            <div className={cn('col--md-8')}>
              <h2>Goal</h2>
              <p>
                Design an MVP app to efficiently match patients with the right
                therapist, emphasizing thorough research and incorporating
                branding and identity elements.
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
              <li>User Interviews</li>
              <li>Subject-matter Expert Interviews</li>
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
                My initial focus was to deeply understand the scope of the
                problem and the current state of the market.
              </p>
              <p>
                This idea stemmed from conversations with my girlfriend. With so
                many existing solutions out there, it was challenging to find a
                truly unfilled niche. However, competition isn't a negative
                thing—it often validates the need for a solution. No idea is
                completely original, and there's always room for improvement.
              </p>
              <p>
                Below, you can see a comparison of three primary competitors and
                their features.
              </p>
            </div>
            <div className={cn('col--md-2')}></div>
          </div>
          <div
            className={cn(caseStudy.segmentImage, commonStyles.contentWrapper)}
          >
            <Image
              src={ResearchRampUpImage}
              url="/camino/research-ramp-up.png"
              alt="Camino Research Ramp-up"
              width={1283}
              height={638}
              link={+true}
            />
          </div>
        </div>

        {/* Interviews */}
        <div className={caseStudy.segment}>
          <h3 className={caseStudy.segmentTitle}>Interviews</h3>
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
                I conducted four interviews, divided between users and
                subject-matter experts, to gain multiple perspectives. Users
                highlighted how difficult and time-consuming it is to find a
                therapist, while experts were enthusiastic about the idea,
                sharing their professional views on the process.
              </p>
              <p>
                Below is a summary of the key needs, frustrations, and
                motivations.
              </p>

              <p className={caseStudy.listTitle}>
                <strong>Needs</strong>:
              </p>
              <ul>
                <li>
                  Recommendations are a key factor for all participants when
                  choosing a therapist.
                </li>
                <li>All participants prefer in-person therapy.</li>
                <li>
                  3 out of 4 participants would consider using chat, email, or
                  phone for communication between sessions.
                </li>
                <li>
                  A strong filtering system is crucial to quickly and reliably
                  find a suitable therapist.
                </li>
                <li>
                  All participants prioritize therapists covered by insurance.
                </li>
                <li>
                  Some participants see personal background stories as relevant
                  (e.g., a therapist familiar with expat experiences).
                </li>
              </ul>

              <p className={caseStudy.listTitle}>
                <strong>Frustrations</strong>:
              </p>
              <ul>
                <li>
                  All participants find the current process of finding a
                  therapist tedious.
                </li>
                <li>Therapists desire more control over their schedules.</li>
                <li>
                  The existing resources, especially in Germany, feel outdated
                  to participants.
                </li>
              </ul>

              <p className={caseStudy.listTitle}>
                <strong>Motivations</strong>:
              </p>
              <ul>
                <li>
                  2 out of 4 participants believe online sessions are a good
                  complement to in-person therapy.
                </li>
                <li>
                  Therapists are eager to be listed on an app/website to reach
                  more clients.
                </li>
                <li>
                  All participants want a more modern and structured system for
                  finding a therapist, allowing for better pre-selection.
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
                I synthesized the user interview findings into the Persona of
                Giulia Moretti, an expat living in Berlin. Over time, she
                realized she needed external professional help to navigate her
                thoughts and emotions, but the process of finding a therapist
                was overwhelming.
              </p>
            </div>
            <div className={cn('col--md-2')}></div>
          </div>
          <div
            className={cn(caseStudy.segmentImage, commonStyles.contentWrapper)}
          >
            <Image
              src={PersonaImage}
              url="/camino/persona.png"
              alt="Camino Persona"
              width={1283}
              height={854}
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
                The Sitemap outlines the key screens and features for the MVP.
                The app includes three main screens:{' '}
                <strong>Get Matched</strong>, <strong>Therapist List</strong>,
                and <strong>Dashboard</strong>. Both the Get Matched and
                Therapist List pages lead to the{' '}
                <strong>Therapist Profile</strong>, where users can book
                appointments or send messages.
              </p>
            </div>
            <div className={cn('col--md-2')}></div>
          </div>
          <div
            className={cn(caseStudy.segmentImage, commonStyles.contentWrapper)}
          >
            <Image
              src={SitemapImage}
              url="/camino/sitemap.png"
              alt="Camino Sitemap"
              width={1283}
              height={1073}
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
                These wireframes highlight the key features of the app,
                including <strong>Get Matched</strong> and{' '}
                <strong>Therapist List</strong>. After iterating on these
                screens, I also included a Dashboard where users can view their
                next appointment and recent messages after matching with a
                therapist.
              </p>
            </div>
            <div className={cn('col--md-2')}></div>
          </div>
          <div className={caseStudy.highlightBackground}>
            <div className={commonStyles.contentWrapper}>
              <Image
                src={WireframesImage}
                url="/camino/wireframes.png"
                alt="Camino Wireframes"
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
          <h3>Brand</h3>
          <ul>
            <li>Mood Board</li>
            <li>Logo</li>
            <li>Style Tile</li>
          </ul>
          <h3>User Interface</h3>
        </CaseStudyBlockHeader>

        {/* Mood Board & Style Tile */}
        <div className={caseStudy.segment}>
          <h3 className={caseStudy.segmentTitle}>Moodboard & Logo</h3>
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
                I chose the name <strong>Camino</strong> for the app, which
                means "way" in Spanish.
              </p>
              <p>
                Inspired by the name, I developed a <strong>logo</strong>{' '}
                symbolizing a path within a growing seed—representing personal
                growth. The handwritten typography reflects the idea that we
                write (and rewrite) our own stories.
              </p>
            </div>
            <div className={cn('col--md-2')}></div>
          </div>
          <div
            className={cn(caseStudy.segmentImage, commonStyles.contentWrapper)}
          >
            <Image
              src={MoodBoardImage}
              url="/camino/mood-board.jpg"
              alt="Camino Mood Board"
              width={1283}
              height={855}
              link={+true}
            />
          </div>
          <div
            className={cn(caseStudy.segmentImage, commonStyles.contentWrapper)}
          >
            <Image
              src={LogoImage}
              url="/camino/logo.jpg"
              alt="Camino Logo"
              width={1283}
              height={855}
              link={+true}
            />
          </div>
        </div>

        <div className={caseStudy.segment}>
          <h3 className={caseStudy.segmentTitle}>Style Tile</h3>
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
                After finalizing the logo, I compiled a style tile that sets the
                visual direction for the app, including font choices, color
                palettes, and UI components.
              </p>
            </div>
            <div className={cn('col--md-2')}></div>
          </div>
          <div
            className={cn(caseStudy.segmentImage, commonStyles.contentWrapper)}
          >
            <Image
              src={StyleTileImage}
              url="/camino/style-tile.jpg"
              alt="Camino Style Tile"
              width={1283}
              height={855}
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
              commonStyles.contentWrapper,
              caseStudy.segmentIntro
            )}
          >
            <div className={cn('col--md-2')}></div>
            <div className={cn('col--md-8')}>
              <p>
                The final UI design was crafted to be modern, warm, and
                inviting. After several rounds of testing and user feedback, the
                following screens represent the polished, final version.
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
                    alt="Camino UI Design Screens"
                    width={421}
                    height={858}
                    priority={true}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={UIDesign2Image}
                    alt="Camino UI Design Screens"
                    width={421}
                    height={858}
                    priority={true}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={UIDesign3Image}
                    alt="Camino UI Design Screens"
                    width={421}
                    height={858}
                    priority={true}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={UIDesign4Image}
                    alt="Camino UI Design Screens"
                    width={421}
                    height={858}
                    priority={true}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={UIDesign5Image}
                    alt="Camino UI Design Screens"
                    width={421}
                    height={858}
                    priority={true}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={UIDesign6Image}
                    alt="Camino UI Design Screens"
                    width={421}
                    height={858}
                    priority={true}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={UIDesign7Image}
                    alt="Camino UI Design Screens"
                    width={421}
                    height={858}
                    priority={true}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={UIDesign8Image}
                    alt="Camino UI Design Screens"
                    width={421}
                    height={858}
                    priority={true}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={UIDesign9Image}
                    alt="Camino UI Design Screens"
                    width={421}
                    height={858}
                    priority={true}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={UIDesign10Image}
                    alt="Camino UI Design Screens"
                    width={421}
                    height={858}
                    priority={true}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={UIDesign11Image}
                    alt="Camino UI Design Screens"
                    width={421}
                    height={858}
                    priority={true}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={UIDesign12Image}
                    alt="Camino UI Design Screens"
                    width={421}
                    height={858}
                    priority={true}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={UIDesign13Image}
                    alt="Camino UI Design Screens"
                    width={421}
                    height={858}
                    priority={true}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={UIDesign14Image}
                    alt="Camino UI Design Screens"
                    width={421}
                    height={858}
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
              commonStyles.contentWrapper,
              caseStudy.segmentIntro
            )}
          >
            <div className={cn('col--md-2')}></div>
            <div className={cn('col--md-8')}>
              <p>
                A total of 16 participants took part in the Maze User Tests,
                with overwhelmingly positive responses.
              </p>
              <ul>
                <li>
                  Participants quickly grasped the app's concept ("Camino. It
                  symbolizes the path of self-discovery or overcoming
                  challenges.").
                </li>
                <li>Overall, the success rate of the test was high.</li>
                <li>
                  The design was well received ("Simple, elegant, and
                  user-friendly. Makes a difficult process more approachable.").
                </li>
              </ul>
              <p>
                A few minor adjustments were needed, such as increasing font
                sizes in some areas and refining certain phrases (e.g., "Your
                way to a better self" was perceived as slightly judgmental).
              </p>
              <LinkButton
                target="_blank"
                text="See prototype"
                href="https://www.figma.com/proto/NXpbGcEyRgmLXBaPn5hP7b/MVP-App-Prototype?page-id=0%3A1&node-id=1%3A243&viewport=384%2C25%2C0.103382907807827&scaling=scale-down"
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
                  I applied the learnings from my previous project to create a
                  more comprehensive Maze test, asking detailed questions to
                  obtain deeper insights. This resulted in a well-thought-out
                  set of design blocks.
                </p>
                <p>
                  As a next step, I would further iterate on the "Get Matched"
                  feature by conducting additional interviews with users and
                  subject-matter experts. I would also explore implementing a
                  dark mode, which was requested by a user and is increasingly
                  popular.
                </p>
                <p>
                  Overall, this experience was incredibly enriching. I felt that
                  all my design skills came together to create what I consider
                  to be my most complete project to date.
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

Camino.provider = CaseStudyProvider;

export default Camino;
