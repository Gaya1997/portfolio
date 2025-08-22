import { CardBody, CardContainer } from "@/components/3DCard";
import BoxSpotlight from "@/components/BoxSpotlight";
import type { i18nKeys } from "@/types/profile.interface";
import { cn } from "@/utils/tailwind";
import Button from "@/components/Button";
import gitHubLogo from "@/assets/icons/github-light.svg";
import ArrowIcn from "@/assets/icons/arrow-right-icn.svg?react";

interface IProps {
  link: string;
  i18nKeys?: i18nKeys;
}

const CARD_STYLE = {
  spotLightColor: "var(--color-cardBg3Spotlight)",
  cardBgColor: "bg-cardBg3-60 border-white/[0.2]",
};

const Other = ({ link, i18nKeys }: IProps) => {
  return (
    <CardContainer
      containerClassName="w-full md:p-4"
      className="rounded-xl overflow-hidden w-full h-full"
    >
      <BoxSpotlight
        className="flex overflow-hidden items-center group w-full h-full"
        spotLightColor={CARD_STYLE.spotLightColor}
      >
        <CardBody
          className={cn(
            "w-full h-full relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] rounded-xl p-6 border flex flex-col gap-3 items-center justify-center",
            CARD_STYLE.cardBgColor
          )}
        >
          <div className="flex w-full justify-center">
            <img className="w-[35%] h-auto" src={gitHubLogo} alt="thumbnail" />
          </div>

          <Button
            as="a"
            variant="ghost"
            size="md"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{i18nKeys?.viewMoreOnGitHub}</span>
            <ArrowIcn />
          </Button>
        </CardBody>
      </BoxSpotlight>
    </CardContainer>
  );
};

export default Other;
