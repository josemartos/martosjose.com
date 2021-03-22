import cn from 'classnames';
import {
  BasePage,
  CustomImage,
  CaseStudyTag,
  CaseStudyBlockHeader,
} from 'components';

import ComeInAnimation from 'animation/comeIn';

// Styles
import commonStyles from 'styles/common.module.scss';
import pageStyles from 'styles/page.module.scss';
import caseStudy from 'styles/components/caseStudy.module.scss';

export default function Mirror() {
  return (
    <BasePage title="Mirror e-commerce platform">
      <section className={pageStyles.section}>
        <div className={caseStudy.wrapper}>
          <header className={caseStudy.hero}>
            <ComeInAnimation>
              <CustomImage
                src={'/images/mirror/hero.jpg'}
                alt="Mirror Website Mockups"
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
              <div className={cn('col--md-11')}>
                <h1 className={caseStudy.title}>Mirror</h1>
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
                    During the first phase at the Designlab’s UX Academy, I had
                    to work on the <strong>branding</strong> and{' '}
                    <strong>design</strong> of a responsive website for a
                    clothing store, with the goal to expand their online
                    presence.
                  </p>
                  <p>
                    I learnt a lot, since I had to dig deeper into clothing
                    e-commerce, conduct customer interviews, create wireframes
                    and UI designs, as well as prototype, test and refine the
                    final iteration.
                  </p>
                </div>
                <div className={cn('col--md-2')}></div>
                <div className={cn(caseStudy.tagsWrapper, 'col--md-4')}>
                  <CaseStudyTag label="Type" text="Course Project - Website" />
                  <CaseStudyTag label="Role" text="UX / UI Design" />
                  <CaseStudyTag label="Duration" text="3 Months" />
                </div>
              </div>
            </div>
          </div>
          <div className={caseStudy.goalsWrapper}>
            <div className={caseStudy.goalsLayer}></div>
            <div className={cn('flexGrid', commonStyles.contentWrapper)}>
              <div className={cn('col--md-1')}></div>
              <div className={cn('col--md-8')}>
                <h2>Goals</h2>
                <p>
                  Design a logo for the company that is modern and neutral
                  enough to attract all types of people and styles. Create a{' '}
                  <strong>brand</strong> and a <strong>palette color</strong>.
                  Brand message: Neutral, Modern and fresh, Clean and clear.
                </p>
                <p>
                  Design a <strong>responsive e-commerce website</strong> that
                  is easy to use and allows customers to browse through all
                  products. Show products for all female, male, kids, casual,
                  business, sport, party, formal, color, size and more.
                </p>
              </div>
              <div className={cn('col--md-3')}></div>
            </div>
          </div>
        </div>
      </section>
      <section className={pageStyles.section}>
        <CaseStudyBlockHeader title="Understand">
          <h3>Secondary research</h3>
          <ul>
            <li>History of e-commerce</li>
            <li>Competitor analysis</li>
            <li>Market and trends report</li>
          </ul>
          <h3>Primary research</h3>
          <ul>
            <li>User interviews</li>
            <li>Observation</li>
          </ul>
        </CaseStudyBlockHeader>

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
                The <strong>Persona creation</strong> helped me to summarize the
                users’ needs, frustrations and motivations.
              </p>
            </div>
            <div className={cn('col--md-2')}></div>
          </div>
          <div className={commonStyles.contentWrapper}>
            <CustomImage
              src={'/images/mirror/persona.jpg'}
              alt="Mirror Persona"
              width={2566}
              height={1682}
            />
          </div>
        </div>

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
                The <strong>Sitemap</strong> was key to understand what the main
                structure of the page will be. The page had to have three main
                categories: Women, Men and Kids. Then the Checkout Funnel as a
                main point for the next steps.
              </p>
            </div>
            <div className={cn('col--md-2')}></div>
          </div>
          <div className={commonStyles.contentWrapper}>
            <CustomImage
              src={'/images/mirror/sitemap.png'}
              alt="Mirror Sitemap"
              width={2560}
              height={1110}
            />
          </div>
        </div>
      </section>
      <section className={pageStyles.section}>
        <div className={cn(caseStudy.comingSoon, commonStyles.contentWrapper)}>
          <p>
            The full info about this project is <strong>coming up soon</strong>
          </p>
        </div>
      </section>
    </BasePage>
  );
}
