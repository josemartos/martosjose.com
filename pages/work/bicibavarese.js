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
                    worked on the <strong>redesign of a local bike shop</strong>
                    based in Munich.
                  </p>
                  <p>
                    I took my skills to the next level, the creation process was
                    smoother, and I learnt a bunch about the bike scene here in
                    the city. I did some research and user interviews to
                    understand their needs, but I placed special emphasis in
                    understanding the current product, to focus on Wireframing
                    and User Interface in order to create a beautiful design
                    that speaks for the bike shop's message. (Disclaimer: The
                    logo design is their original. I also used some of their
                    pictures from their website, Instagram and Flickr profile.)
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
                  Research the current local market, as well as the bike
                  industry in general. Bici Bavarese is focused on selling bikes
                  and reparations, but it's also an important entity when it
                  comes to old timer racing bikes; they organise a yearly event
                  to gather bike fans and enjoy the nearby stunning nature.
                </p>
                <p>
                  My goal was to redesign their website keeping their essense,
                  colour palette and other assets. A design that is eye catching
                  and shows sense of community. The main target was to design,
                  taking into account the time constraints, a few main and key
                  pages.
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
                  conducting <strong>competitor analysis</strong> to acknowledge
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
                width={2566}
                height={1452}
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
                  Using the information gathered during the User Inverviews, I
                  created a <strong>Persona</strong> to summarize the their
                  needs, frustrations and motivations.
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
                src={'/images/bicibavarese/persona.png'}
                alt="Bici Bavarese Persona"
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
                  The <strong>Sitemap</strong> was key to visualize what the
                  main structure of the page will be. The design will follow
                  their current structure and pages.
                </p>
              </div>
              <div className={cn('col--md-2')}></div>
            </div>
            <div className={cn('flexGrid', commonStyles.contentWrapper)}>
              <div className={cn('col--md-1')}></div>
              <div className={cn('col--md-10')}>
                <div
                  className={cn(
                    caseStudy.segmentImage,
                    commonStyles.contentWrapper
                  )}
                >
                  <Image
                    src={'/images/bicibavarese/sitemap.png'}
                    alt="Bici Bavarese Sitemap"
                    width={2130}
                    height={2570}
                    link={+true}
                  />
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
                commonStyles.contentWrapper,
                caseStudy.segmentIntro
              )}
            >
              <div className={cn('col--md-2')}></div>
              <div className={cn('col--md-8')}>
                <p>
                  This time it was important to know and understand the role of
                  the website between customer and physical bike shop. I came up
                  with three <strong>key user flows</strong>.
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
                src={'/images/bicibavarese/user-flows.png'}
                alt="Bici Bavarese Key User Flows"
                width={2566}
                height={1444}
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
                  I created wireframes for the most important pages on this
                  website: the <strong>homepage</strong>, the page where they
                  display all the information related to their yearly event,{' '}
                  <strong>Giro Bavarese</strong>, as well as the page where they
                  showcase their <strong>own crafted bike</strong>. This way I
                  will start transitioning into the first idea of what the
                  design could look like. It follows a minimalistic style, with
                  some retro touches, and modern at the same time.
                </p>
              </div>
              <div className={cn('col--md-2')}></div>
            </div>
            <div className={caseStudy.highlightBackground}>
              <div className={commonStyles.contentWrapper}>
                <Image
                  src={'/images/bicibavarese/wireframes.png'}
                  alt="Bici Bavarese Wireframes"
                  width={2622}
                  height={1896}
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
                  Here I present the <strong>brand ideas</strong> and mood
                  board, as well as the <strong>style tile</strong>, that laid
                  the foundations of the next step: the visual design.
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
                src={'/images/bicibavarese/brand-ideas.jpg'}
                alt="Bici Bavarese Brand Ideas"
                width={2566}
                height={1712}
                link={+true}
              />
            </div>
            <div
              className={cn(
                caseStudy.segmentImage,
                commonStyles.contentWrapper
              )}
            >
              <Image
                src={'/images/bicibavarese/style-tile.jpg'}
                alt="Bici Bavarese Style Tile"
                width={2566}
                height={1712}
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
                  With all the previous elements in mind, I materialized the
                  following <strong>hi-fi designs</strong>.
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
                      On the <strong>Homepage</strong>, instead of having too
                      much text, it was important to highlight the essence of
                      Bici Bavarese: the sense of community. Furthermore, to
                      show the customer what else can be found: bike sales,
                      workshop, main event, happy customers, etc.
                    </p>
                  </div>
                  <Image
                    src={'/images/bicibavarese/homepage.jpg'}
                    alt="Bici Bavarese Homepage"
                    width={2130}
                    height={4908}
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
                <div className={cn('col--md-1')}></div>
                <div className={cn('col--md-10')}>
                  <div className={caseStudy.imageExplanation}>
                    <p>
                      On the <strong>Giro Bavarese</strong> page, I focused on
                      compressing the information to be cleared out (in the form
                      of dropdowns), as well as to inmerse the user in the event
                      (using the video).
                    </p>
                  </div>
                  <Image
                    src={'/images/bicibavarese/giro-bavarese.jpg'}
                    alt="Giro Bavarese page"
                    width={2130}
                    height={4550}
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
                caseStudy.highlightBackgroundBlue
              )}
            >
              <div className={cn('flexGrid', commonStyles.contentWrapper)}>
                <div className={cn('col--md-1')}></div>
                <div className={cn('col--md-10')}>
                  <div className={caseStudy.imageExplanation}>
                    <p>
                      On the <strong>Our Bike</strong> page, showcasing the bike
                      and their different parts and configuration was the main
                      point to focus on.
                    </p>
                  </div>
                  <Image
                    src={'/images/bicibavarese/our-bike.jpg'}
                    alt="Our Bike Page"
                    width={2130}
                    height={5809}
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
            <h3>UI tests</h3>
          </CaseStudyBlockHeader>

          {/* Testing */}
          <div className={caseStudy.segment}>
            <h3 className={caseStudy.segmentTitle}>UI Tests</h3>
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
                  With a total of three participants, I conducted UI tests over
                  the three different pages, to see how they interact with the
                  UI and what they understand from what they see and their
                  general impressions, triggered by questions on each page.
                </p>
                <p>
                  The tests were very important to iterate over the UI Design,
                  introducing changes like the "customizable bike", or a more
                  attractive top part on the homepage.
                </p>
                <p>
                  The prototype is barely clickable, only to navigate between
                  the different main pages: Homepage, Our Bike Page (Unser Rad)
                  and the Event Page (Giro Bavarese).
                </p>
                <LinkButton
                  target="_blank"
                  text="See prototype"
                  href="https://www.figma.com/proto/U83UJEyIWUzXmUddA2h0Nl/Bike-Shop-Prototype?page-id=0%3A1&node-id=1%3A191&viewport=948%2C551%2C0.1494501531124115&scaling=min-zoom"
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
                    While working on this project I noticed from the beginning
                    how the deliverables and the decisions already came up
                    easier and smoother. I took my skills to the next level, by
                    taking an existing branding and website, to achieve an
                    unique touch.
                  </p>
                  <p>
                    I would have like to have worked directly with a real client
                    and interview real customers, but no one answered my emails.
                    Nonetheless the experience was very rewarding and I learned
                    to a great extend.
                  </p>
                  <p>Thanks a bunch for reading!</p>
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
