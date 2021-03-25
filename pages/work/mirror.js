import cn from 'classnames';
import {
  BasePage,
  CustomImage,
  CaseStudyTag,
  CaseStudyBlockHeader,
  LinkButton,
} from 'components';

import ComeInAnimation from 'animation/comeIn';

// Styles
import commonStyles from 'styles/common.module.scss';
import pageStyles from 'styles/page.module.scss';
import caseStudy from 'styles/components/caseStudy.module.scss';

export default function Mirror() {
  return (
    <BasePage title="Mirror e-commerce platform">
      <div className={caseStudy.wrapper}>
        <section className={pageStyles.section}>
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
              <div className={cn('col--md-11', caseStudy.title)}>
                <h1>Mirror</h1>
                <small>Course Project - Website</small>
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
                    During the first phase at the Designlab’s UX Academy, I
                    worked on the <strong>branding</strong> and{' '}
                    <strong>design</strong> of a responsive website for a
                    clothing store, with the goal to expand their online
                    presence.
                  </p>
                  <p>
                    I learnt a lot, since I had to dig deep into clothing
                    e-commerce, conduct customer interviews, create wireframes
                    and UI designs, as well as prototype, test and refine the
                    final iteration.
                  </p>
                </div>
                <div className={cn('col--md-2')}></div>
                <div className={cn(caseStudy.tagsWrapper, 'col--md-4')}>
                  <CaseStudyTag label="Role" text="UX / UI Design" />
                  <CaseStudyTag
                    label="Skills"
                    text="Research, Information Architecture, Interaction Design & UI Design, Prototype, Testing"
                  />
                  <CaseStudyTag label="Duration" text="3 Months" />
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
        </section>

        {/* Understand */}
        <section className={pageStyles.section}>
          <CaseStudyBlockHeader title="Understand">
            <div className={caseStudy.indexGroup}>
              <h3>Secondary research</h3>
              <ul>
                <li>History of e-commerce</li>
                <li>Competitor analysis</li>
                <li>Market and trends report</li>
              </ul>
            </div>
            <div className={caseStudy.indexGroup}>
              <h3>Primary research</h3>
              <ul>
                <li>User interviews</li>
                <li>Observation</li>
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
                  reading about the
                  <strong>history and background of e-commerce</strong> to
                  better understand the scope of the project, conducting{' '}
                  <strong>competitor analysis</strong> to understand the current
                  situation, as well as to acknowledge what makes online
                  shoppers prefer online shopping.
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
              <CustomImage
                src={'/images/mirror/competitor-analysis.jpg'}
                alt="Mirror Competitor Analysis"
                width={2564}
                height={708}
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
                  I went on to <strong>interview three users</strong> to
                  understand their experiences of what they found pleasant and
                  frustrating in order to translate that later on in the design.
                  The following are the findings.
                </p>
                <ul>
                  <li>
                    <strong>Size</strong> finding is tricky, this needs to be
                    clearly defined on the page
                  </li>
                  <li>
                    Related to the first point, <strong>returns</strong> tend to
                    be considered a hassle
                  </li>
                  <li>
                    There are too many <strong>choices</strong>, hence quality
                    over quantity is preferred
                  </li>
                  <li>
                    The physical <strong>stores</strong> experience is still
                    very present in the consumer’s needs
                  </li>
                  <li>
                    Payment <strong>security</strong> can still be a concern
                  </li>
                  <li>
                    <strong>Reviews</strong> are an important source of trust
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
                <li>Task and User Flow</li>
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
                  The <strong>Persona creation</strong> helped me to summarize
                  the users’ needs, frustrations and motivations.
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
              <CustomImage
                src={'/images/mirror/persona.jpg'}
                alt="Mirror Persona"
                width={2566}
                height={1682}
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
                  The <strong>Sitemap</strong> was key to understand what the
                  main structure of the page will be. The page had to have three
                  main categories: Women, Men and Kids. Then the Checkout Funnel
                  as a main point for the next steps.
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
              <CustomImage
                src={'/images/mirror/sitemap.png'}
                alt="Mirror Sitemap"
                width={2560}
                height={1110}
                link={+true}
              />
            </div>
          </div>

          {/* User Flow */}
          <div className={caseStudy.segment}>
            <h3 className={caseStudy.segmentTitle}>User Flow</h3>

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
                  The <strong>User Flow</strong> helped me to visualize what the
                  happy path of a product purchase would be, from the user
                  landing on the home page to the confirmation page, passing
                  through the checkout funnel.
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
              <div className={cn('flexGrid', commonStyles.contentWrapper)}>
                <div className={cn('col--md-1')}></div>
                <div className={cn('col--md-10')}>
                  <CustomImage
                    src={'/images/mirror/user-flow.png'}
                    alt="Mirror User Flow"
                    width={1694}
                    height={2722}
                    link={+true}
                  />
                </div>
                <div className={cn('col--md-1')}></div>
              </div>
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
                  With the help of the previous steps, I went on to create both
                  desktop and responsive <strong>wireframes</strong>, to start
                  transitioning into the first idea of what the design could
                  look like. It follows a minimal approach, showcasing different
                  outfits for three main categories: Women, Men and Kids.
                </p>
              </div>
              <div className={cn('col--md-2')}></div>
            </div>
            <div className={caseStudy.highlightBackground}>
              <div className={commonStyles.contentWrapper}>
                <CustomImage
                  src={'/images/mirror/wireframes.png'}
                  alt="Mirror Sitemap"
                  width={2630}
                  height={1897}
                  link={+true}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Design */}
        <section className={pageStyles.section}>
          <CaseStudyBlockHeader title="Design">
            <h3>Style Tile</h3>
            <h3>User Interface</h3>
          </CaseStudyBlockHeader>

          {/* Style Tile */}
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
                  With the idea of a clean and understandable user interface,
                  and after a mood board brainstorming session, I created the
                  <strong>Style Tile</strong> to set the upcoming visual design
                  of the website.
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
              <CustomImage
                src={'/images/mirror/style-tile.jpg'}
                alt="Mirror Style Tile"
                width={2562}
                height={4228}
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
                  With all the previous elements in mind, I came up with the
                  following <strong>hi-fi designs</strong>, paying special
                  attention to the whitespace and the simplicity.
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
              <div className={cn('flexGrid', commonStyles.contentWrapper)}>
                <div className={cn('col--md-1')}></div>
                <div className={cn('col--md-10')}>
                  <CustomImage
                    src={'/images/mirror/homepage.jpg'}
                    alt="Mirror Homepage"
                    width={2130}
                    height={2870}
                    shadow={+true}
                    link={+true}
                  />
                </div>
                <div className={cn('col--md-1')}></div>
              </div>
            </div>
            <div
              className={cn(
                caseStudy.highlightBackground,
                caseStudy.highlightBackgroundPink
              )}
            >
              <div className={cn('flexGrid', commonStyles.contentWrapper)}>
                <div className={cn('col--md-6')}>
                  <CustomImage
                    src={'/images/mirror/product.jpg'}
                    alt="Mirror Product Page"
                    width={1259}
                    height={1696}
                    shadow={+true}
                    link={+true}
                  />
                </div>
                <div className={cn('col--md-6', caseStudy.imagePaddingTop)}>
                  <CustomImage
                    src={'/images/mirror/catalog.jpg'}
                    alt="Mirror Catalog Page"
                    width={1259}
                    height={1696}
                    shadow={+true}
                    link={+true}
                  />
                </div>
              </div>
            </div>
            <div
              className={cn(
                caseStudy.highlightBackground,
                caseStudy.highlightBackgroundBlue
              )}
            >
              <div
                className={cn(
                  'flexGrid',
                  commonStyles.contentWrapper,
                  caseStudy.segmentIntro
                )}
              >
                <div className={cn('col--md-1')}></div>
                <div className={cn('col--md-10')}>
                  <CustomImage
                    src={'/images/mirror/checkout-funnel1.jpg'}
                    alt="Mirror Checkout Funnel"
                    width={2130}
                    height={1554}
                    shadow={+true}
                    link={+true}
                  />
                </div>
                <div className={cn('col--md-1')}></div>
              </div>
              <div className={cn('flexGrid', commonStyles.contentWrapper)}>
                <div className={cn('col--md-1')}></div>
                <div className={cn('col--md-10', caseStudy.imagePaddingTop)}>
                  <CustomImage
                    src={'/images/mirror/checkout-funnel2.jpg'}
                    alt="Mirror Checkout Funnel"
                    width={2128}
                    height={1443}
                    shadow={+true}
                    link={+true}
                  />
                </div>
                <div className={cn('col--md-1')}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Testing */}
        <section className={pageStyles.section}>
          <CaseStudyBlockHeader title="Testing">
            <h3>Usability tests</h3>
          </CaseStudyBlockHeader>

          {/* Testing */}
          <div className={caseStudy.segment}>
            <h3 className={caseStudy.segmentTitle}>Usability Tests</h3>
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
                  With a total of three participants, I conducted usability
                  tests over different scenarios, to see how they interact with
                  the UI, while talking out loud over their impressions,
                  triggered by questions related to the tasks and the different
                  pages.
                </p>
                <p>
                  These tests were key to discover and realize visual glitches
                  that otherwise I would have not discovered myself.
                </p>
                <LinkButton
                  target="_blank"
                  text="See prototype"
                  href="https://www.figma.com/proto/MQyBcPvmLnTTTkjfj5DjUA/Mirror-Definitive-Prototype?node-id=1%3A2&viewport=360%2C224%2C0.08567900955677032&scaling=min-zoom"
                />
              </div>
              <div className={cn('col--md-2')}></div>
            </div>
          </div>
        </section>
        <section className={cn(pageStyles.section, pageStyles.noPadding)}>
          <div className={caseStudy.wrappingUp}>
            <div className={commonStyles.contentWrapper}>
              <div className={cn('flexGrid', commonStyles.contentWrapper)}>
                <div className={cn('col--md-2')}></div>
                <div className={cn('col--md-8')}>
                  <h3>Takeaways</h3>
                  <p>
                    While working on this project I had a great time practising
                    my UI design skills. I also learned a bunch of new concepts
                    and the whole UX design process from start to finish.
                    Finally, I was reassured that user testing and iteration
                    will always deliver constructive and useful results.
                  </p>
                  <p>Thanks a lot for reading!</p>
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
