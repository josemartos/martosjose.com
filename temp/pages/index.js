import Layout from 'components/layout';
import styles from './home.module.scss';
import cn from 'classnames';

export default function Home() {
  return (
    <Layout>
      <h1 className={styles.title}>Something new is cooking</h1>

      <a
        href="mailto:martosjosele@gmail.com?subject=Hi%20Jose"
        title="Say hi to Jose"
        className={cn(styles.email, styles.link, linkEffect)}
      >
        <span>drop me @ line</span>
      </a>
    </Layout>
  );
}
