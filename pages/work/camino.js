import cn from 'classnames';
import {
  BasePage,
  Image,
  CaseStudyTag,
  CaseStudyBlockHeader,
  // Carousel,
  // LinkButton,
} from 'components';

import ComeInAnimation from 'animation/comeIn';

// Styles
import commonStyles from 'styles/common.module.scss';
import pageStyles from 'styles/page.module.scss';
import caseStudy from 'styles/components/caseStudy.module.scss';

export default function Camino() {
  return (
    <BasePage title="Camino | Therapist matching App">
      <div className={caseStudy.wrapper}>
        <section className={pageStyles.section}>
          <header className={caseStudy.hero}>
            <ComeInAnimation>
              <Image
                src={'/images/camino/hero.jpg'}
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
                    in Germany is at the moment outdated and old-fashioned, in
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
                src={'/images/camino/research-ramp-up.png'}
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
      </div>
    </BasePage>
  );
}
