import NextImage from 'next/image';
import cn from 'classnames';
import styles from './image.module.scss';

const Image = ({
  src,
  alt,
  width,
  height,
  quality = 75,
  priority = false,
  shadow,
  link,
  url,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        styles.wrapper,
        {
          [styles.shadow]: shadow,
        },
        className,
      )}
    >
      <NextImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={quality}
        priority={priority}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${Buffer.from(
          `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#CCCCCC"/></svg>`,
        ).toString('base64')}`}
        {...props}
      />
      {link && url && (
        <a
          href={`/images${url}`}
          target="_blank"
          rel="noreferrer"
          className={styles.link}
          aria-label={`View large version of ${alt}`}
        >
          (View large version)
        </a>
      )}
    </div>
  );
};

export default Image;
