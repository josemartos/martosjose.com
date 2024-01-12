import RouterLink from 'next/link';
import CookieConsent from 'react-cookie-consent';

const GDPRBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="All right"
      cookieName="gdprBanner"
      style={{ background: '#F4F4F4', color: '#181624', fontSize: '1rem' }}
      buttonStyle={{
        backgroundColor: '#F16B55',
        color: '#FFF',
        fontSize: '0.875rem',
        borderRadius: '3px',
      }}
      expires={90}
    >
      This website uses cookies to analyze and enhance the user experience. By
      continuing, you agree to{' '}
      <RouterLink href="/cookies-policy" legacyBehavior>
        <a title="See cookies policy">their use</a>
      </RouterLink>
      .
    </CookieConsent>
  );
};

export default GDPRBanner;
