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

export default function BiciBavarese() {
  return (
    <BasePage title="Bici Bavarese | Bike Shop">
      <div className={caseStudy.wrapper}>
        <section className={pageStyles.section}>
          <header className={caseStudy.hero}>
            <ComeInAnimation>
              <Image
                src={'/images/bicibavarese/hero.jpg'}
                alt="Bici Bavarese Website Mockups"
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
                <h1>Bici Bavarese</h1>
                <small>Capstone - Website redesign</small>
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
                    For the first capstone project at Designlab’s UX Academy, I
                    worked on the <strong>redesign</strong> of a local bike shop
                    based in Munich.
                  </p>
                  <p>
                    I took my skills to the next level, the creation process was
                    smoother, and I learnt a bunch about the bike scene here in
                    the city. I did some research and user interviews to
                    understand their needs, but I put special emphasis in
                    understanding the current product, to focus on wireframing
                    in order to create a beautiful redesign that speaks for the
                    bike shop's message.
                  </p>
                </div>
                <div className={cn('col--md-2')}></div>
                <div className={cn(caseStudy.tagsWrapper, 'col--md-4')}>
                  <CaseStudyTag label="Role" text="UX / UI Design" />
                  <CaseStudyTag
                    label="Skills"
                    text="Research, Interaction & UI Design, Prototype, Testing"
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
                  Research the current local market, as well as the bike
                  industry in general. Bici Bavarese is focused on selling bikes
                  and reparations, but it's also an important entity when it
                  comes to old timer racing bikes; they organise a yearly event
                  to gather bike fans and enjoy the nearby stunning nature.
                </p>
                <p>
                  My goal was to redesign their website keeping their essense,
                  colour palette and other assets. A design that is eye catching
                  and shows the sense of community. The main goal was to design
                  three main pages: homepage, event page and their own bike
                  page.
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
                commonStyles.contentWrapper,
                caseStudy.segmentIntro
              )}
            >
              <div className={cn('col--md-2')}></div>
              <div className={cn('col--md-8')}>
                <p>
                  I started doing secondary <strong>research</strong>, by
                  reading about <strong>bike shops</strong> in general, to
                  better understand the scope of the project, as well as
                  conducting <strong>competitor analysis</strong> to understand
                  the current situation locally.
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
                src={'/images/bicibavarese/research-ramp-up.png'}
                alt="Bici Bavarese Research Ramp-up"
                width={2800}
                height={1584}
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
                commonStyles.contentWrapper,
                caseStudy.segmentIntro
              )}
            >
              <div className={cn('col--md-2')}></div>
              <div className={cn('col--md-8')}>
                <p>
                  I <strong>interviewed three users</strong> to understand what
                  are their experiences with bike shops and their online
                  presence, as well as their relation with their bikes. The
                  following are the findings.
                </p>
                <ul>
                  <li>
                    Transparent pricing information of the products and
                    services.
                  </li>
                  <li>Check the bike physically is important.</li>
                  <li>To easy make appointments online is a nice have.</li>
                  <li>
                    The possibility to connect with other fellow riders is a
                    welcomed idea.
                  </li>
                  <li>
                    Navigation to be straightforward is key. Well organised
                    filters is key on catalogue pages.
                  </li>
                  <li>An outdated design feels untrusty.</li>
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
