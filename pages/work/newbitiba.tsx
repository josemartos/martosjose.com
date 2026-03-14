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
import { newBitibaData } from 'lib/caseStudyData';
import { Title } from 'components/Title';

// Styles
import layoutStyles from 'styles/modules/layout.module.scss';
import caseStudy from 'styles/modules/caseStudy.module.scss';

type CaseStudyPage = NextPage & {
  provider?: typeof CaseStudyProvider;
  theme?: string;
};

const NewBitiba: CaseStudyPage = () => {
  return (
    <>
      <Title title="New Bitiba – Case Study" />
      <CaseStudyWrapper title={newBitibaData.title}>
      <section className={layoutStyles.section}>
        <header className={caseStudy.hero}>
          <ComeInAnimation>
            <Image {...newBitibaData.hero} />
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
                  Bitiba was relaunching as a leaner, price-first pet supply
                  platform. I joined mid-development as the design lead —
                  tasked with tightening the MVP before launch and shaping a
                  new membership concept from scratch. That meant identifying
                  usability gaps in a live build, researching loyalty models,
                  and taking a membership concept from early research to tested
                  prototype in four months.
                </p>
              </div>
              <div className={cn('col--md-2')}></div>
              <div className={cn(caseStudy.tagsWrapper, 'col--md-4')}>
                <CaseStudyTag label="Role" text={newBitibaData.tags.role} />
                <CaseStudyTag label="Skills" text={newBitibaData.tags.skills} />
                <CaseStudyTag label="Tools" text={newBitibaData.tags.tools} />
                <CaseStudyTag label="Duration" text={newBitibaData.tags.duration} />
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
                There was no single design brief at kickoff. Through stakeholder
                conversations and early analysis, I shaped the scope around
                three core objectives:
              </p>
              <ul>
                <li>
                  Make the platform's price advantage visible and credible.
                </li>
                <li>
                  Introduce a lean membership model to drive registrations and
                  build long-term loyalty.
                </li>
                <li>
                  Streamline operations via centralized catalog improvements.
                </li>
              </ul>
              <p>
                The design challenge was simpler to state than to solve: make
                the value obvious, the sign-up frictionless, and the experience
                trustworthy.
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
            <Image {...newBitibaData.images.competitorAnalysis} />
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
            <Image {...newBitibaData.images.ideationWorkshop} />
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
            <Image {...newBitibaData.images.explorations} />
          </div>
          <div className={caseStudy.highlightBackground}>
            <div className={layoutStyles.contentWrapper}>
              <Image {...newBitibaData.images.explorationsScreens} />
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
                The final screens reflect the decisions made upstream — clarity
                at every touchpoint, from product pages to checkout. Price
                visibility and membership messaging were the hardest problems
                to solve: the savings had to be obvious without feeling pushy,
                and the hierarchy had to work for both members and non-members
                at the same time.
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
                {newBitibaData.carousel!.map((img, i) => (
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
                text={newBitibaData.prototypeLink.text}
                href={newBitibaData.prototypeLink.href}
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
                  A live platform, tight timelines, and stakeholders with
                  strong opinions on scope. The constraints were real — and
                  they made the work sharper. Journey mapping aligned the team
                  early; competitive research clarified direction; moderated
                  testing confirmed what worked and surfaced what didn't —
                  especially around savings messaging and onboarding clarity.
                </p>
                <p>
                  If I had more time, I'd explore stronger post-purchase
                  engagement, run A/B tests, and bring in more behavioral data
                  to track performance over time.
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

NewBitiba.provider = CaseStudyProvider;
NewBitiba.theme = 'white';

export default NewBitiba;
