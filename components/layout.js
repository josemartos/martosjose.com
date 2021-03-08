import Header from "./Header";

// Styles
import styles from "../styles/components/layout.module.scss";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
