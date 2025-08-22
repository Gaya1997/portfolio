import Carousel from "@/components/Carousel";
import CertificationCard from "@/components/CertificationCard";
import TextSpotlight from "@/components/TextSpotlight";
import type {
  Certifications as ICertifications,
  i18nKeys,
} from "@/types/profile.interface";
import { SwiperSlide } from "swiper/react";

interface CertificationsProps extends ICertifications {
  i18nKeys?: i18nKeys;
}

const Certifications = ({ id, list, i18nKeys }: CertificationsProps) => {
  return (
    <section
      id={id}
      className="bg-section-bg shadow-[0_0_0_100vmax_var(--color-section-bg)] clip-path-fullbleed min-h-[calc(100dvh_-_60px)] mx-5 md:mx-10 3xl:mx-40 py-5 md:py-10 flex flex-col gap-6 3xl:gap-8 3xl:items-center"
    >
      <TextSpotlight
        spotlightSize={50}
        className="text-2xl md:text-3xl 3xl:text-5xl font-normal uppercase"
        shouldAnimateOnView
      >
        {i18nKeys?.certifications}
      </TextSpotlight>
      <Carousel
        className="!flex w-full"
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        freeMode={{
          enabled: true,
          sticky: false,
          momentumBounce: false,
        }}
        mousewheel
      >
        {list.map((certification, index) => (
          <SwiperSlide key={index} className="!flex !h-auto">
            <CertificationCard
              id={`${certification.name}-${index}`}
              {...certification}
            />
          </SwiperSlide>
        ))}
      </Carousel>
    </section>
  );
};

export default Certifications;
