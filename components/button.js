// Styles
import styles from './button.module.scss';

const Button = ({ text }) => {
  return (
    <button className={`${styles.button} ${styles.primary}`}>{text}</button>
  );
};

export default Button;
