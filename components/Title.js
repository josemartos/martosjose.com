import Head from 'next/head';
import { SITE_CONFIG } from 'lib/constants';

export const Title = ({ title }) => {
  const fullTitle = title
    ? `${title} - ${SITE_CONFIG.meta.title}`
    : SITE_CONFIG.meta.title;

  return (
    <Head>
      <title>{fullTitle}</title>
    </Head>
  );
};
