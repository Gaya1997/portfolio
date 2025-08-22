import { cn } from "@/utils/tailwind";
import {
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  type MotionStyle,
} from "motion/react";
import React, { useMemo, useRef, type MouseEvent } from "react";
import styles from "./style.module.css";
import { getTranslucentColor } from "@/utils/color";

interface IProps {
  className?: string;
  children?: React.ReactNode;
  spotlightSize?: number; // Optional prop to set the size of the spotlight
  fontColor?: string;
  spotlightColor?: string;
  shouldAnimateOnView?: boolean; // Optional prop to control initial animation
  onAnimationEnd?: React.AnimationEventHandler<HTMLParagraphElement>;
}
const DEFAULT_SPOTLIGHT_SIZE = 400; // Size of the spotlight in pixels

const DEFAULT_FONT_COLOR = "var(--color-primary-foreground)"; // Default font color for the spotlight effect
const DEFAULT_SPOTLIGHT_COLOR = "var(--color-white)"; // Default spotlight color

const TextSpotlight = ({
  spotlightSize = DEFAULT_SPOTLIGHT_SIZE,
  className,
  children,
  fontColor = DEFAULT_FONT_COLOR,
  spotlightColor = DEFAULT_SPOTLIGHT_COLOR,
  shouldAnimateOnView,
  onAnimationEnd,
}: IProps) => {
  const textRef = useRef<HTMLParagraphElement | HTMLHeadingElement | null>(
    null
  );
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(-spotlightSize);
  const hoverFontColor = getTranslucentColor(fontColor, 0.3);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!textRef.current) return;
    const textBox = textRef.current?.getBoundingClientRect();
    const spotlightX = event.clientX - spotlightSize / 2 - textBox.left;
    const spotlightY = event.clientY - spotlightSize / 2 - textBox.top;
    // console.log("[LOG]", { spotlightX, spotlightY });
    mouseX.set(spotlightX);
    mouseY.set(spotlightY);
  };

  const handleMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
    // console.log("[LOG] Mouse left spotlight area", event);
    mouseX.set(event.clientX);
    mouseY.set(event.clientY);
  };

  const styleProps: MotionStyle = useMemo(
    () => ({
      "--spotlight-size": `${spotlightSize}px`,
      "--spotlight-color": spotlightColor,
      "--font-color": fontColor,
      "--font-color-hover": hoverFontColor,
      backgroundImage: `radial-gradient(closest-side, ${spotlightColor} 30%, transparent 100%)`,
      backgroundRepeat: "no-repeat",
      backgroundSize: `${spotlightSize}px ${spotlightSize}px`,
    }),
    [fontColor, hoverFontColor, spotlightColor, spotlightSize]
  );

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex self-start"
    >
      <motion.p
        ref={textRef}
        onAnimationEnd={onAnimationEnd}
        className={cn(
          "select-none bg-clip-text [transition:all_.7s_cubic-bezier(.19,1,.22,1)]",
          styles.text,
          className,
          { [styles["text-intial-move"]]: shouldAnimateOnView && isInView }
        )}
        style={{
          ...styleProps,
          backgroundPosition: useMotionTemplate`${mouseX}px ${mouseY}px`,
        }}
      >
        {children}
      </motion.p>
    </div>
  );
};

export default TextSpotlight;
