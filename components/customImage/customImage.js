import Image from 'next/image';
import cn from 'classnames';

import styles from './customImage.module.scss';

const CustomImage = (props) => (
  <div
    className={cn(styles.imageWrapper, {
      [styles.imageShadow]: props.shadow,
    })}
  >
    <Image {...props} />
  </div>
);

export default CustomImage;
