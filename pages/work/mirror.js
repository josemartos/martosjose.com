import cn from 'classnames';
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

// Styles
import layoutStyles from 'styles/modules/layout.module.scss';
import caseStudy from 'styles/modules/caseStudy.module.scss';

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

const Mirror = () => {
  return (
    <CaseStudyWrapper title="Mirror | e-commerce platform">
      <section className={layoutStyles.section}>
        <header className={caseStudy.hero}>
          <ComeInAnimation>
            <Image
              src={HeroImage}
              alt="Mirror Website Mockups"
              width={1283}
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
              layoutStyles.contentWrapper,
            )}
          >
            <div className={cn('col--md-1')}></div>
            <div className={cn('col--md-11', caseStudy.title)}>
              <h1>Mirror</h1>
              <small>Website Rebranding - Feb 2021</small>
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
                  As part of the initial phase at Designlab's UX Academy, I
                  worked on the <strong>branding</strong> and{' '}
                  <strong>design</strong> of a responsive website for a clothing
                  store, aimed at expanding their online presence.
                </p>
                <p>
                  I conducted research on e-commerce, including user interviews,
                  developed low- and high-fidelity wireframes, then prototyped,
                  tested, iterated, and refined the design.
                </p>
              </div>
              <div className={cn('col--md-2')}></div>
              <div className={cn(caseStudy.tagsWrapper, 'col--md-4')}>
                <CaseStudyTag label="Role" text="UX / UI Designer" />
                <CaseStudyTag
                  label="Skills"
                  text="Research, Information Architecture, Interaction & UI Design, Prototype, Testing"
                />
                <CaseStudyTag label="Tools" text="Figma, Lucidchart" />
                <CaseStudyTag label="Duration" text="3 Months" />
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
                Design a logo that is modern and neutral enough to appeal to a
                wide variety of styles. Create a <strong>brand</strong> and{' '}
                <strong>color palette</strong> with a message that is neutral,
                modern, fresh, clean, and clear.
              </p>
              <p>
                Design a <strong>responsive e-commerce website</strong> that is
                easy to navigate, allowing customers to browse a wide selection
                of products, organized by categories such as gender, style,
                color, and size.
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
              layoutStyles.contentWrapper,
              caseStudy.segmentIntro,
            )}
          >
            <div className={cn('col--md-2')}></div>
            <div className={cn('col--md-8')}>
              <p>
                I started by conducting secondary <strong>research</strong>,
                reading about the <strong>history of e-commerce</strong> to
                understand the broader context. I then performed a{' '}
                <strong>competitor analysis</strong> to understand the landscape
                and key factors that influence online shopping.
              </p>
            </div>
            <div className={cn('col--md-2')}></div>
          </div>
          <div
            className={cn(caseStudy.segmentImage, layoutStyles.contentWrapper)}
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
              layoutStyles.contentWrapper,
              caseStudy.segmentIntro,
            )}
          >
            <div className={cn('col--md-2')}></div>
            <div className={cn('col--md-8')}>
              <p>
                I conducted <strong>user interviews</strong> with three
                participants to understand their experiences with online
                shopping. Here are the key findings:
              </p>
              <ul>
                <li>
                  <strong>Size</strong> information must be clearly visible.
                </li>
                <li>
                  <strong>Returns</strong> are often considered a hassle.
                </li>
                <li>
                  Users prefer <strong>quality over quantity</strong>.
                </li>
                <li>
                  The in-store shopping experience is still highly valued.
                </li>
                <li>
                  <strong>Payment security</strong> is a common concern.
                </li>
                <li>
                  <strong>Reviews</strong> are crucial for building trust.
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
            <h3 className={caseStudy.titleAlone}>Persona</h3>
          </div>
          <div className={caseStudy.indexGroup}>
            <h3>Information Architecture</h3>
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
              layoutStyles.contentWrapper,
              caseStudy.segmentIntro,
            )}
          >
            <div className={cn('col--md-2')}></div>
            <div className={cn('col--md-8')}>
              <p>
                Creating a <strong>Persona</strong> helped me summarize the
                users' needs, frustrations, and motivations, which were
                instrumental in shaping the design.
              </p>
            </div>
            <div className={cn('col--md-2')}></div>
          </div>
          <div
            className={cn(caseStudy.segmentImage, layoutStyles.contentWrapper)}
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
              layoutStyles.contentWrapper,
              caseStudy.segmentIntro,
            )}
          >
            <div className={cn('col--md-2')}></div>
            <div className={cn('col--md-8')}>
              <p>
                The <strong>Sitemap</strong> was essential for organizing the
                website’s structure. I divided the main categories into Women,
                Men, and Kids, with a primary focus on the checkout process.
              </p>
            </div>
            <div className={cn('col--md-2')}></div>
          </div>
          <div
            className={cn(caseStudy.segmentImage, layoutStyles.contentWrapper)}
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
              layoutStyles.contentWrapper,
              caseStudy.segmentIntro,
            )}
          >
            <div className={cn('col--md-2')}></div>
            <div className={cn('col--md-8')}>
              <p>
                The <strong>User Flow</strong> outlined the steps a customer
                would take to make a purchase, from landing on the home page to
                order confirmation.
              </p>
            </div>
            <div className={cn('col--md-2')}></div>
          </div>
          <div
            className={cn(caseStudy.segmentImage, layoutStyles.contentWrapper)}
          >
            <div className={cn('flexGrid', layoutStyles.contentWrapper)}>
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
              layoutStyles.contentWrapper,
              caseStudy.segmentIntro,
            )}
          >
            <div className={cn('col--md-2')}></div>
            <div className={cn('col--md-8')}>
              <p>
                The wireframes for both desktop and responsive views provided
                the initial vision for the site design, with a minimalist
                approach that showcased the key product categories.
              </p>
            </div>
            <div className={cn('col--md-2')}></div>
          </div>
          <div className={caseStudy.highlightBackground}>
            <div className={layoutStyles.contentWrapper}>
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
      </DefineSection>

      {/* Design */}
      <DesignSection>
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
              layoutStyles.contentWrapper,
              caseStudy.segmentIntro,
            )}
          >
            <div className={cn('col--md-2')}></div>
            <div className={cn('col--md-8')}>
              <p>
                After a mood board brainstorming session, I developed a{' '}
                <strong>Style Tile</strong> that served as the foundation for
                the visual design, focusing on a clean, user-friendly interface.
              </p>
            </div>
            <div className={cn('col--md-2')}></div>
          </div>
          <div
            className={cn(caseStudy.segmentImage, layoutStyles.contentWrapper)}
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
              layoutStyles.contentWrapper,
              caseStudy.segmentIntro,
            )}
          >
            <div className={cn('col--md-2')}></div>
            <div className={cn('col--md-8')}>
              <p>
                The following <strong>high-fidelity designs</strong> emphasize
                simplicity and effective use of whitespace, focusing on
                showcasing products in a clean, modern layout.
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
                    The <strong>Homepage</strong> highlights outfits,
                    promotions, and trends in a simple yet engaging way, using
                    carousels to showcase products.
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
              caseStudy.highlightBackgroundPink,
            )}
          >
            <div className={cn('flexGrid', layoutStyles.contentWrapper)}>
              <div className={cn('col--md-6')}>
                <div className={caseStudy.imageExplanation}>
                  <p>
                    On the <strong>Product Page</strong>, users can find all the
                    necessary information at a glance.
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
                    The <strong>Catalog Page</strong> emphasizes ease of use,
                    with filters that are clear and accessible.
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
              caseStudy.highlightBackgroundBlue,
            )}
          >
            <div
              className={cn(
                'flexGrid',
                layoutStyles.contentWrapper,
                caseStudy.segmentIntro,
              )}
            >
              <div className={cn('col--md-1')}></div>
              <div className={cn('col--md-10')}>
                <div className={caseStudy.imageExplanation}>
                  <p>
                    The <strong>Checkout Funnel</strong> was designed with
                    simplicity in mind, ensuring that users encounter only the
                    necessary information.
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
            <div className={cn('flexGrid', layoutStyles.contentWrapper)}>
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
      </DesignSection>

      {/* Testing */}
      <TestingSection>
        <CaseStudyBlockHeader title="Testing">
          <h3>Usability Tests</h3>
        </CaseStudyBlockHeader>

        {/* Testing */}
        <div className={caseStudy.segment}>
          <h3 className={caseStudy.segmentTitle}>Usability Tests</h3>
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
                I conducted usability tests with three participants, asking them
                to complete various tasks while voicing their thoughts. This
                helped to identify and correct visual glitches that would have
                otherwise gone unnoticed.
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
                  Working on this project allowed me to further hone my UI
                  design skills, and reaffirm the importance of user testing and
                  iteration.
                </p>
                <p>Thanks for reading!</p>
              </div>
              <div className={cn('col--md-2')}></div>
            </div>
          </div>
        </div>
      </section>
    </CaseStudyWrapper>
  );
};

Mirror.provider = CaseStudyProvider;

export default Mirror;
