import Head from 'next/head';
import Layout from 'components/layout';
import cn from 'classnames';

// Styles
import pageStyles from 'styles/page.module.scss';
import commonStyles from 'styles/common.module.scss';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Mirror Project - Jose Martos - Personal portfolio</title>
      </Head>
      <section className={cn(pageStyles.section, pageStyles.sectionWhite)}>
        <div className={commonStyles.contentWrapper}>
          <h1>Mirror Project</h1>
        </div>
      </section>
    </Layout>
  );
}
