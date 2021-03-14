import { Header, Footer } from 'components';

// Styles
import styles from './layout.module.scss';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
