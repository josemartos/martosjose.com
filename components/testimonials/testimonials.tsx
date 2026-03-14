import NextImage from 'next/image';
import { TESTIMONIALS } from 'lib/constants';
import styles from './testimonials.module.scss';

const Testimonials = () => {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.grid}>
        {TESTIMONIALS.map((t) => (
          <article key={t.name} className={styles.card}>
            <blockquote className={styles.text}>{t.text}</blockquote>
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
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
