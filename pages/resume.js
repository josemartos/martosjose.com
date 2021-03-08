import Head from 'next/head';
import Layout from '../components/layout';

// Styles
import commonStyles from '../styles/common.module.scss';

export default function Resume() {
  return (
    <Layout>
      <Head>
        <title>Resume - Jose Martos - Personal portfolio</title>
      </Head>
      <div className={commonStyles.contentWrapper}>
        <h1>Resume page</h1>
      </div>
    </Layout>
  );
}
