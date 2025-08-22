declare module "*.svg?react" {
  import type { ComponentType, SVGProps } from "react";

  type SvgComponent = ComponentType<SVGProps>;

  const Svg: SvgComponent;

  export = Svg;
}
