import { ReactNode } from 'react';
import { Header, Footer } from 'components';

// Styles
import styles from './layout.module.scss';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
