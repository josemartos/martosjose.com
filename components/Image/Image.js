import NextImage from 'next/image';
import cn from 'classnames';

import styles from './image.module.scss';

const Image = (props) => {
  const { shadow, link } = props;

  return (
    <div
      className={cn(styles.wrapper, {
        [styles.shadow]: shadow,
      })}
    >
      <NextImage placeholder="blur" {...props} />
      {link && (
        <a href={props.src} target="_blank" rel="noreferrer">
          (View large version)
        </a>
      )}
    </div>
  );
};

export default Image;
