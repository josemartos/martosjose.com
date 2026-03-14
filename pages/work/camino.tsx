import cn from 'classnames';
import { NextPage } from 'next';
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
import { caminoData } from 'lib/caseStudyData';

// Styles
import layoutStyles from 'styles/modules/layout.module.scss';
import caseStudy from 'styles/modules/caseStudy.module.scss';

type CaseStudyPage = NextPage & {
  provider?: typeof CaseStudyProvider;
  theme?: string;
};

const Camino: CaseStudyPage = () => {
  return (
    <CaseStudyWrapper title={caminoData.title}>
      <section className={layoutStyles.section}>
        <header className={caseStudy.hero}>
          <ComeInAnimation>
            <Image {...caminoData.hero} />
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
              <h1>Camino</h1>
              <small>MVP App - Jul 2021</small>
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
                  Finding a therapist in Germany is genuinely difficult — long
                  waiting lists, outdated directories, no clear way to match on
                  what actually matters. As a project for Designlab's UX
                  Academy, I designed the full MVP around that problem: from
                  early research through to a tested, clickable prototype.
                </p>
              </div>
              <div className={cn('col--md-2')}></div>
              <div className={cn(caseStudy.tagsWrapper, 'col--md-4')}>
                <CaseStudyTag label="Role" text={caminoData.tags.role} />
                <CaseStudyTag label="Skills" text={caminoData.tags.skills} />
                <CaseStudyTag label="Tools" text={caminoData.tags.tools} />
                <CaseStudyTag label="Duration" text={caminoData.tags.duration} />
              </div>
            </div>
          </div>
        </div>

        <div className={caseStudy.goalsWrapper}>
          <div className={cn('flexGrid', layoutStyles.contentWrapper)}>
            <div className={cn('col--md-1')}></div>
            <div className={cn('col--md-8')}>
              <h2>Goal</h2>
              <p>
                Design a mobile app that connects people with the right
                therapist — reducing the friction of an outdated process
                without losing the sensitivity the subject demands.
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
            <h3>Competitor analysis</h3>
            <h3>User Interviews</h3>
          </div>
        </CaseStudyBlockHeader>

        {/* Research */}
        <div className={caseStudy.segment}>
          <h3 className={caseStudy.segmentTitle}>Competitor analysis</h3>
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
                The idea came from a personal conversation. Before going
                anywhere near a screen, I mapped the existing landscape — local
                providers and international apps — to understand how the space
                was being served, and where the real gaps were.
              </p>
            </div>
            <div className={cn('col--md-2')}></div>
          </div>
          <div
            className={cn(caseStudy.segmentImage, layoutStyles.contentWrapper)}
          >
            <Image {...caminoData.images.researchRampUp} />
          </div>
        </div>

        {/* Interviews */}
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

              <h4 className={caseStudy.listTitle}>Needs</h4>
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

              <h4 className={caseStudy.listTitle}>Frustrations</h4>
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

              <h4 className={caseStudy.listTitle}>Motivations</h4>
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
            <h3>Persona</h3>
            <h3>Sitemap</h3>
            <h3>Wireframes</h3>
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
            className={cn(caseStudy.segmentImage, layoutStyles.contentWrapper)}
          >
            <Image {...caminoData.images.persona} />
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
            className={cn(caseStudy.segmentImage, layoutStyles.contentWrapper)}
          >
            <Image {...caminoData.images.sitemap} />
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
            <div className={layoutStyles.contentWrapper}>
              <Image {...caminoData.images.wireframes} />
            </div>
          </div>
        </div>
      </DefineSection>

      {/* Design */}
      <DesignSection>
        <CaseStudyBlockHeader title="Design">
          <h3>Mood Board & Logo</h3>
          <h3>Style Tile</h3>
          <h3>UI Design</h3>
        </CaseStudyBlockHeader>

        {/* Mood Board & Style Tile */}
        <div className={caseStudy.segment}>
          <h3 className={caseStudy.segmentTitle}>Moodboard & Logo</h3>
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
            className={cn(caseStudy.segmentImage, layoutStyles.contentWrapper)}
          >
            <Image {...caminoData.images.moodBoard} />
          </div>
          <div
            className={cn(caseStudy.segmentImage, layoutStyles.contentWrapper)}
          >
            <Image {...caminoData.images.logo} />
          </div>
        </div>

        <div className={caseStudy.segment}>
          <h3 className={caseStudy.segmentTitle}>Style Tile</h3>
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
                After finalizing the logo, I compiled a style tile that sets the
                visual direction for the app, including font choices, color
                palettes, and UI components.
              </p>
            </div>
            <div className={cn('col--md-2')}></div>
          </div>
          <div
            className={cn(caseStudy.segmentImage, layoutStyles.contentWrapper)}
          >
            <Image {...caminoData.images.styleTile} />
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
                The final screens prioritize clarity and calm. The subject
                matter required a design that felt safe to use — not clinical,
                not transactional.
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
                {caminoData.carousel!.map((img, i) => (
                  <SwiperSlide key={i}>
                    <Image {...img} preload />
                  </SwiperSlide>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </DesignSection>

      {/* Testing */}
      <TestingSection>
        <CaseStudyBlockHeader title="Testing">
          <h3>Unmoderated User Testing</h3>
        </CaseStudyBlockHeader>

        {/* Testing */}
        <div className={caseStudy.segment}>
          <h3 className={caseStudy.segmentTitle}>Unmoderated User Testing</h3>
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
                text={caminoData.prototypeLink.text}
                href={caminoData.prototypeLink.href}
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
                  Sixteen participants is a solid number for an unmoderated
                  test, and the results gave clear direction. The "Get Matched"
                  flow worked better than expected. The copy needed the most
                  work — "Your way to a better self" reads as judgmental to
                  enough people that it matters.
                </p>
                <p>
                  Next steps: more interviews with users and therapists to
                  pressure-test the matching flow, and a dark mode — which came
                  up unprompted from a participant and is clearly worth
                  exploring.
                </p>
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
Camino.theme = 'white';

export default Camino;
