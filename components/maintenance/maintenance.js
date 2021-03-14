import cn from 'classnames';

// Styles
import styles from './maintenance.module.scss';

const Maintenance = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Something new is cooking</h1>

      <a
        href="mailto:martosjosele@gmail.com?subject=Hi%20Jose"
        title="Say hi to Jose"
        className={cn(styles.email, styles.link, styles.linkEffect)}
      >
        <span>drop me @ line</span>
      </a>
    </div>
  );
};

export default Maintenance;
