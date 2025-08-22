import type { SkillItem } from "@/types/profile.interface";
import { cn } from "@/utils/tailwind";
import { motion, type MotionStyle, type Variants } from "motion/react";
import { useMemo } from "react";
import Image from "@/components/Image";

interface IProps {
  index: number;
  styleIndex: number;
  length: number;
  skill: SkillItem;
  isTitle?: boolean;
}

const animationVariant: Variants = {
  initial: ({ index }) => ({
    zIndex: -index,
    y: -70 * index,
    backgroundColor: "var(--initial-card-bg)",
    scale: 1 - index * 0.05,
  }),
  animate: ({ index, length }) => ({
    scale: 1,
    y: 0,
    backgroundColor: "var(--final-card-bg)",
    transition: {
      delay: 0.3 + (length - index) * 0.1,
      type: "spring",
      stiffness: 300,
      damping: 20,
      duration: 1,
    },
  }),
};

const REGULAR_CARD_STYLE = {
  initialBackground: "var(--color-cardBg3)",
  finalBackground: "var(--color-cardBg3-60)",
  cardStyle: "border-cardBorder3-65 bg-cardBg3",
};

const CARD_STYLES = [
  {
    initialBackground: "var(--color-cardBg1)",
    finalBackground: "var(--color-cardBg1-60)",
    cardStyle: "bg-cardBg1 border-white/[0.2]",
  },
  {
    initialBackground: "var(--color-cardBg2)",
    finalBackground: "var(--color-cardBg2-60)",
    cardStyle: "bg-cardBg2 border-white/[0.2]",
  },
];

const SkillCard = ({ index, length, skill, styleIndex, isTitle }: IProps) => {
  const cardStyle = useMemo(
    () =>
      isTitle
        ? CARD_STYLES[styleIndex % CARD_STYLES.length]
        : REGULAR_CARD_STYLE,
    [isTitle, styleIndex]
  );

  const styleProps: MotionStyle = useMemo(
    () =>
      ({
        "--initial-card-bg": cardStyle.initialBackground,
        "--final-card-bg": cardStyle.finalBackground,
      } as MotionStyle),
    [cardStyle]
  );

  return (
    <motion.div
      variants={animationVariant}
      custom={{ index, length }}
      style={styleProps}
      className={cn(
        "select-none flex gap-2 border items-center w-[100%] md:w-xs 3xl:w-xs p-4 text-white text-base 3xl:text-xl rounded-lg shadow-lg",
        cardStyle.cardStyle,
        { "justify-center font-medium": isTitle }
      )}
    >
      {skill.icon && (
        <Image src={skill.icon} className="h-8 w-auto" alt={skill.name} />
      )}
      <p>{skill.name}</p>
    </motion.div>
  );
};

export default SkillCard;
