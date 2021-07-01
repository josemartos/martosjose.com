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

// Images
import HeroImage from 'public/images/mirror/hero.jpg';
import CompetitorAnalysisImage from 'public/images/mirror/competitor-analysis.jpg';
import PersonaImage from 'public/images/mirror/persona.jpg';
import SitemapImage from 'public/images/mirror/sitemap.png';
import UserFlowsImage from 'public/images/mirror/user-flow.png';
import WireframesImage from 'public/images/mirror/wireframes.png';
import StyleTileImage from 'public/images/mirror/style-tile.jpg';
import HomepageImage from 'public/images/mirror/homepage.jpg';
import ProductPageImage from 'public/images/mirror/product-page.jpg';
import CatalogPageImage from 'public/images/mirror/catalog-page.jpg';
import CheckoutFunnel1Image from 'public/images/mirror/checkout-funnel1.jpg';
import CheckoutFunnel2Image from 'public/images/mirror/checkout-funnel2.jpg';

export default function Mirror() {
  return (
    <BasePage title="Mirror | e-commerce platform">
      <div className={caseStudy.wrapper}>
        <section className={pageStyles.section}>
          <header className={caseStudy.hero}>
            <ComeInAnimation>
              <Image
                src={HeroImage}
                alt="Mirror Website Mockups"
                width={1283}
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
                <h1>Mirror</h1>
                <small>Course Project - Website - Feb 2021</small>
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
                    and UI design, as well as prototype, test and refine the
                    final iteration.
                  </p>
                </div>
                <div className={cn('col--md-2')}></div>
                <div className={cn(caseStudy.tagsWrapper, 'col--md-4')}>
                  <CaseStudyTag label="Role" text="UX / UI Designer" />
                  <CaseStudyTag
                    label="Skills"
                    text="Research, Information Architecture, Interaction & UI Design, Prototype, Testing"
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
              <Image
                src={CompetitorAnalysisImage}
                url="/mirror/competitor-analysis.jpg"
                alt="Mirror Competitor Analysis"
                width={1282}
                height={354}
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
              <Image
                src={PersonaImage}
                url="/mirror/persona.jpg"
                alt="Mirror Persona"
                width={1283}
                height={841}
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
              <Image
                src={SitemapImage}
                url="/mirror/sitemap.png"
                alt="Mirror Sitemap"
                width={1280}
                height={555}
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
                <div className={cn('col--md-2')}></div>
                <div className={cn('col--md-8')}>
                  <Image
                    src={UserFlowsImage}
                    url="/mirror/user-flow.png"
                    alt="Mirror User Flow"
                    width={847}
                    height={1361}
                    link={+true}
                  />
                </div>
                <div className={cn('col--md-2')}></div>
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
                <Image
                  src={WireframesImage}
                  url="/mirror/wireframes.png"
                  alt="Mirror Wireframes"
                  width={1315}
                  height={948}
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
              <li>Style Tile</li>
            </ul>
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
                  and after a mood board brainstorming session, I created the{' '}
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
              <Image
                src={StyleTileImage}
                url="/mirror/style-tile.jpg"
                alt="Mirror Style Tile"
                width={1281}
                height={2114}
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
                  <div className={caseStudy.imageExplanation}>
                    <p>
                      On the <strong>Homepage</strong> it was important to
                      highlight outfits, as well as to showcase promotions and
                      trends in a simple manner, with carousels.
                    </p>
                  </div>
                  <Image
                    src={HomepageImage}
                    url="/mirror/homepage.jpg"
                    alt="Mirror Homepage"
                    width={1065}
                    height={1435}
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
                  <div className={caseStudy.imageExplanation}>
                    <p>
                      On the <strong>Product Page</strong> it was important that
                      the user could find straight away all the information at
                      first glance.
                    </p>
                  </div>

                  <Image
                    src={ProductPageImage}
                    url="/mirror/product-page.jpg"
                    alt="Mirror Product Page"
                    width={630}
                    height={848}
                    shadow={+true}
                    link={+true}
                  />
                </div>
                <div className={cn('col--md-6', caseStudy.imagePaddingTop)}>
                  <div className={caseStudy.imageExplanation}>
                    <p>
                      On the <strong>Catalog Page</strong> I paid special
                      attention to emphasize on the filters and their ease of
                      use.
                    </p>
                  </div>
                  <Image
                    src={CatalogPageImage}
                    url="/mirror/catalog-page.jpg"
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
                  <div className={caseStudy.imageExplanation}>
                    <p>
                      It was key on the <strong>Checkout Funnel</strong> to find
                      simple and clean interfaces, adding no more information
                      than needed.
                    </p>
                  </div>
                  <Image
                    src={CheckoutFunnel1Image}
                    url="/checkout-funnel1.jpg"
                    alt="Mirror Checkout Funnel"
                    width={1065}
                    height={777}
                    shadow={+true}
                    link={+true}
                  />
                </div>
                <div className={cn('col--md-1')}></div>
              </div>
              <div className={cn('flexGrid', commonStyles.contentWrapper)}>
                <div className={cn('col--md-1')}></div>
                <div className={cn('col--md-10', caseStudy.imagePaddingTop)}>
                  <Image
                    src={CheckoutFunnel2Image}
                    url="/checkout-funnel2.jpg"
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

        {/* Wrap up */}
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
