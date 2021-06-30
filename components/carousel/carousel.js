import cn from 'classnames';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import { Swiper } from 'swiper/react';

// Install Swiper modules
SwiperCore.use([Pagination, Navigation]);

// Styles
import styles from './carousel.module.scss';

const Carousel = ({ children }) => {
  return (
    <div className={cn(styles.carouselWrapper)}>
      <button
        className={cn(
          'carouselPrev',
          styles.carouselArrow,
          styles.carouselArrowLeft
        )}
      ></button>
      <button
        className={cn(
          'carouselNext',
          styles.carouselArrow,
          styles.carouselArrowRight
        )}
      ></button>
      <Swiper
        slidesPerView={1}
        grabCursor={true}
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
