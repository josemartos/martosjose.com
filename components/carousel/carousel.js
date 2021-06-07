import cn from 'classnames';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';

// Install Swiper modules
SwiperCore.use([Pagination, Navigation]);

import { Image } from 'components';

// Styles
import styles from './carousel.module.scss';

// TODO: Make generic
const Carousel = () => {
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
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        <SwiperSlide>
          <Image
            src={'/images/komoot/ui-design1.jpg'}
            alt="Komoot UI Design Screens"
            width={625}
            height={1272}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/images/komoot/ui-design2.jpg'}
            alt="Komoot UI Design Screens"
            width={625}
            height={1272}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/images/komoot/ui-design3.jpg'}
            alt="Komoot UI Design Screens"
            width={625}
            height={1272}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/images/komoot/ui-design4.jpg'}
            alt="Komoot UI Design Screens"
            width={625}
            height={1272}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/images/komoot/ui-design5.jpg'}
            alt="Komoot UI Design Screens"
            width={625}
            height={1272}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/images/komoot/ui-design6.jpg'}
            alt="Komoot UI Design Screens"
            width={625}
            height={1272}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/images/komoot/ui-design7.jpg'}
            alt="Komoot UI Design Screens"
            width={625}
            height={1272}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/images/komoot/ui-design8.jpg'}
            alt="Komoot UI Design Screens"
            width={625}
            height={1272}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/images/komoot/ui-design9.jpg'}
            alt="Komoot UI Design Screens"
            width={625}
            height={1272}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/images/komoot/ui-design10.jpg'}
            alt="Komoot UI Design Screens"
            width={625}
            height={1272}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
