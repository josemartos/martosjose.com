import Header from './Header';
import Footer from './Footer';
// import TestContext from '../context/testContext';

// Styles
import styles from './layout.module.scss';

export default function Layout({ children }) {
  // const [heroLostFocus, setHeroLostFocus] = useState(false);
  // const containerWhiteStyle = heroLostFocus ? styles.containerWhite : '';

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        {/* <TestContext.Provider value={{ setHeroLostFocus }}> */}
        {children}
        {/* </TestContext.Provider> */}
      </main>
      <Footer />
    </div>
  );
}
