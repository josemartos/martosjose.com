import cn from 'classnames';
import { BasePage, CaseStudy } from 'components';

// Styles
import pageStyles from 'styles/page.module.scss';

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
        <CaseStudy />
      </section>
    </BasePage>
  );
}
