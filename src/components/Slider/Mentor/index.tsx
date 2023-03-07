import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import { Mentor } from "../../Card";

const MentorSlider = () => {
  return (
    <Swiper modules={[Navigation]} slidesPerView={1}>
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
