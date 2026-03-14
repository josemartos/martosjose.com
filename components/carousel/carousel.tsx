import { ReactNode } from 'react';
import cn from 'classnames';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper } from 'swiper/react';

// Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './carousel.module.scss';

const Carousel = ({ children }: { children: ReactNode }) => {
  return (
    <div className={cn(styles.carouselWrapper)}>
      <button
        className={cn(
          'carouselPrev',
          styles.carouselArrow,
          styles.carouselArrowLeft,
        )}
        aria-label="Previous slide"
      ></button>
      <button
        className={cn(
          'carouselNext',
          styles.carouselArrow,
          styles.carouselArrowRight,
        )}
        aria-label="Next slide"
      ></button>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        grabCursor={true}
        centeredSlides={true}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={{
          prevEl: '.carouselPrev',
          nextEl: '.carouselNext',
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default Carousel;
