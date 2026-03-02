import { Component, ComponentType, ReactNode, useState, useMemo } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';
import { NextPage } from 'next';
import { GoogleAnalytics } from 'lib/googleAnalytics';
import { Title } from 'components/Title';
import { SITE_CONFIG } from 'lib/constants';

// Styles
import 'styles/global.scss';

import AppContext, { ThemeContext } from 'context/appContext';
import { Maintenance, GoTopButton, GDPRBanner } from 'components';

type NextPageWithProvider = NextPage & {
  provider?: ComponentType<{ children: ReactNode }>;
  theme?: string;
};

type AppPropsWithProvider = AppProps & { Component: NextPageWithProvider };

const Noop = ({ children }: { children: ReactNode }) => <>{children}</>;

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<{ children: ReactNode }, ErrorBoundaryState> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('Render error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <p>Something went wrong. Please refresh the page.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

function App({ Component, pageProps, maintenanceMode = 'false' }: AppPropsWithProvider & { maintenanceMode?: string }) {
  const ComponentProvider = Component.provider || Noop;
  const theme = Component.theme ?? 'normal';
  const [shouldScrollToWork, setShouldScrollToWork] = useState(false);
  const router = useRouter();

  const shouldShowGoTopButton =
    router.pathname === '/' || router.pathname.startsWith('/work');

  const canonicalUrl = `${SITE_CONFIG.url}${router.asPath.split('?')[0]}`;

  // setShouldScrollToWork is stable (useState guarantee), so shouldScrollToWork is the only real dep.
  const contextValue = useMemo(
    () => ({ shouldScrollToWork, setShouldScrollToWork }),
    [shouldScrollToWork],
  );

  return (
    <ErrorBoundary>
      <GoogleAnalytics />
      <Title />
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Jose Martos - I build interfaces. I've also designed them for 3 years."
        />
        <meta
          name="keywords"
          content="portfolio, ux design, ui design, product design, ux research, front-end dev"
        />
        <meta name="author" content="Jose Martos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="url" content={SITE_CONFIG.url} />
        <link rel="canonical" href={canonicalUrl} />

        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        <meta property="og:url" content={SITE_CONFIG.url} />
        <meta property="og:type" content="website" />

        <meta property="og:title" content={SITE_CONFIG.meta.title} />
        <meta
          property="og:description"
          content={SITE_CONFIG.meta.description}
        />
        <meta property="og:image" content={`${SITE_CONFIG.url}${SITE_CONFIG.meta.ogImage}`} />
        <meta
          property="og:image:secure_url"
          content={`${SITE_CONFIG.url}${SITE_CONFIG.meta.ogImage}`}
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta
          property="og:image:width"
          content={SITE_CONFIG.meta.ogImageWidth}
        />
        <meta
          property="og:image:height"
          content={SITE_CONFIG.meta.ogImageHeight}
        />
        <meta
          property="og:image:alt"
          content={`${SITE_CONFIG.title} - ${SITE_CONFIG.description}`}
        />
        <meta property="og:locale" content={SITE_CONFIG.meta.ogLocale} />
        <meta property="og:site_name" content={SITE_CONFIG.meta.ogSiteName} />
      </Head>
      <ThemeContext.Provider value={theme}>
        <AppContext.Provider value={contextValue}>
          {shouldShowGoTopButton && <GoTopButton />}
          {maintenanceMode === 'true' ? (
            <Maintenance />
          ) : (
            <>
              <ComponentProvider>
                <Component {...pageProps} />
              </ComponentProvider>
              <GDPRBanner />
            </>
          )}
        </AppContext.Provider>
      </ThemeContext.Provider>
    </ErrorBoundary>
  );
}

// Uncomment for maintenance support
// App.getInitialProps = () => {
//   return { maintenanceMode: process.env.MAINTENANCE_MODE };
// };

export default App;
