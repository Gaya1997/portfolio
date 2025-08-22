import { CardBody, CardContainer } from "@/components/3DCard";
import BoxSpotlight from "../BoxSpotlight";
import Button from "../Button";
import type {
  ProjectCardStyle,
  ProjectItem,
  SkillsMap,
  TLinkType,
  i18nKeys,
} from "@/types/profile.interface";
import { cn } from "@/utils/tailwind";
import Image from "@/components/Image";

const DEFAULT_STYLE: ProjectCardStyle = {
  imageFit: "contain",
  imagePosition: "center",
};

const I18NKEYSMAP: Record<TLinkType, keyof i18nKeys> = {
  publication: "viewPublication",
  github: "viewOnGitHub",
  other: "viewLink",
};

interface ProjectProps extends ProjectItem {
  index?: number;
  i18nKeys?: i18nKeys;
  skillsMap?: SkillsMap;
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

const ProjectCard = ({
  name,
  description,
  link,
  image,
  i18nKeys,
  linkType = "other",
  index = 0,
  stack,
  style = DEFAULT_STYLE,
  skillsMap,
}: ProjectProps) => {
  const { cardBgColor, spotLightColor } =
    CARD_STYLES[index % CARD_STYLES.length];
  return (
    <CardContainer
      containerClassName="w-full md:p-4 3xl:min-h-[650px]"
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
          <div className="w-full mt-4">
            <Image
              src={image}
              className={cn(
                "h-60 md:h-70 w-full rounded-xl group-hover/card:shadow-xl bg-primary-foreground p-4",
                {
                  "object-cover": style?.imageFit === "cover",
                  "object-contain": style?.imageFit === "contain",
                  "object-top": style?.imagePosition === "top",
                  "object-bottom": style?.imagePosition === "bottom",
                  "object-left": style?.imagePosition === "left",
                  "object-right": style?.imagePosition === "right",
                  "object-center": style?.imagePosition === "center",
                }
              )}
              alt="thumbnail"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xl font-bold text-white">{name}</p>
            <p className="text-base text-neutral-300">{description}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center mt-auto">
            <div className="flex items-center max-sm:ms-auto gap-2">
              {stack?.map(
                (skill) =>
                  skillsMap?.[skill] && (
                    <Image
                      key={skill}
                      src={skillsMap?.[skill]}
                      alt={skill}
                      className="w-auto h-5 3xl:h-6"
                    />
                  )
              )}
            </div>
            {link && (
              <Button
                className="ms-auto w-full sm:w-auto"
                as="a"
                variant="stroke"
                size="sm"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={i18nKeys?.[I18NKEYSMAP[linkType]]}
              >
                {i18nKeys?.[I18NKEYSMAP[linkType]]}
              </Button>
            )}
          </div>
        </CardBody>
      </BoxSpotlight>
    </CardContainer>
  );
};

export default ProjectCard;
