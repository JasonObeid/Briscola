import { type CardProps } from "./types";
import image from "../../images/cards/fourOfCups.webp";

export function FourOfCups(props: CardProps) {
  return <img src={image} alt={"Four of Cups"} {...props} />;
}
