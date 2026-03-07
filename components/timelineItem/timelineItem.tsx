import { useInView } from 'react-intersection-observer';
import cn from 'classnames';

import styles from './timelineItem.module.scss';

export type RoleType = 'fe' | 'design' | 'hybrid';

export interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  type: RoleType;
  isActive?: boolean;
}

const TAG_LABELS: Record<RoleType, string> = {
  fe: 'Frontend Dev',
  design: 'Designer',
  hybrid: 'Design & Dev',
};

const TimelineItem = ({
  title,
  company,
  period,
  location,
  bullets,
  type,
  isActive,
}: TimelineItemProps) => {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={cn(styles.item, {
        [styles.itemVisible]: inView,
      })}
    >
      <div
        className={cn(styles.dot, styles[`dot--${type}`], {
          [styles.dotActive]: isActive,
        })}
      />
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={cn(styles.tag, styles[`tag--${type}`])}>
            {TAG_LABELS[type]}
          </span>
          <span className={styles.period}>
            {period} · {location}
          </span>
        </div>
        <h3 className={styles.title}>
          {title} <span className={styles.company}>@ {company}</span>
        </h3>
        <ul className={styles.bullets}>
          {bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimelineItem;
