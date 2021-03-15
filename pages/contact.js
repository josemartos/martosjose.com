import cn from 'classnames';
import { BasePage, ContactForm } from 'components';

// Styles
import pageStyles from 'styles/page.module.scss';
import commonStyles from 'styles/common.module.scss';

export default function Contact() {
  return (
    <BasePage title="Contact">
      <section
        className={cn(
          pageStyles.section,
          pageStyles.mainSection,
          pageStyles.pageSection
        )}
      >
        <div className={commonStyles.contentWrapper}>
          <h2 className={pageStyles.mainSectionTitle}>
            Shall <strong>we</strong>?
          </h2>

          <ContactForm />
        </div>
      </section>
    </BasePage>
  );
}
