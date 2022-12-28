import { type CardProps } from "./types";
import image from "../../images/cards/aceOfSwords.webp";

export function AceOfSwords(props: CardProps) {
  return <img src={image} alt={"Ace of Swords"} {...props} />;
}
