import cn from 'classnames';
import BasePage from 'components/basePage';

// Styles
import pageStyles from 'styles/page.module.scss';
import commonStyles from 'styles/common.module.scss';

export default function Mirror() {
  return (
    <BasePage title="Mirror e-commerce store">
      <section
        className={cn(
          pageStyles.section,
          pageStyles.mainSection,
          pageStyles.pageSection
        )}
      >
        <div className={commonStyles.contentWrapper}>
          <h2 className={pageStyles.mainSectionTitle}>
            <strong>Mirror</strong> e-commerce store
          </h2>
        </div>
      </section>
    </BasePage>
  );
}
