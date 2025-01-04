import cn from 'classnames';
import { BasePage, ContactForm } from 'components';

// Styles
import layoutStyles from 'styles/components/layout.module.scss';

export default function Contact() {
  return (
    <BasePage title="Contact">
      <section className={layoutStyles.section}>
        <div className={layoutStyles.contentWrapper}>
          <h2 className={layoutStyles.sectionTitle}>
            How can I <strong>help</strong>?
          </h2>

          <ContactForm />
        </div>
      </section>
    </BasePage>
  );
}
