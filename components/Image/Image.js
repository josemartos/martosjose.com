import NextImage from 'next/image';
import cn from 'classnames';

import styles from './image.module.scss';

const Image = (props) => {
  return (
    <div
      className={cn(styles.wrapper, {
        [styles.shadow]: props.shadow,
      })}
    >
      <NextImage {...props} />
      {props.link && (
        <a href={props.src} target="_blank">
          (View large version)
        </a>
      )}
    </div>
  );
};

export default Image;
