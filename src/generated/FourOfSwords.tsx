import { type CardProps } from "./types";
import image from "../../images/cards/fourOfSwords.webp";

export function FourOfSwords(props: CardProps) {
  return <img src={image} alt={"Four of Swords"} {...props} />;
}
