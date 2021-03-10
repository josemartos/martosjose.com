import Head from 'next/head';

import Layout from '../components/Layout';
import HeroHeader from '../components/HeroHeader';

// Styles
import commonStyles from '../styles/common.module.scss';
import styles from './index.module.scss';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Jose Martos - Designer with front-end expertise</title>
      </Head>
      <section className={styles.homeSection}>
        <HeroHeader />
      </section>
      <section className={`${styles.homeSection} ${styles.homeSectionWhite}`}>
        <div className={commonStyles.contentWrapper}>
          <h2 className={styles.homeSectionTitle}>
            Recent <strong>work</strong>
          </h2>
        </div>
      </section>
    </Layout>
  );
}
