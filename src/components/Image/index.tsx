import { BASE_PATH } from "@/config";
import { type DetailedHTMLProps, type ImgHTMLAttributes } from "react";

const Image = (
  props: DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
) => {
  return <img {...props} src={`${BASE_PATH}${props.src}`} />;
};

export default Image;
