import cn from 'classnames';
import {
  BasePage,
  Image,
  CaseStudyTag,
  CaseStudyBlockHeader,
  Carousel,
  // LinkButton,
} from 'components';
import { SwiperSlide } from 'swiper/react';

import ComeInAnimation from 'animation/comeIn';

// Styles
import commonStyles from 'styles/common.module.scss';
import pageStyles from 'styles/page.module.scss';
import caseStudy from 'styles/components/caseStudy.module.scss';

// Images
import HeroImage from 'public/images/camino/hero.jpg';
import ResearchRampUpImage from 'public/images/camino/research-ramp-up.png';
import PersonaImage from 'public/images/camino/persona.png';
import SitemapImage from 'public/images/camino/sitemap.png';
import WireframesImage from 'public/images/camino/wireframes.png';
import MoodBoardImage from 'public/images/camino/mood-board.jpg';
import LogoImage from 'public/images/camino/logo.jpg';
import StyleTileImage from 'public/images/camino/style-tile.jpg';
import UIDesign1Image from 'public/images/camino/ui-design1.png';

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
                width={1280}
                height={720}
                priority={true}
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
                    in Germany is outdated and old-fashioned at the moment, in
                    need of new solutions. This has been my first{' '}
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
                  putting special attention to research. Include brand and
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
                  happy to give me their own view of the process.
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
                    choosing a therapist
                  </li>
                  <li>All participants prefer in person therapy</li>
                  <li>
                    3 out of 4 participants would consider contact between
                    therapy sessions using chat, email or phone calls
                  </li>
                  <li>
                    All participants would like to count on a good set of
                    filters to match their criteria and find the right therapist
                    quicker and reliably
                  </li>
                  <li>
                    All participants would give priority to the therapists that
                    are covered by insurance
                  </li>
                  <li>
                    A short life story can be relevant for some participants
                    (e.g. someone who is well traveled would understand expats
                    better)
                  </li>
                </ul>

                <p className={caseStudy.listTitle}>
                  <strong>Frustrations</strong>:
                </p>
                <ul>
                  <li>
                    All participants find the process of getting a therapist
                    tedious
                  </li>
                  <li>
                    Therapists would like to be more in control of their
                    schedule
                  </li>
                  <li>
                    All participants find the current resources (at least here
                    in Germany, or what they know about) to be old fashioned
                  </li>
                </ul>

                <p className={caseStudy.listTitle}>
                  <strong>Motivations</strong>:
                </p>
                <ul>
                  <li>
                    2 out of 4 participants think online sessions are a good
                    complement to in person therapy
                  </li>
                  <li>
                    Therapists would like to be listed on an app / website to be
                    reached and find more clients
                  </li>
                  <li>
                    All participants would like to have an easier system to find
                    a therapist, more modern, structured, so to have a better
                    feeling when choosing someone
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
                  living in one of the more bustling cities in the world:
                  Berlin. She discovered there she needed to dig deeper into her
                  mind, but found out that the process to find some external
                  professional help was a bit too much.
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
                  features the first iteration of the MVP app will have.
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
                  The following wireframes show some of the key screens and
                  features, which include <strong>Get matched</strong> and{' '}
                  <strong>Discover</strong>.
                </p>
              </div>
              <div className={cn('col--md-2')}></div>
            </div>
            <div className={caseStudy.highlightBackground}>
              <div className={commonStyles.contentWrapper}>
                <Image
                  src={WireframesImage}
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
                  {' '}
                  Tightly based on the wireframes, I created high-fidelity
                  screens. The following are the final version after the UI
                  tests, taken from the polished prototype linked in the below
                  section. All the colours and design elements are taken from
                  the existing Komoot app.
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
                      src={UIDesign1Image}
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
        </section>
      </div>
    </BasePage>
  );
}
