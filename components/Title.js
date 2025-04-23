import Head from 'next/head';
import { SITE_CONFIG } from 'lib/constants';

export const Title = ({ title }) => {
  const fullTitle = title
    ? `${title} - ${SITE_CONFIG.meta.title}`
    : SITE_CONFIG.meta.title;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={SITE_CONFIG.meta.description} />
      <meta name="keywords" content={SITE_CONFIG.meta.keywords} />
      <meta name="author" content={SITE_CONFIG.meta.author} />
    </Head>
  );
};
