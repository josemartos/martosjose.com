import cn from 'classnames';
import BasePage from 'components/basePage';

// Styles
import pageStyles from 'styles/page.module.scss';
import commonStyles from 'styles/common.module.scss';

export default function Photos() {
  return (
    <BasePage title="Photos">
      <section
        className={cn(
          pageStyles.section,
          pageStyles.mainSection,
          pageStyles.pageSection
        )}
      >
        <div className={commonStyles.contentWrapper}>
          <h2 className={pageStyles.mainSectionTitle}>
            Some <strong>pictures</strong>
          </h2>
        </div>
      </section>
    </BasePage>
  );
}
