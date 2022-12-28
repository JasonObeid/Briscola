import { type CardProps } from "./types";
import image from "../../images/cards/threeOfSwords.webp";

export function ThreeOfSwords(props: CardProps) {
  return <img src={image} alt={"Three of Swords"} {...props} />;
}
