import { ReactNode } from 'react';
import { Header, Footer } from 'components';

// Styles
import styles from './layout.module.scss';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.container}>
      <a href="#main-content" className={styles.skipLink}>
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
