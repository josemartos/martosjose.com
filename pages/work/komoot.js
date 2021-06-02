import cn from 'classnames';
import {
  BasePage,
  Image,
  CaseStudyTag,
  CaseStudyBlockHeader,
  LinkButton,
} from 'components';

import ComeInAnimation from 'animation/comeIn';

// Styles
import commonStyles from 'styles/common.module.scss';
import pageStyles from 'styles/page.module.scss';
import caseStudy from 'styles/components/caseStudy.module.scss';

export default function Komoot() {
  return (
    <BasePage title="Komoot | Outdoor activities app">
      <div className={caseStudy.wrapper}>
        <section className={pageStyles.section}>
          <header className={caseStudy.hero}>
            <ComeInAnimation>
              <Image
                src={'/images/komoot/hero.jpg'}
                alt="Komoot App Mockups"
                width={2566}
                height={1440}
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
                <h1>Komoot</h1>
                <small>Capstone - Social feature</small>
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
                    Being an avid hiker myself, I decided to design for one of
                    the apps I use myself: Komoot. Hence, for the second
                    capstone project at Designlab’s UX Academy, I worked on{' '}
                    <strong>expanding the social capabilities</strong> of the
                    app. I could dig deep into the app, its current
                    functionalities, and parts where could be improved. I did
                    market research, sent out some surveys to know more from the
                    users, as well as tested and prototyped the idea, always
                    respecting the current style guide and general guidelines.
                  </p>
                </div>
                <div className={cn('col--md-2')}></div>
                <div className={cn(caseStudy.tagsWrapper, 'col--md-4')}>
                  <CaseStudyTag label="Role" text="UX / UI Design" />
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
                <h2>Goals</h2>
                <p>
                  Komoot is a well-known outdoor activities app, and the goal of
                  this project was to <strong>add a new feature</strong>,
                  keeping consistency with the current design and
                  implementation: from colours and typography, to imagery,
                  icons, etc.
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
                  competitors, the app itself, so I did some secondary research
                  to gather insights and make my mind what to ask later in the
                  survey as well.
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
                src={'/images/komoot/research-ramp-up.png'}
                alt="Komoot Research Ramp-up"
                width={2566}
                height={1452}
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
                  participants, in order to acknowledge the current usage, and
                  if they would be interested in socialising more within the
                  app. I tried to reach the company to get some users, but had
                  no luck, so the Survey was general, targeting more apps of the
                  like, which could give a broader spectrum of responses.
                </p>
                <p className={caseStudy.listTitle}>
                  Here's the user <strong>needs</strong>:
                </p>
                <ul>
                  <li>
                    Stay active (Hiking, running, and trail running being the
                    most practised).
                  </li>
                  <li>Clear navigation and stats</li>
                  <li>User-uploaded photos</li>
                  <li>Trail condition and weather updates</li>
                  <li>Track workouts and activities</li>
                </ul>

                <p className={caseStudy.listTitle}>
                  Followed by <strong>frustrations</strong>:
                </p>
                <ul>
                  <li>Limited options to socialize</li>
                  <li>Difficult to follow alternate paths</li>
                </ul>

                <p className={caseStudy.listTitle}>
                  Below is the main <strong>motivation</strong>:
                </p>
                <ul>
                  <li>
                    Some found limited options to socialize, and most of the
                    participants would be willing to socialize more (e.g. join /
                    organise meetups, challenge friends)
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
                  Using the information gathered during the User Survey, I
                  created a <strong>Persona</strong> to summarize the their
                  wants, needs and frustrations. Lukas Berger, a newcomer to the
                  city of Innsbruck was the perfect example to be willing to
                  socialize by doing what he enjoys the most: being outside in
                  the nature.
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
                src={'/images/komoot/persona.png'}
                alt="Komoot Persona"
                width={2566}
                height={1710}
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
                  The <strong>Sitemap</strong> helped me to see which features
                  and screens the current app has, as well as the new screens
                  that need to be designed.
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
                src={'/images/komoot/sitemap.png'}
                alt="Komoot Sitemap"
                width={2566}
                height={2706}
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
                  These <strong>key user flows</strong> show the main user happy
                  paths for the new feature: join and organise an event, as well
                  as the "nice to have" messaging feature. Highly important to
                  figure out if there's anything I missed and needs to be
                  considered (e.g. onboarding for the prototype or sharing an
                  event after creating it).
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
                src={'/images/komoot/user-flows.png'}
                alt="Komoot Key User Flows"
                width={2566}
                height={1284}
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
                  The following wireframes show the screens of the new feature,
                  and the ones that have any element related to the new feature.
                  I focused on the main two flows: join and organise an event.
                  It's inspired in all the design elements of the current app
                  for a smooth mix.
                </p>
              </div>
              <div className={cn('col--md-2')}></div>
            </div>
            {/* <div className={caseStudy.highlightBackground}>
              <div className={commonStyles.contentWrapper}>
                <Image
                  src={'/images/komoot/wireframes.png'}
                  alt="Komoot Wireframes"
                  width={2622}
                  height={1896}
                  link={+true}
                />
              </div>
            </div> */}
          </div>
        </section>
      </div>
    </BasePage>
  );
}
