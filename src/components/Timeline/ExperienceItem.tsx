import Image from "@/components/Image";
import type { ExperienceItem } from "@/types/profile.interface";
import LocationIcn from "@/assets/icons/location-icn.svg?react";
import IconWrapper from "@/components/IconWrapper";
import { motion, type Variants } from "motion/react";

const animationVariant: Variants = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
};

const ExperienceItemComponent = ({
  duration,
  company,
  title,
  location,
  logo,
}: ExperienceItem) => {
  return (
    <motion.div
      variants={animationVariant}
      initial="initial"
      whileInView="whileInView"
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      className="relative pl-20 pr-4 md:pl-4 w-full"
    >
      <h3 className="md:hidden block text-xl mb-4 text-left font-medium">
        {duration}
      </h3>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex items-center bg-primary-foreground rounded-md p-2 w-40 aspect-square">
          <Image
            src={logo}
            alt={company}
            className="w-full h-auto rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-xl 3xl:text-2xl font-medium">{company}</p>
          <div className="flex flex-col gap-1">
            <p className="text-base 3xl:text-[1.125rem] font-medium">{title}</p>
            <p className="text-base 3xl:text-[1.125rem] hidden md:block">
              {duration}
            </p>
            <div className="flex align-center gap-1">
              <IconWrapper>
                <LocationIcn />
              </IconWrapper>
              <p className="text-base 3xl:text-[1.125rem]">{location}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceItemComponent;
