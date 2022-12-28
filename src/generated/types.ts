import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

export type CardProps = Omit<
  DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
  "src" | "alt"
>;
