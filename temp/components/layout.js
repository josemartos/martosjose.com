import Head from 'next/head';
import styles from './layout.module.scss';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jose Martos - Designer and front-end developer</title>
      </Head>

      <main className={styles.container}>{children}</main>
    </div>
  );
}
