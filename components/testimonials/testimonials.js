import styles from './testimonials.module.scss';

const testimonials = [
  {
    name: 'Patricia Marí',
    title: 'Product Manager',
    company: 'zooplus',
    avatar: '/images/patricia.jpeg',
    text: `Special thanks for the great job you've done in the past month (at least). Not only the work itself, but the attitude, the team-work, implication, honesty, support, etc. It means a lot to me having someone like you by my side to work with, because the way you behave builds trust!`,
  },
  {
    name: 'José Acedo',
    title: 'Senior Product Designer',
    company: 'zooplus',
    avatar: '/images/jose.jpeg',
    text: `Thanks for your commitment and thoughtful collaboration. You go the extra mile to align teams, keep us informed, and stay open to feedback. It’s great working with someone so supportive and easy to communicate with!`,
  },
  {
    name: 'Teil Wise',
    title: 'Design Director',
    company: 'zooplus',
    avatar: '/images/teil.jpeg',
    text: `You've adapted to significant changes with professionalism and a positive mindset, always open to growth`,
  },
];

const Testimonials = () => {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.grid}>
        {testimonials.map((t, index) => (
          <div key={index} className={styles.card}>
            <p className={styles.text}>"{t.text}"</p>
            <div className={styles.profile}>
              <img src={t.avatar} alt={t.name} className={styles.avatar} />
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
