import Link from "next/link";

// Styles
import commonStyles from "../styles/common.module.scss";
import styles from "../styles/components/header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={commonStyles.contentWrapper}>
        <div className={styles.headerInner}>
          <Link href="/">Jose Martos</Link>
          <div className={styles.navBar}>
            <Link href="/">work</Link>
            <Link href="/about">about</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
