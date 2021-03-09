import Head from 'next/head';

import Layout from '../components/Layout';

// Styles
import commonStyles from '../styles/common.module.scss';
import styles from '../styles/pages/home.module.scss';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Jose Martos - Product designer with front-end expertise</title>
      </Head>
      <section className={styles.homeSection}>
        <div className={commonStyles.contentWrapper}>
          <h1>Hero header</h1>
        </div>
      </section>
      <section className={`${styles.homeSection} ${styles.homeSectionWhite}`}>
        <div className={commonStyles.contentWrapper}>
          <h1>Projects</h1>
        </div>
      </section>
    </Layout>
  );
}
