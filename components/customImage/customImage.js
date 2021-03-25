import Image from 'next/image';
import cn from 'classnames';

import styles from './customImage.module.scss';

const CustomImage = (props) => {
  return (
    <div
      className={cn(styles.imageWrapper, {
        [styles.imageShadow]: props.shadow,
      })}
    >
      <Image {...props} />
      {props.link && (
        <a href={props.src} target="_blank">
          (View large version)
        </a>
      )}
    </div>
  );
};

export default CustomImage;
