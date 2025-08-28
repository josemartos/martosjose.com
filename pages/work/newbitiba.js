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
  Carousel,
  LinkButton,
} from 'components';
import { SwiperSlide } from 'swiper/react';

import ComeInAnimation from 'animation/comeIn';
import { CaseStudyProvider } from 'context/caseStudyContext';

// Styles
import layoutStyles from 'styles/modules/layout.module.scss';
import caseStudy from 'styles/modules/caseStudy.module.scss';

// Images
import HeroImage from 'public/images/newbitiba/hero.png';
import CompetitorAnalysisImage from 'public/images/newbitiba/competitor-analysis.png';
import IdeationWorkshopImage from 'public/images/newbitiba/ideation-workshop.png';
import ExplorationsImage from 'public/images/newbitiba/explorations.png';
import ExplorationsScreensImage from 'public/images/newbitiba/explorations-screens.png';
import UIDesign1Image from 'public/images/newbitiba/ui-design1.png';
import UIDesign2Image from 'public/images/newbitiba/ui-design2.png';
import UIDesign3Image from 'public/images/newbitiba/ui-design3.png';
import UIDesign4Image from 'public/images/newbitiba/ui-design4.png';
import UIDesign5Image from 'public/images/newbitiba/ui-design5.png';
import UIDesign6Image from 'public/images/newbitiba/ui-design6.png';
import UIDesign7Image from 'public/images/newbitiba/ui-design7.png';

const NewBitiba = () => {
  return (
    <CaseStudyWrapper title="New Bitiba | Budget-friendly e-commerce platform">
      <section className={layoutStyles.section}>
        <header className={caseStudy.hero}>
          <ComeInAnimation>
            <Image
              src={HeroImage}
              alt="New Bitiba - Mockups"
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
              <h1>New Bitiba</h1>
              <small>Web app | Feb 2025 - Jun 2025</small>
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
                  As part of an initiative to refresh and scale a
                  budget-friendly pet supply platform, I joined the team to
                  strengthen the MVP ahead of launch and lead the design of a
                  new membership concept aimed at driving user registration and
                  building a foundation for loyalty. Although the MVP was
                  already in development, I identified usability gaps and
                  contributed targeted design refinements. In parallel, I led
                  the membership workstream — from early research to stakeholder
                  presentations.
                </p>
              </div>
              <div className={cn('col--md-2')}></div>
              <div className={cn(caseStudy.tagsWrapper, 'col--md-4')}>
                <CaseStudyTag label="Role" text="Product Designer @ zooplus" />
                <CaseStudyTag
                  label="Skills"
                  text="Research, Interaction & UI Design, Prototyping, Testing"
                />
                <CaseStudyTag label="Tools" text="Figma" />
                <CaseStudyTag label="Duration" text="4 months" />
              </div>
            </div>
          </div>
        </div>

        <div className={caseStudy.goalsWrapper}>
          <div className={cn('flexGrid', layoutStyles.contentWrapper)}>
            <div className={cn('col--md-1')}></div>
            <div className={cn('col--md-8')}>
              <h2>Problem & Goals</h2>
              <p>
                There was no clearly defined design problem at kickoff, but
                through ongoing conversations and analysis, I uncovered the
                underlying objectives:
              </p>
              <ul>
                <li>
                  Differentiate the platform through pricing and customer
                  engagement.
                </li>
                <li>
                  Introduce a lean membership model to drive registrations and
                  foster long-term loyalty.
                </li>
                <li>
                  Streamline operations via centralized catalog improvements.
                </li>
              </ul>
              <p>
                From a design perspective, the core challenge was to clarify the
                value proposition and ensure a trustworthy, conversion-oriented
                experience.
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
            <h3>Journey Mapping</h3>
          </div>
        </CaseStudyBlockHeader>

        {/* Competitor Analysis */}
        <div className={caseStudy.segment}>
          <h3 className={caseStudy.segmentTitle}>Competitor Analysis</h3>
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
                To understand the landscape of lean loyalty programs in
                e-commerce, I explored several competitors across Europe. The
                goal was to analyze how they position their programs,
                communicate benefits, and integrate the membership concept
                within the shop.
              </p>
              <p>
                I evaluated aspects such as access tiers, pricing visibility,
                design presentation, and overall user experience to gather
                inspiration and identify areas for differentiation.
              </p>
              {/* Main Findings */}
              <h4 className={caseStudy.listTitle}>Main Findings</h4>
              <ul>
                <li>
                  <strong>Concept:</strong> Memberships are designed to deliver
                  benefits that attract users and encourage long-term retention.
                </li>
                <li>
                  <strong>Key benefits:</strong> Most competitors clearly
                  highlight benefits upfront, ensuring users fully understand
                  the value they're signing up for.
                </li>
                <li>
                  <strong>Narrative:</strong> Consistent messaging and a
                  recognizable identity are maintained across all screens and
                  channels, ensuring a cohesive and unique experience.
                </li>
              </ul>
            </div>
            <div className={cn('col--md-2')}></div>
          </div>

          <div
            className={cn(caseStudy.segmentImage, layoutStyles.contentWrapper)}
          >
            <Image
              src={CompetitorAnalysisImage}
              url="/newbitiba/competitor-analysis.png"
              alt="New Bitiba Competitor Analysis"
              width={1283}
              height={1004}
              link={+true}
            />
          </div>
        </div>

        {/* Journey Mapping */}
        <div className={caseStudy.segment}>
          <h3 className={caseStudy.segmentTitle}>Journey Mapping</h3>
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
                To align the team around a shared understanding of the customer
                experience, I mapped out a simplified journey that reflected a
                realistic user flow through the platform. This helped identify
                potential integration points for the membership offer.
              </p>
              <p>
                The journey map became the base for a lightweight ideation
                session, where I gathered quick feedback from stakeholders and
                team members. This collaborative approach helped surface new
                ideas and considerations that shaped the direction of the
                solution.
              </p>
              {/* Opportunities */}
              <h4 className={caseStudy.listTitle}>Opportunities</h4>
              <ul>
                <li>
                  <strong>Value messaging:</strong> Highlight savings and perks
                  clearly. Help users immediately see the benefits of joining.
                </li>
                <li>
                  <strong>Streamlined registration:</strong> Simplify the
                  sign-up process. Integrate registration seamlessly into the
                  shopping journey.
                </li>
                <li>
                  <strong>Post-purchase engagement:</strong> Reinforce
                  membership value after purchase. Remind users of benefits to
                  build long-term loyalty.
                </li>
              </ul>
            </div>
            <div className={cn('col--md-2')}></div>
          </div>

          <div
            className={cn(caseStudy.segmentImage, layoutStyles.contentWrapper)}
          >
            <Image
              src={IdeationWorkshopImage}
              url="/newbitiba/ideation-workshop.png"
              alt="New Bitiba Ideation Workshop"
              width={1283}
              height={1004}
              link={+true}
            />
          </div>
        </div>
      </UnderstandSection>

      {/* Define */}
      <DefineSection>
        <CaseStudyBlockHeader title="Define">
          <div className={caseStudy.indexGroup}>
            <h3>Design Direction</h3>
            <h3>Explorations</h3>
          </div>
        </CaseStudyBlockHeader>

        {/* Design Direction */}
        <div className={caseStudy.segment}>
          <h3 className={caseStudy.segmentTitle}>Design Direction</h3>
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
                The design aimed to simplify entry into the membership program
                while creating moments of clarity and reinforcement. We
                prioritized early communication of value, reduced friction in
                registration, and designed subtle reminders that reinforce the
                benefits after purchase.
              </p>
              <p>
                Due to tight timelines and the live nature of the platform, I
                moved into high-fidelity design early in the process, balancing
                stakeholder needs and ongoing development constraints.
              </p>
            </div>
            <div className={cn('col--md-2')}></div>
          </div>
        </div>

        {/* Explorations */}
        <div className={caseStudy.segment}>
          <h3 className={caseStudy.segmentTitle}>Explorations</h3>
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
                During the early exploration phase, I explored a more ambitious
                vision for the membership, experimenting with custom branding,
                naming, and a separate color palette to differentiate it from
                the core shop. However, due to stakeholder priorities and time
                constraints, we scaled the concept back to focus solely on its
                core value: access to discounted prices.
              </p>
              <p>
                While we challenged this decision at several points to explore a
                deeper offering, the team ultimately agreed to keep the MVP lean
                and ship early. The foundation was designed to be expandable for
                future iterations.
              </p>
            </div>
            <div className={cn('col--md-2')}></div>
          </div>

          <div
            className={cn(caseStudy.segmentImage, layoutStyles.contentWrapper)}
          >
            <Image
              src={ExplorationsImage}
              url="/newbitiba/explorations.png"
              alt="New Bitiba Explorations"
              width={1283}
              height={1004}
              link={+true}
            />
          </div>
          <div className={caseStudy.highlightBackground}>
            <div className={layoutStyles.contentWrapper}>
              <Image
                src={ExplorationsScreensImage}
                url="/newbitiba/explorations-screens.png"
                alt="New Bitiba Explorations Screens"
                width={1283}
                height={2297}
                link={+true}
              />
            </div>
          </div>
        </div>
      </DefineSection>

      {/* Design */}
      <DesignSection>
        <CaseStudyBlockHeader title="Design">
          <div className={caseStudy.indexGroup}>
            <h3>UI Design</h3>
          </div>
        </CaseStudyBlockHeader>

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
                Here's a look at the final UI design, shaped by our research and
                iteration process. The focus remained on clarity, trust, and
                ease of use across key touchpoints, from product pages to
                checkout.
              </p>
              <p>
                I paid particular attention to price presentation and membership
                messaging—balancing visual hierarchy, tone, and color to help
                users recognize savings without confusion or friction.
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
                <SwiperSlide>
                  <Image
                    src={UIDesign1Image}
                    alt="UI Design"
                    width={407}
                    height={858}
                    priority
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={UIDesign2Image}
                    alt="UI Design"
                    width={407}
                    height={858}
                    priority
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={UIDesign3Image}
                    alt="UI Design"
                    width={407}
                    height={858}
                    priority
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={UIDesign4Image}
                    alt="UI Design"
                    width={407}
                    height={858}
                    priority
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={UIDesign5Image}
                    alt="UI Design"
                    width={407}
                    height={858}
                    priority
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={UIDesign6Image}
                    alt="UI Design"
                    width={407}
                    height={858}
                    priority
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={UIDesign7Image}
                    alt="UI Design"
                    width={407}
                    height={858}
                    priority
                  />
                </SwiperSlide>
              </Carousel>
            </div>
          </div>
        </div>
      </DesignSection>

      {/* Testing */}
      <TestingSection>
        <CaseStudyBlockHeader title="Testing">
          <h3>User Testing</h3>
        </CaseStudyBlockHeader>

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
                I conducted moderated usability testing with a mix of 5 internal
                employees and 5 potential users to evaluate the redesigned
                membership experience. The focus was on clarity of value, ease
                of registration, and overall usability across key touchpoints.
                Each session included both the current implementation and the
                new prototype — tested from the product detail page (PDP)
                through to purchase.
              </p>
              <ul>
                <li>
                  Most participants preferred the new version, valuing the
                  clarity around savings and early visibility of benefits.
                </li>
                <li>
                  Some users were confused about the membership process,
                  highlighting opportunities to improve messaging and
                  onboarding.
                </li>
                <li>
                  Checkout improvements — such as simplified address entry and
                  better visual guidance — were appreciated, though some users
                  missed the option to check out as a guest.
                </li>
              </ul>
              <p>
                Feedback led to refinements in copy, layout, and user flow —
                particularly how savings were framed and how the membership
                process was explained.
              </p>
              <LinkButton
                target="_blank"
                text="See prototype"
                href="https://www.figma.com/proto/F94HN0Kef8rScA1YKtDv4M/NBS-_--Q1-2025?page-id=87%3A44951&node-id=90-44952&viewport=382%2C88%2C0.23&t=n9oLsLNnaYSsfOwX-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=90%3A44952"
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
                  This project allowed me to shape a leaner, more transparent
                  membership experience by balancing user needs with business
                  goals. From aligning with stakeholders to hands-on testing,
                  each step helped guide focused, evidence-based iterations.
                </p>
                <p>
                  Early journey mapping was instrumental in bringing the team
                  together, while competitive benchmarking and lightweight user
                  research offered clarity on opportunities and best practices.
                  Moderated testing later confirmed key assumptions and surfaced
                  areas for refinement—especially around copy, savings
                  communication, and onboarding clarity.
                </p>
                <p>
                  If I had more time, I'd explore stronger post-purchase
                  engagement strategies, run A/B tests, and integrate more
                  behavioral data to track long-term performance.
                </p>
                <p>
                  Overall, this project strengthened my ability to work across
                  disciplines, iterate quickly, and advocate for users while
                  delivering on strategic priorities.
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

NewBitiba.provider = CaseStudyProvider;

export default NewBitiba;
