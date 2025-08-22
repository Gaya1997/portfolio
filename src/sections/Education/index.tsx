import EducationCard from "@/components/EducationCard";
import TextSpotlight from "@/components/TextSpotlight";
import type {
  EducationSection as IEducationSection,
  i18nKeys,
} from "@/types/profile.interface";

interface EducationProps extends IEducationSection {
  i18nKeys?: i18nKeys;
}

const Education = ({ id, list, i18nKeys }: EducationProps) => {
  return (
    <section
      id={id}
      className="bg-section-bg shadow-[0_0_0_100vmax_var(--color-section-bg)] clip-path-fullbleed mx-5 md:mx-10 3xl:mx-40 py-5 md:py-10 flex flex-col gap-6 3xl:gap-8 3xl:items-center"
    >
      <TextSpotlight
        spotlightSize={50}
        className="text-2xl md:text-3xl 3xl:text-5xl font-normal uppercase"
        shouldAnimateOnView
      >
        {i18nKeys?.education}
      </TextSpotlight>
      <div className="flex flex-col gap-5 min-[858px]:max-w-3/4 3xl:max-w-1/2">
        {list.map((education, index) => (
          <EducationCard
            key={index}
            index={index}
            i18nKeys={i18nKeys}
            {...education}
          />
        ))}
      </div>
    </section>
  );
};

export default Education;
