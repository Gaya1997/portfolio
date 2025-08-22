import { useEffect, useRef, useState } from "react";
import type { ExperienceItem } from "@/types/profile.interface";
import { useScroll, useTransform, motion } from "motion/react";
import ExperienceItemComponent from "./ExperienceItem";

export const Timeline = ({ data }: { data: ExperienceItem[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-60">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start first:pt-10 pt-20 md:first:pt-20 md:pt-60 3xl:first:pt-40 3xl:pt-100 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-tertiary-foreground border border-secondary-foreground p-2" />
              </div>
              <h3 className="hidden md:block font-bold text-5xl 3xl:text-6xl md:pl-20 text-tertiary-foreground">
                {item.isPresent ? new Date().getFullYear() : item.start}
              </h3>
            </div>
            <ExperienceItemComponent {...item} />
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-scroll-gradient1 via-scroll-gradient2 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
