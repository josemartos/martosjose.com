import cn from 'classnames';
import { BasePage, CaseStudy } from 'components';

// Styles
import pageStyles from 'styles/page.module.scss';
import commonStyles from 'styles/common.module.scss';

export default function Mirror() {
  return (
    <BasePage title="Mirror e-commerce platform">
      <section
        className={cn(
          pageStyles.section,
          pageStyles.mainSection,
          pageStyles.pageSection
        )}
      >
        <div className={commonStyles.contentWrapper}>
          <h2 className={cn(pageStyles.mainSectionTitle, pageStyles.center)}>
            <strong>Mirror</strong>
          </h2>
        </div>
        <CaseStudy />
      </section>
    </BasePage>
  );
}
