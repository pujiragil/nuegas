import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import {
  FC,
  MouseEventHandler,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";

interface MentorSliderProps {
  heading: string;
  smSlide: number;
  lgSlide: number;
  sliders: ReactElement[];
}

const MentorSlider: FC<MentorSliderProps> = ({
  heading,
  smSlide,
  lgSlide,
  sliders,
}) => {
  const [isBeginning, setIsBeginning] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const swiperRef = useRef<SwiperRef>(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;

      swiper.on("slideChange", () => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
      });
    }
  }, []);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="space-y-[18px]">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-secondary-100 text-xl md:text-2xl">
          {heading}
        </h2>
        <div className="flex items-center gap-2.5">
          <SliderButton
            handleClick={handlePrev}
            isDisable={isBeginning}
            src="/prev-slide.svg"
          />
          <SliderButton
            handleClick={handleNext}
            isDisable={isEnd}
            src="/next-slide.svg"
          />
        </div>
      </div>
      <div>
        <Swiper
          ref={swiperRef}
          className="mentor-slider"
          modules={[Navigation]}
          breakpoints={{
            320: {
              slidesPerView: smSlide,
              spaceBetween: 32,
            },
            1024: {
              slidesPerView: lgSlide,
              spaceBetween: 32,
            },
          }}
        >
          {sliders.map((slide, index) => (
            <SwiperSlide key={index}>{slide}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

interface SliderButtonProps {
  handleClick: MouseEventHandler<HTMLElement>;
  isDisable: boolean;
  src: string;
}

const SliderButton: FC<SliderButtonProps> = ({
  handleClick,
  isDisable,
  src,
}): ReactElement => {
  return (
    <button
      onClick={handleClick}
      disabled={isDisable}
      className={`w-6 h-6 object-cover ${isDisable ? "opacity-30 cursor-default" : "cursor-pointer"
        }`}
    >
      <img src={src} alt="button-slide" />
    </button>
  );
};

export default MentorSlider;
