import Head from 'next/head';
import { SITE_CONFIG } from 'lib/constants';

interface TitleProps {
  title?: string;
}

export const Title = ({ title }: TitleProps) => {
  const fullTitle = title
    ? `${title} - ${SITE_CONFIG.meta.title}`
    : SITE_CONFIG.meta.title;

  return (
    <Head>
      <title>{fullTitle}</title>
    </Head>
  );
};
