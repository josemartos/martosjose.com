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
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <Image
            src={'/images/komoot/ui-design1.png'}
            alt="Komoot UI Design Screens"
            width={625}
            height={1272}
            priority={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/images/komoot/ui-design2.png'}
            alt="Komoot UI Design Screens"
            width={625}
            height={1272}
            priority={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/images/komoot/ui-design3.png'}
            alt="Komoot UI Design Screens"
            width={625}
            height={1272}
            priority={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/images/komoot/ui-design4.png'}
            alt="Komoot UI Design Screens"
            width={625}
            height={1272}
            priority={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/images/komoot/ui-design5.png'}
            alt="Komoot UI Design Screens"
            width={625}
            height={1272}
            priority={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/images/komoot/ui-design6.png'}
            alt="Komoot UI Design Screens"
            width={625}
            height={1272}
            priority={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/images/komoot/ui-design7.png'}
            alt="Komoot UI Design Screens"
            width={625}
            height={1272}
            priority={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/images/komoot/ui-design8.png'}
            alt="Komoot UI Design Screens"
            width={625}
            height={1272}
            priority={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/images/komoot/ui-design9.png'}
            alt="Komoot UI Design Screens"
            width={625}
            height={1272}
            priority={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/images/komoot/ui-design10.png'}
            alt="Komoot UI Design Screens"
            width={625}
            height={1272}
            priority={true}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
