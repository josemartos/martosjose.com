import Head from 'next/head';
import Layout from '../components/layout';

// Styles
import commonStyles from '../styles/common.module.scss';

export default function Photos() {
  return (
    <Layout>
      <Head>
        <title>Photos - Jose Martos - Personal portfolio</title>
      </Head>
      <div className={commonStyles.contentWrapper}>
        <h1>Photos page</h1>
      </div>
    </Layout>
  );
}
