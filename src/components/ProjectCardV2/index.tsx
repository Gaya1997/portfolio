import { type ProjectItem } from "@/types/profile.interface";
import Image from "@/components/Image";
import Divider from "@/components/Divider";
import { motion, type Variants } from "motion/react";

interface IProps extends ProjectItem {
  showDivider?: boolean;
  variants?: Variants;
}

const ProjectCard = ({
  name,
  points,
  description,
  image,
  showDivider,
  variants,
}: IProps) => {
  return (
    <motion.div className="flex flex-col gap-6 3xl:gap-8" variants={variants}>
      <div className="flex flex-col md:flex-row gap-4 3xl:gap-6 w-full">
        <Image
          src={image}
          className="h-40 md:h-50 max-full md:max-w-1/4 3xl:max-w-1/3 object-contain object-center w-full rounded-xl group-hover/card:shadow-xl bg-primary-foreground p-4"
          alt="thumbnail"
        />
        <div className="flex flex-col gap-2 w-full">
          <h3 className="text-xl font-bold text-white">{name}</h3>
          {points && points.length > 0 && (
            <ul className="list-disc ms-5">
              {points.map((point, index) => (
                <li key={index} className="text-base text-neutral-300">
                  {point}
                </li>
              ))}
            </ul>
          )}
          {description && (
            <p className="text-base text-neutral-300">{description}</p>
          )}
        </div>
      </div>
      {showDivider && <Divider />}
    </motion.div>
  );
};

export default ProjectCard;
