import cn from 'classnames';
import BasePage from 'components/basePage';

// Styles
import pageStyles from 'styles/page.module.scss';
import commonStyles from 'styles/common.module.scss';

export default function About() {
  return (
    <BasePage title="About">
      <section
        className={cn(
          pageStyles.section,
          pageStyles.mainSection,
          pageStyles.pageSection
        )}
      >
        <div className={commonStyles.contentWrapper}>
          <h2 className={pageStyles.mainSectionTitle}>
            About <strong>me</strong>
          </h2>
        </div>
      </section>
    </BasePage>
  );
}
