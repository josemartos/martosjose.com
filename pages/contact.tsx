import { NextPage } from 'next';
import { BasePage, ContactForm } from 'components';

// Styles
import layoutStyles from 'styles/modules/layout.module.scss';

const Contact: NextPage & { theme?: string } = () => {
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
};

Contact.theme = 'white';

export default Contact;
