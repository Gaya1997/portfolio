import { cn } from "@/utils/tailwind";
import { type HTMLAttributes } from "react";

const IconWrapper = (props: HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...props}
      className={cn(props.className, "[&>svg]:w-full [&>svg]:h-auto")}
    >
      {props.children}
    </span>
  );
};

export default IconWrapper;
