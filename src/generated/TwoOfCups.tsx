import { type CardProps } from "./types";
import image from "../../images/cards/twoOfCups.webp";

export function TwoOfCups(props: CardProps) {
  return <img src={image} alt={"Two of Cups"} {...props} />;
}
