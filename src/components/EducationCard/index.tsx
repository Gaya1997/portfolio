import { CardBody, CardContainer } from "@/components/3DCard";
import BoxSpotlight from "@/components/BoxSpotlight";
import type { EducationItem, i18nKeys } from "@/types/profile.interface";
import { cn } from "@/utils/tailwind";
import Image from "@/components/Image";

interface EducationCardProps extends EducationItem {
  index?: number;
  i18nKeys?: i18nKeys;
}

const CARD_STYLES = [
  {
    spotLightColor: "var(--color-cardBg1Spotlight)",
    cardBgColor: "bg-cardBg1-60 border-white/[0.2]",
  },
  {
    spotLightColor: "var(--color-cardBg2Spotlight)",
    cardBgColor: "bg-cardBg2-60 border-white/[0.2]",
  },
];

const EducationCard = ({
  degree,
  institution,
  logo,
  score,
  start,
  end,
  isPresent,
  courses,
  index = 0,
  i18nKeys,
}: EducationCardProps) => {
  const { cardBgColor, spotLightColor } =
    CARD_STYLES[index % CARD_STYLES.length];
  return (
    <CardContainer
      containerClassName="w-full md:p-4"
      className="rounded-xl overflow-hidden w-full h-full"
    >
      <BoxSpotlight
        className="flex overflow-hidden items-center group w-full h-full"
        spotLightColor={spotLightColor}
      >
        <CardBody
          className={cn(
            "w-full h-full relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] rounded-xl p-6 border flex flex-col gap-5",
            cardBgColor
          )}
        >
          <div className="flex flex-col md:flex-row gap-5 w-full">
            <div className="w-1/2 mx-auto sm:mx-0 sm:w-1/4">
              <Image
                src={logo}
                className={
                  "w-full h-auto rounded-xl object-contain object-center group-hover/card:shadow-xl bg-primary-foreground p-4"
                }
                alt="thumbnail"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <p className="text-xl font-bold text-white">{degree}</p>
              <p className="text-base text-neutral-300">{institution}</p>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <p className="text-base text-neutral-300">
                  {isPresent
                    ? `${start} - ${i18nKeys?.present}`
                    : `${start} - ${end}`}
                </p>
                <p className="text-base text-white italic font-semibold">
                  {score}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {courses?.map((course, index) => (
              <span
                key={index}
                className="bg-primary-foreground/10 text-primary-foreground rounded-full px-3 py-1 text-sm font-semibold"
              >
                {course}
              </span>
            ))}
          </div>
        </CardBody>
      </BoxSpotlight>
    </CardContainer>
  );
};

export default EducationCard;
