import { cn } from "@/utils/tailwind";
import type {
  AnchorProps,
  ButtonProps,
  TButtonVariant,
  TProps,
} from "./props.interface";
import { motion } from "motion/react";

const STYLE: Record<TButtonVariant, string> = {
  ghost: "bg-transparent text-white hover:bg-white/[0.1] hover:text-white",
  solid: "bg-primary-foreground text-black",
  stroke:
    "border border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-black",
};

const COMMON_STYLES =
  "rounded-md cursor-pointer transition-all duration-300 font-semibold flex items-center justify-center gap-2";

const DEFAULT_SIZE_STYLES: Record<string, string> = {
  sm: "text-sm px-3 py-1.5",
  md: "text-base px-4 py-2",
  lg: "text-lg px-5 py-3",
};

const Button = ({
  as = "button",
  variant = "solid",
  size = "md",
  className,
  ...props
}: TProps) => {
  const classNames = cn(
    COMMON_STYLES,
    DEFAULT_SIZE_STYLES[size],
    STYLE[variant],
    className
  );
  switch (as) {
    case "a":
      return (
        <motion.a
          className={classNames}
          {...(props as AnchorProps)}
          whileTap={{ scale: 0.7 }}
        >
          {props.children}
        </motion.a>
      );
    case "button":
      return (
        <motion.button
          className={classNames}
          {...(props as ButtonProps)}
          whileTap={{ scale: 0.7 }}
        >
          {props.children}
        </motion.button>
      );
    default:
      return null;
  }
};

export default Button;
