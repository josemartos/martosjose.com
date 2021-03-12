import Image from 'next/image';

// Styles
import styles from './project.module.scss';

const Project = () => {
  return (
    <div className={`flexGrid ${styles.container}`}>
      <div className="col--md-1"></div>
      <div className={`${styles.image} col--md-7`}>
        <Image
          src="/images/mirror.png"
          alt="Mirror Website"
          width={710}
          height={560}
        />
      </div>
      <div className="col--md-1"></div>
      <div className={`col--md-3 ${styles.text}`}>
        <h3>Mirror</h3>
        <small>e-commerce platform</small>
        <p>
          Reworked the branding of a clothing e-commerce, and created a
          responsive web design.
        </p>
      </div>
    </div>
  );
};

export default Project;
