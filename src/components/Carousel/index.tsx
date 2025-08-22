import { useRef } from "react";
import { Swiper } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Mousewheel, Navigation } from "swiper/modules";
import ChevronIcn from "@/assets/icons/chevron-right-icn.svg?react";
import Button from "@/components/Button";
import IconWrapper from "@/components/IconWrapper";
import { type SwiperProps } from "swiper/react";

interface IProps extends Partial<SwiperProps> {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}

const Carousel = ({ className, children, ...swiperProps }: IProps) => {
  const swiperRef = useRef<SwiperType>(null);

  const onSwiperInit = (swiper: SwiperType) => {
    swiperRef.current = swiper;
  };

  const onHandleNext = () => {
    swiperRef.current?.slideNext();
  };

  const onHandlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full flex gap-2 items-center">
        <Button
          variant="ghost"
          className="button-prev w-12 h-12 rounded-full p-2 hidden md:flex"
          aria-label="Previous Slide"
          onClick={onHandlePrev}
        >
          <IconWrapper className="rotate-180 flex items-center justify-center">
            <ChevronIcn />
          </IconWrapper>
        </Button>
        <Swiper
          className={className}
          onInit={onSwiperInit}
          modules={[Mousewheel, Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            1024: {
              slidesPerView: 2,
            },
            1800: {
              slidesPerView: 3,
            },
          }}
          // navigation={{
          //   nextEl: ".button-next",
          //   prevEl: ".button-prev",
          // }}
          // loop
          // freeMode={{
          //   enabled: true,
          //   sticky: false,
          //   momentumBounce: false,
          // }}
          // mousewheel
          {...swiperProps}
        >
          {children}
        </Swiper>
        <Button
          variant="ghost"
          className="button-next w-12 h-12 rounded-full p-2 hidden md:flex"
          aria-label="Next Slide"
          onClick={onHandleNext}
        >
          <IconWrapper className=" flex items-center justify-center">
            <ChevronIcn />
          </IconWrapper>
        </Button>
      </div>
      <div className="flex md:hidden w-full items-center justify-between mt-2">
        <Button
          variant="ghost"
          className="button-prev w-10 h-10 rounded-full p-2"
          aria-label="Previous Slide"
          onClick={onHandlePrev}
        >
          <IconWrapper className="rotate-180 flex items-center justify-center">
            <ChevronIcn />
          </IconWrapper>
        </Button>
        <Button
          variant="ghost"
          className="button-next w-10 h-10 rounded-full p-2"
          aria-label="Next Slide"
          onClick={onHandleNext}
        >
          <IconWrapper className=" flex items-center justify-center">
            <ChevronIcn />
          </IconWrapper>
        </Button>
      </div>
    </div>
  );
};

export default Carousel;
