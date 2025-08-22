import TextSpotlight from "@/components/TextSpotlight";
import SkillCard from "@/components/SkillCard";
import type { i18nKeys, Skills as ISkills } from "@/types/profile.interface";
import { motion } from "motion/react";

interface SkillsProps extends ISkills {
  i18nKeys?: i18nKeys;
}

const Skills = ({ id, description, list, i18nKeys }: SkillsProps) => {
  return (
    <section
      id={id}
      className="bg-section-bg shadow-[0_0_0_100vmax_var(--color-section-bg)] min-h-[100dvh] clip-path-fullbleed mx-5 md:mx-10 3xl:mx-40 pt-5 md:pt-10 pb-2 flex flex-col gap-6 3xl:gap-8 3xl:items-center"
    >
      <TextSpotlight
        spotlightSize={50}
        className="text-2xl md:text-3xl 3xl:text-5xl font-normal uppercase"
        shouldAnimateOnView
      >
        {i18nKeys?.skills}
      </TextSpotlight>
      {description && (
        <p className="text-md text-primary-foreground-60 md:text-xl 3xl:text-2xl">
          {description}
        </p>
      )}
      <div className="flex flex-row gap-4 overflow-x-auto hide-scrollbar min-[1182px]:justify-center w-full">
        {list.map((skills, skillCatIndex) => (
          <motion.div
            key={skillCatIndex}
            className="flex flex-col gap-4 max-md:w-full shrink-0"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {skills.map((skill, skillItemIndex) => (
              <SkillCard
                key={skillItemIndex}
                index={skillItemIndex}
                styleIndex={skillCatIndex}
                length={skills.length}
                isTitle={skillItemIndex === 0}
                skill={skill}
              />
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
