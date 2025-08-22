import type { HTMLMotionProps } from "motion/react";

export type ButtonProps = HTMLMotionProps<"button"> & {
  as?: "button";
};

export type AnchorProps = HTMLMotionProps<"a"> & {
  as?: "a";
};

export type TButtonVariant = "solid" | "stroke" | "ghost";
export type TButtonSize = "sm" | "md" | "lg";

export type TProps = {
  variant?: TButtonVariant;
  size?: TButtonSize;
} & (ButtonProps | AnchorProps);
