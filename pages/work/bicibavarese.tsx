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
  LinkButton,
} from 'components';

import ComeInAnimation from 'animation/comeIn';
import { CaseStudyProvider } from 'context/caseStudyContext';
import { biciBavareseData } from 'lib/caseStudyData';
import { Title } from 'components/Title';

// Styles
import layoutStyles from 'styles/modules/layout.module.scss';
import caseStudy from 'styles/modules/caseStudy.module.scss';

type CaseStudyPage = NextPage & {
  provider?: typeof CaseStudyProvider;
  theme?: string;
};

const BiciBavarese: CaseStudyPage = () => {
  return (
    <>
      <Title title="Bici Bavarese – Case Study" />
      <CaseStudyWrapper title={biciBavareseData.title}>
      <section className={layoutStyles.section}>
        <header className={caseStudy.hero}>
          <ComeInAnimation>
            <Image {...biciBavareseData.hero} />
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
              <h1>Bici Bavarese</h1>
              <small>Website Redesign - May 2021</small>
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
                  Bici Bavarese is a Munich bike shop with a split identity:
                  part retailer, part community hub. Their existing site didn't
                  reflect either. As a project during Designlab's UX Academy, I
                  took on the full redesign — from competitive research and user
                  interviews through to final UI — keeping the brand's character
                  intact while giving it a visual language that matched what the
                  shop actually is.
                </p>
                <p>
                  (Disclaimer: I used their existing logo, text, and some images
                  from their website, Instagram, and Flickr profiles.)
                </p>
              </div>
              <div className={cn('col--md-2')}></div>
              <div className={cn(caseStudy.tagsWrapper, 'col--md-4')}>
                <CaseStudyTag label="Role" text={biciBavareseData.tags.role} />
                <CaseStudyTag label="Skills" text={biciBavareseData.tags.skills} />
                <CaseStudyTag label="Tools" text={biciBavareseData.tags.tools} />
                <CaseStudyTag label="Duration" text={biciBavareseData.tags.duration} />
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
                The shop sells bikes, repairs bikes, and runs the Giro
                Bavarese — an annual old-timer racing event that draws riders
                from across the region. The redesign had to serve all of that
                without losing the character that makes the shop what it is.
              </p>
              <p>
                Constraints were tight: one month, working with their existing
                logo and brand assets, focused on key pages. The goal was a
                site that felt as alive as the shop does.
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
            <h3>Competitor Analysis</h3>
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
                I started with secondary research to understand the Munich bike
                market, then ran a competitor analysis to see how similar shops
                positioned themselves online.
              </p>
            </div>
            <div className={cn('col--md-2')}></div>
          </div>
          <div
            className={cn(caseStudy.segmentImage, layoutStyles.contentWrapper)}
          >
            <Image {...biciBavareseData.images.researchRampUp} />
          </div>
        </div>

        {/* User Interviews */}
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
                I <strong>interviewed three users</strong> to gather insights
                into their experiences with bike shops, both physical and
                online, and their relationship with their bikes. Below are the
                key findings:
              </p>
              <ul>
                <li>Clear pricing information is essential.</li>
                <li>Physically inspecting the bike is crucial.</li>
                <li>
                  Online appointment scheduling is a nice-to-have feature.
                </li>
                <li>
                  The ability to connect with other riders is a welcome idea.
                </li>
                <li>
                  Straightforward navigation and well-organized filters on
                  catalog pages are vital.
                </li>
                <li>An outdated design creates distrust.</li>
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
            <h3>User Flows</h3>
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
                Using insights from the interviews, I built a persona to
                capture the main user needs, frustrations, and motivations.
              </p>
            </div>
            <div className={cn('col--md-2')}></div>
          </div>
          <div
            className={cn(caseStudy.segmentImage, layoutStyles.contentWrapper)}
          >
            <Image {...biciBavareseData.images.persona} />
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
                The <strong>Sitemap</strong> helped me visualize the core
                structure of the website, considering the{' '}
                <a
                  target="_blank"
                  href="https://bicibavarese.de/"
                  rel="noreferrer"
                >
                  current website
                </a>
                .
              </p>
            </div>
            <div className={cn('col--md-2')}></div>
          </div>
          <div className={cn('flexGrid', layoutStyles.contentWrapper)}>
            <div className={cn('col--md-1')}></div>
            <div className={cn('col--md-10')}>
              <div
                className={cn(
                  caseStudy.segmentImage,
                  layoutStyles.contentWrapper,
                )}
              >
                <Image {...biciBavareseData.images.sitemap} />
              </div>
            </div>
            <div className={cn('col--md-1')}></div>
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
                These <strong>key user flows</strong> illustrate the connection
                between the online experience and the physical bike shop.
              </p>
            </div>
            <div className={cn('col--md-2')}></div>
          </div>
          <div
            className={cn(caseStudy.segmentImage, layoutStyles.contentWrapper)}
          >
            <Image {...biciBavareseData.images.userFlows} />
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
                Three key pages, each with a different job: the{' '}
                <strong>Homepage</strong> to communicate the shop's identity at
                a glance, the <strong>Giro Bavarese</strong> event page to
                bring the annual ride to life, and{' '}
                <strong>Our Bike</strong> to showcase their custom-built bikes
                in detail.
              </p>
            </div>
            <div className={cn('col--md-2')}></div>
          </div>
          <div className={caseStudy.highlightBackground}>
            <div className={layoutStyles.contentWrapper}>
              <Image {...biciBavareseData.images.wireframes} />
            </div>
          </div>
        </div>
      </DefineSection>

      {/* Design */}
      <DesignSection>
        <CaseStudyBlockHeader title="Design">
          <h3>Brand</h3>
          <h3>UI Design</h3>
        </CaseStudyBlockHeader>

        {/* Mood Board & Style Tile */}
        <div className={caseStudy.segment}>
          <h3 className={caseStudy.segmentTitle}>Brand</h3>
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
                I developed the brand concept by creating a{' '}
                <strong>mood board</strong> and a <strong>style tile</strong>,
                laying the groundwork for the visual design.
              </p>
            </div>
            <div className={cn('col--md-2')}></div>
          </div>
          <div
            className={cn(caseStudy.segmentImage, layoutStyles.contentWrapper)}
          >
            <Image {...biciBavareseData.images.moodBoard} />
          </div>
          <div
            className={cn(caseStudy.segmentImage, layoutStyles.contentWrapper)}
          >
            <Image {...biciBavareseData.images.styleTile} />
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
                The final designs grew from the research — each page shaped by
                what users said they needed and what the shop needed to
                communicate.
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
            <div className={cn('flexGrid', layoutStyles.contentWrapper)}>
              <div className={cn('col--md-1')}></div>
              <div className={cn('col--md-10')}>
                <div className={caseStudy.imageExplanation}>
                  <p>
                    On the <strong>Homepage</strong>, I prioritized showcasing
                    the shop's community spirit. It was important to highlight
                    the various services Bici Bavarese offers, from bike sales
                    and repairs to events and customer satisfaction.
                  </p>
                </div>
                <Image {...biciBavareseData.images.homepage} />
              </div>
              <div className={cn('col--md-1')}></div>
            </div>
          </div>
          <div
            className={cn(
              caseStudy.highlightBackground,
              caseStudy.highlightBackgroundPink,
            )}
          >
            <div className={cn('flexGrid', layoutStyles.contentWrapper)}>
              <div className={cn('col--md-1')}></div>
              <div className={cn('col--md-10')}>
                <div className={caseStudy.imageExplanation}>
                  <p>
                    On the <strong>Giro Bavarese</strong> page, I focused on
                    organizing information clearly with dropdown menus and using
                    video to immerse users in the event experience.
                  </p>
                </div>
                <Image {...biciBavareseData.images.giroBavarese} />
              </div>
              <div className={cn('col--md-1')}></div>
            </div>
          </div>
          <div
            className={cn(
              caseStudy.highlightBackground,
              caseStudy.highlightBackgroundBlue,
            )}
          >
            <div className={cn('flexGrid', layoutStyles.contentWrapper)}>
              <div className={cn('col--md-1')}></div>
              <div className={cn('col--md-10')}>
                <div className={caseStudy.imageExplanation}>
                  <p>
                    The <strong>Our Bike</strong> page focuses on showcasing the
                    custom bike and its various parts and configurations.
                  </p>
                </div>
                <Image {...biciBavareseData.images.ourBike} />
              </div>
              <div className={cn('col--md-1')}></div>
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
                I conducted user tests with three participants to understand how
                they interacted with the interface, what they took away from
                different sections, and their overall impressions.
              </p>
              <p>
                These tests were crucial for iterating on the design, leading to
                changes such as introducing a "customizable bike" feature and
                making the homepage more engaging.
              </p>
              <p>
                The prototype is only semi-functional, allowing navigation
                between the Homepage, Our Bike page (Unser Rad), and the Event
                page (Giro Bavarese). This represents the first version of the
                UI design.
              </p>
              <LinkButton
                target="_blank"
                text={biciBavareseData.prototypeLink.text}
                href={biciBavareseData.prototypeLink.href}
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
                  You can get surprisingly far with secondary research and three
                  user interviews — if you ask the right questions. The
                  interviews shaped real decisions: the "customise your bike"
                  feature came directly from what participants said, and the
                  homepage evolved based on their first impressions.
                </p>
                <p>
                  The gap I couldn't close: I never spoke to actual Bici
                  Bavarese customers or the shop owners. That context would
                  have changed some choices — a reminder that research quality
                  matters as much as research quantity.
                </p>
              </div>
              <div className={cn('col--md-2')}></div>
            </div>
          </div>
        </div>
      </section>
    </CaseStudyWrapper>
    </>
  );
};

BiciBavarese.provider = CaseStudyProvider;
BiciBavarese.theme = 'white';

export default BiciBavarese;
