import { forwardRef } from 'react';
import cn from 'classnames';
import { StaticImageData } from 'next/image';

import RouterLink from 'next/link';

import ComeInAnimation from 'animation/comeIn';
import { LinkButton, Image } from 'components';

// Styles
import layoutStyles from 'styles/modules/layout.module.scss';
import styles from './project.module.scss';

interface ProjectImageConfig {
  src: StaticImageData | string;
  alt: string;
  width?: number;
  height?: number;
  shadow?: boolean;
}

const ProjectImage = ({ image }: { image: ProjectImageConfig }) => (
  <Image
    src={image.src}
    alt={image.alt}
    width={image.width ?? 710}
    height={image.height ?? 560}
    shadow={image.shadow}
  />
);

interface LinkImageProps {
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  image: ProjectImageConfig;
}

export const LinkImage = forwardRef<HTMLAnchorElement, LinkImageProps>(
  ({ href, onClick, image }, ref) => {
    return (
      <a href={href} ref={ref} onClick={onClick} title={image.alt}>
        <ProjectImage image={image} />
      </a>
    );
  },
);

LinkImage.displayName = 'LinkImage';

interface ProjectProps {
  title: string;
  description: string;
  image: ProjectImageConfig;
  link: string;
  reverseLayout?: boolean;
}

const Project = ({
  title,
  description,
  image,
  link,
  reverseLayout = false,
}: ProjectProps) => {
  return (
    <div className={styles.wrapper}>
      <div
        className={cn(styles.layer, { [styles.reverse]: reverseLayout })}
      ></div>
      <div className={layoutStyles.contentWrapper}>
        <div
          className={cn('flexGrid', styles.container, {
            reverse: reverseLayout,
          })}
        >
          <div className="col--md-1"></div>
          <div className={cn(styles.image, 'col--md-7')}>
            <ComeInAnimation>
              <RouterLink href={link}>
                <ProjectImage image={image} />
              </RouterLink>
            </ComeInAnimation>
          </div>
          <div className="col--md-1"></div>
          <div className={cn(styles.text, 'col--md-3')}>
            <h3>{title}</h3>
            <p>{description}</p>
            <LinkButton text="See case study" href={link} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
