import React from 'react';
import cn from 'classnames';

import Image from 'next/image';
import RouterLink from 'next/link';

import ComeInAnimation from 'animation/comeIn';
import { LinkButton } from 'components';

// Styles
import commonStyles from 'styles/common.module.scss';
import styles from './project.module.scss';

const ProjectImage = ({ name, alt }) => (
  <Image src={`/images/${name}`} alt={alt} width={710} height={560} />
);

export const LinkImage = React.forwardRef(
  ({ href, onClick, name, alt }, ref) => {
    return (
      <a href={href} ref={ref} onClick={onClick} title={alt}>
        <ProjectImage name={name} alt={alt} />
      </a>
    );
  }
);

const Project = ({
  title,
  type,
  description,
  image,
  imageAlt,
  reverseLayout = false,
  inProgress = false,
}) => {
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
              {inProgress ? (
                <ProjectImage name={image} alt={imageAlt} />
              ) : (
                <RouterLink href="/work/mirror">
                  <LinkImage name={image} alt={imageAlt} />
                </RouterLink>
              )}
            </ComeInAnimation>
          </div>
          <div className="col--md-1"></div>
          <div className={cn(styles.text, 'col--md-3')}>
            <h3>{title}</h3>
            <small>{type}</small>
            <p>{description}</p>
            {inProgress ? (
              <>Coming soon</>
            ) : (
              <RouterLink href="/work/mirror">
                <LinkButton text="See case study" />
              </RouterLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
