import { type CertificationItem } from "@/types/profile.interface";
import Image from "@/components/Image";
import { EvervaultCard } from "@/components/EvervaultCard";
import { useMemo } from "react";
import { cn } from "@/utils/tailwind";

interface IProps extends CertificationItem {
  id: string;
}

const CertificationCard = ({
  name,
  issuer,
  logo,
  verificationLink,
}: IProps) => {
  const Comp = verificationLink ? "a" : "div";
  const AnchorElementProps: object | null = useMemo(() => {
    if (verificationLink) {
      return {
        href: verificationLink,
        target: "_blank",
        rel: "noopener noreferrer",
      };
    }
    return null;
  }, [verificationLink]);

  return (
    <Comp
      {...AnchorElementProps}
      className={cn(
        "relative w-full bg-cardBg3-60 border border-white/[0.2] rounded-xl flex flex-col items-start mx-auto p-4 gap-2 transition-all duration-300 ease-in-out",
        {
          "cursor-pointer hover:bg-cardBg3": !!verificationLink,
        }
      )}
    >
      <EvervaultCard>
        <div className="relative w-full h-full flex items-center justify-center bg-primary-foreground rounded-md">
          <Image className="w-3/4 h-auto" src={logo} alt={name} />
        </div>
      </EvervaultCard>
      <div className="flex flex-col gap-1 w-full">
        <h2 className="text-lg font-bold text-white text-center">{name}</h2>
        <p className="text-base text-neutral-300 text-center">{issuer}</p>
      </div>
    </Comp>
  );
};

export default CertificationCard;
