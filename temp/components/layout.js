import Head from "next/head";
import styles from "./layout.module.scss";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jose Martos - Product designer with front-end expertise</title>
      </Head>

      <main className={styles.container}>{children}</main>
    </div>
  );
}
