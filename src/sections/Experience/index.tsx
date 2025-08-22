import TextSpotlight from "@/components/TextSpotlight";
import { Timeline } from "@/components/Timeline";
import type {
  Experience as IExperience,
  i18nKeys,
} from "@/types/profile.interface";

interface ExperienceProps extends IExperience {
  id: string;
  i18nKeys?: i18nKeys;
}

const Experience = ({ id, list, i18nKeys }: ExperienceProps) => {
  return (
    <section
      id={id}
      className="bg-section-bg overflow-clip shadow-[0_0_0_100vmax_var(--color-section-bg)] clip-path-fullbleed mx-5 md:mx-10 3xl:mx-40 py-5 md:py-10 flex flex-col gap-6 md:gap-4 3xl:items-center"
    >
      <TextSpotlight
        spotlightSize={50}
        className="text-2xl md:text-3xl 3xl:text-5xl font-normal uppercase"
        shouldAnimateOnView
      >
        {i18nKeys?.experience}
      </TextSpotlight>
      <div className="relative w-full">
        <Timeline data={list} />
      </div>
    </section>
  );
};

export default Experience;
