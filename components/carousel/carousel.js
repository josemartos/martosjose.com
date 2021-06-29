import cn from 'classnames';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';

// Install Swiper modules
SwiperCore.use([Pagination, Navigation]);

import { Image } from 'components';

// Images
import KomootUIDesign1 from 'public/images/komoot/ui-design1.png';
import KomootUIDesign2 from 'public/images/komoot/ui-design2.png';
import KomootUIDesign3 from 'public/images/komoot/ui-design3.png';
import KomootUIDesign4 from 'public/images/komoot/ui-design4.png';
import KomootUIDesign5 from 'public/images/komoot/ui-design5.png';
import KomootUIDesign6 from 'public/images/komoot/ui-design6.png';
import KomootUIDesign7 from 'public/images/komoot/ui-design7.png';
import KomootUIDesign8 from 'public/images/komoot/ui-design8.png';
import KomootUIDesign9 from 'public/images/komoot/ui-design9.png';
import KomootUIDesign10 from 'public/images/komoot/ui-design10.png';

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
            src={KomootUIDesign1}
            alt="Komoot UI Design Screens"
            width={411}
            height={840}
            priority={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={KomootUIDesign2}
            alt="Komoot UI Design Screens"
            width={411}
            height={840}
            priority={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={KomootUIDesign3}
            alt="Komoot UI Design Screens"
            width={411}
            height={840}
            priority={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={KomootUIDesign4}
            alt="Komoot UI Design Screens"
            width={411}
            height={840}
            priority={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={KomootUIDesign5}
            alt="Komoot UI Design Screens"
            width={411}
            height={840}
            priority={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={KomootUIDesign6}
            alt="Komoot UI Design Screens"
            width={411}
            height={840}
            priority={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={KomootUIDesign7}
            alt="Komoot UI Design Screens"
            width={411}
            height={840}
            priority={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={KomootUIDesign8}
            alt="Komoot UI Design Screens"
            width={411}
            height={840}
            priority={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={KomootUIDesign9}
            alt="Komoot UI Design Screens"
            width={411}
            height={840}
            priority={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={KomootUIDesign10}
            alt="Komoot UI Design Screens"
            width={411}
            height={840}
            priority={true}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
