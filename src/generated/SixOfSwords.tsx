import { type CardProps } from "./types";
import image from "../../images/cards/sixOfSwords.webp";

export function SixOfSwords(props: CardProps) {
  return <img src={image} alt={"Six of Swords"} {...props} />;
}
