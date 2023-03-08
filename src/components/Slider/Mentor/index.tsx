import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import { Mentor } from "../../Card";

const MentorSlider = () => {
  return (
    <Swiper
      modules={[Navigation]}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 32,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
      }}
    >
      <SwiperSlide>
        <Mentor
          avatar="/profile.png"
          name="Jokowi banteng"
          jobTitle="Presiden Wakanda"
          tasks={40}
          stars={4.0}
          reviews={750}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Mentor
          avatar="/profile.png"
          name="Jokowi banteng"
          jobTitle="Presiden Wakanda"
          tasks={40}
          stars={4.0}
          reviews={750}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default MentorSlider;
