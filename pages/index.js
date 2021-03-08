import Head from "next/head";
import Layout from "../components/layout";

// Styles
import commonStyles from "../styles/common.module.scss";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Jose Martos - Product designer with front-end expertise</title>
      </Head>
      <div className={commonStyles.contentWrapper}>
        <h1>Homepage</h1>
      </div>
    </Layout>
  );
}