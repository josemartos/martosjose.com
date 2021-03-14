import React from 'react';
import cn from 'classnames';

import Image from 'next/image';
import RouterLink from 'next/link';

import ComeInAnimation from 'animation/comeIn';
import { LinkButton } from 'components';

// Styles
import commonStyles from 'styles/common.module.scss';
import styles from './project.module.scss';

export const LinkImage = React.forwardRef(({ href, onClick }, ref) => {
  return (
    <a href={href} ref={ref} onClick={onClick} title="Mirror Website">
      <Image
        src="/images/mirror.png"
        alt="Mirror Website"
        width={710}
        height={560}
      />
    </a>
  );
});

const Project = ({ reverseLayout = false }) => {
  return (
    <div className={styles.wrapper}>
      <div
        className={cn(styles.layer, { [styles.reverse]: reverseLayout })}
      ></div>
      <div className={commonStyles.contentWrapper}>
        <div
          className={cn('flexGrid', styles.container, {
            reverse: reverseLayout,
          })}
        >
          <div className="col--md-1"></div>
          <div className={cn(styles.image, 'col--md-7')}>
            <ComeInAnimation>
              <RouterLink href="/work/mirror">
                <LinkImage />
              </RouterLink>
            </ComeInAnimation>
          </div>
          <div className="col--md-1"></div>
          <div className={cn(styles.text, 'col--md-3')}>
            <h3>Mirror</h3>
            <small>e-commerce platform</small>
            <p>
              Reworked the branding of a clothing e-commerce, and created a
              responsive web design.
            </p>
            <RouterLink href="/work/mirror">
              <LinkButton text="See case study" />
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
