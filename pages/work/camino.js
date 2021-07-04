import cn from 'classnames';
import {
  BasePage,
  Image,
  CaseStudyTag,
  CaseStudyBlockHeader,
  Carousel,
  LinkButton,
} from 'components';
import { SwiperSlide } from 'swiper/react';

import ComeInAnimation from 'animation/comeIn';

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

export default function Camino() {
  return (
    <BasePage title="Camino | Therapist matching App">
      <div className={caseStudy.wrapper}>
        <section className={pageStyles.section}>
          <header className={caseStudy.hero}>
            <ComeInAnimation>
              <Image
                src={HeroImage}
                alt="Camino App Mockups"
                width={1281}
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
                    For the last capstone project at Designlab’s UX Academy, I
                    opted to focus on mental health, creating a MVP App that
                    allows users to find the right therapist. Specially
                    interesting were the user and subject-matter expert
                    interviews, to reafirm that the systems to find therapy help
                    in Germany are outdated and old-fashioned, in need of new
                    solutions. This has been my first{' '}
                    <strong>end-to-end design for an mobile app</strong>, where
                    all my design skills and learnings have come together.
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
                <h2>Goal</h2>
                <p>
                  Create an MVP app that matches therapists with patients,
                  paying special attention to research. Include brand and
                  identity.
                </p>
              </div>
              <div className={cn('col--md-3')}></div>
            </div>
          </div>
        </section>

        {/* Understand */}
        <section className={pageStyles.section}>
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
                  Firstly, I wanted to dig deep into the topic at hand, the
                  scope and the current offering.
                </p>
                <p>
                  To be completely honest, this was an idea my girlfriend and I
                  were talking about for some time. Checking out the market with
                  so many alternatives was a bit discouraging. However, that
                  means that the idea has some traction. Almost no idea is ever
                  completely novel and one can always improve on their offering.
                </p>
                <p>
                  On the below image we can see three main products and their
                  features.
                </p>
              </div>
              <div className={cn('col--md-2')}></div>
            </div>
            <div
              className={cn(
                caseStudy.segmentImage,
                commonStyles.contentWrapper
              )}
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
                  I conducted a total of 4 interviews, separated into users and
                  subject-matter experts, to see different standpoints. Users
                  reflected how complicated and time-consuming is finding a
                  therapist at the moment. Experts were interested in the idea,
                  happy to provide me with their own view of the process.
                </p>
                <p>
                  Below we can find the summary of needs, frustrations and
                  motivations.
                </p>
                <p className={caseStudy.listTitle}>
                  <strong>Needs</strong>:
                </p>
                <ul>
                  <li>
                    All participants see recommendations as a key factor when
                    choosing a therapist.
                  </li>
                  <li>All participants prefer in person therapy.</li>
                  <li>
                    3 out of 4 participants would consider contact between
                    therapy sessions using chat, email or phone calls.
                  </li>
                  <li>
                    All participants would like to count on a good set of
                    filters to match their criteria and find the right therapist
                    quicker and reliably.
                  </li>
                  <li>
                    All participants would give priority to the therapists that
                    are covered by insurance.
                  </li>
                  <li>
                    A short life story can be relevant for some participants
                    (e.g. someone who is well traveled would understand expats
                    better).
                  </li>
                </ul>

                <p className={caseStudy.listTitle}>
                  <strong>Frustrations</strong>:
                </p>
                <ul>
                  <li>
                    All participants find the process of getting a therapist
                    tedious.
                  </li>
                  <li>
                    Therapists would like to be more in control of their
                    schedule.
                  </li>
                  <li>
                    All participants find the current resources (at least here
                    in Germany, or what they know about) to be old fashioned.
                  </li>
                </ul>

                <p className={caseStudy.listTitle}>
                  <strong>Motivations</strong>:
                </p>
                <ul>
                  <li>
                    2 out of 4 participants think online sessions are a good
                    complement to in person therapy.
                  </li>
                  <li>
                    Therapists would like to be listed on an app / website to be
                    reached and find more clients.
                  </li>
                  <li>
                    All participants would like to have an easier system to find
                    a therapist, more modern, structured, so to have a better
                    feeling when choosing someone.
                  </li>
                </ul>
              </div>
              <div className={cn('col--md-2')}></div>
            </div>
          </div>
        </section>

        {/* Define */}
        <section className={pageStyles.section}>
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
                  I summarised all the information from the User Interviews in
                  the below <strong>Persona</strong>. Giulia Moretti, an expat
                  living in one of the most bustling cities in the world:
                  Berlin. She discovered there, after a while, she needed to dig
                  deeper into her thoughts and emotions, but she found out that
                  the process to find some external professional help was a
                  little bit too much.
                </p>
              </div>
              <div className={cn('col--md-2')}></div>
            </div>
            <div
              className={cn(
                caseStudy.segmentImage,
                commonStyles.contentWrapper
              )}
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
                  The <strong>Sitemap</strong> represents the set of screens and
                  features the first iteration of the MVP app will have,
                  reflected on the following section: the wireframes.
                </p>
              </div>
              <div className={cn('col--md-2')}></div>
            </div>
            <div
              className={cn(
                caseStudy.segmentImage,
                commonStyles.contentWrapper
              )}
            >
              <Image
                src={SitemapImage}
                url="/camino/sitemap.png"
                alt="Camino Sitemap"
                width={1283}
                height={1248}
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
                  These wireframes show some of the key screens and features,
                  which include <strong>Get matched</strong> and{' '}
                  <strong>Discover</strong>.
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
        </section>

        {/* Design */}
        <section className={pageStyles.section}>
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
            <h3 className={caseStudy.segmentTitle}>Brand</h3>
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
                  For the app's name, I decided to use the Spanish word{' '}
                  <strong>Camino</strong>, which means way.
                </p>
                <p>
                  After a brainstorming session to set the mood, I worked on the{' '}
                  <strong>logo</strong>, inspired by the app's name. It's a way
                  in a seed (what can be a growing seed), which symbolises the
                  growth. I chose a handwritten typography, which represents the
                  way we write (and rewrite) our own story.
                </p>
              </div>
              <div className={cn('col--md-2')}></div>
            </div>
            <div
              className={cn(
                caseStudy.segmentImage,
                commonStyles.contentWrapper
              )}
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
              className={cn(
                caseStudy.segmentImage,
                commonStyles.contentWrapper
              )}
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
            <div
              className={cn(
                caseStudy.segmentImage,
                commonStyles.contentWrapper
              )}
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
                  With a fresh, modern, warm and welcoming UI design, the
                  following screens are a polished version after the UI tests
                  and the user's feedback (more about that in the next section).
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
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={UIDesign2Image}
                      alt="Camino UI Design Screens"
                      width={421}
                      height={858}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={UIDesign3Image}
                      alt="Camino UI Design Screens"
                      width={421}
                      height={858}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={UIDesign4Image}
                      alt="Camino UI Design Screens"
                      width={421}
                      height={858}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={UIDesign5Image}
                      alt="Camino UI Design Screens"
                      width={421}
                      height={858}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={UIDesign6Image}
                      alt="Camino UI Design Screens"
                      width={421}
                      height={858}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={UIDesign7Image}
                      alt="Camino UI Design Screens"
                      width={421}
                      height={858}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={UIDesign8Image}
                      alt="Camino UI Design Screens"
                      width={421}
                      height={858}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={UIDesign9Image}
                      alt="Camino UI Design Screens"
                      width={421}
                      height={858}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={UIDesign10Image}
                      alt="Camino UI Design Screens"
                      width={421}
                      height={858}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={UIDesign11Image}
                      alt="Camino UI Design Screens"
                      width={421}
                      height={858}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={UIDesign12Image}
                      alt="Camino UI Design Screens"
                      width={421}
                      height={858}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={UIDesign13Image}
                      alt="Camino UI Design Screens"
                      width={421}
                      height={858}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src={UIDesign14Image}
                      alt="Camino UI Design Screens"
                      width={421}
                      height={858}
                    />
                  </SwiperSlide>
                </Carousel>
              </div>
            </div>
          </div>
        </section>

        {/* Testing */}
        <section className={pageStyles.section}>
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
                  A total of 16 participants participated in the Maze UI test.
                  The responses were mainly quite positive.
                </p>
                <ul>
                  <li>
                    The understanding of the app was awesome! ("Camino. The
                    meaning is the path of self discovery or overcoming an
                    obstacle").
                  </li>
                  <li>Overall, the success rate of the test was great.</li>
                  <li>
                    The design was well received by most of the participants
                    ("Truly easy to use and read. Simple, elegant. Makes a
                    difficult process more accessible for everyone.").
                  </li>
                </ul>
                <p>
                  Some minor issues had to be addressed. Font sizes in general,
                  it was too small on some parts of the app. Some wordings were
                  improved (e.g. "Your way to a better self" sounded a bit
                  judgmental).
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
        </section>

        {/* Wrap up */}
        <section className={cn(pageStyles.section, pageStyles.noPadding)}>
          <div className={caseStudy.wrappingUp}>
            <div className={commonStyles.contentWrapper}>
              <div className={cn('flexGrid', commonStyles.contentWrapper)}>
                <div className={cn('col--md-2')}></div>
                <div className={cn('col--md-8')}>
                  <h3>Takeaways</h3>
                  <p>
                    This time I learnt from my mistakes, and I created a Maze
                    test much more complete, asking thorough questions in order
                    to get more insightful data.
                  </p>
                  <p>
                    As a next step I would iterate more on the list of questions
                    to the Get Matched feature, by conducting more user and
                    subject-matter expert interviews. I would also include some
                    examples of a dark mode design, requested by one user and a
                    popular option nowadays.
                  </p>
                  <p>
                    The experience in general was very enriching. I felt that
                    all the design skills I have adquired in the last 10 months
                    came all together to create what I consider my most complete
                    work to date.
                  </p>
                  <p>That was it, thanks for reading this far!</p>
                </div>
                <div className={cn('col--md-2')}></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </BasePage>
  );
}
