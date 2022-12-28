import { type CardProps } from "./types";
import image from "../../images/cards/twoOfSwords.webp";

export function TwoOfSwords(props: CardProps) {
  return <img src={image} alt={"Two of Swords"} {...props} />;
}
