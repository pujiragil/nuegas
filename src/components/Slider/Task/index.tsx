import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import { Task } from "../../Card";

const TaskSlider = () => {
  return (
    <Swiper
      modules={[Navigation]}
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 32 },
        1024: { slidesPerView: 2, spaceBetween: 32 },
      }}
    >
      <SwiperSlide>
        <Task
          thumbnail="/task.png"
          title="Creating Awesome Mobile Apps"
          category="UI UX Design"
          progress={75}
          deadline={3}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Task
          thumbnail="/task.png"
          title="Creating Perfect Website"
          category="Web Developer"
          progress={85}
          deadline={4}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default TaskSlider;