import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';

// Install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const Carousel = () => {
  return (
    <>
      <button className="custom_prev">Custom Prev Btn</button>
      <button className="custom_next">Custom Next Btn</button>
      <Swiper
        slidesPerView={1}
        grabCursor={true}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={{
          prevEl: '.custom_prev',
          nextEl: '.custom_next',
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 60,
          },
        }}
      >
        <SwiperSlide>
          <Image
            src={'/images/komoot/wireframes1.png'}
            alt="Device test"
            width={242}
            height={493}
            layout="fixed"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/images/komoot/wireframes2.png'}
            alt="Device test"
            width={242}
            height={493}
            layout="fixed"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/images/komoot/wireframes2.png'}
            alt="Device test"
            width={242}
            height={493}
            layout="fixed"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={'/images/komoot/wireframes2.png'}
            alt="Device test"
            width={242}
            height={493}
            layout="fixed"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
