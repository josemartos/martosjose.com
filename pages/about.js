import Head from 'next/head';
import Layout from 'components/layout';

// Styles
import pageStyles from 'styles/page.module.scss';
import commonStyles from 'styles/common.module.scss';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About - Jose Martos - Personal portfolio</title>
      </Head>
      <section className={`${pageStyles.section} ${pageStyles.sectionWhite}`}>
        <div className={commonStyles.contentWrapper}>
          <h1>About page</h1>
        </div>
      </section>
    </Layout>
  );
}
