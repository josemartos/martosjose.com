import cn from 'classnames';
import { BasePage } from 'components';

// Styles
import layoutStyles from 'styles/modules/layout.module.scss';

export default function Photos() {
  return (
    <BasePage title="Photos">
      <section className={layoutStyles.section}>
        <div className={layoutStyles.contentWrapper}>
          <h2 className={layoutStyles.sectionTitle}>
            Some <strong>pictures</strong>
          </h2>
        </div>
      </section>
    </BasePage>
  );
}
