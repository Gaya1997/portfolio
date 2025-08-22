import AchievementCard from "@/components/AchievementCard";
import { LampContainer } from "@/components/Lamp";
import type {
  AchievementsSection as IAchievementsSection,
  i18nKeys,
} from "@/types/profile.interface";
import { motion } from "motion/react";

interface IProps extends IAchievementsSection {
  i18nKeys?: i18nKeys;
}

const Achievements = ({ id, list, i18nKeys }: IProps) => {
  return (
    <>
      <div className="w-full h-28 bg-linear-to-b from-section-bg to-black" />
      <section
        id={id}
        className="bg-black relative shadow-[0_0_0_100vmax_var(--color-black)] clip-path-fullbleed mx-5 md:mx-10 3xl:mx-40 py-5 md:py-10 flex flex-col gap-6 3xl:gap-8 3xl:items-center"
      >
        <LampContainer>
          <motion.div
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8"
          >
            <h1 className="mt-8 bg-gradient-to-br from-slate-100 to-gray-300 py-4 bg-clip-text text-center text-3xl md:text-4xl 3xl:text-6xl font-normal tracking-tight text-transparent">
              {i18nKeys?.achievements}
            </h1>
            <div className="flex flex-col md:flex-row gap-5 mt-5">
              {list.map((item, index) => (
                <AchievementCard key={index} {...item} />
              ))}
            </div>
          </motion.div>
        </LampContainer>
      </section>
    </>
  );
};

export default Achievements;
