import {
  useMotionValueEvent,
  useScroll,
  type UseScrollOptions,
} from "motion/react";
import { useState } from "react";

export type TScrollDirection = "down" | "up";

export interface IUseScroll {
  scrollDirection: TScrollDirection;
}

export const useScrollDirection = (args: UseScrollOptions): IUseScroll => {
  const [scrollDirection, setScrollDirection] =
    useState<TScrollDirection>("down");
  const scrollValues = useScroll(args);
  useMotionValueEvent(scrollValues.scrollY, "change", (current) => {
    const diff = current - (scrollValues.scrollY?.getPrevious() || 0);
    setScrollDirection(diff > 0 ? "down" : "up");
  });
  return { scrollDirection };
};
