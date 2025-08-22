import { cn } from "@/utils/tailwind";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import type { MouseEvent } from "react";

interface IProps {
  children: React.ReactNode | React.ReactNode[];
  spotLightColor: string;
  spotLightSize?: string; // Spotlight size in px, defaults to "250px"
  className?: string;
}

const BoxSpotlight = ({
  children,
  spotLightColor,
  spotLightSize = "250px",
  className,
}: IProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const { left, top } = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - left);
    mouseY.set(event.clientY - top);
  };

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="max-sm:hidden pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${spotLightSize} circle at ${mouseX}px ${mouseY}px,
              ${spotLightColor},
              transparent 80%
            )
          `,
        }}
      />
      {children}
    </div>
  );
};

export default BoxSpotlight;
