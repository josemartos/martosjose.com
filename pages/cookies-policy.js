import cn from 'classnames';
import { BasePage } from 'components';

// Styles
import layoutStyles from 'styles/modules/layout.module.scss';
import styles from 'styles/pages/cookies.module.scss';

export default function CookiesPolicy() {
  return (
    <BasePage title="CookiesPolicy">
      <section className={layoutStyles.section}>
        <div className={cn(styles.wrapper, layoutStyles.contentWrapper)}>
          <h2 className={layoutStyles.sectionTitle}>
            <strong>Cookies</strong> policy
          </h2>
          <p>
            An HTTP cookie (also called web cookie, Internet cookie, browser
            cookie, or simply cookie) is a small piece of data sent from a
            website and stored on the user&apos;s computer by the user&apos;s
            web browser while the user is browsing.
          </p>
          <p>
            Cookies were designed to be a reliable mechanism for websites to
            remember stateful information (such as items added in the shopping
            cart in an online store) or to record the user&apos;s browsing
            activity (including clicking particular buttons, logging in, or
            recording which pages were visited in the past). They can also be
            used to remember arbitrary pieces of information that the user
            previously entered into form fields such as names, addresses,
            passwords, and credit card numbers.
          </p>

          <p>
            You can change the preferences in your web browser to control /
            delete cookies. The following links may be helpful:
          </p>

          <ul>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://support.google.com/accounts/answer/61416?hl=en"
                title="Deactivate cookies Google Chrome"
              >
                Chrome
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://support.apple.com/kb/PH19214"
                title="Deactivate cookies Safari"
              >
                Safari
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
                title="Deactivate cookies Firefox"
              >
                Firefox
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://help.opera.com/en/latest/web-preferences/#cookies"
                title="Deactivate cookies Opera"
              >
                Opera
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies"
                title="Deactivate cookies Internet explorer"
              >
                Internet Explorer
              </a>
            </li>
          </ul>
        </div>
      </section>
    </BasePage>
  );
}
