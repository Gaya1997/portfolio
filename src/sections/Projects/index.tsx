import ProjectCard from "@/components/ProjectCardV2";
import TextSpotlight from "@/components/TextSpotlight";
import type {
  Projects as IProjects,
  i18nKeys,
} from "@/types/profile.interface";
import { motion, type Variants } from "motion/react";

const parentVariant: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.5 } },
};

const childrenVariant: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 1 } },
};

interface ProjectsProps extends IProjects {
  i18nKeys?: i18nKeys;
}

const Projects = ({ id, list, i18nKeys }: ProjectsProps) => {
  return (
    <section
      id={id}
      className="bg-section-bg shadow-[0_0_0_100vmax_var(--color-section-bg)] clip-path-fullbleed mx-5 md:mx-10 3xl:mx-40 py-5 md:py-10 pb-20 md:pb-30 3xl:pb-60 flex flex-col gap-6 3xl:gap-8"
    >
      <TextSpotlight
        spotlightSize={50}
        className="text-2xl md:text-3xl 3xl:text-5xl font-normal uppercase"
        shouldAnimateOnView
      >
        {i18nKeys?.projects}
      </TextSpotlight>
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={parentVariant}
        className="flex flex-col gap-6 3xl:gap-8 min-[858px]:max-w-3/4"
      >
        {list.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            variants={childrenVariant}
            showDivider={index < list.length - 1}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
