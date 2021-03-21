import cn from 'classnames';
import { BasePage } from 'components';

// Styles
import pageStyles from 'styles/page.module.scss';
import commonStyles from 'styles/common.module.scss';

export default function Photos() {
  return (
    <BasePage title="Photos">
      <section className={pageStyles.section}>
        <div className={commonStyles.contentWrapper}>
          <h2 className={pageStyles.sectionTitle}>
            Some <strong>pictures</strong>
          </h2>
        </div>
      </section>
    </BasePage>
  );
}
