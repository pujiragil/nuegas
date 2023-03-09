import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import { FC, ReactElement } from "react";

interface TaskSliderProps {
  smSlide: number;
  lgSlide: number;
  sliders: ReactElement[];
}

const TaskSlider: FC<TaskSliderProps> = ({
  smSlide,
  lgSlide,
  sliders,
}): ReactElement => {
  return (
    <Swiper
      className="task-slider"
      modules={[Navigation]}
      breakpoints={{
        320: { slidesPerView: smSlide, spaceBetween: 32 },
        1024: { slidesPerView: lgSlide, spaceBetween: 32 },
      }}
    >
      {sliders.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TaskSlider;
