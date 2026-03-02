import NextImage from 'next/image';
import { TESTIMONIALS } from 'lib/constants';
import styles from './testimonials.module.scss';

const Testimonials = () => {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.grid}>
        {TESTIMONIALS.map((t) => (
          <div key={t.name} className={styles.card}>
            <p className={styles.text}>"{t.text}"</p>
            <div className={styles.profile}>
              <NextImage
                src={t.avatar}
                alt={t.name}
                width={48}
                height={48}
                className={styles.avatar}
              />
              <div>
                <p className={styles.name}>{t.name}</p>
                <p className={styles.meta}>
                  {t.title} at {t.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
